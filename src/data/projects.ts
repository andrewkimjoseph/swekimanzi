export const projects = [
  {
    id: "canvassing",
    name: "Canvassing",
    tagline: "Celo-native research marketplace — Insights + Intelligence wings.",
    description:
      "Umbrella platform connecting African researchers and founders with verified participants for surveys, product tests, and polls. Participants earn crypto rewards; researchers get structured feedback in 48–72 hours.",
    url: "https://thecanvassing.xyz",
    github: "https://github.com/andrewkimjoseph/canvassing",
    tags: ["Celo", "GoodDollar", "Next.js", "Flutter", "Vite"],
    assetId: "logo-canvassing",
    featured: true,
  },
  {
    id: "pax",
    name: "Pax",
    tagline: "Flutter participant app — micro-tasks, smart accounts, G$ rewards.",
    description:
      "Mobile app for verified participants. Task types include surveys and app checkouts. V2 Pax Wallet with ERC-4337 smart accounts, Google Drive key backup, and gas-sponsored claims.",
    url: "https://thepax.app",
    github: "https://github.com/andrewkimjoseph/pax_v2",
    tags: ["Flutter", "Dart", "Firebase", "ERC-4337", "Riverpod"],
    assetId: "logo-pax",
    featured: true,
  },
  {
    id: "rez",
    name: "Rez",
    tagline: "Next.js researcher dashboard — task creation, completions, poll insights.",
    description:
      "Dashboard for researchers to create and publish tasks, track completions, and view poll insights backed by Supabase. Admin panel for tasks, participants, and org onboarding.",
    url: "https://rez.thecanvassing.xyz",
    github: "https://github.com/andrewkimjoseph/rez",
    tags: ["Next.js", "TypeScript", "Firebase", "Supabase", "Tailwind"],
    assetId: "logo-rez",
    featured: true,
  },
  {
    id: "celina",
    name: "Celina",
    tagline: "Celo SDK + MCP — give your LLM a wallet on Celo.",
    description:
      "Solo-built agent stack: TypeScript SDK, stdio MCP server (54 tools), hosted read-only MCP at mcp.usecelina.xyz, marketing site, and docs. Covers Mento FX, Uniswap v4, Aave, GoodDollar UBI, governance, and Self Agent ID.",
    url: "https://usecelina.xyz",
    github: "https://github.com/andrewkimjoseph/celina",
    tags: ["TypeScript", "MCP", "viem", "npm", "DeFi"],
    assetId: "logo-celina",
    featured: true,
  },
  {
    id: "celeste",
    name: "Celeste",
    tagline: "Wallet-signed DeFAI chat built on Celina SDK.",
    description:
      "Reference browser app for Celina — chat UI with wagmi wallet signing, balance reads, swaps, Aave, and GoodDollar UBI. Registered as EIP-8004 agent on Celo.",
    url: "https://celeste.usecelina.xyz",
    github: "https://github.com/andrewkimjoseph/celeste-ai",
    tags: ["Next.js", "AI SDK", "wagmi", "Celina SDK"],
    assetId: "logo-celeste",
    featured: true,
  },
  {
    id: "goclaim",
    name: "GoClaim",
    tagline: "Autopilot GoodDollar UBI via ERC-4337 smart account.",
    description:
      "dApp that claims daily GoodDollar UBI automatically at 12:00 UTC and sends G$ to the user's root wallet. One-time GoodDollar identity link, then hands-free earning.",
    url: "https://app.goclaim.xyz",
    github: "https://github.com/andrewkimjoseph/goclaim-app",
    tags: ["Next.js", "ERC-4337", "GoodDollar", "Neon", "BullMQ"],
    assetId: "logo-goclaim",
    featured: true,
  },
  {
    id: "good-pax-app",
    name: "Good Pax App",
    tagline: "Farcaster MiniApp — GoodDollar UBI meets Pax discovery.",
    description:
      "Social-native onboarding hub connecting GoodDollar identity and Pax participant tasks. Built for Farcaster MiniApp distribution.",
    url: "https://thecanvassing.xyz",
    github: "https://github.com/andrewkimjoseph/canvassing",
    tags: ["Farcaster", "MiniApp", "GoodDollar", "React"],
    assetId: "logo-goodpax",
    featured: false,
  },
];

export type Project = (typeof projects)[number];
