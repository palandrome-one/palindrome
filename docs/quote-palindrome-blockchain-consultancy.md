# Palindrome Blockchain Consultancy — Client Quote

---

| Field | Value |
|-------|-------|
| **Quote ID** | PBC-Q-2026-001 |
| **Version** | 1.0 |
| **Date Issued** | February 18, 2026 |
| **Valid Until** | March 18, 2026 |
| **Prepared By** | Palindrome Blockchain Consultancy |
| **Client** | [Client Name] |
| **Project** | Palindrome Blockchain Consultancy — Website & AI Platform |

---

## 1. Executive Summary

Palindrome Blockchain Consultancy engaged a full-stack development sprint to deliver a production-ready enterprise website with integrated AI capabilities. The project encompasses:

- **Market research and content strategy** — 4 proprietary research documents (18MB) covering blockchain gaming market analysis, tech stack blueprints, anti-cheat/monetization frameworks, and global finance infrastructure
- **Production website** — Next.js 16 application with 9 service offerings, 6 advisory specializations, 5 detailed case studies, and responsive design across all breakpoints
- **AI-powered lead qualification** — RAG chatbot trained on proprietary research using GPT-4o, Qdrant vector search, and n8n automation, providing 24/7 AI-driven client engagement
- **Voice-enabled conversational AI** — Custom chat with speech-to-text (OpenAI Whisper) and text-to-speech (OpenAI TTS) for hands-free voice interaction, progressive audio streaming, and markdown-rendered responses
- **Enterprise infrastructure** — Multi-provider deployment (Vercel, DigitalOcean, Namecheap) with SSL, DKIM email authentication, reverse proxy routing, and CI/CD
- **Generative Engine Optimization (GEO)** — Structured data, AI crawler permissions, and semantic markup ensuring discoverability by ChatGPT, Claude, Perplexity, and other AI search engines

**Total Scope:** 27 files | 3,350+ lines | 56 billable hours

---

## 2. Scope of Work

### 2.1 Research, Strategy & Content — 12 hours

| Item | Description | Hours |
|------|-------------|-------|
| Market opportunity analysis | Blockchain gaming market sizing, growth projections, competitive landscape | 3 |
| Tech stack blueprint | Infrastructure layer mapping, protocol selection, integration patterns | 3 |
| Anti-cheat & monetization research | ZK-proof anti-cheat systems, sustainable tokenomics models, play-to-earn economics | 2 |
| Global finance infrastructure | Gaming rails, payment processing, regulatory frameworks across jurisdictions | 2 |
| Service definition | 9 service offerings with technical depth (L3 chains, embedded wallets, game engine SDKs, marketplace protocols, tokenomics, anti-cheat, AI agents, spatial computing, governance) | 1 |
| Advisory framework | 6 advisory specializations (architecture reviews, tokenomics audits, compliance, anti-cheat, creator economy, due diligence) | 1 |

**Deliverables:** 4 PDF research documents (18MB total), 5 case studies with specific ERC references and protocol metrics

### 2.2 Architecture & Scaffolding — 3 hours

| Item | Description | Hours |
|------|-------------|-------|
| Technology selection | Next.js 16 (App Router), React 19, TypeScript 5, custom CSS architecture | 1 |
| Application structure | Multi-page routing, component hierarchy, shared layout system | 1 |
| Design system | CSS custom properties (`:root` variables), "Tech Innovation" theme, responsive breakpoint strategy | 1 |

### 2.3 Frontend Development — 14 hours

| Item | Description | Hours |
|------|-------------|-------|
| Homepage (`page.tsx`) | 353 lines — Hero with particle animation, stats bar, 9-card services grid, 6-layer tech stack, 6-card advisory grid, differentiator section, about/team section, CTA | 4 |
| Case studies page | 280 lines — 5 case studies with challenge/solution blocks, tech tags, 4-metric results grids, overview card navigation | 3 |
| Global stylesheet | 1,250 lines — Complete design system: CSS variables, animations, scroll reveals, gradient effects, responsive layouts, dark theme | 3 |
| Navigation component | 61 lines — Fixed top bar, gradient brand, section links, mobile hamburger with fullscreen overlay, animated toggle | 1 |
| Chat widget | 46 lines — n8n AI chat integration, Palindrome-themed dark styling, streaming support | 1 |
| JSON-LD structured data | 167 lines — Organization, WebSite, ProfessionalService, CreativeWork schemas | 0.5 |
| Layout & metadata | 62 lines — Root layout, OG/Twitter meta, canonical URLs, analytics integration | 0.5 |
| Utility components | 110 lines combined — Particles (29), ScrollReveal (24), NavScrollEffect (22), SmoothScroll (35) | 1 |

