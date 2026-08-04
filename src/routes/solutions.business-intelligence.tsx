import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/business-intelligence")({
  head: () => ({
    meta: [{ title: "Business Intelligence — SpaceGrey" }],
  }),
  component: Page,
});

const INCLUDED = [
  "Stakeholder interviews to define real reporting needs",
  "Custom BI dashboard development",
  "Executive-level summary reporting (weekly/monthly digest)",
  "Drill-down analysis tooling for operational teams",
  "Data governance and access control for sensitive metrics",
  "Ongoing dashboard iteration as business questions evolve",
];

const STEPS = [
  {
    n: "01",
    title: "Question-First Discovery",
    desc: "Start with what leadership actually needs to decide — not what data already exists.",
  },
  {
    n: "02",
    title: "Design Around Decisions",
    desc: "Build dashboards that map directly to those strategic and operational questions.",
  },
  {
    n: "03",
    title: "Build & Validate",
    desc: "Develop and test against real business scenarios with stakeholders in the loop.",
  },
  {
    n: "04",
    title: "Iterate with Leadership",
    desc: "Refine based on what's actually being used — not what looked good in a demo.",
  },
];

function Page() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Solutions
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="rounded-full liquid-glass px-3 py-1 text-xs text-white/60">
                Business Intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Business Intelligence
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              BI systems that answer questions leadership actually asks.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-20">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Overview
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-6">
                Start with the questions, not the data.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Most BI tools get built around available data instead of actual
                business questions. We flip that — starting with what leadership
                needs to know, then building the BI system backward from there,
                so every dashboard earns its place.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                What's Included
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                What we deliver.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {INCLUDED.map((item, i) => (
                <Reveal key={item} delay={i * 50}>
                  <div className="liquid-glass rounded-2xl p-5 liquid-glass">
                    <p className="text-sm text-white/75 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-6">
                Right for you if…
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Leadership teams tired of vanity dashboards that look good but
                don't drive decisions — companies that need reporting tied
                directly to strategic and operational questions.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                How we work.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="liquid-glass rounded-3xl p-7 liquid-glass h-full">
                    <span className="text-3xl font-bold text-gradient opacity-40">
                      {s.n}
                    </span>
                    <div className="mt-4 text-base font-semibold mb-2">
                      {s.title}
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="liquid-glass rounded-3xl p-12 text-center border border-white/10">
              <h3 className="text-3xl font-semibold text-gradient mb-4">
                Talk to us about Business Intelligence
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Let's build BI that leadership actually opens every morning.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTAStrip />
    </PageShell>
  );
}
