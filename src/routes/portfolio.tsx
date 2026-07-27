import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SpaceGrey" },
      { name: "description", content: "Case studies from SpaceGrey — websites, analytics, automation and more." },
    ],
  }),
  component: PortfolioPage,
});

export const CASES = [
  {
    slug: "sage-media",
    project: "End-to-End Website",
    client: "Sage Media",
    tag: "Media · Web Development",
    brief: "A complete, modern website built from scratch for a fast-growing media brand.",
  },
  {
    slug: "saiesha-e-vehicles",
    project: "Complete Sales Analysis Platform",
    client: "Saiesha E-Vehicles",
    tag: "Automotive · Analytics",
    brief: "A full sales intelligence system tracking performance across all channels.",
  },
  {
    slug: "finn-fintech",
    project: "Website, Sales Analysis & Automation",
    client: "Finn Fintech",
    tag: "Fintech · Full-Stack",
    brief: "Zero-to-one website, analytics dashboard and automated growth tooling.",
  },
  {
    slug: "bharat-fintech",
    project: "Website, Sales Analysis & Automation",
    client: "Bharat Fintech",
    tag: "Fintech · Full-Stack",
    brief: "Complete digital presence with integrated analytics and automation stack.",
  },
  {
    slug: "rural-stay-india",
    project: "Website & Ongoing Tech Support",
    client: "Rural Stay India",
    tag: "Travel · Platform",
    brief: "A hospitality platform website with a long-term technology partnership.",
  },
  {
    slug: "vaibhav-oxygens",
    project: "Website, Sales Analysis & Automation",
    client: "Vaibhav Oxygens",
    tag: "Healthcare · Full-Stack",
    brief: "Full digital transformation — website, analytics and operational automation.",
  },
];

function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Portfolio"
        title="Work that ships."
        subtitle="Selected projects across web, analytics, automation and digital transformation."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                to={`/portfolio/${c.slug}` as any}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">{c.tag}</div>
                <div className="flex-1">
                  <div className="text-xs text-white/35 mb-1">{c.client}</div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-gradient leading-snug">{c.project}</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">{c.brief}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
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
