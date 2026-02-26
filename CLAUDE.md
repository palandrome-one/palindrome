# Palindrome Blockchain Consultancy

## Quick Reference
- **Live site:** https://www.palindrome.one
- **Repo:** github.com/palandrome-one/palindrome (note: "palandrome" is intentional typo in org name)
- **Deploy:** Auto-deploy to Vercel on push to `main`
- **Full architecture docs:** See `implementation.md` in this directory

## Development

```bash
npm run dev    # http://localhost:3000
npm run build  # production build (run before pushing to catch errors)
npm run lint   # eslint
```

**Environment:** Copy `.env.local` needs `OPENAI_API_KEY` for voice endpoints (STT/TTS).

## Architecture Decisions

### Why custom CSS instead of Tailwind utilities
Tailwind v4 is installed but `globals.css` (~1250 lines) is the actual styling layer. This was a deliberate choice — the design uses complex gradients, animations, and pseudo-elements that are cleaner as named CSS classes than utility soup. **Do not refactor to Tailwind utilities.**

### Why custom chat widget instead of n8n CDN widget
The n8n `@n8n/chat` CDN widget couldn't support voice (STT/TTS) or custom streaming UI. The custom React implementation in `components/ChatWidget.tsx` + `components/chat/` + `hooks/` replaced it. The n8n backend workflow still powers the AI — the widget just talks to the same webhook.

### Why server-side voice routes instead of client-side API calls
`/api/voice/stt` and `/api/voice/tts` proxy to OpenAI server-side to keep the API key off the client. They also handle rate limiting (10 req/min/IP).

### Single branch workflow
Everything is on `main`. No feature branches currently. Vercel auto-deploys every push.

## Key Patterns

- **All styling in `globals.css`** — components use className strings, not inline styles or Tailwind
- **Client components are explicit** — anything with `"use client"` is interactive (Nav, ChatWidget, Particles, ScrollReveal, etc.). Pages are server components.
- **Section links use `/#section` format** — absolute paths so they work from any page. `SmoothScroll.tsx` handles the routing.
- **Chat streaming uses NDJSON** — n8n sends `{"type":"item","content":"..."}` chunks. See `hooks/useChat.ts`.
- **Voice audio format fallback** — `audio/webm;codecs=opus` (Chrome/FF) → `audio/mp4` (Safari). See `hooks/useVoiceRecorder.ts`.
- **Markdown in bot messages** — custom lightweight parser in `ChatMessages.tsx`, no external library.

## File Guide

| What | Where |
|------|-------|
| Homepage content | `src/app/page.tsx` |
| Case studies | `src/app/case-studies/page.tsx` |
| All CSS | `src/app/globals.css` |
| Chat logic | `src/hooks/useChat.ts` |
| Voice logic | `src/hooks/useVoiceRecorder.ts` |
| Chat UI | `src/components/ChatWidget.tsx` + `src/components/chat/` |
| SEO/structured data | `src/components/JsonLd.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts` |
| Layout + metadata | `src/app/layout.tsx` |
| n8n webhook URL | hardcoded in `useChat.ts` |

## Things Tried and Abandoned

- **n8n `@n8n/chat` CDN widget** — replaced with custom React chat. It couldn't do voice, custom streaming UI, or style overrides deep enough for the dark theme.
- **Tailwind utility classes** — started with them, switched to `globals.css` for the complex visual design. Tailwind is still installed for potential future use but the CSS file is the source of truth.

## Infrastructure Context

- **n8n instance:** https://automation.palindrome.one (DigitalOcean 178.128.85.53, Docker + Traefik)
- **Chat AI workflow ID:** `VSfRJMBluwcJLfrn` — GPT-4o agent with Qdrant RAG
- **Domain:** Namecheap, email via Private Email (privateemail.com)
- **SMTP is blocked** on the DO droplet (support ticket pending). IMAP works.
- See `implementation.md` → Infrastructure section for full DNS, env vars, and n8n config.

## Remaining TODOs

- [ ] Logo/wordmark asset (currently text-only)
- [ ] Favicon / apple-touch-icon assets
- [ ] Clean up or remove `docs/landing-page.html` (static HTML predecessor, outside git)
