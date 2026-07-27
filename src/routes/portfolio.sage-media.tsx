import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/portfolio/sage-media")({
    head: () => ({ meta: [{ title: "Sage Media — Case Study | SpaceGrey" }] }),
    component: Page,
});
function Page() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Projects</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Media · Web Development</div>
                        <div className="text-sm text-white/40 mb-2">Client</div>
                        <div className="text-2xl font-semibold text-white/70 mb-4">Sage Media</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95]">End-to-End Website</h1>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl grid sm:grid-cols-4 gap-4">
                    {[["Industry", "Media & Publishing"], ["Service", "Web Development"], ["Timeline", "6 Weeks"], ["Year", "2025"]].map(([k, v]) => (
                        <Reveal key={k}><div className="glass rounded-2xl p-5"><div className="text-xs uppercase tracking-[0.2em] text-white/40">{k}</div><div className="mt-1 font-medium">{v}</div></div></Reveal>
                    ))}
                </div>
            </section>
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">The Challenge</h2>
                        <p className="text-white/60 leading-relaxed">Sage Media had an outdated digital presence that didn't reflect their growing authority as a modern media brand. They needed a high-performance website that communicated credibility, drove audience engagement and was easy for their team to manage — without relying on developers for every update.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">What We Built</h2>
                        <p className="text-white/60 leading-relaxed">SpaceGrey designed and developed a complete end-to-end website for Sage Media — from brand alignment and UI/UX design to full-stack development and deployment. The site includes a dynamic CMS, category-based article pages, a newsletter integration and optimised performance across all devices.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Key Deliverables</h2>
                        <ul className="space-y-3">
                            {["Custom UI/UX design aligned to brand identity", "Responsive, mobile-first frontend", "CMS integration for easy content publishing", "SEO-optimised article and category pages", "Newsletter subscription flow", "Sub-2s page load performance"].map(d => (
                                <li key={d} className="flex items-start gap-3 text-white/60"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />{d}</li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Outcome</h2>
                        <p className="text-white/60 leading-relaxed">The new website launched on time and was immediately well-received by Sage Media's audience. Organic traffic improved within the first month due to improved SEO structure, and the editorial team reported a significant reduction in time-to-publish thanks to the streamlined CMS.</p>
                    </Reveal>
                    <Reveal>
                        <div className="glass rounded-3xl p-8 border border-white/10">
                            <p className="text-white/80 text-lg leading-relaxed italic">"SpaceGrey transformed our online presence. The website they built is sleek, fast and exactly what our brand needed."</p>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 grid place-items-center text-sm font-semibold text-gradient">RA</div>
                                <div><div className="text-sm font-medium">Rahul Arora</div><div className="text-xs text-white/40">Founder, Sage Media</div></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
