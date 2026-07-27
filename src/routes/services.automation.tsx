import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/automation")({
    head: () => ({ meta: [{ title: "Automation — SpaceGrey" }] }),
    component: AutomationPage,
});

function AutomationPage() {
    return (
        <PageShell>
            <section className="relative pt-40 pb-16 px-6">
                <div className="mx-auto max-w-4xl">
                    <Reveal>
                        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition mb-10">
                            <ArrowLeft className="h-4 w-4" /> All Services
                        </Link>
                        <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4">Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-6">Automation</h1>
                        <p className="text-lg text-white/55 max-w-2xl leading-relaxed">We automate the repetitive work that's slowing your team down — from sales workflows and CRM updates to browser tasks, API orchestration and reporting. Humans focus on what matters. Everything else runs itself.</p>
                    </Reveal>
                </div>
            </section>
            <section className="px-6 pb-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-6">What we deliver</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {["Workflow & Process Automation", "CRM Automation (Salesforce, HubSpot, Zoho)", "Lead Capture & Nurturing Automation", "Email & Follow-up Sequence Automation", "Browser & Web Scraping Automation", "API Integration & Orchestration", "HR & Onboarding Automation", "Reporting & Dashboard Automation", "n8n / Make / Zapier Implementation", "Custom Automation Pipelines"].map(item => (
                                <div key={item} className="flex items-start gap-3 glass rounded-2xl p-4">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-white/40" />
                                    <span className="text-sm text-white/75">{item}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Our approach</h2>
                        <p className="text-white/60 leading-relaxed">We map your current manual processes first — identifying the highest-ROI automation targets. Then we build reliable, monitored pipelines with error handling and alerting. Every automation we ship comes with documentation and can be maintained or extended by your team.</p>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-2xl font-semibold text-gradient mb-4">Who it's for</h2>
                        <p className="text-white/60 leading-relaxed">Growing teams drowning in manual ops work. Sales teams spending too much time on CRM data entry. Companies spending hours on weekly reports that could run themselves.</p>
                    </Reveal>
                </div>
            </section>
            <CTAStrip />
        </PageShell>
    );
}
