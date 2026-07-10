import { createFileRoute, Link } from "@tanstack/react-router";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Andrew Kim Joseph" },
      {
        name: "description",
        content:
          "Founder of Canvassing, creator of Celina, co-founder of Salamander Tech Hub. Building research marketplaces and AI agents on Celo.",
      },
      { property: "og:title", content: "About | Andrew Kim Joseph" },
      {
        property: "og:description",
        content: "Founder, builder, and community lead based in Kenya.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const EXPERIENCE = [
  { period: "2024 – present", role: "Founder & Builder", org: "Canvassing", desc: "[FILL: your one-liner]" },
  { period: "2026 – present", role: "Creator", org: "Celina", desc: "[FILL: your one-liner]" },
  { period: "[YEAR] – present", role: "Co-Founder & Technical Lead", org: "Salamander Tech Hub", desc: "[FILL: your one-liner]" },
  { period: "[YEAR] – [YEAR]", role: "[ROLE]", org: "[COMPANY]", desc: "[FILL: prior role]" },
  { period: "[YEAR] – [YEAR]", role: "[ROLE]", org: "[COMPANY]", desc: "[FILL: prior role]" },
];

const HIGHLIGHTS = [
  "Originated Canvassing at Build with Celo 7 (2024)",
  "Prezenti grant recipient",
  "Celina registered on 8004scan (agent #9263)",
  "8 published Celo Forum research reports",
  "Client work with Wayst Recycling, Minilend, Exion Finance",
  "500+ Salamander community members",
];

function AboutPage() {
  return (
    <div className="py-8 flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
          About
        </h1>
        <p className="text-sm text-foreground/80">
          Founder, builder, and community lead based in Kenya.
        </p>
      </header>

      {/* STORY */}
      <section className="flex flex-col gap-4">
        <span className="section-label-inverse w-fit">Story</span>

        <Reveal>
          <PlaceholderImage assetId="photo-team-canvassing" label="Canvassing founders" aspect="video" />
        </Reveal>

        <Reveal delay={0.05}>
          <article className="card">
            <h2 className="font-display font-bold text-xl">Who I am</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Andrew Kim Joseph is a Celo builder, Flutter and full-stack engineer, and
              founder of products at the intersection of research, rewards, and AI agents.
              He co-founded <strong>Canvassing</strong> in 2024 with{" "}
              <strong>Benedictors Ogada</strong> — a Kenyan developer-designer duo — and
              leads technical vision across mobile, web, and on-chain infrastructure.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="card">
            <h2 className="font-display font-bold text-xl">Canvassing</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Canvassing came out of the <strong>Build with Celo 7</strong> hackathon,
              where the theme was &ldquo;transform rewards and loyalty.&rdquo; About a
              year later, it evolved into an umbrella with two wings:
            </p>
            <ul className="mt-3 text-sm space-y-1 list-disc list-inside">
              <li><strong>Canvassing Insights</strong> — research marketplace (Rez + Pax + public insights)</li>
              <li><strong>Canvassing Intelligence</strong> — AI/agent tooling (Celina + Celeste)</li>
            </ul>
            <p className="mt-3 text-sm italic">
              Mission: Collect data, make it useful, and share it openly.
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Received support from <strong>Prezenti</strong> grants and partners with{" "}
              <strong>GoodDollar</strong>, using G$ as the default reward currency. Eight
              research reports published on the Celo Forum covering Nigeria, Kenya, and
              South Africa.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.15}>
          <article className="card">
            <h2 className="font-display font-bold text-xl">Celina</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Solo-built <strong>Celina</strong> — a Celo-native SDK and MCP stack that
              gives LLMs and AI agents a wallet on Celo. The stack includes 54 MCP tools,
              npm packages (<code className="text-xs">@andrewkimjoseph/celina-sdk</code>,{" "}
              <code className="text-xs">@andrewkimjoseph/celina-mcp</code>), a hosted
              read-only endpoint, and <strong>Celeste</strong> as a wallet-signed DeFAI
              reference app.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <article className="card">
            <h2 className="font-display font-bold text-xl">Salamander</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Co-founded <strong>Salamander Tech Hub</strong> — a Kenyan open-source
              community with the motto <strong>Build. Burn. Evolve.</strong> Organized{" "}
              <strong>Wajenzi Hack 1.0</strong>, leads technical architecture, and
              supports community programs with 500+ active members and 1,000+
              contributions.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.25}>
          <PlaceholderImage assetId="photo-salamander-community" label="Salamander community" aspect="video" />
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section className="flex flex-col gap-4">
        <span className="section-label-inverse w-fit">Experience</span>
        <Reveal>
          <div className="card p-0 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted font-display uppercase tracking-widest text-xs">
                <tr className="border-b border-border">
                  <th className="text-left p-3">Period</th>
                  <th className="text-left p-3">Role</th>
                  <th className="text-left p-3 hidden sm:table-cell">Organization</th>
                </tr>
              </thead>
              <tbody>
                {EXPERIENCE.map((e, i) => (
                  <tr key={i} className={i < EXPERIENCE.length - 1 ? "border-b border-border" : ""}>
                    <td className="p-3 font-display font-semibold whitespace-nowrap align-top">{e.period}</td>
                    <td className="p-3 align-top">
                      <div className="font-semibold">{e.role}</div>
                      <div className="sm:hidden text-xs text-foreground/70">{e.org}</div>
                      <div className="text-xs text-foreground/70 mt-1">{e.desc}</div>
                    </td>
                    <td className="p-3 hidden sm:table-cell align-top">{e.org}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* EDUCATION */}
      <section className="flex flex-col gap-4">
        <span className="section-label-inverse w-fit">Education</span>
        <Reveal>
          <div className="card">
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="font-display uppercase tracking-widest text-xs">Year</div>
              <div className="font-display uppercase tracking-widest text-xs">Degree</div>
              <div className="font-display uppercase tracking-widest text-xs">Institution</div>
              <div>[FILL]</div>
              <div>[FILL]</div>
              <div>[FILL]</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HIGHLIGHTS */}
      <section className="flex flex-col gap-4">
        <span className="section-label-inverse w-fit">Highlights</span>
        <Reveal>
          <ul className="card space-y-2 text-sm list-disc list-inside">
            {HIGHLIGHTS.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </Reveal>
      </section>

      <Link to="/work" className="btn-hero-primary">View my work</Link>
    </div>
  );
}
