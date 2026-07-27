import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/portfolio/rural-stay-india")({
    head: () => ({ meta: [{ title: "Rural Stay India — Case Study | SpaceGrey" }] }),
    component: RuralStayCase,
});

function RuralStayCase() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10">
                            <ArrowLeft className="h-4 w-4" /> All Projects
                        </Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Travel · Platform</div>
                        <div className="text-sm text-white/40 mb-2">Client</div>
                        <div className="text-2xl font-semibold text-white/70 mb-4">Rural Stay India</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">
                            Website & Ongoing Tech Support
                        </h1>
                    </Reveal>
                </div>
            </section>

            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl grid md:grid-cols-3 gap-4">
                    {[["Industry", "Travel & Hospitality"], ["Service", "Web + Tech Partnership"], ["Timeline", "8 Weeks + Ongoing"], ["Year", "2025"]].map(([k, v]) => (
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
                        <p className="text-white/60 leading-relaxed">Rural Stay India was connecting urban travellers with authentic rural homestays across India — but their digital presence didn't match the quality of their experience. They needed a visually compelling website that inspired bookings, worked seamlessly on mobile and could be maintained with minimal technical overhead. They also wanted a long-term technology partner rather than a one-and-done vendor.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">What We Built</h2>
                        <p className="text-white/60 leading-relaxed">SpaceGrey designed and built a full hospitality website for Rural Stay India — warm, story-driven and conversion-optimised. The site features curated property listings, a booking inquiry flow, host profiles and an immersive visual design that communicates the uniqueness of rural India. Beyond launch, SpaceGrey provides ongoing technology support — handling updates, new feature development and platform scaling as the business grows.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Key Deliverables</h2>
                        <ul className="space-y-3">
                            {["Full website design and development", "Property listing and search functionality", "Booking inquiry and host contact flow", "Mobile-first, fast-loading design", "Image optimisation and SEO structure", "Ongoing tech support and feature development"].map(d => (
                                <li key={d} className="flex items-start gap-3 text-white/60">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />{d}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Outcome</h2>
                        <p className="text-white/60 leading-relaxed">The website launched and immediately elevated Rural Stay India's brand perception. Booking inquiries increased significantly within weeks, and the ongoing tech partnership means the platform continues to evolve with new features and capabilities as the business scales across more regions.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
