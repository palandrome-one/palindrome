"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest(
        'a[href^="#"], a[href^="/#"]'
      );
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Extract the hash portion from either "#id" or "/#id"
      const hash = href.startsWith("/#") ? href.slice(1) : href;

      // Only smooth-scroll if we're on the page that owns the target
      // For "/#hash" links: only scroll if we're on the homepage
      if (href.startsWith("/#") && window.location.pathname !== "/") return;

      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
