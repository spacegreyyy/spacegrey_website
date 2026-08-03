import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio/sage-media")({
  head: () => ({
    meta: [
      { title: "Sage Media — Case Study | SpaceGrey" },
      {
        name: "description",
        content:
          "How SpaceGrey built Sage Media's end-to-end website — a modern, high-performance platform with a self-manageable CMS.",
      },
    ],
  }),
  component: Page,
});

const PHASES = [
  {
    n: "01",
    title: "Discovery & Content Audit",
    duration: "Week 1",
    desc: "Mapped existing content, identified gaps, ran competitor benchmarking against 3–4 media brands, and defined the site's information architecture and sitemap.",
  },
  {
    n: "02",
    title: "UX Wireframing & Visual Design",
    duration: "Week 1–2",
    desc: "Built low-fidelity wireframes for key pages, followed by high-fidelity Figma designs matching Sage Media's brand identity — focused on readability and content discovery.",
  },
  {
    n: "03",
    title: "Development",
    duration: "Week 2–4",
    desc: "Built the site from scratch using a modern React/Next.js stack with headless CMS integration, so the editorial team can publish without developer involvement. Optimised for Core Web Vitals and mobile-first performance.",
  },
  {
    n: "04",
    title: "SEO & Performance Optimisation",
    duration: "Week 4",
    desc: "Implemented technical SEO (meta structure, schema markup, sitemap, robots.txt), image optimisation and lazy loading to hit sub-2-second load times.",
  },
  {
    n: "05",
    title: "QA & Launch",
    duration: "Week 5",
    desc: "Cross-browser and cross-device testing, staging review with the client, DNS migration and go-live with zero downtime.",
  },
];

const TECH = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Headless CMS",
  "Vercel",
  "Google Analytics 4",
];

const OUTCOMES = [
  { n: "~65%", label: "Faster page load vs. old site" },
  { n: "100%", label: "Self-manageable CMS for editorial team" },
  { n: "All", label: "Breakpoints mobile-responsive" },
  { n: "Day 1", label: "SEO foundation live from launch" },
];

function Page() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Projects
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Media",
                "Web Development",
                "UI/UX Design",
                "Brand Identity",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              End-to-End Website
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              A complete rebuild — not a redesign — for a fast-scaling media
              brand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meta pills */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4">
          {[
            ["Client", "Sage Media"],
            ["Industry", "Media & Publishing"],
            ["Duration", "5 Weeks"],
            ["Year", "2025"],
          ].map(([k, v]) => (
            <Reveal key={k}>
              <div className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                  {k}
                </div>
                <div className="mt-1.5 font-medium text-white">{v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-20">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                The Challenge
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-6">
                An outdated presence for a fast-growing brand.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Sage Media was operating with an outdated web presence that
                didn't reflect their growth or credibility as a fast-scaling
                media brand. They needed a complete rebuild — with modern
                performance, SEO foundations, and a CMS their non-technical team
                could manage independently.
              </p>
            </div>
          </Reveal>

          {/* Workflow */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Our Workflow
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                How we got there.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PHASES.map((p, i) => (
                <Reveal key={p.n} delay={i * 60}>
                  <div className="glass rounded-3xl p-7 border border-white/[0.08] h-full">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-bold text-gradient opacity-40">
                        {p.n}
                      </span>
                      <span className="text-xs text-white/35 border border-white/10 rounded-full px-2.5 py-1">
                        {p.duration}
                      </span>
                    </div>
                    <div className="text-base font-semibold mb-3">
                      {p.title}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Tech Stack
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-8">
                Tools we shipped with.
              </h2>
              <div className="flex flex-wrap gap-3">
                {TECH.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm text-white/80 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Outcomes */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                The Outcome
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                Results delivered.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.label} delay={i * 60}>
                  <div className="glass rounded-3xl p-8 text-center border border-white/[0.08]">
                    <div className="text-4xl font-bold text-gradient mb-3">
                      {o.n}
                    </div>
                    <div className="text-sm text-white/50 leading-snug">
                      {o.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Reveal>
            <div className="glass rounded-3xl p-10 border border-white/10">
              <p className="text-white/80 text-xl leading-relaxed italic mb-8">
                "SpaceGrey transformed our online presence. The website they
                built is sleek, fast and exactly what our brand needed."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient shrink-0">
                  RA
                </div>
                <div>
                  <div className="font-medium">Rahul Arora</div>
                  <div className="text-sm text-white/40">
                    Founder, Sage Media
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-5xl glass rounded-3xl p-12 text-center border border-white/10">
            <h3 className="text-3xl font-semibold text-gradient mb-4">
              Want results like this?
            </h3>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Let's build something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
