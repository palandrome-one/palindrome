import Particles from "@/components/Particles";
import ScrollReveal from "@/components/ScrollReveal";
import NavScrollEffect from "@/components/NavScrollEffect";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "\u26D3",
    title: "App-Chain & L3 Infrastructure",
    desc: "Custom Layer 3 gaming chain deployment with gasless transaction environments and modular execution architectures for sovereign throughput.",
    tags: ["Arbitrum Orbit", "Polygon CDK", "ZK Stack", "ERC-4337"],
  },
  {
    icon: "\uD83D\uDD11",
    title: "Wallet & Onboarding Systems",
    desc: "Invisible Web3 UX through smart contract wallets, social login abstraction, session keys, and ERC-6551 Token-Bound Accounts for character inventories.",
    tags: ["Account Abstraction", "Social Auth", "ERC-6551"],
  },
  {
    icon: "\uD83C\uDFAE",
    title: "Unity & Unreal Integration",
    desc: "Middleware bridging game engines and blockchains \u2014 hybrid on-chain/off-chain state architectures, deterministic simulation, and ownership validation.",
    tags: ["Unity SDK", "Unreal Blueprints", "State Sync"],
  },
  {
    icon: "\uD83C\uDFEA",
    title: "Multi-Chain Marketplaces",
    desc: "Cross-chain trading infrastructure with ERC-1155/721 licensing, decentralized storage, and in-game/external marketplace interoperability across 30+ networks.",
    tags: ["Cross-Chain", "IPFS / Filecoin", "Royalties"],
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Tokenomics & Economic Engines",
    desc: "Sustainable faucet-and-sink economies with burn mechanisms, mission-based rewards, DAO governance, and simulation stress-testing \u2014 not ponzinomics.",
    tags: ["Dual-Token", "Sink/Faucet", "Machinations"],
  },
  {
    icon: "\uD83D\uDEE1",
    title: "Anti-Cheat & Integrity Systems",
    desc: "Blockchain-native trust infrastructure: on-chain state auditing, ZK-proof verification, commit-reveal mechanisms, and tokenized cross-game reputation.",
    tags: ["ZK-Proofs", "TEE / SGX", "Fair Sequencing"],
  },
  {
    icon: "\uD83E\uDD16",
    title: "AI Agents & Autonomous Worlds",
    desc: "Persistent on-chain AI actors with verifiable memory, autonomous economic agents, AI-driven world balancing, and governance-aware behavior systems.",
    tags: ["On-Chain NPCs", "AI vs AI", "World Vitality"],
  },
  {
    icon: "\uD83C\uDF10",
    title: "Spatial Computing & Geo-Assets",
    desc: "VPS-integrated blockchain applications with geo-anchored NFTs, AR-ready ownership systems, and real-world/virtual synchronization using centimeter-level accuracy.",
    tags: ["VPS / 6DoF", "Geo-NFTs", "GeoAI Trust"],
  },
  {
    icon: "\u2696",
    title: "Governance, DAOs & Dispute Resolution",
    desc: "Long-lived self-governing systems with circuit breakers, decentralized arbitration (Kleros), smart contract upgrade management, and legal-aware tooling.",
    tags: ["ERC-7265", "Kleros", "Multi-Sig"],
  },
];

