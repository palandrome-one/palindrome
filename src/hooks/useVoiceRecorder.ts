"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export type VoiceState = "idle" | "recording" | "processing" | "speaking";

const MAX_RECORDING_MS = 60_000;

function getSupportedMimeType(): string | null {
  if (typeof MediaRecorder === "undefined") return null;
  for (const mime of [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/ogg;codecs=opus",
  ]) {
    if (MediaRecorder.isTypeSupported(mime)) return mime;
  }
  return null;
}

export function useVoiceRecorder() {
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const speakingMsgIdRef = useRef<string | null>(null);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);

  useEffect(() => {
    const supported =
      typeof navigator !== "undefined" &&
      !!navigator.mediaDevices?.getUserMedia &&
      typeof MediaRecorder !== "undefined" &&
      getSupportedMimeType() !== null;
    setIsSupported(supported);
  }, []);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      audioRef.current?.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const startRecording = useCallback(async (): Promise<void> => {
    setError(null);
    const mimeType = getSupportedMimeType();
    if (!mimeType) {
      setError("Voice recording is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.start(250); // collect chunks every 250ms
      setVoiceState("recording");

      timerRef.current = setTimeout(() => {
        if (mediaRecorderRef.current?.state === "recording") {
          mediaRecorderRef.current.stop();
        }
      }, MAX_RECORDING_MS);
    } catch (err: unknown) {
      const msg =
        err instanceof DOMException && err.name === "NotAllowedError"
          ? "Microphone permission denied. Please allow microphone access."
          : "Could not access microphone.";
      setError(msg);
      setVoiceState("idle");
    }
  }, []);

  const stopRecording = useCallback((): Promise<Blob | null> => {
    return new Promise((resolve) => {
      const recorder = mediaRecorderRef.current;
      if (!recorder || recorder.state !== "recording") {
        resolve(null);
        return;
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      recorder.onstop = () => {
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;

        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });
        chunksRef.current = [];
        setVoiceState("processing");
        resolve(blob);
      };

      recorder.stop();
    });
  }, []);

  const transcribe = useCallback(async (blob: Blob): Promise<string | null> => {
    setVoiceState("processing");
    try {
      const form = new FormData();
      form.append("file", blob, "recording.webm");

      const res = await fetch("/api/voice/stt", { method: "POST", body: form });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `STT failed (${res.status})`);
      }
      const data = await res.json();
      setVoiceState("idle");
      return data.text || null;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Transcription failed.");
      setVoiceState("idle");
      return null;
    }
  }, []);

  const playTTS = useCallback(async (msgId: string, text: string) => {
    // Stop any current playback
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    speakingMsgIdRef.current = msgId;
    setSpeakingMsgId(msgId);
    setVoiceState("speaking");

    try {
      // Use MediaSource for progressive playback — start playing as chunks arrive
      if (typeof MediaSource !== "undefined" && MediaSource.isTypeSupported("audio/mpeg")) {
        const mediaSource = new MediaSource();
        const url = URL.createObjectURL(mediaSource);
        const audio = new Audio(url);
        audioRef.current = audio;

        const cleanup = () => {
          URL.revokeObjectURL(url);
          audioRef.current = null;
          speakingMsgIdRef.current = null;
          setSpeakingMsgId(null);
          setVoiceState("idle");
        };

        audio.onended = cleanup;
        audio.onerror = cleanup;

        await new Promise<void>((resolve, reject) => {
          mediaSource.onsourceopen = async () => {
            const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
            try {
              const res = await fetch("/api/voice/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
              });
              if (!res.ok) throw new Error("TTS failed");

              const reader = res.body?.getReader();
              if (!reader) throw new Error("No body");

              let started = false;
              const appendQueue: Uint8Array[] = [];
              let appending = false;

              const processQueue = () => {
                if (appending || appendQueue.length === 0) return;
                if (mediaSource.readyState !== "open") return;
                appending = true;
                const chunk = appendQueue.shift()!;
                sourceBuffer.appendBuffer(new Uint8Array(chunk).buffer as ArrayBuffer);
              };

              sourceBuffer.onupdateend = () => {
                appending = false;
                if (!started && audio.buffered.length > 0) {
                  started = true;
                  audio.play().catch(() => {});
                }
                processQueue();
              };

              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                appendQueue.push(value);
                processQueue();
              }

              // Wait for any remaining appends to finish
              const waitForBuffer = () =>
                new Promise<void>((r) => {
                  if (!sourceBuffer.updating) return r();
                  sourceBuffer.onupdateend = () => {
                    appending = false;
                    processQueue();
                    if (appendQueue.length === 0 && !sourceBuffer.updating) r();
                  };
                });

              await waitForBuffer();
              if (mediaSource.readyState === "open") {
                mediaSource.endOfStream();
              }
              resolve();
            } catch (err) {
              if (mediaSource.readyState === "open") {
                mediaSource.endOfStream();
              }
              reject(err);
            }
          };
        });
      } else {
        // Fallback: fetch full blob then play (Safari without MediaSource for mpeg)
        const res = await fetch("/api/voice/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
        if (!res.ok) throw new Error("TTS failed");

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audioRef.current = audio;

        const cleanup = () => {
          URL.revokeObjectURL(url);
          audioRef.current = null;
          speakingMsgIdRef.current = null;
          setSpeakingMsgId(null);
          setVoiceState("idle");
        };

        audio.onended = cleanup;
        audio.onerror = cleanup;
        await audio.play();
      }
    } catch {
      // Silent fail — text is still visible
      speakingMsgIdRef.current = null;
      setSpeakingMsgId(null);
      setVoiceState("idle");
    }
  }, []);

  const stopTTS = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    speakingMsgIdRef.current = null;
    setSpeakingMsgId(null);
    setVoiceState("idle");
  }, []);

  return {
    voiceState,
    isSupported,
    error,
    speakingMsgId,
    startRecording,
    stopRecording,
    transcribe,
    playTTS,
    stopTTS,
    clearError: () => setError(null),
  };
}
