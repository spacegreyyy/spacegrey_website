import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/software-development")({
    head: () => ({ meta: [{ title: "Software Development — SpaceGrey" }] }),
    component: SoftwareDevPage,
});

function SoftwareDevPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10">
                            <ArrowLeft className="h-4 w-4" /> All Services
                        </Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Software Development</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Enterprise-grade web applications, SaaS platforms, APIs and mobile apps — built with modern stacks and engineered to scale without re-writes.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Web Application Development", "Enterprise Platform Engineering", "SaaS Product Development", "REST & GraphQL API Design", "Mobile App Development (iOS & Android)", "Desktop Application Development", "Third-party Integrations", "Legacy System Modernisation", "Performance Optimisation", "Technical Architecture Design"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />
                                    <span className="text-sm text-white/75">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We build with TypeScript on the frontend and backend by default — it reduces bugs, improves collaboration and makes future maintenance significantly cheaper. Every project ships with automated tests, CI/CD pipelines and observability from day one. We treat code as a long-term asset, not a deliverable.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Founders building their first product. Enterprises replacing legacy systems. Teams that need senior engineering muscle to ship something complex, fast.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
