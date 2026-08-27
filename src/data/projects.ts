export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
  assetId: string;
  featured: boolean;
  role: string;
  year: string;
  problem: string;
  built: string[];
  technical: string[];
  related: string[];
};

export const projects: Project[] = [
  {
    id: "canvassing",
    name: "Canvassing",
    tagline: "Celo-native research marketplace — Insights + Intelligence wings.",
    description:
      "Umbrella platform connecting African researchers and founders with verified participants for surveys, product tests, and polls. Participants earn crypto rewards; researchers get structured feedback in 48–72 hours.",
    url: "https://thecanvassing.xyz",
    github: "https://github.com/orgs/thecanvassing",
    tags: ["Celo", "GoodDollar", "Next.js", "Flutter", "Vite"],
    assetId: "logo-canvassing",
    featured: true,
    role: "Co-founder & technical lead",
    year: "2024 – present",
    problem:
      "African founders need fast, affordable product validation, and participants need a dignified way to earn from that work. Typical research ops are slow, expensive, and pay in cash rails that stall in emerging markets.",
    built: [
      "A two-sided marketplace: Rez for researchers, Pax for verified participants, plus public poll insights on the marketing site.",
      "GoodDollar (G$) as the default reward currency, with stablecoin payouts and instant withdrawals via MiniPay / GoodWallet.",
      "On-chain stats, a G$→USDm quote API, and lead funnels that turn inbound research demand into booked studies.",
      "Adjacent products under the same umbrella — GoClaim, The Good Pax App, and Celina as the Intelligence wing.",
    ],
    technical: [
      "Marketing site on Vite + React with prerendered SEO routes for public poll pages, Firebase + Supabase for insights, and Cloudflare Workers for reserve quotes.",
      "Dual-Firestore architecture: Rez writes tasks into the Pax store; researchers read completions filtered by their org.",
      "Celo smart-contract stack for gas sponsorship, wallet registry, task management, and cryptographic reward verification.",
      "Born at Build with Celo 7 (2024); supported by Prezenti grants.",
    ],
    related: ["pax", "rez", "good-pax-app"],
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
    role: "Co-founder — mobile, wallet, and contracts",
    year: "2024 – present",
    problem:
      "Participants in emerging markets cannot be asked to hold native gas, manage seed phrases, or wait days for a payout. The earning surface has to feel like a normal app.",
    built: [
      "A Flutter iOS/Android app for browsing and completing surveys, app tests, and polls — with achievements, referrals, and push notifications.",
      "V2 Pax Wallet: user-owned ERC-4337 smart accounts, Google Drive key backup, and gas-sponsored claims.",
      "Multi-token rewards (G$, cUSD, USDT, USDC) with MiniPay support and instant withdrawals.",
      "GoodDollar identity verification so tasks go to real humans, not farms.",
    ],
    technical: [
      "Flutter + Riverpod + GoRouter, Firebase Auth/Functions, and in-app WebViews for task completion.",
      "Solidity/Hardhat on Celo: PaxAccountV1, TaskManager V1–V3, plus Canvassing V2 contracts (gas sponsor, rewarder, task manager, wallet registry).",
      "Pimlico bundler + Privy server wallets for account abstraction; UUPS upgradeable contracts with a Hardhat test suite.",
      "Monorepo: Flutter app, Firebase Functions, Hardhat, and operational scripts for upgrades and token distribution.",
    ],
    related: ["canvassing", "rez", "good-pax-app"],
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
    role: "Co-founder — researcher product",
    year: "2024 – present",
    problem:
      "Researchers and founders needed a way to launch studies, watch completions land, and read poll results without operating Pax themselves or waiting weeks for a field agency.",
    built: [
      "Google-auth dashboard where Task Masters join an org, then create surveys, app tests, and polls from a multi-step wizard.",
      "Completion tracking with demographics and rewards flowing from Pax in near-real time.",
      "Poll insights synced to Supabase and published on the public Canvassing insights site.",
      "Admin surface for tasks, participants, and org onboarding.",
    ],
    technical: [
      "Next.js 15 App Router, React 19, Tailwind 4, shadcn/ui — deployed on Vercel.",
      "Dual Firebase Admin (Rez + Pax Firestores): Rez writes tasks that Pax participants pick up.",
      "Supabase for aggregated poll insights; Algolia, Amplitude, Sentry, Resend, and Recharts around the edges.",
      "Task types: fill-a-form, check-out-app, answer-poll, with video interviews planned.",
    ],
    related: ["canvassing", "pax"],
  },
  {
    id: "celina",
    name: "Celina",
    tagline: "Celo SDK + MCP — give your LLM a wallet on Celo.",
    description:
      "Solo-built agent stack: TypeScript SDK, stdio MCP server (87 tools), hosted read-only MCP at mcp.usecelina.xyz (48 tools), marketing site, and docs. Covers Mento FX, Uniswap v4, Aave, GoodDollar UBI, governance, and Self Agent ID.",
    url: "https://usecelina.xyz",
    github: "https://github.com/andrewkimjoseph/celina",
    tags: ["TypeScript", "MCP", "viem", "npm", "DeFi"],
    assetId: "logo-celina",
    featured: true,
    role: "Creator — solo-built",
    year: "2026 – present",
    problem:
      "AI agents that need Celo cannot be handed a pile of ABIs. Reads, unsigned prepares, and executes have to share one catalog so MCP, REST, hosted HTTP, and browser apps do not drift.",
    built: [
      "A TypeScript SDK (`@andrewkimjoseph/celina-sdk`) whose Zod-typed tool catalog powers every surface.",
      "Local stdio MCP (`celina-mcp`, 87 tools) for Cursor, Claude Desktop, and LM Studio — writes stay on the machine with env keys.",
      "Hosted read-only MCP at mcp.usecelina.xyz (48 tools), a public REST API, a Telegram bot, docs, and a live stats dashboard.",
      "Celeste as the wallet-signed reference app, plus ERC-8021 attribution on prepared transactions.",
    ],
    technical: [
      "One catalog, four surfaces: `filterToolDefinitions({ surface: \"mcp\" | \"browser\" })` keeps schemas in sync.",
      "Serialized prepared flows with sign-time simulation so agents dry-run before broadcast; hosted endpoints never hold keys.",
      "Celo-native depth: Mento FX, GoodDollar reserve (G$ ↔ USDm), Uniswap v4, Aave V3, governance, staking, Self Agent ID, AgentKarma.",
      "MIT-licensed meta-repo of seven packages, published on npm, with GitBook docs and EIP-8004 / OASF agent discovery.",
    ],
    related: ["celeste", "canvassing"],
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
    role: "Creator — reference DeFAI app",
    year: "2026 – present",
    problem:
      "Celina’s SDK needed a user-facing proof that agents can transact without a server key: the human signs, the model only prepares.",
    built: [
      "A chat UI on Celo mainnet: balances, sends, swaps, Aave supply/withdraw, and GoodDollar UBI — you confirm in-wallet.",
      "Composite swap routing that quotes Mento FX, GoodDollar reserve, and Uniswap v4 in parallel and picks the better output.",
      "TxConfirmCard simulation before broadcast, plus MiniPay / CIP-64 fee-currency support.",
      "EIP-8004 agent manifest at celeste.usecelina.xyz/agent.json.",
    ],
    technical: [
      "Next.js + Vercel AI SDK + OpenRouter, wagmi + RainbowKit, Dexie for local chat history.",
      "Uses `@andrewkimjoseph/celina-sdk` with `surface: \"browser\"` — no MCP, no `CELO_PRIVATE_KEY`.",
      "Dual on-chain attribution: legacy UTF-8 suffix plus ERC-8021 `toDataSuffix` codes.",
      "Independent of Celina MCP: same catalog, different host, wallet-native signing.",
    ],
    related: ["celina"],
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
    role: "Creator",
    year: "2025 – present",
    problem:
      "Daily GoodDollar UBI is easy to miss. People who already passed face verification still have to show up every day, pay gas, and remember the claim window.",
    built: [
      "SIWE login, then a one-time GoodDollar identity link from a GoClaim ERC-4337 account to the user’s root wallet.",
      "A daily cron that claims UBI at 12:00 UTC (3:00 PM EAT) and forwards G$ to the root wallet.",
      "Marketing site at goclaim.xyz and the dApp at app.goclaim.xyz.",
      "Hands-free earning after the identity link — no daily tap required.",
    ],
    technical: [
      "Next.js on Vercel, Prisma + Neon Postgres, BullMQ on Upstash Redis, Railway cron worker (`0 12 * * *` UTC).",
      "Pimlico ERC-4337 bundler; AES-256-GCM encryption for custodial GoClaim account keys.",
      "Wave enqueue + drain worker so the job queue is not a 24/7 idle poller.",
      "On-chain GOCLAIM attribution tags in calldata.",
    ],
    related: ["good-pax-app", "celina"],
  },
  {
    id: "good-pax-app",
    name: "Good Pax App",
    tagline: "Web3 onboarding app — GoodDollar UBI meets Pax discovery.",
    description:
      "Social-native onboarding hub connecting GoodDollar identity and Pax participant tasks. Built as a standard web3 web app, also distributed as a Farcaster MiniApp.",
    url: "https://thegoodpax.app",
    github: "https://github.com/andrewkimjoseph/the-good-pax-app",
    tags: ["Web3", "Farcaster", "MiniApp", "GoodDollar", "React"],
    assetId: "logo-goodpax",
    featured: false,
    role: "Creator",
    year: "2025 – present",
    problem:
      "GoodDollar claimants and Pax participants lived in separate funnels. New users needed one place to verify, claim daily UBI, and discover paid micro-tasks.",
    built: [
      "A dApp where verified humans claim daily G$, discover Pax tasks, and swap G$ for other tokens.",
      "GoodDollar face verification so one person maps to one account.",
      "Distribution as a standard web3 app and as a Farcaster MiniApp.",
      "Wallet support for MetaMask, WalletConnect, Valora, Rabby, and injected wallets.",
    ],
    technical: [
      "Next.js, Wagmi/RainbowKit, GoodDollar SDKs, and Celina SDK for chain reads and quotes.",
      "PostHog, Sentry, BlockScout tx notifications, and ad-click attribution (fbclid).",
      "Engagement-reward route gated on Pax Firestore eligibility.",
      "On-chain thegoodpax attribution tags in calldata.",
    ],
    related: ["pax", "canvassing", "goclaim"],
  },
  {
    id: "partify",
    name: "Partify",
    tagline: "Flutter campus party marketplace — host, book, get paid.",
    description:
      "Sole-built end-to-end: Flutter consumer app for iOS and Android, Stripe Connect marketplace payments with scheduled host payouts, Firebase Cloud Functions backend, Stream Chat plus custom audio messaging, Branch deep links, and internal manager tooling. Shipped to v1.6.7.",
    tags: ["Flutter", "Stripe Connect", "Firebase", "Stream Chat", "Branch"],
    assetId: "logo-partify",
    featured: false,
    role: "Founding engineer — sole-built",
    year: "2023 – 2024",
    problem:
      "Campus hosts needed a way to list parties, take bookings, and get paid without stitching together chat, payments, and ops tools by hand.",
    built: [
      "A Flutter consumer app for iOS and Android — host, book, and get paid.",
      "Stripe Connect marketplace payments with scheduled host payouts.",
      "Real-time chat (Stream) plus custom audio messaging.",
      "Branch deep links and internal manager tooling. Shipped to v1.6.7.",
    ],
    technical: [
      "Flutter client with Firebase Cloud Functions as the backend.",
      "Stripe Connect for marketplace splits and scheduled payouts.",
      "Stream Chat for realtime messaging; custom audio notes on top.",
      "Branch.io for deferred deep linking into listings and invites.",
    ],
    related: [],
  },
  {
    id: "days-to-go",
    name: "Days To Go",
    tagline: "Playful brutalist countdown timers — local-first, no account.",
    description:
      "A playful, brutalist countdown timer web app. Run as many clocks as you like — a quick 3-second timer or a date years out — ticking down to the second, with a burst of confetti and a chime when the timer hits zero. Local-first: your timers live in your browser, so there's no account and no server to trust. Put a clock on it.",
    url: "https://app.daystogo.xyz",
    github: "https://github.com/andrewkimjoseph",
    tags: ["TanStack Start", "React 19", "Tailwind v4", "Dexie", "TypeScript"],
    assetId: "logo-daystogo",
    featured: false,
    role: "Creator",
    year: "2026",
    problem:
      "Most countdown apps want an account, round away the seconds, or look like a productivity SaaS. I wanted clocks that tick to the second, live only on the device, and feel like an object — not a dashboard.",
    built: [
      "Duration timers (capped at 24 hours) and date-time countdowns with no ceiling — seconds out to years — sharing one live clock.",
      "Confetti and a chime at zero, categories and filters, inline rename/color/category edits, and a calendar of marked days.",
      "A custom brutalist date/time picker (no native browser pickers) and a mute toggle that keeps the confetti.",
      "Local-first persistence: timers live in the browser. No account, no cloud, no server to trust.",
    ],
    technical: [
      "TanStack Start v1 (React 19, SSR) with TanStack Router, Tailwind v4, TypeScript.",
      "Dexie + IndexedDB for local-first storage; date-fns for labels that include seconds.",
      "canvas-confetti for the lapse celebration; view transitions between routes and picker panes.",
      "Playful brutalist design: cream base, thick borders, hard offset shadows, punchy palette.",
    ],
    related: [],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getRelatedProjects(project: Project): Project[] {
  return project.related
    .map(getProject)
    .filter((p): p is Project => Boolean(p));
}
