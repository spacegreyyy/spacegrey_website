import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/technology-consulting")({
  head: () => ({ meta: [{ title: "Technology Consulting — SpaceGrey" }] }),
  component: TechConsultingPage,
});

const PROJECTS = [
  {
    title: "Tech Stack Audit & Modernisation Roadmap",
    desc: "Assessing a brand's current tools/infrastructure and delivering a prioritised roadmap for modernisation, cost reduction, and scalability.",
  },
  {
    title: "Digital Transformation Strategy for Traditional Businesses",
    desc: "Helping non-tech-native businesses (retail, hospitality, local services) identify where automation/software can cut costs and improve customer experience.",
  },
  {
    title: "Vendor & Tool Selection Consulting",
    desc: "Evaluating and recommending the right CRM/marketing/analytics stack for a brand based on budget, team size, and growth stage — with implementation support.",
  },
  {
    title: "Data Privacy & Security Compliance Review",
    desc: "Auditing a client's systems for GDPR/CCPA compliance gaps and providing a remediation plan, especially for brands handling customer data at scale.",
  },
  {
    title: "Fractional CTO / Technical Advisory Retainer",
    desc: "Ongoing technical leadership for non-technical founders — architecture decisions, hiring guidance, and technical due diligence for fundraising.",
  },
];

function TechConsultingPage() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"
            >
              <ArrowLeft className="h-4 w-4" /> All Services
            </Link>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">
              Service
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">
              Technology Consulting
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              Digital transformation, AI strategy, CTO advisory and tech stack
              decisions. We help leadership teams make confident technical
              decisions without guesswork.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-16">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Example Projects
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                What we advise on.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="glass rounded-3xl p-7 border border-white/[0.08] h-full">
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

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-5">
                Strategy that leads to execution.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We don't just produce reports — we partner with leadership
                through the strategic phase and into execution. Every
                recommendation we make, we're ready to help implement. That
                accountability changes the quality of the advice.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Non-technical founders making high-stakes technology decisions.
                Enterprises evaluating whether to build, buy, or migrate. Teams
                who need an independent technical perspective before committing
                to a major investment.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
