"use client";

import { useState, useEffect, useCallback } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, close]);

  return (
    <>
      <nav className="nav">
        <a href="/" className="nav-brand">PALINDROME BLOCKCHAIN CONSULTANCY</a>

        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links">
          <li><a href="/#services">Build</a></li>
          <li><a href="/#stack">Stack</a></li>
          <li><a href="/#advisory">Advisory</a></li>
          <li><a href="/#approach">Approach</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
          <li><a href="/#contact" className="nav-cta">Get in Touch</a></li>
        </ul>
      </nav>

      <div
        className={`nav-mobile-overlay${menuOpen ? " open" : ""}`}
        onClick={close}
      >
        <ul onClick={(e) => e.stopPropagation()}>
          <li><a href="/#services" onClick={close}>Build</a></li>
          <li><a href="/#stack" onClick={close}>Stack</a></li>
          <li><a href="/#advisory" onClick={close}>Advisory</a></li>
          <li><a href="/#approach" onClick={close}>Approach</a></li>
          <li><a href="/#about" onClick={close}>About</a></li>
          <li><a href="/case-studies" onClick={close}>Case Studies</a></li>
          <li><a href="/#contact" className="nav-cta" onClick={close}>Get in Touch</a></li>
        </ul>
      </div>
    </>
  );
}
