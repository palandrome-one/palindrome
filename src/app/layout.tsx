import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import { Analytics } from "@vercel/analytics/react";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.palindrome.one"),
  title: {
    default:
      "Palindrome Blockchain Consultancy — Institutional-Grade Blockchain Gaming Infrastructure",
    template: "%s — Palindrome Blockchain Consultancy",
  },
  description:
    "We architect the systems that power sovereign digital economies — from Layer 3 app-chains and gasless execution to anti-cheat integrity and autonomous worlds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Palindrome Blockchain Consultancy",
    title:
      "Palindrome Blockchain Consultancy — Institutional-Grade Blockchain Gaming Infrastructure",
    description:
      "We architect the systems that power sovereign digital economies — from Layer 3 app-chains and gasless execution to anti-cheat integrity and autonomous worlds.",
    url: "https://www.palindrome.one",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Palindrome Blockchain Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Palindrome Blockchain Consultancy — Institutional-Grade Blockchain Gaming Infrastructure",
    description:
      "We architect the systems that power sovereign digital economies — from Layer 3 app-chains and gasless execution to anti-cheat integrity and autonomous worlds.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
