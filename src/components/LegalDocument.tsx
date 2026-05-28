import type { LegalDocumentMeta, LegalSection } from "@/content/legal-types";

function SectionBlock({ section }: { section: LegalSection }) {
  return (
    <section id={section.id} className="scroll-mt-24 space-y-4">
      <h2 className="text-lg font-semibold text-white">{section.title}</h2>
      {section.paragraphs?.map((p) => (
        <p key={p.slice(0, 48)} className="leading-relaxed text-brand-muted">
          {p}
        </p>
      ))}
      {section.bullets ? (
        <ul className="list-disc space-y-2 pl-5 text-brand-muted">
          {section.bullets.map((b) => (
            <li key={b.slice(0, 48)} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.map((sub) => (
        <div key={sub.title} className="space-y-3 border-l-2 border-brand-pink/40 pl-4">
          <h3 className="text-base font-medium text-white">{sub.title}</h3>
          {sub.paragraphs?.map((p) => (
            <p key={p.slice(0, 48)} className="leading-relaxed text-brand-muted">
              {p}
            </p>
          ))}
          {sub.bullets ? (
            <ul className="list-disc space-y-2 pl-5 text-brand-muted">
              {sub.bullets.map((b) => (
                <li key={b.slice(0, 48)} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}

type LegalDocumentProps = {
  meta: LegalDocumentMeta;
  sections: LegalSection[];
};

export function LegalDocument({ meta, sections }: LegalDocumentProps) {
  return (
    <article className="space-y-10">
      <header className="space-y-2 border-b border-white/10 pb-8">
        <p className="text-sm font-medium brand-gradient-text">{meta.productName}</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white">{meta.title}</h1>
        <p className="text-sm text-brand-muted">
          Effective Date: {meta.effectiveDate}
          <br />
          Last Updated: {meta.lastUpdated}
        </p>
      </header>

      {sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}

      <section className="rounded-xl border border-white/10 bg-brand-surface p-6">
        <p className="text-sm text-brand-muted">
          Email:{" "}
          <a
            className="font-medium text-white underline decoration-brand-pink/60 underline-offset-2 hover:decoration-brand-orange"
            href={`mailto:${meta.contactEmail}`}
          >
            {meta.contactEmail}
          </a>
        </p>
        <p className="mt-2 text-sm text-brand-muted">
          {meta.company}
          <br />
          {meta.copyright}
        </p>
      </section>
    </article>
  );
}
