import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SpaceGrey" },
      { name: "description", content: "How SpaceGrey collects, uses and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `SpaceGrey ("we," "us," "our") builds AI, automation, software, and analytics solutions for agencies and brands. This Privacy Policy explains how we collect, use, and protect information when you visit our website (spacegrey.in), engage our services, or communicate with us.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: null,
    bullets: [
      "Information you provide: Name, email, company name, phone number, and project details submitted through contact forms, consultation bookings, or email.",
      "Automatically collected information: IP address, browser type, device information, pages visited, and time spent on site, collected via analytics tools (e.g., Google Analytics).",
      "Client project data: Any data shared with us during the course of a project engagement, handled under the terms of the specific project agreement/contract.",
    ],
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: null,
    bullets: [
      "To respond to inquiries and provide requested services",
      "To communicate project updates and deliverables",
      "To improve our website and services",
      "To send occasional updates about our work (only with consent, with an easy opt-out)",
      "To comply with legal obligations",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: `We use cookies and similar technologies to understand site usage and improve user experience. You can control cookie preferences through your browser settings. If you are an EU/UK visitor, a cookie consent banner applies in accordance with GDPR requirements.`,
  },
  {
    id: "sharing",
    title: "5. How We Share Your Information",
    content: "We do not sell your personal information. We may share information with:",
    bullets: [
      "Trusted third-party service providers (hosting, analytics, CRM tools) under confidentiality obligations",
      "Legal authorities, if required by law",
      "Successors, in the event of a merger or acquisition",
    ],
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law or contractual obligations with clients.`,
  },
  {
    id: "rights",
    title: "7. Your Rights & Choices",
    content: `Depending on your location, you may have rights to access, correct, delete, or export your personal data. To exercise these rights, contact us at spacegreyyy522@gmail.com.`,
  },
  {
    id: "security",
    title: "8. Data Security",
    content: `We implement industry-standard technical and organizational measures to protect your data. See our Security page for more detail on our practices.`,
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: `Our services are not directed at individuals under 18. We do not knowingly collect data from minors.`,
  },
  {
    id: "international",
    title: "10. International Data Transfers",
    content: `If you are located outside India, your information may be transferred to and processed in countries with different data protection laws. We take steps to ensure adequate protection is in place.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: `We may update this policy periodically. Material changes will be reflected with an updated "Last updated" date at the top of this page.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `Questions about this policy? Reach us at spacegreyyy522@gmail.com or write to us at SpaceGrey, Delhi, India.`,
  },
];

function PrivacyPage() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60 mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm">Last updated: August 2025</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl flex gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-32 liquid-glass rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Contents</div>
              <ul className="space-y-2">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-xs text-white/50 hover:text-white transition leading-relaxed block"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-12">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.id} delay={i * 30}>
                <div id={s.id} className="scroll-mt-32">
                  <h2 className="text-xl font-semibold text-gradient mb-4">{s.title}</h2>
                  {s.content && (
                    <p className="text-white/65 leading-[1.8] text-sm md:text-base">{s.content}</p>
                  )}
                  {s.bullets && (
                    <ul className="mt-3 space-y-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-white/65 leading-relaxed">
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
        </div>
      </section>
    </PageShell>
  );
}
