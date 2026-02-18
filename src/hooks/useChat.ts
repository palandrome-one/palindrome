"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const WEBHOOK_URL =
  "https://automation.palindrome.one/webhook/ed2036ec-5985-4d7d-8dca-94e769954173/chat";

const SESSION_KEY = "palindrome-chat-session";
const WELCOME_MESSAGE =
  "Welcome to Palindrome Blockchain Consultancy. How can I help you with blockchain gaming infrastructure today?";

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
}

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

function getSessionId(): string {
  if (typeof window === "undefined") return generateId();
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = generateId();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "bot", text: WELCOME_MESSAGE },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef<string>("");
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    sessionIdRef.current = getSessionId();
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = { id: generateId(), role: "user", text: trimmed };
    const botMsgId = generateId();

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    const botMsg: ChatMessage = { id: botMsgId, role: "bot", text: "" };
    setMessages((prev) => [...prev, botMsg]);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: sessionIdRef.current,
          chatInput: trimmed,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine) continue;

          try {
            const parsed = JSON.parse(trimmedLine);
            if (parsed.type === "item" && typeof parsed.content === "string" && parsed.content) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === botMsgId
                    ? { ...m, text: m.text + parsed.content }
                    : m
                )
              );
            }
          } catch {
            // Non-JSON line — ignore
          }
        }
      }

      // If bot message is still empty after streaming, set a fallback
      setMessages((prev) => {
        const bot = prev.find((m) => m.id === botMsgId);
        if (bot && !bot.text) {
          return prev.map((m) =>
            m.id === botMsgId
              ? { ...m, text: "I received your message but couldn't generate a response. Please try again." }
              : m
          );
        }
        return prev;
      });
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      const errorText =
        err instanceof Error && err.message.includes("HTTP")
          ? "Unable to connect to the server. Please try again."
          : "Connection lost. Please try again.";
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botMsgId ? { ...m, text: errorText } : m
        )
      );
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }, []);

  const resetSession = useCallback(() => {
    abortRef.current?.abort();
    const newId = generateId();
    sessionIdRef.current = newId;
    if (typeof window !== "undefined") {
      localStorage.setItem(SESSION_KEY, newId);
    }
    setMessages([{ id: "welcome", role: "bot", text: WELCOME_MESSAGE }]);
    setIsLoading(false);
  }, []);

  return { messages, isLoading, sendMessage, resetSession };
}
