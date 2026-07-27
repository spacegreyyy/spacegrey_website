import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/portfolio/vaibhav-oxygens")({
    head: () => ({ meta: [{ title: "Vaibhav Oxygens — Case Study | SpaceGrey" }] }),
    component: VaibhavOxygensCase,
});

function VaibhavOxygensCase() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10">
                            <ArrowLeft className="h-4 w-4" /> All Projects
                        </Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Healthcare · Full-Stack</div>
                        <div className="text-sm text-white/40 mb-2">Client</div>
                        <div className="text-2xl font-semibold text-white/70 mb-4">Vaibhav Oxygens</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">
                            Website, Sales Analysis & Automation
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-4">
                    {[["Industry", "Healthcare / Medical Supplies"], ["Service", "Full-Stack + Automation"], ["Timeline", "10 Weeks"], ["Year", "2025"]].map(([k, v]) => (
                        <Reveal key={k}>
                            <div className="glass rounded-2xl p-5">
                                <div className="text-xs uppercase tracking-[0.2em] text-white/40">{k}</div>
                                <div className="mt-1 font-medium">{v}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">The Challenge</h2>
                        <p className="text-white/60 leading-relaxed">Vaibhav Oxygens, a medical oxygen supplier, was operating largely offline with no digital presence and no systems for tracking orders, sales performance or customer data. As demand grew, the lack of visibility and manual processes were creating operational bottlenecks and missed opportunities.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">What We Built</h2>
                        <p className="text-white/60 leading-relaxed">SpaceGrey delivered a complete digital transformation. We built a professional, trust-focused website for Vaibhav Oxygens that communicates reliability and serves as a lead generation engine. In parallel, we implemented a sales analytics system to track orders, customers and revenue, and built automation tools that handle order notifications, follow-ups and reporting — replacing hours of manual work daily.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Key Deliverables</h2>
                        <ul className="space-y-3">
                            {["Professional trust-focused website", "Product and service catalogue pages", "Order inquiry and contact automation", "Sales tracking and customer analytics", "Automated order confirmation and follow-ups", "Daily and weekly performance summary reports"].map(d => (
                                <li key={d} className="flex items-start gap-3 text-white/60">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />{d}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Outcome</h2>
                        <p className="text-white/60 leading-relaxed">Vaibhav Oxygens moved from zero digital presence to a fully operational digital business in under three months. Inquiries through the website started generating new leads within weeks, and the automation tools cut daily administrative workload substantially — letting the team focus on fulfilment and growth.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
