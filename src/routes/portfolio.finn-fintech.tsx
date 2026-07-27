import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/portfolio/finn-fintech")({
    head: () => ({ meta: [{ title: "Finn Fintech — Case Study | SpaceGrey" }] }),
    component: Page,
});
function Page() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Projects</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Fintech · Full-Stack</div>
                        <div className="text-sm text-white/40 mb-2">Client</div>
                        <div className="text-2xl font-semibold text-white/70 mb-4">Finn Fintech</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">Website, Sales Analysis & Automation</h1>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl grid sm:grid-cols-4 gap-4">
                    {[["Industry", "Fintech"], ["Service", "Full-Stack + Automation"], ["Timeline", "10 Weeks"], ["Year", "2025"]].map(([k, v]) => (
                        <Reveal key={k}><div className="glass rounded-2xl p-5"><div className="text-xs uppercase tracking-[0.2em] text-white/40">{k}</div><div className="mt-1 font-medium">{v}</div></div></Reveal>
                    ))}
                </div>
            </section>
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">The Challenge</h2>
                        <p className="text-white/60 leading-relaxed">Finn Fintech was starting from zero — no website, no analytics infrastructure and no automated processes. They needed a credible digital presence to attract investors and clients, visibility into their sales pipeline and automation tools to reduce manual overhead as they scaled.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">What We Built</h2>
                        <p className="text-white/60 leading-relaxed">SpaceGrey delivered a complete digital transformation in one engagement. We designed and built their website from zero, set up a full sales analytics dashboard, and built automated workflows handling lead capture, CRM updates, follow-up sequences and weekly reporting — all without manual intervention.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Key Deliverables</h2>
                        <ul className="space-y-3">
                            {["0-to-1 website — design, development, deployment", "Sales analytics dashboard with live KPI tracking", "Automated lead capture and CRM sync", "Follow-up email sequences triggered by actions", "Weekly sales performance report automation", "Investor-ready presentation of product metrics"].map(d => (
                                <li key={d} className="flex items-start gap-3 text-white/60"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />{d}</li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Outcome</h2>
                        <p className="text-white/60 leading-relaxed">Finn Fintech launched with a polished, credible digital presence and an operations stack that scaled with them. The automation tools saved 15+ hours per week of manual work within the first month, and the analytics dashboard became a core tool in their investor conversations.</p>
                    </Reveal>
                    <Reveal>
                        <div className="glass rounded-3xl p-8 border border-white/10">
                            <p className="text-white/80 text-lg leading-relaxed italic">"SpaceGrey built our website from scratch, set up our analytics and automated key sales workflows — all in record time."</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient">PS</div>
                                <div><div className="text-sm font-medium">Panjak Saluja</div><div className="text-xs text-white/40">CEO, Finn Fintech</div></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
