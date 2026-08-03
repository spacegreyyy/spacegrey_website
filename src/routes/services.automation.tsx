import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/services/automation")({
  head: () => ({ meta: [{ title: "Automation — SpaceGrey" }] }),
  component: AutomationPage,
});

const PROJECTS = [
  {
    title: "Marketing Workflow Automation",
    desc: "Automating lead capture → CRM entry → email nurture → Slack notification pipelines for agencies running multiple client campaigns, using Zapier/Make and custom scripts.",
  },
  {
    title: "E-commerce Order & Inventory Automation",
    desc: "Auto-sync inventory across Shopify, warehouse systems, and marketplaces (Amazon/Etsy), with automated low-stock alerts and reorder triggers.",
  },
  {
    title: "Social Media Scheduling & Reporting Automation",
    desc: "A system that auto-publishes content across platforms and compiles weekly performance reports into a client-ready dashboard/PDF — no manual metric pulling.",
  },
  {
    title: "Invoice & Payment Reconciliation Bot",
    desc: "Automates matching incoming payments to invoices, flags discrepancies, and updates accounting software (QuickBooks/Xero) — cutting manual bookkeeping hours.",
  },
  {
    title: "HR/Onboarding Workflow Automation",
    desc: "Automates new-hire paperwork, account provisioning (email, Slack, tools access), and training checklist tracking for growing teams.",
  },
];

function AutomationPage() {
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
              Automation
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              We automate the repetitive work slowing your team down — from
              sales workflows and CRM updates to reporting and HR. Humans focus
              on what matters. Everything else runs itself.
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
                What we build.
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
                Map first, automate second.
              </h2>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                We map your current manual processes first — identifying the
                highest-ROI automation targets. Then we build reliable,
                monitored pipelines with error handling and alerting. Every
                automation ships with documentation and can be maintained or
                extended by your team.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                Who It's For
              </div>
              <p className="text-white/60 leading-relaxed max-w-3xl">
                Growing teams drowning in manual ops work. Sales teams spending
                too much time on CRM data entry. Companies spending hours on
                weekly reports that could run themselves.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
