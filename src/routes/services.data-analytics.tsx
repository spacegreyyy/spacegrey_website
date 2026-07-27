import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/data-analytics")({
    head: () => ({ meta: [{ title: "Data & Analytics — SpaceGrey" }] }),
    component: DataAnalyticsPage,
});
function DataAnalyticsPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Data & Analytics</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Turn raw data into decisions. We build pipelines, warehouses, dashboards and BI systems that give leadership real-time visibility into what matters.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Data Pipeline Engineering", "ETL / ELT Architecture", "Data Warehouse Design", "Real-time Analytics Dashboards", "Business Intelligence (BI) Systems", "Power BI & Tableau Implementation", "Sales & Revenue Analytics", "Customer Funnel Analysis", "KPI Tracking & Reporting", "Data Quality & Governance"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We start by understanding the questions your business needs to answer, then design the data architecture backwards from those outputs. Every dashboard we ship is built for the end user — clean, fast, and actionable. We don't build analytics for the sake of it; we build for decisions.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Founders who need to stop guessing. Sales teams that want pipeline clarity. Operations leads drowning in spreadsheets. Enterprises that have data everywhere but insight nowhere.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
