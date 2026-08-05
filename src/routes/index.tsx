import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Sparkles, Brain, Code2, Workflow, Database, Cloud, Shield, Palette, Rocket, Cpu, Layers, Zap, CircleDot, Star } from "lucide-react";
import { PageShell, CTAStrip } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { SpaceBackground } from "@/components/SpaceBackground";
import orbit from "@/assets/spacegrey-orbit.png";
import heroBg from "@/assets/hero-bg.mp4";
import heroBgMobile from "@/assets/hero-bg-mobile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpaceGrey — Engineering the Invisible Advantage" },
      {
        name: "description",
        content:
          "SpaceGrey is an AI-first digital engineering company based in Delhi, India. We build AI systems, enterprise software, automation and analytics for startups and enterprises.",
      },
      { property: "og:title", content: "SpaceGrey — Engineering the Invisible Advantage" },
      {
        property: "og:description",
        content:
          "AI systems, enterprise software, automation and analytics for teams building the future.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Brain, title: "Artificial Intelligence", slug: "artificial-intelligence", desc: "Foundation-model apps, agents, RAG and multimodal systems." },
  { icon: Code2, title: "Software Development", slug: "software-development", desc: "Enterprise-grade web, SaaS and API platforms built to scale." },
  { icon: Workflow, title: "Automation", slug: "automation", desc: "Workflow, browser and business automation across your stack." },
  { icon: Cpu, title: "Machine Learning", slug: "machine-learning", desc: "Forecasting, recommendation, NLP and computer vision." },
  { icon: Database, title: "Data & Analytics", slug: "data-analytics", desc: "Pipelines, warehouses, dashboards and BI." },
  { icon: Cloud, title: "Cloud & DevOps", slug: "cloud-devops", desc: "AWS, GCP, Azure. Kubernetes, CI/CD and platform engineering." },
  { icon: Shield, title: "Cybersecurity", slug: "cybersecurity", desc: "Secure development, audits and compliance." },
  { icon: Palette, title: "UI / UX Design", slug: "ui-ux-design", desc: "Product, dashboard and design-system engineering." },
  { icon: Rocket, title: "Product Development", slug: "product-development", desc: "MVPs, 0→1 products and CTO-as-a-Service." },
  { icon: Layers, title: "Technology Consulting", slug: "technology-consulting", desc: "Digital, AI and product strategy for leadership teams." },
];

const SOLUTIONS = [
  { slug: "ai-solutions", title: "Enterprise AI", desc: "Deploy foundation models, agents and copilots inside secure enterprise workflows." },
  { slug: "ai-solutions", title: "RAG Systems", desc: "Retrieval-augmented generation over your private data — accurate, cited, fast." },
  { slug: "ai-solutions", title: "AI Agents", desc: "Autonomous, tool-using agents that operate across CRMs, browsers and APIs." },
  { slug: "automation-solutions", title: "Workflow Automation", desc: "End-to-end automation across ops, sales, marketing and support." },
  { slug: "saas-solutions", title: "SaaS Platforms", desc: "Multi-tenant SaaS products engineered for scale from day one." },
  { slug: "analytics-solutions", title: "Analytics", desc: "Real-time dashboards and BI powered by warehouses and streaming data." },
];

const REASONS = [
  { t: "AI-first", d: "Every system we ship is designed around intelligence, not bolted on." },
  { t: "Enterprise Quality", d: "SOC-grade engineering, code review and observability by default." },
  { t: "Dedicated Teams", d: "Senior engineers, designers and PMs — no throw-away contractors." },
  { t: "Modern Stack", d: "TypeScript, Python, Rust, Kubernetes, LLMs and streaming systems." },
  { t: "Scalable Architecture", d: "Systems designed for the load you'll have in three years." },
  { t: "Fast Delivery", d: "Weekly demos. Continuous deployment. Zero surprises." },
  { t: "Security Focused", d: "Encryption, secure SDLC, threat modelling and compliance from day one." },
  { t: "Long-term Support", d: "We stay with you after launch — maintenance, evolution, scale." },
];

const PROCESS = [
  "Discovery", "Strategy", "Design", "Development", "Testing", "Deployment", "Support",
];

