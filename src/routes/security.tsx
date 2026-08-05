import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Lock, Server, Users, Code2, Bell, AlertTriangle, Mail } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — SpaceGrey" },
      { name: "description", content: "How SpaceGrey secures your data and systems." },
    ],
  }),
  component: SecurityPage,
});

const SECTIONS = [
  {
    id: "approach",
    icon: ShieldCheck,
    title: "Our Approach to Security",
    content: `Security isn't an afterthought at SpaceGrey — it's built into how we design, develop, and deploy every system we build, for our own operations and for our clients' projects.`,
  },
  {
    id: "data-protection",
    icon: Lock,
    title: "Data Protection Practices",
    bullets: [
      "Data encrypted in transit (TLS/SSL) and at rest where applicable",
      "Access to client data restricted to team members directly involved in the relevant project",
      "Regular review of third-party tools and vendors for security compliance",
    ],
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "Infrastructure Security",
    bullets: [
      "Hosting on reputable, security-audited cloud providers (AWS, Vercel, GCP)",
      "Environment separation between development, staging, and production systems",
      "Regular dependency and vulnerability scanning across codebases we maintain",
    ],
  },
  {
    id: "access-control",
    icon: Users,
    title: "Access Control",
    bullets: [
      "Role-based access control on internal tools and client systems",
      "Multi-factor authentication enforced on critical accounts and admin panels",
      "Immediate access revocation upon team member offboarding or project completion",
    ],
  },
  {
    id: "secure-dev",
    icon: Code2,
    title: "Secure Development Practices",
    bullets: [
      "Code review process before every deployment",
      "Secrets and credentials managed via secure environment variables, never hardcoded",
      "Regular audits of authentication and authorization logic in client-facing applications",
    ],
  },
  {
    id: "incident-response",
    icon: Bell,
    title: "Incident Response",
    content: `In the event of a security incident affecting client data, we commit to prompt investigation, containment, and transparent communication with affected parties within 72 hours of discovery.`,
  },
  {
    id: "reporting",
    icon: AlertTriangle,
    title: "Reporting a Vulnerability",
    content: `If you discover a security vulnerability related to our website or systems, please report it responsibly to spacegreyyy522@gmail.com. We appreciate responsible disclosure and will respond promptly.`,
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: `For security-related questions or concerns: spacegreyyy522@gmail.com`,
  },
];

function SecurityPage() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60 mb-6">
              Security
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Security
            </h1>
            <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
              How we protect your data, systems and trust — by default.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl grid sm:grid-cols-2 gap-5">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 50}>
              <div id={s.id} className="liquid-glass rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl liquid-glass shrink-0">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <h2 className="text-lg font-semibold">{s.title}</h2>
                </div>
                {s.content && (
                  <p className="text-white/60 leading-relaxed text-sm">{s.content}</p>
                )}
                {s.bullets && (
                  <ul className="space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/30 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
