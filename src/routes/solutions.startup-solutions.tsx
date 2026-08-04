import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/startup-solutions")({
  head: () => ({
    meta: [{ title: "Startup Solutions — SpaceGrey" }],
  }),
  component: Page,
});

const INCLUDED = [
  "MVP scoping and technical architecture",
  "Rapid 0→1 product development",
  "Investor-ready technical documentation",
  "Scalable foundation (built to extend, not rebuild)",
  "Basic analytics and tracking baked in from day one",
  "Post-launch iteration support",
];

const STEPS = [
  {
    n: "01",
    title: "Scope Tightly",
    desc: "Define the smallest version that proves the core hypothesis — no feature creep.",
  },
  {
    n: "02",
    title: "Build Fast, Build Clean",
    desc: "Ship quickly on an architecture that scales past the first round of funding.",
  },
  {
    n: "03",
    title: "Launch & Validate",
    desc: "Get real user feedback as early as possible — before over-engineering.",
  },
  {
    n: "04",
    title: "Iterate",
    desc: "Prioritize the next build cycle based on actual usage data, not assumptions.",
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
                Startups
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Startup Solutions
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              0→1 products for founders — fast, safe, investor-ready.
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
                Speed without the debt.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Early-stage founders need speed without sacrificing the
                fundamentals investors and future engineers will scrutinize. We
                build MVPs and early-stage products that are fast to ship but
                built on architecture that won't need a rewrite the moment you
                raise your next round.
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
                Pre-seed to Series A founders who need a working product fast —
                for user validation, fundraising, or first customer acquisition
                — without technical debt that slows the next stage of growth.
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
                Talk to us about Startup Solutions
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Tell us your idea — we'll scope it, architect it, and ship it.
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
