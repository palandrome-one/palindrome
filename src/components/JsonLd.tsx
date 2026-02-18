export function JsonLd() {
  const orgId = "https://www.palindrome.one/#organization";
  const siteId = "https://www.palindrome.one/#website";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: "Palindrome Blockchain Consultancy",
    url: "https://www.palindrome.one",
    description:
      "Institutional-grade blockchain gaming infrastructure — sovereign chains, gasless execution, anti-cheat integrity, tokenomics engineering, and autonomous worlds.",
    founder: {
      "@type": "Person",
      name: "William Mallett",
      jobTitle: "Founder & Principal",
      description:
        "Systems architect with deep roots in blockchain infrastructure and game economy design.",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@palindrome.one",
      contactType: "business inquiries",
    },
    knowsAbout: [
      "Blockchain Gaming Infrastructure",
      "Layer 3 App-Chains",
      "Arbitrum Orbit",
      "Polygon CDK",
      "Account Abstraction (ERC-4337)",
      "Token-Bound Accounts (ERC-6551)",
      "Tokenomics Design",
      "Anti-Cheat Systems",
      "Zero-Knowledge Proofs",
      "Cross-Chain Marketplaces",
      "DAO Governance",
      "Unity Blockchain Integration",
      "Unreal Engine Blockchain Integration",
      "Autonomous Worlds",
      "On-Chain AI Agents",
      "Spatial Computing",
      "Geo-Anchored NFTs",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId,
    url: "https://www.palindrome.one",
    name: "Palindrome Blockchain Consultancy",
    publisher: { "@id": orgId },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.palindrome.one/#service",
    name: "Palindrome Blockchain Consultancy",
    url: "https://www.palindrome.one",
    provider: { "@id": orgId },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Blockchain Gaming Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App-Chain & L3 Infrastructure",
            description:
              "Custom Layer 3 gaming chain deployment with gasless transaction environments and modular execution architectures for sovereign throughput.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wallet & Onboarding Systems",
            description:
              "Invisible Web3 UX through smart contract wallets, social login abstraction, session keys, and ERC-6551 Token-Bound Accounts for character inventories.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Unity & Unreal Integration",
            description:
              "Middleware bridging game engines and blockchains — hybrid on-chain/off-chain state architectures, deterministic simulation, and ownership validation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Multi-Chain Marketplaces",
            description:
              "Cross-chain trading infrastructure with ERC-1155/721 licensing, decentralized storage, and in-game/external marketplace interoperability across 30+ networks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tokenomics & Economic Engines",
            description:
              "Sustainable faucet-and-sink economies with burn mechanisms, mission-based rewards, DAO governance, and simulation stress-testing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anti-Cheat & Integrity Systems",
            description:
              "Blockchain-native trust infrastructure: on-chain state auditing, ZK-proof verification, commit-reveal mechanisms, and tokenized cross-game reputation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agents & Autonomous Worlds",
            description:
              "Persistent on-chain AI actors with verifiable memory, autonomous economic agents, AI-driven world balancing, and governance-aware behavior systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spatial Computing & Geo-Assets",
            description:
              "VPS-integrated blockchain applications with geo-anchored NFTs, AR-ready ownership systems, and real-world/virtual synchronization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Governance, DAOs & Dispute Resolution",
            description:
              "Long-lived self-governing systems with circuit breakers, decentralized arbitration, smart contract upgrade management, and legal-aware tooling.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
}
