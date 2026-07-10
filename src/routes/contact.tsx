import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/Reveal";
import { socialLinks } from "../data/social";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Andrew Kim Joseph" },
      {
        name: "description",
        content:
          "Get in touch with Andrew Kim Joseph for Celo ecosystem projects, research marketplaces, and Flutter applications.",
      },
      { property: "og:title", content: "Contact | Andrew Kim Joseph" },
      { property: "og:description", content: "Open to collaborating on interesting projects." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const LINKS = [
  { label: "GitHub", url: socialLinks.github, hint: "@andrewkimjoseph" },
  { label: "LinkedIn", url: socialLinks.linkedin, hint: "andrew-kim-joseph" },
  { label: "X (Andrew)", url: socialLinks.x, hint: "@andrewkimjoseph" },
  { label: "X (Canvassing)", url: socialLinks.canvassingX, hint: "@thecanvassing" },
  { label: "Canvassing", url: socialLinks.canvassing, hint: "thecanvassing.xyz" },
  { label: "Celina", url: socialLinks.celina, hint: "usecelina.xyz" },
];

function ContactPage() {
  return (
    <div className="py-8 flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
          Contact
        </h1>
        <p className="text-sm text-foreground/80">Open to collaborating on interesting projects.</p>
      </header>

      <Reveal>
        <div className="card">
          <p className="text-sm leading-relaxed">
            I&apos;m open to collaborating on <strong>Celo ecosystem projects</strong>,{" "}
            <strong>research marketplaces</strong>, and <strong>Flutter applications</strong>.
            If you have an idea in mind, I&apos;d love to hear about it.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-col gap-5">
        <Reveal>
          <a href={`mailto:${socialLinks.email}`} className="btn-hero-primary">
            Email — {socialLinks.email}
          </a>
        </Reveal>

        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={0.05 + i * 0.04}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card block hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-transform"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-display font-bold text-lg">{l.label}</div>
                  <div className="text-xs text-foreground/70">{l.hint}</div>
                </div>
                <span className="font-display uppercase tracking-widest text-xs">Open →</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
