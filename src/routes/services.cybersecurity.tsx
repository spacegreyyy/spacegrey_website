import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
export const Route = createFileRoute("/services/cybersecurity")({
    head: () => ({ meta: [{ title: "Cybersecurity — SpaceGrey" }] }),
    component: CybersecurityPage,
});
function CybersecurityPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10"><ArrowLeft className="h-4 w-4" /> All Services</Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Cybersecurity</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">Security isn't a feature — it's a foundation. We audit, test and harden your systems so your customers' data stays safe and your team can ship with confidence.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Security Audits & Code Reviews", "Penetration Testing (Web & API)", "OWASP Top 10 Assessment", "Authentication & Authorisation Review", "Data Encryption Implementation", "Secure SDLC Implementation", "Infrastructure Security Review", "VAPT Reports", "Compliance Readiness (ISO 27001, SOC 2)", "Security Training for Dev Teams"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4"><CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" /><span className="text-sm text-white/75">{item}</span></div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We approach security from an attacker's perspective — systematically testing your systems before someone else does. Every audit delivers a prioritised, actionable report with clear remediation steps. We don't just find problems; we help you fix them.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Startups preparing for enterprise sales. Companies handling sensitive user data. Teams who want to build securely from day one rather than retrofit security later.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
