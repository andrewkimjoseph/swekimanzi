import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
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

const iconClass = "size-6 shrink-0";

function XLogo() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.995-9.135L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const LINKS: {
  label: string;
  url: string;
  hint: string;
  icon: ReactNode;
  external?: boolean;
}[] = [
  {
    label: "Email",
    url: `mailto:${socialLinks.email}`,
    hint: socialLinks.email,
    icon: <Mail className={iconClass} aria-hidden="true" />,
  },
  {
    label: "GitHub",
    url: socialLinks.github,
    hint: "@andrewkimjoseph",
    icon: <Github className={iconClass} aria-hidden="true" />,
    external: true,
  },
  {
    label: "LinkedIn",
    url: socialLinks.linkedin,
    hint: "andrew-kim-joseph",
    icon: <Linkedin className={iconClass} aria-hidden="true" />,
    external: true,
  },
  {
    label: "X",
    url: socialLinks.x,
    hint: "@andrewkimjoseph",
    icon: <XLogo />,
    external: true,
  },
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
        {LINKS.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.04}>
            <a
              href={l.url}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card block hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-transform"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {l.icon}
                  <div className="min-w-0">
                    <div className="font-display font-bold text-lg">{l.label}</div>
                    <div className="text-xs text-foreground/70 break-all">{l.hint}</div>
                  </div>
                </div>
                <span className="font-display uppercase tracking-widest text-xs shrink-0">Open →</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
