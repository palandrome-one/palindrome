"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://automation.palindrome.one/webhook/6c2a2ece-3755-4843-b7e1-916ca8c1f655/chat',
        mode: 'window',
        showWelcomeScreen: false,
        initialMessages: [
          'Welcome to Palindrome Blockchain Consultancy. How can I help you with blockchain gaming infrastructure today?'
        ],
        i18n: {
          en: {
            title: 'Palindrome AI',
            subtitle: 'Blockchain Gaming Infrastructure Consultant',
            inputPlaceholder: 'Ask about our services, tech stack, or advisory...',
            getStarted: 'New Conversation',
            closeButtonTooltip: 'Close Chat',
          },
        },
        metadata: {},
      });
    `;
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  return null;
}
