import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/portfolio/saiesha-e-vehicles")({
    head: () => ({ meta: [{ title: "Saiesha E-Vehicles — Case Study | SpaceGrey" }] }),
    component: Page,
});
function Page() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Projects</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Automotive · Analytics</div>
                        <div className="text-sm text-white/40 mb-2">Client</div>
                        <div className="text-2xl font-semibold text-white/70 mb-4">Saiesha E-Vehicles</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">Complete Sales Analysis Platform</h1>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl grid sm:grid-cols-4 gap-4">
                    {[["Industry", "Electric Vehicles"], ["Service", "Analytics & Data"], ["Timeline", "8 Weeks"], ["Year", "2025"]].map(([k, v]) => (
                        <Reveal key={k}><div className="glass rounded-2xl p-5"><div className="text-xs uppercase tracking-[0.2em] text-white/40">{k}</div><div className="mt-1 font-medium">{v}</div></div></Reveal>
                    ))}
                </div>
            </section>
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">The Challenge</h2>
                        <p className="text-white/60 leading-relaxed">Saiesha E-Vehicles was growing rapidly across multiple sales channels but had no unified view of their pipeline, conversion rates or regional performance. Decisions were being made on gut feel rather than data, and the team had no way to forecast accurately or identify bottlenecks.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">What We Built</h2>
                        <p className="text-white/60 leading-relaxed">SpaceGrey built a complete sales intelligence platform that aggregated data from all channels into a single, real-time dashboard. The system includes custom KPI tracking, pipeline visualisation, regional performance breakdowns, lead funnel analysis and automated weekly reports delivered to leadership.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Key Deliverables</h2>
                        <ul className="space-y-3">
                            {["Unified sales dashboard across all channels", "Real-time pipeline and conversion tracking", "Regional and SKU-level performance breakdowns", "Automated weekly PDF reports for leadership", "Lead source attribution analysis", "Forecasting model with 90-day projections"].map(d => (
                                <li key={d} className="flex items-start gap-3 text-white/60"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />{d}</li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Outcome</h2>
                        <p className="text-white/60 leading-relaxed">Within the first month of launch, the Saiesha leadership team had full visibility into their sales engine for the first time. They identified two underperforming channels and reallocated budget accordingly, resulting in a measurable improvement in overall conversion within the quarter.</p>
                    </Reveal>
                    <Reveal>
                        <div className="glass rounded-3xl p-8 border border-white/10">
                            <p className="text-white/80 text-lg leading-relaxed italic">"The sales analysis platform they built gave us visibility we never had before. Data-driven decisions are now our default."</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient">MN</div>
                                <div><div className="text-sm font-medium">Mahesh Kumar Nagpal</div><div className="text-xs text-white/40">Founder, Saiesha E-Vehicles</div></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
