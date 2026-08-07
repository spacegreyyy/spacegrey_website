import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight, Play, Pause } from "lucide-react";
import { ALL_PROJECTS, type ProjectCategory } from "@/data/projects";
import { useRef, useState } from "react";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = ALL_PROJECTS.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: project ? `${project.name} — Demo Projects | SpaceGrey` : "Project | SpaceGrey" },
        {
          name: "description",
          content: project?.description ?? "A SpaceGrey demo project.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const project = ALL_PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetailPage,
});

const CATEGORY_GRADIENT: Record<ProjectCategory, string> = {
  "AI & Machine Learning": "from-violet-500/30 via-purple-500/10 to-transparent",
  "Full-Stack App": "from-blue-500/30 via-cyan-500/10 to-transparent",
  "Analytics & BI": "from-emerald-500/30 via-teal-500/10 to-transparent",
  "E-Commerce": "from-pink-500/30 via-rose-500/10 to-transparent",
  "Marketing Site": "from-orange-500/30 via-amber-500/10 to-transparent",
  Automation: "from-sky-500/30 via-indigo-500/10 to-transparent",
};

const CATEGORY_ACCENT: Record<ProjectCategory, string> = {
  "AI & Machine Learning": "text-violet-300",
  "Full-Stack App": "text-blue-300",
  "Analytics & BI": "text-emerald-300",
  "E-Commerce": "text-pink-300",
  "Marketing Site": "text-orange-300",
  Automation: "text-sky-300",
};

function VideoPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      onClick={toggle}
    >
      <video
        ref={ref}
        src={src}
        loop
        playsInline
        className="w-full rounded-2xl"
        onEnded={() => setPlaying(false)}
      />
      {/* Overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
          {playing ? (
            <Pause className="h-6 w-6 text-white fill-white" />
          ) : (
            <Play className="h-6 w-6 text-white fill-white ml-0.5" />
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const gradient = CATEGORY_GRADIENT[project.category];
  const accent = CATEGORY_ACCENT[project.category];

  return (
    <PageShell>
      {/* Ambient gradient glow */}
      <div
        className={`pointer-events-none absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b ${gradient} opacity-30`}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full liquid-glass px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              {project.name}
            </h1>
            <p className={`text-xl font-medium mb-4 ${accent}`}>
              {project.tagline}
            </p>
            <p className="text-lg text-white/50 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Type", project.type],
            ["Category", project.category],
            ["Year", project.year],
            ["Stack", project.tech.slice(0, 2).join(" · ")],
          ].map(([k, v]) => (
            <Reveal key={k}>
              <div className="liquid-glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">{k}</div>
                <div className="mt-1.5 font-medium text-white text-sm leading-snug">{v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-20">

          {/* Video / Image */}
          {(project.video || project.image) && (
            <Reveal>
              {project.video ? (
                <VideoPlayer src={project.video} />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded-2xl"
                />
              ) : null}
            </Reveal>
          )}

          {/* Stats */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-10">
                At a Glance
              </div>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 60}>
                  <div className="liquid-glass rounded-3xl p-8 text-center">
                    <div className={`text-3xl font-bold mb-3 ${accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 leading-snug">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                What's Built
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                Key features & capabilities.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 50}>
                  <div className="liquid-glass rounded-2xl p-6 flex items-start gap-4 h-full">
                    <span className={`mt-0.5 text-lg font-bold shrink-0 ${accent} opacity-60`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-white/70 leading-relaxed">{h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Reveal>
            <div className="liquid-glass rounded-3xl p-12 text-center border border-white/10">
              <h3 className="text-3xl font-semibold text-gradient mb-4">
                Want something like this?
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                We build full products — from idea to deployment. Let's talk.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
                >
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white hover:bg-white/[0.06] transition"
                >
                  Browse all projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
