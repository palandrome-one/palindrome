"use client";

import { useEffect, useRef, useMemo } from "react";
import type { ChatMessage } from "@/hooks/useChat";
import { SpeakerIcon, StopIcon } from "./icons";

/** Lightweight markdown → HTML for chat bubbles */
function renderMarkdown(text: string): string {
  let html = text
    // Escape HTML entities
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Code blocks (``` ... ```)
    .replace(/```[\s\S]*?```/g, (m) => {
      const code = m.slice(3, -3).replace(/^\w*\n/, "");
      return `<pre><code>${code}</code></pre>`;
    })
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Headings (### ... )
    .replace(/^#{3,6}\s+(.+)$/gm, '<div class="chat-md-h">$1</div>')
    .replace(/^#{2}\s+(.+)$/gm, '<div class="chat-md-h">$1</div>')
    .replace(/^#{1}\s+(.+)$/gm, '<div class="chat-md-h">$1</div>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Numbered lists: "1. item" → list item
    .replace(/^\d+\.\s+(.+)$/gm, '<div class="chat-md-li">$1</div>')
    // Bullet lists: "- item" or "* item"
    .replace(/^[-*]\s+(.+)$/gm, '<div class="chat-md-li">$1</div>')
    // Paragraph breaks (double newline)
    .replace(/\n{2,}/g, '<div class="chat-md-break"></div>')
    // Single newlines → <br>
    .replace(/\n/g, "<br>");

  return html;
}

function MarkdownContent({ text }: { text: string }) {
  const html = useMemo(() => renderMarkdown(text), [text]);
  return <div className="chat-msg-text chat-md" dangerouslySetInnerHTML={{ __html: html }} />;
}

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading: boolean;
  speakingMsgId: string | null;
  onPlayTTS: (msgId: string, text: string) => void;
  onStopTTS: () => void;
}

export default function ChatMessages({
  messages,
  isLoading,
  speakingMsgId,
  onPlayTTS,
  onStopTTS,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`chat-msg ${msg.role === "user" ? "chat-msg-user" : "chat-msg-bot"}`}
        >
          {msg.role === "bot" ? (
            <MarkdownContent text={msg.text} />
          ) : (
            <div className="chat-msg-text">{msg.text}</div>
          )}
          {msg.role === "bot" && msg.id !== "welcome" && msg.text && (
            <button
              className={`chat-tts-btn ${speakingMsgId === msg.id ? "speaking" : ""}`}
              onClick={() =>
                speakingMsgId === msg.id
                  ? onStopTTS()
                  : onPlayTTS(msg.id, msg.text)
              }
              title={speakingMsgId === msg.id ? "Stop speaking" : "Listen"}
              aria-label={speakingMsgId === msg.id ? "Stop speaking" : "Listen to message"}
            >
              {speakingMsgId === msg.id ? <StopIcon /> : <SpeakerIcon />}
            </button>
          )}
        </div>
      ))}
      {isLoading && messages[messages.length - 1]?.text === "" && (
        <div className="chat-typing">
          <span /><span /><span />
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
