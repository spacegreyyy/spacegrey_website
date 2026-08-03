import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/digital-transformation")({
  head: () => ({
    meta: [{ title: "Digital Transformation — SpaceGrey" }],
  }),
  component: Page,
});

const INCLUDED = [
  "Legacy system audit and modernisation roadmap",
  "Monolith-to-services migration planning",
  "Manual-to-automated process redesign",
  "Change management support for internal teams",
  "Phased migration execution (no big-bang risk)",
  "Post-migration support and optimisation",
];

const STEPS = [
  {
    n: "01",
    title: "Current-State Audit",
    desc: "Understand what's working, what's not, and what's actually urgent — before planning anything.",
  },
  {
    n: "02",
    title: "Roadmap Design",
    desc: "Sequence the transformation in low-risk, high-impact phases with clear milestones.",
  },
  {
    n: "03",
    title: "Phased Execution",
    desc: "Migrate and modernise incrementally, validating outcomes at each stage.",
  },
  {
    n: "04",
    title: "Embed New Workflows",
    desc: "Ensure the team adopts the new systems — not just tolerates them.",
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
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
                Transformation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Digital Transformation
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Legacy → modern. Monoliths → services. Manual → automated.
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
                Modernise without disrupting the business that depends on it.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                For organizations still running on legacy systems, manual
                processes, or monolithic software that can't keep pace with
                growth, we lead the full transformation — modernizing the tech
                stack without disrupting the business that depends on it.
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
                  <div className="glass rounded-2xl p-5 border border-white/[0.08]">
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
                Established, often non-tech-native businesses (traditional
                retail, hospitality, healthcare, local services) ready to
                modernize operations but wary of disruptive, all-at-once
                overhauls.
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
                  <div className="glass rounded-3xl p-7 border border-white/[0.08] h-full">
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
            <div className="glass rounded-3xl p-12 text-center border border-white/10">
              <h3 className="text-3xl font-semibold text-gradient mb-4">
                Talk to us about Digital Transformation
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Let's map your current state and design a transformation that
                actually sticks.
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
