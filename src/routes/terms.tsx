import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — SpaceGrey" },
      { name: "description", content: "Terms governing the use of SpaceGrey's services." },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing our website or engaging SpaceGrey for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`,
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: `SpaceGrey provides software development, AI, automation, data & analytics, product development, UI/UX design, and technical consulting services, as further defined in individual project agreements / statements of work (SOWs) with each client.`,
  },
  {
    id: "client-responsibilities",
    title: "3. Client Responsibilities",
    content: `Clients agree to provide timely access to necessary information, assets, feedback, and approvals required to complete a project. Delays caused by incomplete client input may affect agreed timelines.`,
  },
  {
    id: "ip",
    title: "4. Intellectual Property",
    content: null,
    bullets: [
      "Unless otherwise stated in a signed project agreement, ownership of custom deliverables transfers to the client upon full payment.",
      "SpaceGrey retains the right to reuse general methodologies, frameworks, and non-confidential learnings across other projects.",
      "Any pre-existing tools, libraries, or frameworks used in delivery remain the property of their original owners/licensors.",
    ],
  },
  {
    id: "payment",
    title: "5. Payment Terms",
    content: `Payment terms (deposits, milestones, invoicing schedule) are defined per project in the relevant SOW or contract. Late payments may result in paused work or additional fees, as specified in the individual agreement.`,
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    content: `Both parties agree to keep confidential information shared during the engagement private, and not disclose it to third parties without consent, except as required by law.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by law, SpaceGrey's liability for any claim arising from our services is limited to the amount paid by the client for the specific service in question. We are not liable for indirect, incidental, or consequential damages.`,
  },
  {
    id: "warranties",
    title: "8. Warranties & Disclaimers",
    content: `Services are provided on an "as-is" basis. While we strive for high-quality, reliable delivery, we do not guarantee that software will be entirely free of bugs or that automated/AI systems will perform with zero error, given the inherent nature of these technologies.`,
  },
  {
    id: "termination",
    title: "9. Termination",
    content: `Either party may terminate an engagement per the terms outlined in the specific project agreement. Work completed up to the termination date will be billed accordingly.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: `These terms are governed by the laws of India, without regard to conflict of law principles.`,
  },
  {
    id: "changes",
    title: "11. Changes to Terms",
    content: `We may update these Terms periodically. Continued use of our services after changes constitutes acceptance of the updated terms.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `Questions about these terms? Reach us at spacegreyyy522@gmail.com.`,
  },
];

function TermsPage() {
  return (
    <PageShell>
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60 mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-gradient leading-[0.95] mb-4">
              Terms of Service
            </h1>
            <p className="text-white/40 text-sm">Last updated: August 2025</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl liquid-glass px-4 py-2 text-xs text-amber-400/80">
              ⚠️ This is a structural template. Please have it reviewed by a lawyer before publishing.
            </div>
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