const stackLayers = [
  {
    number: "Layer 01",
    name: "Infrastructure",
    desc: "High-throughput L3 app-chains providing dedicated environments with low-cost gasless execution, separating gaming traffic from general-purpose DeFi.",
    techs: ["Arbitrum Orbit", "Polygon CDK", "AnyTrust DAC", "Custom Gas Tokens"],
  },
  {
    number: "Layer 02",
    name: "Onboarding",
    desc: "Progressive acquisition through ERC-4337 smart accounts, social authentication, and ERC-6551 Token-Bound Accounts for complex inventories.",
    techs: ["ERC-4337", "Bundlers", "Session Keys", "Social Login"],
  },
  {
    number: "Layer 03",
    name: "Application",
    desc: "Unity and Unreal SDKs bridging game logic with blockchain \u2014 real-time state sync, ownership validation, and deterministic simulation.",
    techs: ["Unity SDK", "Unreal Blueprints", "Photon / Mirror", "SoftFloat"],
  },
  {
    number: "Layer 04",
    name: "Economic",
    desc: "Dual-token systems with robust sink/faucet mechanisms inspired by two-decade economies like Eve Online \u2014 designed to survive years, not months.",
    techs: ["Burn Mechanisms", "EIP-1559", "Mission Systems", "Machinations"],
  },
  {
    number: "Layer 05",
    name: "Social",
    desc: "Decentralized messaging and on-chain guild protocols facilitating community interaction, portable identity, and Soulbound reputation credentials.",
    techs: ["Matrix", "XMTP", "Soulbound Tokens", "Guild Protocol"],
  },
  {
    number: "Layer 06",
    name: "Governance",
    desc: "DAOs and decentralized justice managing upgrades, circuit-breaker security patches, and ownership disputes through game-theoretic arbitration.",
    techs: ["ERC-7265", "Kleros", "Guardrail", "Time-Locked Gov"],
  },
];

const advisoryCards = [
  {
    title: "Architecture & Feasibility",
    desc: "End-to-end technical architecture, chain selection, scalability strategy, and build-vs-buy analysis for studios pre-funding or publishers planning Web3 pivots.",
  },
  {
    title: "Tokenomics & Sustainability",
    desc: "Token supply and emission models, long-term sustainability projections, sink/faucet equilibrium analysis, and player incentive alignment designed to survive at scale.",
  },
  {
    title: "Regulatory & Compliance",
    desc: "KYC/AML architecture, geofencing strategies, privacy-preserving identity systems, cross-border compliance design, and jurisdictional risk exposure mapping.",
  },
  {
    title: "Anti-Cheat Strategy",
    desc: "Threat modeling, exploit analysis, on-chain vs off-chain trade-off studies, hybrid integrity architectures, and governance-based enforcement models.",
  },
  {
    title: "Creator Economy & Marketplaces",
    desc: "Modding as a profession, programmable royalty enforcement, creator monetization systems, ERC-1155 licensing frameworks, and curation DAO design.",
  },
  {
    title: "Investor Due Diligence",
    desc: "Smart contract audits, economic exploit risk analysis, governance failure modeling, and sustainability red-flag assessment for funds and acquirers.",
  },
];

