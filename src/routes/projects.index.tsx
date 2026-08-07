import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Play } from "lucide-react";
import { ALL_PROJECTS, type ProjectCategory } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Demo Projects — SpaceGrey" },
      {
        name: "description",
        content:
          "Live demos and full product builds by SpaceGrey — AI platforms, automation tools, full-stack apps, e-commerce, and analytics systems.",
      },
    ],
  }),
  component: ProjectsPage,
});

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "AI & Machine Learning",
  "Full-Stack App",
  "Analytics & BI",
  "E-Commerce",
  "Marketing Site",
  "Automation",
];

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  "AI & Machine Learning": "from-violet-500/20 to-purple-500/10 border-violet-500/20",
  "Full-Stack App": "from-blue-500/20 to-cyan-500/10 border-blue-500/20",
  "Analytics & BI": "from-emerald-500/20 to-teal-500/10 border-emerald-500/20",
  "E-Commerce": "from-pink-500/20 to-rose-500/10 border-pink-500/20",
  "Marketing Site": "from-orange-500/20 to-amber-500/10 border-orange-500/20",
  Automation: "from-sky-500/20 to-indigo-500/10 border-sky-500/20",
};

const CATEGORY_DOT: Record<ProjectCategory, string> = {
  "AI & Machine Learning": "bg-violet-400",
  "Full-Stack App": "bg-blue-400",
  "Analytics & BI": "bg-emerald-400",
  "E-Commerce": "bg-pink-400",
  "Marketing Site": "bg-orange-400",
  Automation: "bg-sky-400",
};

function ProjectsPage() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60">
              <span className="h-1 w-1 rounded-full bg-white/60" />
              Demo Projects
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">
              Built to ship.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 mx-auto max-w-2xl text-lg text-white/55 leading-relaxed">
              A collection of full-product builds — AI platforms, automation tools,
              full-stack SaaS apps, e-commerce storefronts, and analytics systems.
              Every project is production-grade and ready to deploy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category filters */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                    active === cat
                      ? "bg-white text-black"
                      : "liquid-glass text-white/60 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 50}>
              <Link
                to={`/projects/${project.slug}` as any}
                className={`group flex flex-col rounded-3xl bg-gradient-to-br ${CATEGORY_COLORS[project.category]} border liquid-glass hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 h-full overflow-hidden`}
              >
                {/* Video/image preview */}
                {project.video ? (
                  <div className="relative h-44 overflow-hidden rounded-t-3xl bg-white/[0.03]">
                    <video
                      src={project.video}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02] transition-transform"
                      onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                      onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-[10px] text-white/70">
                      <Play className="h-2.5 w-2.5 fill-current" />
                      Hover to play
                    </div>
                  </div>
                ) : project.image ? (
                  <div className="relative h-44 overflow-hidden rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02] transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                ) : (
                  <div className="relative h-44 rounded-t-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] flex items-center justify-center">
                    <span className="text-4xl font-bold tracking-[-0.04em] text-gradient opacity-30">
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-7">
                  {/* Category pill */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className={`h-1.5 w-1.5 rounded-full ${CATEGORY_DOT[project.category]}`} />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-gradient leading-snug">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/45">{project.tagline}</p>
                    <p className="mt-3 text-sm text-white/50 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full liquid-glass px-2.5 py-0.5 text-[10px] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition">
                    View project
                    <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
