import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/custom-software")({
  head: () => ({
    meta: [{ title: "Custom Software — SpaceGrey" }],
  }),
  component: Page,
});

const INCLUDED = [
  "Custom internal tools and admin panels",
  "Client/partner-facing portals",
  "Bespoke workflow and approval systems",
  "Legacy tool replacement (spreadsheets, outdated internal software)",
  "Integration with existing business systems",
  "Ongoing maintenance and feature development",
];

const STEPS = [
  {
    n: "01",
    title: "Workflow Mapping",
    desc: "Understand exactly how the process works today — including every edge case and exception.",
  },
  {
    n: "02",
    title: "System Design",
    desc: "Architect software around that real workflow, not a generic template.",
  },
  {
    n: "03",
    title: "Build & Test",
    desc: "Develop with the actual end users involved throughout — not revealed at the end.",
  },
  {
    n: "04",
    title: "Deploy & Support",
    desc: "Roll out with training and ongoing iteration as the business's needs evolve.",
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
                Custom Software
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Custom Software
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Bespoke systems designed around your workflow — not the other way
              around.
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
                Software that fits your business — not the other way round.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Off-the-shelf software forces your team to adapt to someone
                else's workflow. We build custom systems shaped around how your
                business actually operates — whether that's an internal tool, a
                client-facing portal, or a process no existing software handles
                well.
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
                Teams whose workflows don't fit neatly into generic SaaS tools
                — businesses running critical processes through spreadsheets,
                email chains, or software that's almost right but not quite.
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
                Talk to us about Custom Software
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Tell us what your team does manually — we'll build something
                that does it better.
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
