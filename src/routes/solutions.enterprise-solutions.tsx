import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/solutions/enterprise-solutions")({
  head: () => ({
    meta: [{ title: "Enterprise Solutions — SpaceGrey" }],
  }),
  component: Page,
});

const INCLUDED = [
  "Compliance-aware system architecture (GDPR, HIPAA, SOC 2 considerations)",
  "High-availability infrastructure design",
  "Legacy system integration and migration",
  "Role-based access control and audit logging",
  "Security review and penetration-test-ready development",
  "Cross-department workflow systems",
];

const STEPS = [
  {
    n: "01",
    title: "Requirements & Compliance Mapping",
    desc: "Understand regulatory and operational constraints before a single line is written.",
  },
  {
    n: "02",
    title: "Architecture Review",
    desc: "Design for scale, security, and auditability from day one.",
  },
  {
    n: "03",
    title: "Phased Implementation",
    desc: "Build and test in controlled stages — no big-bang deployments.",
  },
  {
    n: "04",
    title: "Handover & Support",
    desc: "Documentation and support structure for internal IT and operations teams.",
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
                Enterprise
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Mission-critical software for regulated, high-scale organisations.
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
                Built for organisations where failure isn't an option.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We build software for organizations where downtime, compliance
                failures, or data breaches aren't an option. This means rigorous
                architecture, security-first development, and systems designed
                to scale reliably under real institutional load.
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
                Larger organizations, regulated industries (finance, healthcare,
                government-adjacent), and any brand where system failure carries
                real operational or legal risk.
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
                Talk to us about Enterprise Solutions
              </h3>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Let's discuss your compliance, scale, and reliability
                requirements.
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
