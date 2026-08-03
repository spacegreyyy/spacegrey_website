import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/automation-solutions")({
  head: () => ({
    meta: [{ title: "Automation Solutions — SpaceGrey" }],
  }),
  component: Page,
});

const INCLUDED = [
  "Workflow automation (Zapier, Make, custom scripts)",
  "Browser automation for manual/repetitive web tasks",
  "API integration between disconnected tools",
  "Internal ops automation (approvals, notifications, reporting)",
  "Automated data sync across platforms",
  "Error monitoring and automation reliability checks",
];

const STEPS = [
  {
    n: "01",
    title: "Process Audit",
    desc: "Map current manual workflows and identify the highest-impact automation targets.",
  },
  {
    n: "02",
    title: "Design the Automation Logic",
    desc: "Define triggers, conditions, error handling, and fallback paths.",
  },
  {
    n: "03",
    title: "Build & Connect",
    desc: "Implement across your existing tool stack with reliability and observability built in.",
  },
  {
    n: "04",
    title: "Monitor & Refine",
    desc: "Ensure automations stay reliable as your stack and processes evolve.",
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
                Automation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Automation Solutions
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Workflow, browser, API and ops automation across your stack.
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
                Your tools talking to each other — without a human in the
                middle.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We eliminate the manual, repetitive work eating into your team's
                time — connecting the tools you already use through workflow
                automation, browser automation, and custom API integrations, so
                your systems talk to each other without a human in the middle.
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
                Agencies and brands with growing operational complexity — teams
                manually copying data between tools, chasing approvals, or
                generating reports by hand.
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
                Talk to us about Automation Solutions
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Tell us what's being done manually — we'll automate it.
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
