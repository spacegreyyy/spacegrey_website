import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import {
  Heart, Landmark, ShoppingBag, Factory, GraduationCap,
  Building2, Scale, Home, Truck, Clapperboard, ShieldCheck, Car,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — SpaceGrey" },
      { name: "description", content: "Domain expertise across healthcare, finance, retail, manufacturing and more." },
      { property: "og:title", content: "Industries — SpaceGrey" },
      { property: "og:description", content: "Twelve industries. Deep domain fluency." },
    ],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  {
    name: "Healthcare",
    Icon: Heart,
    desc: "Patient management systems, AI-powered diagnostics support, appointment automation, HIPAA-compliant data pipelines, and hospital operations dashboards.",
    services: ["AI & ML", "Software Development", "Automation", "Data & Analytics"],
  },
  {
    name: "Finance",
    Icon: Landmark,
    desc: "Fraud detection models, algorithmic reporting tools, KYC/AML automation, real-time analytics dashboards, and secure fintech platform development.",
    services: ["Machine Learning", "Cybersecurity", "Automation", "Data & Analytics"],
  },
  {
    name: "Retail",
    Icon: ShoppingBag,
    desc: "E-commerce platforms, demand forecasting, personalised recommendation engines, inventory automation, and customer behaviour analytics.",
    services: ["Software Development", "ML & AI", "Automation", "UI/UX Design"],
  },
  {
    name: "Manufacturing",
    Icon: Factory,
    desc: "Predictive maintenance models, supply chain visibility dashboards, IoT data pipelines, ERP integrations, and production ops automation.",
    services: ["Machine Learning", "Cloud & DevOps", "Data & Analytics", "Automation"],
  },
  {
    name: "Education",
    Icon: GraduationCap,
    desc: "LMS platforms, AI tutoring systems, student performance analytics, content automation, and institution management portals.",
    services: ["AI & ML", "Product Development", "Software Development", "Automation"],
  },
  {
    name: "Government",
    Icon: Building2,
    desc: "Citizen-facing portals, document processing automation, compliance reporting, secure infrastructure, and public-sector analytics dashboards.",
    services: ["Software Development", "Cybersecurity", "Automation", "Cloud & DevOps"],
  },
  {
    name: "Legal",
    Icon: Scale,
    desc: "Contract intelligence (AI extraction & summarisation), legal research automation, case management systems, and document workflow tooling.",
    services: ["Artificial Intelligence", "Automation", "Software Development", "Data & Analytics"],
  },
  {
    name: "Real Estate",
    Icon: Home,
    desc: "Property listing platforms, valuation models, CRM automation, lead scoring, and market trend analytics dashboards.",
    services: ["Software Development", "ML & AI", "Automation", "UI/UX Design"],
  },
  {
    name: "Logistics",
    Icon: Truck,
    desc: "Route optimisation models, real-time fleet tracking systems, warehouse automation, delivery analytics, and supply chain visibility platforms.",
    services: ["Machine Learning", "Cloud & DevOps", "Automation", "Data & Analytics"],
  },
  {
    name: "Media",
    Icon: Clapperboard,
    desc: "Content management systems, AI-driven content generation tools, audience analytics, SEO automation, and custom publishing platforms.",
    services: ["Software Development", "AI & ML", "Automation", "UI/UX Design"],
  },
  {
    name: "Insurance",
    Icon: ShieldCheck,
    desc: "Underwriting automation, claims processing ML models, fraud detection, regulatory reporting pipelines, and policyholder portals.",
    services: ["Machine Learning", "Automation", "Cybersecurity", "Data & Analytics"],
  },
  {
    name: "Automotive / EV",
    Icon: Car,
    desc: "Sales analysis platforms, dealership CRM systems, EV fleet management dashboards, customer journey automation, and service scheduling tools.",
    services: ["Software Development", "Data & Analytics", "Automation", "Product Development"],
  },
];

function IndustriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Domain-fluent, end-to-end."
        subtitle="We embed with your team, learn your domain, and ship software that speaks your language."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map(({ name, Icon, desc, services }, i) => (
            <Reveal key={name} delay={i * 40}>
              <div className="group liquid-glass rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="grid h-12 w-12 place-items-center rounded-2xl liquid-glass mb-6">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-semibold tracking-[-0.01em] mb-3">{name}</div>
                <p className="text-sm text-white/55 leading-relaxed flex-1">{desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span key={s} className="rounded-full liquid-glass px-3 py-1 text-[11px] text-white/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