### 2.4 DevOps & Infrastructure — 6 hours

| Item | Description | Hours |
|------|-------------|-------|
| Domain & DNS | Namecheap configuration, A records (Vercel + DigitalOcean), CNAME (www), multi-subdomain routing | 1.5 |
| Email infrastructure | Namecheap Private Email, DKIM (TXT record), catch-all forwarding, webmail access | 1 |
| Vercel deployment | GitHub integration (palandrome-one/palindrome), auto-deploy, domain binding, SSL, CI/CD pipeline | 1 |
| DigitalOcean server | Docker Compose, Traefik v2.11 reverse proxy, Let's Encrypt TLS, multi-tenant configuration | 1.5 |
| Environment configuration | n8n environment variables, webhook base URL, proxy hops, editor base URL | 1 |

### 2.5 AI Chatbot (RAG Pipeline) — 10 hours

| Item | Description | Hours |
|------|-------------|-------|
| n8n workflow platform | Traefik routing, SSL termination, container deployment, community edition licensing | 2 |
| AI agent configuration | GPT-4o agent with comprehensive system prompt covering all services, tech stack, and advisory specializations | 2 |
| Vector search (RAG) | Qdrant deployment, `palindrome_docs` collection (129 chunks, 1536-dim), OpenAI text-embedding-3-small | 2 |
| PDF ingestion pipeline | Document chunking workflow, binary file mounting, automated embedding generation | 1.5 |
| Chat widget integration | @n8n/chat v1.9.0 CDN embed, dark theme styling, streaming mode configuration | 1 |
| Webhook debugging | 3 critical bugs resolved: webhook 404 (missing `N8N_WEBHOOK_BASE_URL`), Chat Trigger `public` property, textarea styling | 1.5 |

### 2.6 Voice-Enabled Chat Integration — 8 hours

| Item | Description | Hours |
|------|-------------|-------|
| Custom chat component | Replace n8n CDN widget with full React chat component: FAB toggle, chat window, message list with markdown rendering, auto-resize textarea, voice-state mic button | 3 |
| Speech-to-Text (STT) | Server-side API route (`/api/voice/stt`), OpenAI Whisper integration, MediaRecorder with format fallback (WebM/MP4), 10MB limit, 60s auto-stop, rate limiting | 2 |
| Text-to-Speech (TTS) | Server-side API route (`/api/voice/tts`), OpenAI TTS (voice: onyx), progressive audio streaming via MediaSource API, markdown stripping, 500-char truncation at sentence boundary | 2 |
| n8n streaming protocol | NDJSON stream parser for n8n webhook responses (`type: "item"` chunks with `content` field), session persistence via localStorage, error handling for network failures | 1 |

**Deliverables:** 8 new files (2 API routes, 2 hooks, 4 chat components), 2 modified files (ChatWidget.tsx, globals.css), OpenAI dependency

### 2.7 SEO/GEO & Performance — 3 hours

| Item | Description | Hours |
|------|-------------|-------|
| JSON-LD schemas | 4 schemas: Organization, WebSite, ProfessionalService, CreativeWork for case studies | 1 |
| AI crawler permissions | 15 explicit bot rules in `robots.ts` (GPTBot, ClaudeBot, PerplexityBot, Applebot, etc.) | 0.5 |
| Open Graph & Twitter Cards | OG image, title, description, Twitter large image card, canonical URLs | 0.5 |
| Sitemap & robots.txt | Dynamic sitemap generation, programmatic robots.txt with AI-specific directives | 0.5 |
| Analytics & headers | Vercel Web Analytics integration, `X-Robots-Tag: max-snippet:-1` for unlimited AI extraction | 0.5 |

---

## 3. Deliverables Inventory

### Source Code (27 files, 3,350+ lines added)

