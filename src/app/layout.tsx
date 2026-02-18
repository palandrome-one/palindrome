import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Palindrome Blockchain Consultancy — Institutional-Grade Blockchain Gaming Infrastructure",
  description:
    "We architect the systems that power sovereign digital economies — from Layer 3 app-chains and gasless execution to anti-cheat integrity and autonomous worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
