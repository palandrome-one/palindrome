import { CloseIcon } from "./icons";

interface ChatHeaderProps {
  onClose: () => void;
  onReset: () => void;
}

export default function ChatHeader({ onClose, onReset }: ChatHeaderProps) {
  return (
    <div className="chat-header">
      <div className="chat-header-info">
        <h3 className="chat-header-title">Palindrome AI</h3>
        <p className="chat-header-subtitle">
          Blockchain Gaming Infrastructure Consultant
        </p>
      </div>
      <div className="chat-header-actions">
        <button
          className="chat-header-btn"
          onClick={onReset}
          title="New conversation"
          aria-label="New conversation"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>
        <button
          className="chat-header-btn"
          onClick={onClose}
          title="Close chat"
          aria-label="Close chat"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
