import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, getRelatedProjects } from "../../data/projects";
import { PlaceholderImage } from "../../components/PlaceholderImage";
import { Reveal } from "../../components/Reveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return {};
    const path = `/work/${project.id}`;
    return {
      meta: [
        { title: `${project.name} | Andrew Kim Joseph` },
        { name: "description", content: project.description },
        { property: "og:title", content: `${project.name} | Andrew Kim Joseph` },
        { property: "og:description", content: project.tagline },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
    };
  },
  component: WorkCasePage,
});

function WorkCasePage() {
  const { project } = Route.useLoaderData();
  const related = getRelatedProjects(project);

  return (
    <div className="py-8 flex flex-col gap-10">
      <Link
        to="/work"
        className="font-display uppercase tracking-widest text-xs underline underline-offset-4 w-fit"
      >
        ← All work
      </Link>

      <header className="flex flex-col gap-5">
        <Reveal>
          <div className="w-20">
            <PlaceholderImage assetId={project.assetId} label={project.name} />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-col gap-3">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground tracking-tight">
              {project.name}
            </h1>
            <p className="text-sm font-semibold">{project.tagline}</p>
            <p className="text-xs font-display uppercase tracking-widest text-foreground/70">
              {project.role} · {project.year}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 font-display uppercase tracking-widest text-xs pt-1">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Live →
                </a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  GitHub →
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      </header>

      <Reveal delay={0.08}>
        <section className="flex flex-col gap-3">
          <span className="section-label-inverse w-fit">Problem</span>
          <article className="card">
            <p className="text-sm leading-relaxed">{project.problem}</p>
          </article>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="flex flex-col gap-3">
          <span className="section-label-inverse w-fit">What I built</span>
          <article className="card">
            <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="flex flex-col gap-3">
          <span className="section-label-inverse w-fit">Technical notes</span>
          <article className="card">
            <ul className="text-sm space-y-2 list-disc list-inside leading-relaxed">
              {project.technical.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </Reveal>

      {related.length > 0 ? (
        <Reveal delay={0.14}>
          <section className="flex flex-col gap-4">
            <span className="section-label-inverse w-fit">Related work</span>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/work/$slug"
                  params={{ slug: p.id }}
                  className="project-card h-full"
                >
                  <div className="w-12">
                    <PlaceholderImage assetId={p.assetId} label={p.name} />
                  </div>
                  <h2 className="font-display font-bold text-lg">{p.name}</h2>
                  <p className="text-sm">{p.tagline}</p>
                  <p className="mt-auto pt-2 font-display uppercase tracking-widest text-xs">
                    Read case →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}
    </div>
  );
}
