# Palindrome Blockchain Consultancy - Implementation

## Project Overview

Company landing page for **Palindrome Blockchain Consultancy** (palindrome.one) — a consultancy specializing in institutional-grade blockchain gaming infrastructure.

**Domain:** palindrome.one
**Contact:** hello@palindrome.one

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 16.1.6 (App Router)        |
| Language    | TypeScript 5                        |
| UI          | React 19, custom CSS (no component library) |
| Styling     | Tailwind CSS 4 (imported but primarily custom CSS in `globals.css`) |
| Analytics   | Vercel Web Analytics (`@vercel/analytics`) |
| Deployment  | Vercel (auto-deploy from GitHub)    |
| Repo        | `palindrome/` subdirectory, GitHub: palandrome-one/palindrome |

---

## Project Structure

```
palindrome.one/
├── palindrome/                  # Next.js app (git repo root)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout, metadata, Analytics
│   │   │   ├── page.tsx         # Homepage (all sections)
│   │   │   ├── case-studies/
│   │   │   │   └── page.tsx     # Case studies / portfolio page
│   │   │   ├── globals.css      # Full custom stylesheet (~1000 lines)
│   │   │   └── favicon.ico
│   │   └── components/
│   │       ├── Nav.tsx          # Shared nav with mobile hamburger menu (client component)
│   │       ├── Footer.tsx       # Shared footer (used on all pages)
│   │       ├── Particles.tsx    # Floating particle animation (hero)
│   │       ├── ScrollReveal.tsx # Intersection Observer reveal animations
│   │       ├── NavScrollEffect.tsx # Nav background on scroll
│   │       ├── SmoothScroll.tsx # Smooth scroll (handles #hash and /#hash)
│   │       └── ChatWidget.tsx   # n8n AI chat widget (streaming enabled)
│   └── package.json
├── docs/
│   └── landing-page.html        # Static HTML version (outside git)
└── implementation.md             # This file
```

---

## Architecture Notes

- **Multi-page app:** Homepage (`page.tsx`) and Case Studies (`case-studies/page.tsx`). Shared Nav and Footer components extracted for cross-page reuse.
- **Design system:** Custom CSS variables in `:root` define the "Tech Innovation" theme (electric blue / neon cyan on dark backgrounds). No Tailwind utilities used in practice — all styling is hand-written in `globals.css`.
- **Navigation:** All section links use `/#section` format (absolute paths) so they work from any page. `SmoothScroll.tsx` handles both `#hash` and `/#hash` formats — smooth-scrolls on the homepage, normal navigation from other pages.
- **Animations:** CSS-based scroll reveals (`.reveal` class + Intersection Observer), particle effects, gradient shifting, and hover transitions.
- **Responsive:** Single breakpoint at 768px. Mobile hamburger menu toggles a fullscreen nav overlay.
- **AI Chat:** n8n-powered chat widget with streaming responses (`enableStreaming: true` in widget, `responseMode: "streaming"` on Chat Trigger node).
- **Static HTML mirror:** `docs/landing-page.html` is a standalone HTML copy of the same design, not tracked in git.

---

## Current Site Sections

### Homepage (`/`)

1. **Nav** — Shared fixed top bar with gradient brand link, section links, Case Studies link, CTA button. Mobile: hamburger toggle opens fullscreen overlay with centered links; closes on link tap, Escape key, or overlay click. Hamburger animates to X when open.
2. **Hero** — Full-viewport with particle animation, hex grid overlay, tagline, and dual CTAs
3. **Stats Bar** — 4-column market stats (gaming market size, CAGR, etc.)
4. **Services** — 9-card grid covering L3 infra, wallets, game engine integration, marketplaces, tokenomics, anti-cheat, AI agents, spatial computing, governance
5. **Tech Stack** — 6-layer architecture breakdown (Infrastructure through Governance)
6. **Advisory** — 6-card grid for strategy services (architecture, tokenomics, compliance, anti-cheat, creator economy, due diligence)
7. **Differentiator** — Two-column "Not What We Do" vs "What We Deliver"
8. **About / Team** — Company narrative + founder bio card (gradient-bordered avatar, role, bio). Responsive: cards stack on mobile.
9. **CTA** — Contact section with email link
9. **Footer** — Shared footer with brand link, copyright 2026, nav links, Case Studies link

### Case Studies (`/case-studies`)

1. **Nav** — Shared component
2. **Compact Hero** — "Infrastructure That Delivers" (no particles, shorter than homepage)
3. **Overview Cards Grid** — 5 cards (2-col desktop, 1-col mobile) with badges, tech tags, anchor links
4. **Case Study Detail Sections** (x5) — Each with challenge block (red border), solution block (cyan border), tech tags, 4-metric results grid
5. **CTA** — "Ready to Build Something Like This?"
6. **Footer** — Shared component

