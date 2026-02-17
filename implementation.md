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
| Deployment  | Vercel (auto-deploy from GitHub)    |
| Repo        | `palindrome/` subdirectory, GitHub: palandrome-one/palindrome |

---

## Project Structure

```
palindrome.one/
├── palindrome/                  # Next.js app (git repo root)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout, metadata
│   │   │   ├── page.tsx         # Single-page landing (all sections)
│   │   │   ├── globals.css      # Full custom stylesheet (~700 lines)
│   │   │   └── favicon.ico
│   │   └── components/
│   │       ├── Particles.tsx    # Floating particle animation (hero)
│   │       ├── ScrollReveal.tsx # Intersection Observer reveal animations
│   │       ├── NavScrollEffect.tsx # Nav background on scroll
│   │       └── SmoothScroll.tsx # Smooth scroll behavior
│   └── package.json
├── docs/
│   └── landing-page.html        # Static HTML version (outside git)
└── implementation.md             # This file
```

---

## Architecture Notes

- **Single-page app:** All content lives in `page.tsx` as a server component with client-side interactive components extracted into `src/components/`.
- **Design system:** Custom CSS variables in `:root` define the "Tech Innovation" theme (electric blue / neon cyan on dark backgrounds). No Tailwind utilities used in practice — all styling is hand-written in `globals.css`.
- **Animations:** CSS-based scroll reveals (`.reveal` class + Intersection Observer), particle effects, gradient shifting, and hover transitions.
- **Responsive:** Single breakpoint at 768px. Nav links hidden on mobile (no hamburger menu yet).
- **Static HTML mirror:** `docs/landing-page.html` is a standalone HTML copy of the same design, not tracked in git.

---

## Current Site Sections

1. **Nav** — Fixed top bar with gradient brand name, section links, CTA button
2. **Hero** — Full-viewport with particle animation, hex grid overlay, tagline, and dual CTAs
3. **Stats Bar** — 4-column market stats (gaming market size, CAGR, etc.)
4. **Services** — 9-card grid covering L3 infra, wallets, game engine integration, marketplaces, tokenomics, anti-cheat, AI agents, spatial computing, governance
5. **Tech Stack** — 6-layer architecture breakdown (Infrastructure through Governance)
6. **Advisory** — 6-card grid for strategy services (architecture, tokenomics, compliance, anti-cheat, creator economy, due diligence)
7. **Differentiator** — Two-column "Not What We Do" vs "What We Deliver"
8. **CTA** — Contact section with email link
9. **Footer** — Brand, copyright, nav links

---

## Task Tracker

### Completed
- [x] Convert static HTML landing page to Next.js
- [x] Extract client components (Particles, ScrollReveal, NavScrollEffect, SmoothScroll)
- [x] Rebrand from ChainScore Labs to Palindrome Blockchain Consultancy
- [x] Update contact email to hello@palindrome.one

### To Do
- [ ] Add mobile hamburger menu (nav links hidden on mobile with no toggle)
- [ ] Add logo/wordmark asset (currently text-only brand)
- [x] Configure deployment (Vercel, auto-deploy from GitHub)
- [x] Point root domain to Vercel (A record → 76.76.21.21)
- [ ] Add SEO metadata (Open Graph, Twitter cards, structured data)
- [ ] Add favicon / apple-touch-icon assets
- [ ] Bring `docs/landing-page.html` into git or remove it
- [ ] Update copyright year from 2025 to 2026
- [ ] Add analytics integration
- [ ] Consider adding case studies / portfolio section
- [ ] Consider adding team / about section

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