| File | Lines | Category |
|------|-------|----------|
| `src/app/globals.css` | 1,500+ | Styling |
| `src/app/page.tsx` | 353 | Page — Homepage |
| `src/app/case-studies/page.tsx` | 280 | Page — Case Studies |
| `implementation.md` | 189 | Documentation |
| `src/components/JsonLd.tsx` | 167 | Component — SEO |
| `src/app/layout.tsx` | 62 | Layout |
| `src/components/Nav.tsx` | 61 | Component — Navigation |
| `src/components/ChatWidget.tsx` | 80 | Component — Voice-enabled AI Chat |
| `src/components/chat/ChatHeader.tsx` | 45 | Component — Chat Header |
| `src/components/chat/ChatMessages.tsx` | 95 | Component — Messages with Markdown |
| `src/components/chat/ChatInput.tsx` | 90 | Component — Input with Voice Controls |
| `src/components/chat/icons.tsx` | 80 | Component — SVG Icons |
| `src/hooks/useChat.ts` | 130 | Hook — Chat State & Streaming |
| `src/hooks/useVoiceRecorder.ts` | 200 | Hook — Voice Recording & Playback |
| `src/app/api/voice/stt/route.ts` | 60 | API Route — Speech-to-Text |
| `src/app/api/voice/tts/route.ts` | 85 | API Route — Text-to-Speech |
| `src/components/SmoothScroll.tsx` | 35 | Component — UX |
| `src/components/Particles.tsx` | 29 | Component — Animation |
| `src/app/robots.ts` | 24 | SEO — Robots |
| `src/components/ScrollReveal.tsx` | 24 | Component — Animation |
| `src/components/NavScrollEffect.tsx` | 22 | Component — UX |
| `src/app/sitemap.ts` | 18 | SEO — Sitemap |
| `next.config.ts` | 18 | Configuration |
| `src/components/Footer.tsx` | 16 | Component — Footer |
| `public/og-image.png` | — | Asset — OG Image |
| `package.json` | 1 | Dependencies |
| `package-lock.json` | 39 | Dependencies |

### Research Documents (outside git, 18MB total)

| File | Size | Date |
|------|------|------|
| Blockchain Gaming: Anti-Cheat, Monetization, and More | 184K | Feb 7, 2026 |
| Blockchain Gaming Tech Stack Blueprint | 231K | Feb 10, 2026 |
| Blockchain Gaming Market Opportunity Analysis | 342K | Feb 12, 2026 |
| Gaming Rails Global Finance | 17MB | Feb 13, 2026 |

### Infrastructure Assets (not in git)

| Asset | Description |
|-------|-------------|
| Static prototype | `palindrome/docs/landing-page.html` (38K) — Initial HTML/CSS mockup |
| n8n workflows | 2 workflows: Chat agent (`VSfRJMBluwcJLfrn`), PDF ingestion (`OF4GFhKaQk7vwuGN`) |
| Qdrant collection | `palindrome_docs` — 129 chunks, 1536-dim cosine similarity |
| DNS configuration | 4 records: A (x2), CNAME, TXT (DKIM) |
| Email system | Namecheap Private Email with catch-all forwarding |
| Server configuration | Docker Compose + Traefik reverse proxy on DigitalOcean |

---

## 4. Timeline

### Research Phase: February 7-13, 2026

| Date | Deliverable |
|------|-------------|
| Feb 7 | Blockchain Gaming: Anti-Cheat, Monetization, and More (PDF) |
| Feb 10 | Blockchain Gaming Tech Stack Blueprint (PDF) |
| Feb 12 | Blockchain Gaming Market Opportunity Analysis (PDF) |
| Feb 13 | Gaming Rails Global Finance (PDF) |

### Development Sprint: February 17-18, 2026

| Time | Commit | Description |
|------|--------|-------------|
| Feb 17 23:13 | `7b68f5d` | Initial Next.js scaffold |
| Feb 17 23:17 | `5f7a185` | Convert static landing page to Next.js |
| Feb 18 00:25 | `566290d` | Rebrand to Palindrome Blockchain Consultancy |
| Feb 18 00:38 | `7f8727c` | Add implementation.md with tech spec |
| Feb 18 02:56 | `593b59e` | Infrastructure docs: domain, email, n8n config |
| Feb 18 03:09 | `b5109e3` | DNS records and Vercel deployment config |
| Feb 18 04:33 | `7da21b5` | n8n chat widget with dark styling |
| Feb 18 04:36 | `0e2bc4a` | Fix chat widget theme colors |
| Feb 18 04:38 | `0667446` | Fix chat textarea background |
| Feb 18 04:57 | `bf25071` | Fix chat webhook URL (public webhook ID) |
| Feb 18 05:40 | `1026b36` | Case studies page + chat streaming |
| Feb 18 05:48 | `8ff334e` | Update docs with case studies |
| Feb 18 06:04 | `54a1452` | Mobile hamburger menu with fullscreen overlay |
| Feb 18 06:10 | `5687801` | Update docs with mobile nav |
| Feb 18 06:27 | `1a27d5b` | About / Team section with founder bio |
| Feb 18 06:30 | `b1e1f8a` | Update docs with about section |
| Feb 18 07:06 | `95374fc` | Vercel Analytics integration |
| Feb 18 07:14 | `54ad3c8` | Update docs with analytics |
| Feb 18 07:28 | `343ec74` | GEO infrastructure (robots, sitemap, JSON-LD, OG) |
| Feb 18 07:29 | `b3a6cea` | Update docs with GEO |