**Case Studies:**
| # | Title | Type |
|---|-------|------|
| 1 | Sovereign Gaming Chain for a AAA Studio | Client Engagement |
| 2 | Invisible Onboarding for an Indie Battle Royale | Client Engagement |
| 3 | Cross-Chain Marketplace Infrastructure | Capability Showcase |
| 4 | Sustainable Dual-Token Economy Engine | Client Engagement |
| 5 | ZK-Verified Anti-Cheat for Competitive Esports | Capability Showcase |

---

## Task Tracker

### Completed
- [x] Convert static HTML landing page to Next.js
- [x] Extract client components (Particles, ScrollReveal, NavScrollEffect, SmoothScroll)
- [x] Rebrand from ChainScore Labs to Palindrome Blockchain Consultancy
- [x] Update contact email to hello@palindrome.one
- [x] Configure deployment (Vercel, auto-deploy from GitHub)
- [x] Point root domain to Vercel (A record → 76.76.21.21)
- [x] Add n8n AI chat widget with Palindrome-themed dark styling
- [x] Enable chat streaming (n8n Chat Trigger + widget `enableStreaming`)
- [x] Add case studies / portfolio page (5 case studies)
- [x] Extract shared Nav and Footer components
- [x] Update copyright year to 2026
- [x] Update SmoothScroll to handle /#hash links across pages

### To Do
- [x] Add mobile hamburger menu with fullscreen overlay
- [ ] Add logo/wordmark asset (currently text-only brand)
- [ ] Add SEO metadata (Open Graph, Twitter cards, structured data)
- [ ] Add favicon / apple-touch-icon assets
- [ ] Bring `docs/landing-page.html` into git or remove it
- [x] Add analytics integration (Vercel Analytics)
- [x] Add About / Team section with founder bio (between Differentiator and CTA)

---

## Infrastructure

### Domain & Email
- **Registrar:** Namecheap (registrar-servers.com nameservers)
- **Email:** Namecheap Private Email (MX: mx1/mx2.privateemail.com)
- **Webmail:** https://privateemail.com
- **Catch-all:** All unmatched @palindrome.one addresses forward to william.mallett@palindrome.one

### DNS Records

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 (Vercel) | Automatic |
| A | automation | 178.128.85.53 (DigitalOcean) | Automatic |
| CNAME | www | cname.vercel-dns.com. | 30 min |
| TXT | default._domainkey | DKIM key (Private Email) | 30 min |

**Routing:**
- `palindrome.one` → Vercel → 307 redirect to `www.palindrome.one`
- `www.palindrome.one` → Vercel → Next.js site (primary domain)
- `automation.palindrome.one` → DigitalOcean → Traefik → n8n

### n8n Automation Platform
- **URL:** https://automation.palindrome.one
- **Version:** 2.4.5
- **License:** Community Edition Registered (free tier with selected paid features)
- **Login:** admin@palindrome.one

### Server (178.128.85.53)
- **Provider:** DigitalOcean
- **Reverse proxy:** Traefik v2.11 (TLS via Let's Encrypt)
- **Container runtime:** Docker Compose
- **Tenant config:** `/opt/myownip/tenants/palindrome-one/`

#### n8n Environment Configuration

Required env vars for n8n behind Traefik (in tenant `.env`):

```
N8N_HOST=automation.palindrome.one
N8N_PORT=5678
N8N_PROTOCOL=https
N8N_WEBHOOK_BASE_URL=https://automation.palindrome.one
N8N_EDITOR_BASE_URL=https://automation.palindrome.one
N8N_PROXY_HOPS=1
```

**Critical:** Without `N8N_WEBHOOK_BASE_URL` and `N8N_PROXY_HOPS`, webhooks will return 404 even when workflows are active. n8n defaults to `host:5678` internally, but Traefik serves on port 443. `WEBHOOK_URL` (without `N8N_` prefix) does not work — must use `N8N_WEBHOOK_BASE_URL`.

### n8n AI Chat Workflow

- **Workflow:** "Palindrome AI Consultant — Phase 2 RAG" (ID: `VSfRJMBluwcJLfrn`)
- **Chat Trigger:** Embedded webhook mode, streaming enabled (`options.responseMode: "streaming"`)
- **Agent:** GPT-4o with system prompt covering all Palindrome services, tech stack, and advisory
- **Memory:** Window Buffer Memory (20 messages)
- **RAG:** Qdrant vector store (`palindrome_docs` collection) with OpenAI embeddings, exposed as agent tool
- **Widget:** `@n8n/chat` v1.9.0 via CDN, `enableStreaming: true` in `createChat()` config
