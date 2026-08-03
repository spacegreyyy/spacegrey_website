import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Brain, Code2, Workflow, Cpu, Database, LineChart, Cloud, Shield, Palette, Rocket } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — SpaceGrey" },
      { name: "description", content: "AI, software, automation, cloud, data and design services from SpaceGrey." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Brain, title: "Artificial Intelligence", slug: "artificial-intelligence", desc: "Foundation-model apps, agents, RAG, LLM integration, chatbots, voice AI and computer vision.", items: ["AI Consulting", "AI Agents", "RAG", "LLM Integration", "Chatbots", "Voice AI", "Computer Vision"] },
  { icon: Code2, title: "Software Development", slug: "software-development", desc: "Enterprise-grade web, SaaS, mobile, desktop and API platforms.", items: ["Web Apps", "Enterprise Software", "SaaS", "Mobile Apps", "Desktop Apps", "APIs"] },
  { icon: Rocket, title: "Product Development", slug: "product-development", desc: "MVPs, 0→1 products, product engineering and CTO-as-a-Service.", items: ["MVP", "Startup Products", "SaaS Products", "CTO-as-a-Service"] },
  { icon: Workflow, title: "Automation", slug: "automation", desc: "Workflow, business, browser, API, CRM and HR automation.", items: ["Workflow", "Business", "Browser", "API", "CRM", "HR"] },
  { icon: LineChart, title: "Data & Analytics", slug: "data-analytics", desc: "Data engineering, ETL, dashboards, BI, Power BI and Tableau.", items: ["Data Engineering", "ETL", "Dashboards", "BI", "Power BI", "Tableau"] },
  { icon: Cpu, title: "Machine Learning", slug: "machine-learning", desc: "Predictive models, NLP, recommendations, fraud detection, OCR, forecasting.", items: ["Predictive", "NLP", "Recommendations", "Fraud", "OCR", "Forecasting"] },
  { icon: Cloud, title: "Cloud & DevOps", slug: "cloud-devops", desc: "AWS, Azure, GCP, Docker, Kubernetes and CI/CD.", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"] },
  { icon: Palette, title: "UI/UX Design", slug: "ui-ux-design", desc: "Product, dashboard, mobile and website design.", items: ["Product", "Dashboard", "Mobile", "Website"] },
  { icon: Shield, title: "Cybersecurity", slug: "cybersecurity", desc: "Security audits, penetration testing and secure development.", items: ["Audits", "Pen Testing", "Secure SDLC"] },
  { icon: Database, title: "Technology Consulting", slug: "technology-consulting", desc: "Digital transformation, CTO advisory, product and AI strategy.", items: ["Digital Transformation", "CTO Advisory", "Product Strategy", "AI Strategy"] },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Ten disciplines. One team."
        subtitle="From foundation-model AI to enterprise platforms and design systems — engineered end-to-end by a single, senior team."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <Link
                to={`/services/${s.slug}` as any}
                className="group relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 block hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 border border-white/10">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                </div>
                <h3 className="mt-8 text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gradient">{s.title}</h3>
                <p className="mt-3 text-white/55 leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">{it}</span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTAStrip />
    </PageShell>
  );
}
