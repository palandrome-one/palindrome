import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import NavScrollEffect from "@/components/NavScrollEffect";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Case Studies — Palindrome Blockchain Consultancy",
  description:
    "Portfolio of blockchain gaming infrastructure engagements — sovereign chains, invisible onboarding, cross-chain marketplaces, tokenomics engines, and ZK anti-cheat systems.",
};

const caseStudies = [
  {
    id: "sovereign-gaming-chain",
    number: "01",
    title: "Sovereign Gaming Chain for a AAA Studio",
    type: "client" as const,
    clientType: "AAA Game Studio",
    subtitle:
      "Dedicated Arbitrum Orbit L3 with gasless execution and ERC-4337 smart accounts for 2M+ DAU.",
    challenge:
      "The studio's flagship title was hitting throughput limits on Ethereum L1, with gas costs making microtransactions unviable and onboarding friction losing 73% of new players at the wallet-creation step. They needed sovereign infrastructure without sacrificing Ethereum security guarantees.",
    solution:
      "We deployed a dedicated Arbitrum Orbit L3 with AnyTrust DAC for data availability, achieving sub-cent transaction costs while inheriting Ethereum's security. ERC-4337 smart accounts with social login eliminated wallet friction entirely — players authenticate with existing credentials and receive a smart contract wallet invisibly. A custom gas token pegged to in-game currency made all gameplay transactions feel gasless.",
    tags: ["Arbitrum Orbit", "AnyTrust DAC", "ERC-4337", "Custom Gas Token", "Social Auth"],
    results: [
      { value: "12,000+", label: "TPS Sustained" },
      { value: "<$0.001", label: "Per Transaction" },
      { value: "94%", label: "Onboarding Completion" },
      { value: "2.1M", label: "Smart Accounts Created" },
    ],
  },
  {
    id: "invisible-onboarding",
    number: "02",
    title: "Invisible Onboarding for an Indie Battle Royale",
    type: "client" as const,
    clientType: "Indie Publisher",
    subtitle:
      "Zero-friction Web3 UX with social auth, session keys, and token-bound character inventories.",
    challenge:
      "An indie publisher with a hit battle royale (800K MAU) wanted to add blockchain-backed character ownership and a player marketplace without any visible crypto UX. Their core audience actively rejected anything that looked like 'crypto gaming' — the integration had to be completely invisible.",
    solution:
      "We built an ERC-4337 account system where players sign in with Discord or Steam credentials — no seed phrases, no extensions, no gas prompts. Session keys authorize gameplay transactions for 24-hour windows without repeated approvals. Each character is an ERC-6551 Token-Bound Account, owning its own inventory of skins, weapons, and achievements as nested NFTs. The marketplace runs through a custodial relay so players buy and sell using familiar fiat-like flows.",
    tags: ["ERC-4337", "Social Auth", "ERC-6551", "Session Keys", "Custodial Relay"],
    results: [
      { value: "0", label: "Wallet Prompts Shown" },
      { value: "340K", label: "Characters as TBAs" },
      { value: "4.2x", label: "Marketplace Volume" },
      { value: "97%", label: "Retention vs. Pre-Web3" },
    ],
  },
  {
    id: "cross-chain-marketplace",
    number: "03",
    title: "Cross-Chain Marketplace Infrastructure",
    type: "capability" as const,
    clientType: "Technical Capability Demo",
    subtitle:
      "Interoperable trading across 30+ chains with programmable royalties and decentralized storage.",
    challenge:
      "Gaming assets are fragmented across dozens of chains — an item on Polygon can't be listed alongside Arbitrum inventory, creators lose royalties on secondary sales, and centralized marketplaces become single points of failure. The ecosystem needed unified infrastructure that worked across chain boundaries.",
    solution:
      "We architected a Hyperlane-powered cross-chain messaging layer enabling asset listings and atomic swaps across 30+ EVM chains. ERC-2981 royalty enforcement is built into the settlement contracts — creators receive royalties programmatically regardless of which chain the sale executes on. Asset metadata lives on IPFS with Filecoin persistence guarantees, and an ERC-1155 licensing framework lets creators set per-chain distribution rights.",
    tags: ["Hyperlane", "ERC-2981", "ERC-1155", "IPFS", "Filecoin", "Atomic Swaps"],
    results: [
      { value: "30+", label: "Chains Supported" },
      { value: "100%", label: "Royalty Enforcement" },
      { value: "<3s", label: "Cross-Chain Settlement" },
      { value: "99.97%", label: "Metadata Availability" },
    ],
  },
  {
    id: "dual-token-economy",
    number: "04",
    title: "Sustainable Dual-Token Economy Engine",
    type: "client" as const,
    clientType: "Venture-Backed Platform",
    subtitle:
      "Machinations-validated tokenomics with burn mechanics, mission rewards, and Monte Carlo stress testing.",
    challenge:
      "A venture-backed gaming platform had raised $18M but their tokenomics model showed hyperinflationary collapse within 14 months under realistic player-growth scenarios. Investors demanded a redesigned economy that could sustain a 5-year horizon without relying on speculative inflows.",
    solution:
      "We designed a dual-token system: a stable utility token (soft currency) for daily gameplay and a governance/premium token with EIP-1559-style burn mechanics. A comprehensive sink/faucet framework — crafting costs, marketplace fees, cosmetic upgrades, repair mechanics — keeps the soft currency supply bounded. The entire model was simulated in Machinations with Monte Carlo stress testing across 10,000 scenarios covering bear markets, whale dumps, and viral growth spikes.",
    tags: ["Machinations", "EIP-1559", "Sink/Faucet", "Monte Carlo", "Dual-Token"],
    results: [
      { value: "5yr+", label: "Economy Viability" },
      { value: "10,000", label: "Scenarios Tested" },
      { value: "0.3%", label: "Monthly Inflation Cap" },
      { value: "68%", label: "Token Velocity Reduction" },
    ],
  },
  {
    id: "zk-anticheat",
    number: "05",
    title: "ZK-Verified Anti-Cheat for Competitive Esports",
    type: "capability" as const,
    clientType: "Technical Capability Demo",
    subtitle:
      "Zero-knowledge proof verification, commit-reveal mechanics, and TEE-attested game state for tournament integrity.",
    challenge:
      "Competitive esports with real-money prize pools face an existential integrity problem: server-side anti-cheat is opaque and disputed, client-side solutions are invasive and bypassable, and neither provides cryptographic proof that results are legitimate. Tournament organizers needed verifiable, tamper-proof match integrity.",
    solution:
      "We built a three-layer anti-cheat architecture: TEE/SGX enclaves run authoritative game simulations with hardware-attested integrity, commit-reveal mechanisms prevent information leakage during real-time play (player positions, hidden state), and ZK-SNARK proofs verify match outcomes without revealing proprietary game logic. The system produces a cryptographic proof chain for every competitive match — verifiable by anyone, exploitable by no one.",
    tags: ["ZK-SNARKs", "Commit-Reveal", "TEE/SGX", "Hardware Attestation", "Proof Chains"],
    results: [
      { value: "100%", label: "Verifiable Matches" },
      { value: "<50ms", label: "Proof Generation" },
      { value: "0", label: "False Positives" },
      { value: "3", label: "Tournament Integrations" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <>
      <ScrollReveal />
      <NavScrollEffect />
      <SmoothScroll />
      <Nav />

      {/* HERO */}
      <section className="cs-hero">
        <div className="hero-eyebrow">Portfolio &amp; Case Studies</div>
        <h1 className="reveal">
          Infrastructure That{" "}
          <span className="gradient-text">Delivers</span>
        </h1>
        <p className="reveal">
          Real engagements and capability demonstrations across sovereign chains,
          invisible onboarding, cross-chain commerce, sustainable economies, and
          cryptographic integrity.
        </p>
      </section>

      {/* OVERVIEW CARDS */}
      <div className="cs-grid">
        {caseStudies.map((cs) => (
          <a
            key={cs.id}
            href={`#${cs.id}`}
            className="cs-card reveal"
          >
            <div className="cs-card-header">
              <span className={`cs-badge ${cs.type}`}>
                {cs.type === "client" ? "Client Engagement" : "Capability Showcase"}
              </span>
            </div>
            <div className="cs-client-type">{cs.clientType}</div>
            <h3>{cs.title}</h3>
            <p>{cs.subtitle}</p>
            <div className="service-tags">
              {cs.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="service-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* DETAIL SECTIONS */}
      {caseStudies.map((cs) => (
        <section key={cs.id} id={cs.id} className="cs-detail">
          <div className="cs-detail-label reveal">Case Study {cs.number}</div>
          <div className="reveal" style={{ marginBottom: "0.5rem" }}>
            <span className={`cs-badge ${cs.type}`}>
              {cs.type === "client" ? "Client Engagement" : "Capability Showcase"}
            </span>
          </div>
          <h2 className="reveal">{cs.title}</h2>
          <div className="cs-client-type reveal">{cs.clientType}</div>

          <div className="cs-block challenge reveal">
            <h3>The Challenge</h3>
            <p>{cs.challenge}</p>
          </div>

          <div className="cs-block solution reveal">
            <h3>Our Solution</h3>
            <p>{cs.solution}</p>
          </div>

          <div className="service-tags reveal">
            {cs.tags.map((tag) => (
              <span key={tag} className="service-tag">{tag}</span>
            ))}
          </div>

          <div className="cs-results-grid reveal">
            {cs.results.map((r) => (
              <div key={r.label} className="cs-result">
                <div className="cs-result-value">{r.value}</div>
                <div className="cs-result-label">{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cs-cta">
        <div className="section-label reveal">Start a Conversation</div>
        <h2 className="reveal">
          Ready to Build Something{" "}
          <span
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Like This?
          </span>
        </h2>
        <p className="reveal">
          Whether you need sovereign infrastructure, invisible onboarding, or
          sustainable tokenomics &mdash; let&apos;s talk architecture.
        </p>
        <div className="hero-buttons reveal">
          <a href="mailto:hello@palindrome.one" className="btn-primary">
            Contact Us
          </a>
          <a href="/#services" className="btn-outline">
            Explore Services
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
