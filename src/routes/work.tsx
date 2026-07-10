import { createFileRoute } from "@tanstack/react-router";
import { projects } from "../data/projects";
import { PlaceholderImage } from "../components/PlaceholderImage";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work | Andrew Kim Joseph" },
      {
        name: "description",
        content:
          "Projects by Andrew Kim Joseph — Canvassing, Pax, Rez, Celina, Celeste, GoClaim, Salamander, and more.",
      },
      { property: "og:title", content: "Work | Andrew Kim Joseph" },
      {
        property: "og:description",
        content: "Research marketplaces, AI agents, and community tooling on Celo.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="py-8 flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
          Work
        </h1>
        <p className="text-sm text-white/80">
          Research marketplaces, AI agent infrastructure, and community tooling.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.08}>
            <article className="project-card h-full">
              <div className="w-14">
                <PlaceholderImage assetId={p.assetId} label={p.name} />
              </div>
              <h2 className="font-display font-bold text-xl">{p.name}</h2>
              <p className="text-sm font-semibold">{p.tagline}</p>
              <p className="text-sm text-black/80">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {p.tags.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="mt-auto pt-3 flex gap-4 font-display uppercase tracking-widest text-xs">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Visit →
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  GitHub →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
