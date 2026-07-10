import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "../data/projects";
import { AvatarPlaceholder, PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";
import { TypingTagline } from "../components/TypingTagline";
import { StackMarquee } from "../components/StackMarquee";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PILLARS = [
  {
    id: "canvassing",
    title: "Canvassing",
    href: "https://thecanvassing.xyz",
    body: "A Celo-native research marketplace connecting African researchers with verified participants. Participants earn GoodDollar (G$) rewards through Pax (mobile app); researchers run studies via Rez (dashboard). Founded 2024 at Build with Celo 7.",
    asset: "logo-canvassing",
  },
  {
    id: "celina",
    title: "Celina",
    href: "https://usecelina.xyz",
    body: "A solo-built Celo agent stack — TypeScript SDK, MCP server, hosted endpoint, and Celeste wallet chat. 54 tools for DeFi, governance, GoodDollar UBI, and on-chain reads. Published on npm as @andrewkimjoseph/celina-sdk.",
    asset: "logo-celina",
  },
  {
    id: "salamander",
    title: "Salamander",
    href: "https://github.com/Salamander-Tech-Hub",
    body: "Kenyan open-source tech hub I co-founded — Build. Burn. Evolve. Organized Wajenzi Hack 1.0, runs community programs, and supports builders across Kenya. 500+ active members.",
    asset: "logo-salamander",
  },
];

const PARTNERS = [
  { id: "badge-celo", label: "Celo" },
  { id: "badge-gooddollar", label: "GoodDollar" },
  { id: "badge-prezenti", label: "Prezenti" },
  { id: "badge-bwc7", label: "Build with Celo 7" },
];

function HomePage() {
  const reduce = useReducedMotion();
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="py-8 flex flex-col gap-16">
      {/* HERO */}
      <section className="grid md:grid-cols-[260px_1fr] gap-8 md:items-stretch">
        <motion.div
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[280px] mx-auto md:mx-0 w-full"
        >
          <AvatarPlaceholder />
        </motion.div>
        <div className="flex flex-col gap-3 md:justify-between">
          <div className="flex flex-col gap-3">
            <motion.h1
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="font-display font-extrabold text-4xl md:text-[2.75rem] text-foreground leading-[1.05] tracking-tight"
            >
              Andrew Kim Joseph
            </motion.h1>
            <motion.p
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-lg text-foreground/85"
            >
              <TypingTagline />
            </motion.p>
            <motion.p
              initial={reduce ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base text-foreground/80 leading-relaxed"
            >
              I co-founded Canvassing, built Celina from scratch, and co-lead
              Salamander Tech Hub in Kenya.
            </motion.p>
          </div>
          <motion.div
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mt-1 md:mt-0"
          >
            <Link to="/work" className="btn-hero-primary">View work</Link>
            <Link to="/contact" className="btn-hero-tertiary">Get in touch</Link>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="flex flex-col gap-6">
        <span className="section-label-inverse w-fit">What I build</span>
        <div className="grid gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-muted block hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-transform"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-16 shrink-0">
                    <PlaceholderImage assetId={p.asset} label={p.title} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-extrabold text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{p.body}</p>
                    <p className="mt-3 font-display uppercase tracking-widest text-xs">Visit →</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="section-label-inverse w-fit">Selected work</span>
          <Link to="/work" className="font-display uppercase tracking-widest text-xs text-foreground/85 underline underline-offset-4">
            See all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card h-full"
              >
                <div className="w-12">
                  <PlaceholderImage assetId={p.assetId} label={p.name} />
                </div>
                <h3 className="font-display font-bold text-xl">{p.name}</h3>
                <p className="text-sm">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <p className="mt-auto pt-2 font-display uppercase tracking-widest text-xs">Visit →</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STACK MARQUEE */}
      <section className="flex flex-col gap-4">
        <span className="section-label-inverse w-fit">Stack</span>
        <div className="-mx-4">
          <StackMarquee />
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="flex flex-col gap-4">
        <span className="section-label-inverse w-fit">Ecosystem</span>
        <div className="card">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PARTNERS.map((p) => (
              <div key={p.id} className="w-full">
                <PlaceholderImage assetId={p.id} label={p.label} aspect="video" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            Supported by Prezenti grants. Default rewards in GoodDollar (G$).
            Building on Celo mainnet.
          </p>
        </div>
      </section>
    </div>
  );
}