const CASES = [
  { slug: "sage-media", title: "End-to-End Website", client: "Sage Media", tag: "Media · Web", desc: "Full website built from ground up for a fast-growing media company." },
  { slug: "saiesha-e-vehicles", title: "Complete Sales Analysis Platform", client: "Saiesha E-Vehicles", tag: "Automotive · Analytics", desc: "End-to-end sales analysis system for an EV startup scaling across India." },
  { slug: "finn-fintech", title: "Website, Sales Analysis & Automation", client: "Finn Fintech", tag: "Fintech · Full-Stack", desc: "0-to-1 website, sales analytics dashboard and growth automation tools." },
  { slug: "bharat-fintech", title: "Website, Sales Analysis & Automation", client: "Bharat Fintech", tag: "Fintech · Full-Stack", desc: "Complete digital presence with integrated analytics and automation stack." },
  { slug: "rural-stay-india", title: "Website & Future Tech Support", client: "Rural Stay India", tag: "Travel · Platform", desc: "End-to-end hospitality website with ongoing technical partnership." },
  { slug: "vaibhav-oxygens", title: "Website, Sales Analysis & Automation", client: "Vaibhav Oxygens", tag: "Healthcare · Full-Stack", desc: "Digital transformation with a new website, sales tools and automation." },
];

const TESTIMONIALS = [
  { q: "SpaceGrey transformed our online presence. The website they built is sleek, fast and exactly what our brand needed.", n: "Rahul Arora", r: "Founder, Sage Media" },
  { q: "The sales analysis platform they built gave us visibility we never had before. Data-driven decisions are now our default.", n: "Mahesh Kumar Nagpal", r: "Founder, Saiesha E-Vehicles" },
  { q: "SpaceGrey built our website from scratch, set up our analytics and automated key sales workflows — all in record time.", n: "Panjak Saluja", r: "CEO, Finn Fintech" },
  { q: "Their work on our digital infrastructure gave us the foundation to scale. Reliable, clean and exactly on brief.", n: "Deepak Verma", r: "Founder, Bharat Fintech" },
  { q: "They understood our hospitality vision immediately. The website is beautiful and the tech support ongoing has been excellent.", n: "Ashish Sharma", r: "Founder, Rural Stay India" },
  { q: "SpaceGrey digitised our operations end-to-end. Website, analytics, automation — delivered without a single hiccup.", n: "Vaibhav Arora", r: "Director, Vaibhav Oxygens" },
];

const FAQS = [
  ["How quickly can we start?", "Discovery in 3–5 days. A dedicated team assembled within two weeks."],
  ["Do you work with startups or enterprises?", "Both. From YC-stage MVPs to Fortune 500 platform teams."],
  ["Who owns the IP?", "You do — always. Full source, infra and documentation transfer."],
  ["Can you augment our existing team?", "Yes. Embedded pods, staff-plus engineers or full delivery teams."],
  ["What about post-launch?", "We offer 24/7 support, SLAs and ongoing product evolution."],
];

function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-clip">
      {/* Video background — all devices */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src={heroBg}
      />
      {/* Dark overlay for legibility */}
      <div className="fixed inset-0 z-[1] bg-black/30" />
      <SpaceBackground withOrbits />
      <TopNav />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <WhoWeAre />
        <Services />
        <Solutions />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTAStrip />
      </main>
      <FooterEl />
    </div>
  );
}

// re-import to keep tree-shake clean above
import { Navbar as TopNav } from "@/components/Navbar";
import { Footer as FooterEl } from "@/components/Footer";

/* ----------------- HERO ----------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-6 pt-24">
      <div className="relative z-[3] max-w-6xl mx-auto text-center">
        <Reveal>
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/70">
            <Sparkles className="h-3 w-3" />
            AI-first Digital Engineering
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 text-[clamp(3rem,10vw,9rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-gradient">
            Engineering
            <br />
            the Invisible
            <br />
            Advantage.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-10 mx-auto max-w-2xl text-base md:text-lg text-white/55 leading-relaxed">
            SpaceGrey builds AI systems, enterprise software, automation platforms and analytics
            solutions for startups and global enterprises.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book-a-call"
              className="group liquid-glass-strong inline-flex items-center gap-2 rounded-full bg-white/90 text-black px-6 py-3.5 text-sm font-medium hover:scale-[1.02] transition"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm text-white hover:bg-white/[0.06] transition"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={460}>
          <div className="mt-20 flex items-center justify-center gap-8 text-[11px] uppercase tracking-[0.25em] text-white/35">
            <span className="flex items-center gap-2"><CircleDot className="h-3 w-3" /> Systems online</span>
            <span className="hidden md:inline">Delhi, India</span>
            <span className="hidden md:inline">AI · Software · Automation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------- STATS ----------------- */
