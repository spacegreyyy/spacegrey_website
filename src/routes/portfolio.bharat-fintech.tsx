import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/portfolio/bharat-fintech")({
    head: () => ({ meta: [{ title: "Bharat Fintech — Case Study | SpaceGrey" }] }),
    component: BharatFintechCase,
});

function BharatFintechCase() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10">
                            <ArrowLeft className="h-4 w-4" /> All Projects
                        </Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Fintech · Full-Stack</div>
                        <div className="text-sm text-white/40 mb-2">Client</div>
                        <div className="text-2xl font-semibold text-white/70 mb-4">Bharat Fintech</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">
                            Website, Sales Analysis & Automation
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-4">
                    {[["Industry", "Fintech"], ["Service", "Full-Stack + Automation"], ["Timeline", "10 Weeks"], ["Year", "2025"]].map(([k, v]) => (
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
                        <p className="text-white/60 leading-relaxed">Bharat Fintech needed to establish a strong digital identity and operational backbone simultaneously. Without a proper website they were missing opportunities with enterprise clients, and without analytics they couldn't measure their growth or identify where their pipeline was leaking.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">What We Built</h2>
                        <p className="text-white/60 leading-relaxed">We delivered a complete engagement covering all three pillars: a professional, enterprise-grade website built from zero; a real-time sales analytics stack with pipeline visualisation and funnel metrics; and an automation layer that handles lead ingestion, CRM population, follow-ups and performance reporting without manual effort.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Key Deliverables</h2>
                        <ul className="space-y-3">
                            {["Enterprise-grade website from scratch", "Sales pipeline and funnel analytics", "Lead-to-CRM automation with tagging", "Automated follow-up sequence engine", "Conversion and drop-off reporting", "Custom performance dashboard for founders"].map(d => (
                                <li key={d} className="flex items-start gap-3 text-white/60">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />{d}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Outcome</h2>
                        <p className="text-white/60 leading-relaxed">Bharat Fintech launched with confidence — a polished brand presence, live analytics and an automated ops layer that removed manual bottlenecks. The team could now focus on closing deals rather than managing spreadsheets, and investor demos became significantly more compelling with live data backing every claim.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
