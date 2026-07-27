import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/automation-solutions")({
  head: () => ({ meta: [{ title: "Automation Solutions — SpaceGrey" }] }),
  component: Page,
});
function Page() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Solutions</Link>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Solution</div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Automation Solutions</h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Replace manual work with intelligent automation. We design and build reliable pipelines that run 24/7 across your sales, marketing, operations and finance workflows.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["End-to-end Process Automation","CRM & Sales Automation","Lead Capture & Nurturing","Invoice & Finance Automation","HR & Onboarding Workflows","Reporting & Alert Automation","API Orchestration","Browser & Web Automation","n8n / Make / Custom Pipeline","Monitoring & Error Recovery"].map(item => (
                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
            <p className="text-white/60 leading-relaxed">We audit your current manual workflows, identify the highest-ROI automation opportunities, and prioritise ruthlessly. We build each pipeline with proper error handling, logging and alerting — so when something breaks, you know about it immediately and we can fix it fast.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
            <p className="text-white/60 leading-relaxed">Growing teams that have outgrown spreadsheet-based processes. Sales teams spending too much time on data entry. Ops teams running on manual reports and follow-ups.</p>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