const stats = [
  { number: "$314B", label: "Gaming Market by 2030" },
  { number: "70.3%", label: "Blockchain Gaming CAGR" },
  { number: "$124.6B", label: "Blockchain Market 2025" },
  { number: "59M+", label: "ERC-4337 Bundles in 2024" },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <NavScrollEffect />
      <SmoothScroll />

      <Nav />

      {/* HERO */}
      <section className="hero">
        <Particles />
        <div className="hex-grid" />

        <div className="hero-content">
          <div className="hero-eyebrow">Infrastructure &middot; Governance &middot; Sustainability</div>
          <h1>
            Institutional-Grade<br />
            <span className="gradient-text">Blockchain Gaming</span><br />
            Infrastructure
          </h1>
          <p className="hero-sub">
            We architect the systems that power sovereign digital economies &mdash; from Layer 3
            app-chains and gasless execution to anti-cheat integrity and autonomous worlds.
          </p>
          <div className="hero-buttons">
            <a href="/#services" className="btn-primary">Explore Services</a>
            <a href="/#advisory" className="btn-outline">Advisory &amp; Strategy</a>
          </div>
        </div>

        <div className="scroll-indicator"><span /></div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-label reveal">Software Development</div>
        <h2 className="section-title reveal">
          Build-and-Deliver<br />Engineering Services
        </h2>
        <p className="section-desc reveal">
          Fixed-scope projects, phased engagements, or retained development. Each service maps
          directly to the capabilities studios, funds, and platforms demand.
        </p>

        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.title} className="service-card reveal">
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="stack-section">
        <div className="stack-inner">
          <div className="section-label reveal">Architecture</div>
          <h2 className="section-title reveal">The Unified Tech Stack</h2>
          <p className="section-desc reveal">
            A six-layer architecture addressing the entire lifecycle of blockchain gaming
            applications &mdash; from first click to long-term economic sustainability.
          </p>

          <div className="stack-layers">
            {stackLayers.map((layer) => (
              <div key={layer.name} className="stack-layer reveal">
                <div>
                  <div className="layer-number">{layer.number}</div>
                  <div className="layer-name">{layer.name}</div>
                </div>
                <div>
                  <div className="layer-desc">{layer.desc}</div>
                  <div className="layer-techs">
                    {layer.techs.map((tech) => (
                      <span key={tech} className="layer-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY */}
      <section id="advisory" className="section">
        <div className="section-label reveal">Consultancy</div>
        <h2 className="section-title reveal">Strategy &amp; Advisory</h2>
        <p className="section-desc reveal">
          High-margin, strategy-first engagements that naturally precede development. Architecture,
          economics, compliance, and due diligence &mdash; before a single line of code.
        </p>

        <div className="advisory-grid">
          {advisoryCards.map((card) => (
            <div key={card.title} className="advisory-card reveal">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section id="approach" className="diff-section">
        <div className="diff-inner">
          <div className="section-label reveal">Our Positioning</div>
          <h2 className="section-title reveal">Not Hype. Infrastructure.</h2>
          <p className="section-desc reveal" style={{ margin: "0 auto 0" }}>
            We build systems designed for digital sovereignty &mdash; long-lived, self-governing,
            economically sustainable. We serve serious buyers: studios, funds, platforms, and
            governments.
          </p>

          <div className="diff-columns">
            <div className="diff-col not reveal">
              <h3>Not What We Do</h3>
              <div className="diff-item"><span className="icon">{"\u2715"}</span> NFT minting services</div>
              <div className="diff-item"><span className="icon">{"\u2715"}</span> Play-to-Earn ponzinomics</div>
              <div className="diff-item"><span className="icon">{"\u2715"}</span> Meme token launches</div>
              <div className="diff-item"><span className="icon">{"\u2715"}</span> Speculative asset hype</div>
              <div className="diff-item"><span className="icon">{"\u2715"}</span> Generic Web3 landing pages</div>
            </div>
            <div className="diff-col yes reveal">
              <h3>What We Deliver</h3>
              <div className="diff-item"><span className="icon">{"\u25C6"}</span> Sovereign gaming infrastructure</div>
              <div className="diff-item"><span className="icon">{"\u25C6"}</span> Decentralized governance systems</div>
              <div className="diff-item"><span className="icon">{"\u25C6"}</span> Economic sustainability engineering</div>
              <div className="diff-item"><span className="icon">{"\u25C6"}</span> Long-lived digital economies</div>
              <div className="diff-item"><span className="icon">{"\u25C6"}</span> Institutional-grade architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-label reveal">Who We Are</div>
        <h2 className="section-title reveal">
          Built by Practitioners,<br />Not Pitchmen
        </h2>
        <p className="section-desc reveal">
          Palindrome was founded on a simple conviction: blockchain gaming needs engineers who&apos;ve
          actually shipped infrastructure, not consultants recycling pitch decks. We bring
          institutional-grade architecture thinking to studios, funds, and platforms building
          economies designed to last decades.
        </p>

        <div className="about-team">
          <div className="about-card reveal">
            <div className="about-avatar">WM</div>
            <h3>William Mallett</h3>
            <span className="about-role">Founder &amp; Principal</span>
            <p>
              Systems architect with deep roots in blockchain infrastructure and game economy
              design. William has led technical strategy for sovereign gaming chains, tokenomics
              audits, and cross-chain marketplace builds across enterprise and indie studios alike.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <div className="section-label reveal">Start a Conversation</div>
          <h2 className="reveal">
            Ready to Build Something<br />
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              That Lasts?
            </span>
          </h2>
          <p className="reveal">
            Whether you&apos;re a studio pre-funding, an investor doing technical diligence, or an
            enterprise planning a Web3 pivot &mdash; we&apos;d like to hear from you.
          </p>
          <div className="hero-buttons reveal">
            <a href="mailto:hello@palindrome.one" className="btn-primary">Contact Us</a>
            <a href="/#services" className="btn-outline">Review Services</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
