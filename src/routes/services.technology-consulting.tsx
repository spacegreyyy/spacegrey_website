import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/technology-consulting")({
    head: () => ({ meta: [{ title: "Technology Consulting — SpaceGrey" }] }),
    component: TechConsultingPage,
});
function TechConsultingPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Technology Consulting</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Senior technical guidance for leadership teams — architecture decisions, AI strategy, digital transformation and CTO advisory. We help you make the right technical bets.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["CTO Advisory & Fractional CTO", "Digital Transformation Strategy", "AI Strategy & Roadmapping", "Technology Stack Assessment", "Architecture Review & Design", "Build vs. Buy Analysis", "Technical Due Diligence", "Vendor & Tool Selection", "Engineering Team Structure", "Technology Risk Assessment"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We give you the honest advice a senior CTO would give — without the full-time salary. We spend time understanding your business context before making any recommendations, and we deliver clear, opinionated guidance rather than generic frameworks. Our goal is to make you less dependent on consultants, not more.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">CEOs and founders who need a trusted technical sounding board. Boards evaluating technology risk. Companies navigating a major platform decision or digital transformation.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