**20 commits** across 2 days | **8+ hours** of git-tracked development

> **Note:** Git captures ~8 hours of commit activity on Feb 18. Research (Feb 7-13), static prototype design, n8n workflow configuration (browser-based), DNS/email/Vercel setup (provider dashboards), Qdrant deployment (server-side Docker), and content writing are not captured in git. **56 hours** represents true billable effort across all phases.

---

## 5. Pricing

### Time & Materials (T&M)

| Tier | Hourly Rate | 56 Hours T&M | Fixed Bid (+17%) | Monthly Retainer (20 hrs) |
|------|-------------|--------------|-------------------|---------------------------|
| **Cambodia / SEA** | $75/hr | **$4,200** | **$4,914** | $1,500/mo |
| **Australia** | $175/hr | **$9,800** | **$11,466** | $3,500/mo |
| **Global / US** | $250/hr | **$14,000** | **$16,380** | $5,000/mo |

**Pricing notes:**
- **T&M** — Billed against actual hours with weekly timesheets
- **Fixed Bid** — 17% premium covers scope risk; includes up to 10% scope change without renegotiation
- **Monthly Retainer** — 20 hours/month for ongoing development, maintenance, and support; unused hours do not roll over

### Infrastructure Passthrough Costs (~$49/month)

These are at-cost passthroughs with no markup:

| Service | Monthly | Annual | Notes |
|---------|---------|--------|-------|
| Vercel (free tier) | $0 | $0 | Auto-deploy, CDN, SSL |
| DigitalOcean (shared) | ~$8 | ~$96 | Shared droplet across tenants |
| Namecheap domain | ~$1 | ~$12 | .one TLD renewal |
| Namecheap Private Email | ~$3 | ~$36 | 1 mailbox + catch-all |
| OpenAI API (chatbot + voice) | ~$37 | ~$444 | GPT-4o + embeddings + Whisper STT (~$18) + TTS (~$9) |
| n8n (self-hosted) | $0 | $0 | Community Edition |
| Qdrant (self-hosted) | $0 | $0 | Docker container |
| **Total** | **~$49** | **~$588** | |

---

## 6. Payment Milestones

| Milestone | Trigger | % | Cambodia | Australia | Global |
|-----------|---------|---|----------|-----------|--------|
| **M1 — Research & Architecture** | Research docs + tech spec delivered | 25% | $1,050 | $2,450 | $3,500 |
| **M2 — Development & Infrastructure** | Site live + AI chatbot operational | 35% | $1,470 | $3,430 | $4,900 |
| **M3 — Voice Integration** | Voice chat (STT + TTS) operational | 15% | $630 | $1,470 | $2,100 |
| **M4 — SEO/GEO & Handoff** | Final delivery + documentation | 25% | $1,050 | $2,450 | $3,500 |
| **Total** | | 100% | **$4,200** | **$9,800** | **$14,000** |

*Fixed-bid pricing follows the same milestone split applied to the fixed-bid total.*

---

## 7. Change Request Policy

1. **Written approval required** — All scope changes must be documented in writing (email or project management tool) before work begins
2. **Impact assessment** — Each change request will include estimated hours, cost impact, and timeline effect within 24 hours
3. **Hourly overflow** — Work exceeding the quoted 56 hours is billed at the applicable tier rate on a T&M basis
4. **Emergency rate** — Out-of-hours or rush requests (< 24-hour turnaround) are billed at **1.5x** the standard hourly rate
5. **Scope threshold** — Fixed-bid engagements include up to 10% scope change without renegotiation; beyond 10% triggers a formal change order

---

## 8. Maintenance & Support

### 30-Day Warranty (Included)

- Bug fixes for delivered functionality at no additional cost
- Does not cover new feature requests, third-party service outages, or changes to external APIs
- Response time: within 24 hours on business days

### Retainer SLA Options

| Tier | Monthly | Hours | Response Time | Includes |
|------|---------|-------|---------------|----------|
| **Basic** | $500/mo | 4 hrs | 48 hours | Bug fixes, minor updates, monitoring |
| **Standard** | $1,500/mo | 12 hrs | 24 hours | Feature development, content updates, performance optimization |
| **Premium** | $3,500/mo | 20 hrs | 4 hours | Priority development, infrastructure management, AI model tuning |

---

## 9. Strategic Value

