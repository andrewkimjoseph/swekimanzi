# Andrew Kim Joseph — Personal Website

A brutalist dark-mode personal website for **Andrew Kim Joseph**, a Celo ecosystem founder, builder, and community lead. The site showcases his work across research marketplaces, AI agent infrastructure, and open-source communities in Africa.

**Live URL:** [https://swekimanzi.lovable.app](https://swekimanzi.lovable.app)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design System](#design-system)
- [SEO & Social Meta](#seo--social-meta)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About the Project

This is a content-forward portfolio and personal brand site built with **TanStack Start**. It replaces placeholder content with real project data, social links, and an aggressive brutalist visual style.

The site tells the story of three pillars:

1. **Canvassing** — A Celo-native research marketplace connecting African researchers with verified participants. Participants earn **GoodDollar (G$)** rewards through **Pax**; researchers run studies via **Rez**.
2. **Celina** — A solo-built Celo agent stack: TypeScript SDK, MCP server, hosted endpoint, and **Celeste** wallet chat. 54 tools for DeFi, governance, GoodDollar UBI, and on-chain reads.
3. **Salamander Tech Hub** — A Kenyan open-source tech hub co-founded by Andrew. Organized **Wajenzi Hack 1.0**, runs community programs, and supports builders across Kenya.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR/SSG, file-based routing) |
| Build Tool | [Vite 8](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with native CSS `@theme` tokens |
| Animation | [Motion](https://motion.dev) (formerly Framer Motion) |
| State / Data | [TanStack Query](https://tanstack.com/query) |
| UI Primitives | [Radix UI](https://www.radix-ui.com) primitives |
| Icons | [Lucide React](https://lucide.dev) |
| Validation | [Zod](https://zod.dev) |
| Package Manager | [Bun](https://bun.sh) |

---

## Features

- **Homepage** — Hero intro, animated tagline, three pillar cards, featured projects, stack marquee, and ecosystem badges.
- **Work page** — Full project grid with links to live sites and GitHub repos.
- **About page** — Founder story, experience timeline, education, and highlights.
- **Contact page** — Email CTA and outbound social/project links.
- **Brutalist design** — Hard 2px borders, offset block shadows, uppercase display type, zero border radius.
- **Accessible motion** — Respects `prefers-reduced-motion` throughout.
- **SEO-ready** — Per-route `<head>` metadata, Open Graph, Twitter Cards, canonical links, and sitemap.

---

## Project Structure

```text
.
├── public/                     # Static assets (favicon, logo, robots.txt)
├── src/
│   ├── assets/                 # CDN-backed image asset manifests
│   ├── components/             # Reusable React components
│   │   ├── PlaceholderImage.tsx
│   │   ├── Reveal.tsx
│   │   ├── StackMarquee.tsx
│   │   └── TypingTagline.tsx
│   ├── data/                   # Static data
│   │   ├── projects.ts
│   │   └── social.ts
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions and error reporting
│   ├── routes/                 # TanStack Start file-based routes
│   │   ├── __root.tsx          # Root layout, header, footer, SEO shell
│   │   ├── index.tsx           # Homepage
│   │   ├── work.tsx            # Work / projects page
│   │   ├── about.tsx           # About page
│   │   ├── contact.tsx         # Contact page
│   │   └── sitemap[.]xml.ts    # Dynamic sitemap route
│   ├── router.tsx              # Router configuration
│   ├── server.ts               # Server entry configuration
│   ├── start.ts                # Start / middleware configuration
│   └── styles.css              # Tailwind v4 theme and custom utilities
├── .lovable/                   # Lovable project metadata
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+ with `npm`

### Install dependencies

```bash
bun install
```

### Run the development server

```bash
bun dev
```

The dev server starts at `http://localhost:8080` by default.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start the Vite development server |
| `bun build` | Build for production |
| `bun build:dev` | Build in development mode |
| `bun preview` | Preview the production build locally |
| `bun lint` | Run ESLint |
| `bun format` | Format all files with Prettier |

---

## Design System

The site uses a semantic, brutalist dark palette defined in `src/styles.css`.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#0c0c18` | Page background |
| `--color-foreground` | `#c8beff` | Primary text / borders |
| `--color-primary` | `#8806ff` | Selection, accents |
| `--color-accent` | `#a8baff` | Muted text, links |
| `--color-secondary-accent` | `#b9f0d7` | Secondary accent |
| `--color-muted` | `#1a1a33` | Muted surfaces |
| `--color-surface` / `--color-card` | `#14142a` | Cards and panels |
| `--font-display` | `Bricolage Grotesque` | Headings, labels, buttons |
| `--font-sans` | `Hanken Grotesk` | Body text |

Key visual rules:

- 2px solid borders in `--color-foreground`.
- Zero border radius (`--radius-brutal: 0px`).
- Hard offset shadows (`--shadow-brutal`, `--shadow-brutal-lg`).
- Uppercase display type with wide tracking for labels.

---

## SEO & Social Meta

- Each route defines its own `head()` with unique title, description, Open Graph, and canonical tags.
- Root meta includes global Twitter card and social image defaults.
- `src/routes/sitemap[.]xml.ts` generates a dynamic sitemap.
- `public/robots.txt` allows all crawlers.

---

## Deployment

This project is configured for deployment on **Lovable Cloud** / **Cloudflare Workers** via TanStack Start. Production builds are produced with:

```bash
bun build
```

The published site is served at:

```text
https://swekimanzi.lovable.app
```

---

## Contact

- **Email:** [andrewkimjoseph@gmail.com](mailto:andrewkimjoseph@gmail.com)
- **GitHub:** [@andrewkimjoseph](https://github.com/andrewkimjoseph)
- **LinkedIn:** [andrew-kim-joseph](https://www.linkedin.com/in/andrew-kim-joseph/)
- **X:** [@andrewkimjoseph](https://x.com/andrewkimjoseph)
- **Website:** [https://swekimanzi.lovable.app](https://swekimanzi.lovable.app)

---

Built with [Lovable](https://lovable.dev) on TanStack Start.