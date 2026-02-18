"use client";

import { useState, useCallback } from "react";
import { useChat } from "@/hooks/useChat";
import { useVoiceRecorder } from "@/hooks/useVoiceRecorder";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";
import { ChatIcon, CloseIcon } from "./chat/icons";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, sendMessage, resetSession } = useChat();
  const {
    voiceState,
    isSupported: voiceSupported,
    error: voiceError,
    speakingMsgId,
    startRecording,
    stopRecording,
    transcribe,
    playTTS,
    stopTTS,
    clearError,
  } = useVoiceRecorder();

  const handleMicPress = useCallback(async () => {
    if (voiceState === "recording") {
      const blob = await stopRecording();
      if (blob) {
        const text = await transcribe(blob);
        if (text) {
          sendMessage(text);
        }
      }
    } else if (voiceState === "speaking") {
      stopTTS();
    } else if (voiceState === "idle") {
      await startRecording();
    }
  }, [voiceState, stopRecording, transcribe, sendMessage, startRecording, stopTTS]);

  return (
    <>
      {/* FAB Toggle */}
      <button
        className={`chat-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <ChatHeader
            onClose={() => setIsOpen(false)}
            onReset={resetSession}
          />

          {voiceError && (
            <div className="chat-error">
              <span>{voiceError}</span>
              <button onClick={clearError} aria-label="Dismiss error">&times;</button>
            </div>
          )}

          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            speakingMsgId={speakingMsgId}
            onPlayTTS={playTTS}
            onStopTTS={stopTTS}
          />

          <ChatInput
            onSend={sendMessage}
            disabled={isLoading}
            voiceState={voiceState}
            voiceSupported={voiceSupported}
            onMicPress={handleMicPress}
          />
        </div>
      )}
    </>
  );
}
