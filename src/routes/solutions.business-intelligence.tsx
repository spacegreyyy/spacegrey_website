import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/solutions/business-intelligence")({
  head: () => ({ meta: [{ title: "Business Intelligence — SpaceGrey" }] }),
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
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Business Intelligence</h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">BI systems built around the questions your leadership team actually asks — not generic dashboards that nobody uses.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-6">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Executive Dashboard Design","Revenue & Growth Reporting","Sales Performance Tracking","Operations Intelligence","Customer Cohort Analysis","P&L and Cost Analytics","Predictive KPI Modelling","Multi-source Data Integration","Scheduled Report Delivery","Self-serve Drill-down Views"].map(item => (
                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">How it works</h2>
            <p className="text-white/60 leading-relaxed">We interview your leadership team to understand the decisions they make and the data they wish they had. We then build a BI system designed around those specific needs — pulling from your existing data sources and presenting insights in a way that drives action, not just awareness.</p>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl font-semibold text-gradient mb-4">Ideal for</h2>
            <p className="text-white/60 leading-relaxed">CEOs and COOs who want real-time business visibility. Finance teams who need more than monthly spreadsheet exports. Companies where data exists but nobody trusts it.</p>
          </Reveal>
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
