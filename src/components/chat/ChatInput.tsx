"use client";

import { useState, useRef, useCallback, type KeyboardEvent } from "react";
import { SendIcon, MicIcon, StopIcon, SpinnerIcon, WaveformIcon } from "./icons";

export type VoiceState = "idle" | "recording" | "processing" | "speaking";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled: boolean;
  voiceState: VoiceState;
  voiceSupported: boolean;
  onMicPress: () => void;
}

export default function ChatInput({
  onSend,
  disabled,
  voiceState,
  voiceSupported,
  onMicPress,
}: ChatInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }, [text, disabled, onSend]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleInput = useCallback(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
    }
  }, []);

  const micIcon = () => {
    switch (voiceState) {
      case "recording":
        return <StopIcon />;
      case "processing":
        return <SpinnerIcon className="chat-spinner" />;
      case "speaking":
        return <WaveformIcon />;
      default:
        return <MicIcon />;
    }
  };

  return (
    <div className="chat-input-area">
      <textarea
        ref={textareaRef}
        className="chat-textarea"
        placeholder="Ask about our services, tech stack, or advisory..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        disabled={disabled || voiceState === "recording"}
        rows={1}
      />
      <div className="chat-input-buttons">
        {voiceSupported && (
          <button
            className={`chat-mic-btn ${voiceState}`}
            onClick={onMicPress}
            disabled={disabled && voiceState === "idle"}
            title={voiceState === "recording" ? "Stop recording" : "Start voice input"}
            aria-label={voiceState === "recording" ? "Stop recording" : "Start voice input"}
          >
            {micIcon()}
          </button>
        )}
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={!text.trim() || disabled}
          title="Send message"
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
