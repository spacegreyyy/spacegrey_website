import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/artificial-intelligence")({
  head: () => ({ meta: [{ title: "Artificial Intelligence — SpaceGrey" }] }),
  component: AIServicePage,
});

const PROJECTS = [
  {
    title: "AI-Powered Customer Support Agent",
    desc: "Conversational AI trained on a brand's knowledge base (FAQs, product docs, past tickets) that handles tier-1 support, escalates complex queries, and integrates with Zendesk/Intercom. Reduces support load by 40–60%.",
  },
  {
    title: "AI Content Generation Suite for Agencies",
    desc: "Tool that generates on-brand social captions, ad copy, and blog drafts based on a client's tone-of-voice guide and past campaigns, with human-in-the-loop review before publishing.",
  },
  {
    title: "AI Sales Intelligence Assistant",
    desc: "Scrapes and analyses lead data (LinkedIn, company sites, news) to auto-generate personalised outreach emails and call prep notes for sales teams, integrated with CRM.",
  },
  {
    title: "Voice AI Receptionist",
    desc: "An AI voice agent for small businesses (clinics, salons, real estate) that answers calls, books appointments, and syncs with Google Calendar/Calendly.",
  },
  {
    title: "AI Document Intelligence Tool",
    desc: "Upload contracts, invoices or reports and get automatic summarisation, key-clause extraction, and risk flagging — useful for legal, finance, or procurement teams.",
  },
];

function AIServicePage() {
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
              Artificial Intelligence
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              We build production-grade AI systems — from LLM integrations and
              RAG pipelines to autonomous agents and computer vision. Every
              system is designed for reliability, not just demos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Projects */}
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Example Projects
              </div>
              <h2 className="text-3xl font-semibold text-gradient mb-10">
                What we build.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="liquid-glass rounded-3xl p-7 liquid-glass h-full">
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
                Built for production, not just demos.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We start with your business problem, not the technology. Every
                AI engagement begins with a discovery phase where we map the
                workflow, define success metrics and identify the right model
                architecture. We build iteratively with weekly demos, and every
                system ships with evaluation pipelines, monitoring and
                documentation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Startups building AI-native products. Enterprises automating
                knowledge work. Teams that have tried LLM APIs but need a
                production system that actually works at scale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