function Stats() {
  const stats = [
    { n: 6, s: "+", label: "Projects Delivered" },
    { n: 5, s: "+", label: "Industries Served" },
    { n: 100, s: "%", label: "Client Satisfaction" },
    { n: 24, s: "/7", label: "Client Support" },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-px liquid-glass rounded-3xl overflow-hidden">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="p-6 md:p-10 lg:p-14 text-center h-full">
              <div className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.04em] text-gradient">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/40 leading-snug">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------- WHO WE ARE ----------------- */
function WhoWeAre() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square liquid-glass rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 grid place-items-center">
              <img src={orbit} alt="" className="w-3/4 invert opacity-90 animate-orbit-slow" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,black_80%)]" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">Est. 2025</div>
                <div className="mt-2 text-2xl font-semibold">SpaceGrey</div>
              </div>
              <div className="text-xs text-white/40">Delhi, India</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Who we are</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.03em] text-gradient">
              A studio of engineers, designers and researchers.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-white/55 leading-relaxed max-w-lg">
              We partner with ambitious teams to design and engineer software that thinks. From
              foundation-model applications to enterprise platforms, our work spans the entire
              lifecycle — research, design, engineering and scale.
            </p>
          </Reveal>
          <div className="mt-10 space-y-6">
            {[
              ["Mission", "Compress the distance between an idea and a shipped, intelligent product."],
              ["Vision", "A world where every enterprise runs on AI-native software."],
              ["Values", "Craft. Clarity. Compounding quality."],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={180 + i * 100}>
                <div className="flex gap-6 pb-6 border-b border-white/[0.08]">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40 w-24 pt-1">{k}</div>
                  <div className="flex-1 text-white/80">{v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- SERVICES ----------------- */
function Services() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Services"
          title="Everything you need to build modern software."
          sub="Twelve disciplines. One team. Delivered end-to-end."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <Link
                to={`/services/${s.slug}` as any}
                className="group relative block h-full liquid-glass rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl liquid-glass">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                  </div>
                  <div className="mt-8 text-lg font-medium">{s.title}</div>
                  <div className="mt-2 text-sm text-white/50 leading-relaxed">{s.desc}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- SOLUTIONS ----------------- */
function Solutions() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="Featured Solutions" title="Systems that ship real outcomes." sub="Turnkey solutions across AI, automation and data." />
        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Link
                to={`/solutions/${s.slug}` as any}
                className="group relative overflow-hidden liquid-glass rounded-3xl p-10 hover:bg-white/[0.04] transition block"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gradient">{s.title}</div>
                    <p className="mt-3 text-white/55 max-w-md leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 group-hover:bg-white group-hover:text-black transition">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- WHY US ----------------- */
function WhyUs() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="Why SpaceGrey" title="A different bar for software." sub="Eight reasons teams choose us over traditional agencies." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px liquid-glass rounded-3xl overflow-hidden">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={i * 60}>
              <div className="p-8 h-full hover:bg-white/[0.04] transition">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Zap className="h-3.5 w-3.5" /> 0{i + 1}
                </div>
                <div className="mt-6 text-lg font-medium">{r.t}</div>
                <div className="mt-2 text-sm text-white/50 leading-relaxed">{r.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- PROCESS ----------------- */
function Process() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="Our Process" title="From discovery to scale, in seven stages." sub="A predictable rhythm. Weekly demos. Zero surprises." />
        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
            {PROCESS.map((step, i) => (
              <Reveal key={step} delay={i * 80}>
                <div className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full liquid-glass relative">
                    <span className="text-lg font-semibold text-gradient">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-4 text-sm text-white/80">{step}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- PORTFOLIO ----------------- */
function Portfolio() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow="Selected Work" title="Work that ships." />
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {CASES.slice(0, 4).map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link
                to={`/portfolio/${c.slug}` as any}
                className="group flex flex-col liquid-glass rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4">{c.tag}</div>
                <div className="text-xs text-white/35 mb-1">{c.client}</div>
                <div className="text-2xl font-semibold tracking-[-0.02em] text-gradient">{c.title}</div>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 group-hover:text-white transition">
                  Read case study
                  <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition link-underline">
            View all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------- TESTIMONIALS ----------------- */
function Testimonials() {
  return (
    <section className="py-32">
      <div className="px-6">
        <SectionHead eyebrow="Testimonials" title="Words from the teams we build with." />
      </div>
      <div className="mt-16 relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 animate-marquee w-max">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="w-[420px] shrink-0 liquid-glass rounded-3xl p-8">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />)}
              </div>
              <p className="mt-6 text-white/85 leading-relaxed">"{t.q}"</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
                <div>
                  <div className="text-sm">{t.n}</div>
                  <div className="text-xs text-white/40">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- FAQ ----------------- */
function FAQ() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHead eyebrow="FAQ" title="Answers, up front." />
        <div className="mt-16 space-y-3">
          {FAQS.map(([q, a], i) => (
            <Reveal key={q} delay={i * 60}>
              <details className="group liquid-glass rounded-3xl p-6 open:bg-white/[0.04] transition">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-base md:text-lg text-white/90 font-medium">{q}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 text-white/70 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-4 text-white/55 leading-relaxed">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- Section Head ----------------- */
function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${a} max-w-3xl`}>
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60">
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.035em] text-gradient leading-[1.02]">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={180}>
          <p className="mt-5 text-white/50 text-base md:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
