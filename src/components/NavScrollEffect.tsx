"use client";

import { useEffect } from "react";

export default function NavScrollEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav") as HTMLElement | null;
      if (!nav) return;
      if (window.scrollY > 50) {
        nav.style.background = "rgba(10, 10, 10, 0.95)";
      } else {
        nav.style.background = "rgba(30, 30, 30, 0.85)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