### 9.1 Blockchain Gaming Prototype

This website is not merely a marketing asset — it is a **live technical demonstration**. The site references specific ERC standards (ERC-721, ERC-1155, ERC-4337, ERC-6551), named protocols (StarkNet, Arbitrum Orbit, ImmutableX), and quantified case study metrics (40% gas reduction, 94% wallet adoption, 3.2M daily transactions). This level of technical specificity establishes domain authority that generic competitors cannot replicate. The website IS the sales tool.

### 9.2 Web3 + AI Hybrid

The RAG chatbot represents a **24/7 AI-powered lead qualification system** operating at the intersection of two high-demand verticals. Trained on 18MB of proprietary blockchain gaming research (129 document chunks), it can answer detailed technical questions about tokenomics, anti-cheat architecture, and infrastructure design — pre-qualifying prospects before they reach a human consultant. This is not a generic FAQ bot; it has domain expertise.

### 9.3 Voice-First Conversational Interface

The voice integration transforms the website from a text-only chat tool into a **conversational AI advisor**. Key differentiators:
- **Speech-to-text** via OpenAI Whisper enables hands-free interaction — prospects can describe complex technical requirements verbally rather than typing
- **Text-to-speech** via OpenAI TTS (progressive streaming) provides immediate audio feedback, creating an experience closer to speaking with a human consultant
- **No client-side dependencies** — uses native browser APIs (MediaRecorder, MediaSource, Audio), keeping bundle size unchanged
- **Cross-browser support** — format fallback (WebM → MP4) and playback fallback (MediaSource → blob) ensure compatibility across Chrome, Firefox, Safari, and mobile browsers
- **Cost-effective** — estimated ~$27/month for 1K users with rate limiting (10 req/min per IP) to prevent abuse

This positions Palindrome as an AI-native consultancy — the website itself demonstrates the kind of intelligent, conversational infrastructure the company builds for clients.

### 9.4 Tokenized Asset Foundation

Architecture decisions made during this build — CSS custom properties for theming, component extraction patterns, JSON-LD structured data, App Router with dynamic routing — reduce future development cost by an estimated **30-40%** for planned features:
- Token dashboard interfaces
- Real-time analytics visualizations
- Client portal with authenticated access
- Multi-chain asset tracking views

The component architecture is designed to scale without refactoring.

### 9.4 GEO Competitive Moat

As AI search replaces traditional search, **Generative Engine Optimization** becomes a critical competitive advantage:
- **15 AI crawler permissions** explicitly granted in `robots.ts` (GPTBot, ClaudeBot, PerplexityBot, Applebot, GoogleOther, etc.)
- **`max-snippet:-1`** via `X-Robots-Tag` header allows unlimited text extraction by AI models
- **4 JSON-LD schemas** (Organization, WebSite, ProfessionalService, CreativeWork) provide machine-readable structured data
- **Semantic HTML** (`<main>`, `<article>`, `<section>`) with descriptive content enables accurate AI summarization

This means when a prospect asks ChatGPT, Claude, or Perplexity *"Who provides blockchain gaming infrastructure consulting?"*, Palindrome appears as a cited source with accurate, structured information.

---

## 10. Terms & Acceptance

### Intellectual Property

- Upon full payment, all source code, documentation, and research materials produced under this engagement are transferred to the Client as **work-for-hire**
- Third-party dependencies (Next.js, React, n8n, Qdrant) remain under their respective open-source licenses
- The Consultant retains the right to reference this project in portfolios and case studies unless otherwise agreed in writing

### Confidentiality

- Both parties agree to maintain confidentiality of proprietary business information, technical architectures, and commercial terms
- Research documents and case study content remain confidential unless explicitly authorized for public use
- This obligation survives termination of the engagement for a period of 2 years

### Limitation of Liability

- Total liability is limited to the fees paid under this engagement
- Neither party is liable for indirect, incidental, or consequential damages
- Force majeure events (including third-party service outages) are excluded from liability

### Termination

- Either party may terminate with 14 days written notice
- Client pays for all work completed up to the termination date
- Deliverables completed prior to termination are transferred to the Client

---

### Acceptance

By signing below, both parties agree to the terms, scope, and pricing outlined in this document.

| | **Client** | **Consultant** |
|---|------------|----------------|
| **Name** | _________________________ | _________________________ |
| **Title** | _________________________ | _________________________ |
| **Date** | _________________________ | _________________________ |
| **Signature** | _________________________ | _________________________ |

---

*Quote ID: PBC-Q-2026-001 | Generated: February 18, 2026 | Valid for 30 days*
