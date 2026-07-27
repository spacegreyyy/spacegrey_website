import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/product-development")({
    head: () => ({ meta: [{ title: "Product Development — SpaceGrey" }] }),
    component: ProductDevPage,
});
function ProductDevPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Product Development</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">From idea to shipped product. We act as your product and engineering team — strategy, design, build and launch — whether you're building an MVP or a Series-A product.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["MVP Development", "0-to-1 Product Engineering", "SaaS Product Development", "Product Strategy & Roadmapping", "User Research & Validation", "Startup Product Sprints", "CTO-as-a-Service", "Technical Co-founder Support", "Investor-ready Demos", "Post-launch Iteration"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We work as an extension of your founding team. Weekly demos. Tight feedback loops. We challenge assumptions early so you don't build the wrong thing. Every MVP we ship is architecturally sound — designed to grow, not to be thrown away.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">First-time founders who need a technical co-builder. Operators with a clear idea but no engineering team. Companies that need a product shipped in weeks, not months.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
