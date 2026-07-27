import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/ui-ux-design")({
    head: () => ({ meta: [{ title: "UI/UX Design — SpaceGrey" }] }),
    component: UIUXPage,
});
function UIUXPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">UI/UX Design</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Interfaces that feel inevitable. We design products, dashboards and websites with the clarity of Linear, the polish of Apple and the precision of Stripe.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Product UI/UX Design", "Design System Creation", "Dashboard & Data Visualisation Design", "Mobile App Design (iOS & Android)", "Website & Landing Page Design", "User Research & Journey Mapping", "Wireframing & Prototyping", "Figma Component Libraries", "Interaction Design & Micro-animations", "Accessibility-first Design"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">Good design isn't decoration — it's the clarity of thinking made visible. We work in Figma with structured component libraries, iterate rapidly based on feedback and always design with the eventual handoff to engineers in mind. Pixel-perfect delivery is a baseline, not a bonus.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Founders who know their product needs to look world-class. Engineering teams that need design support. Companies whose products work but don't delight.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
