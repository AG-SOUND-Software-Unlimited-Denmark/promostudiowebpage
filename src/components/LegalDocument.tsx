import type { LegalDocumentMeta, LegalSection } from "@/content/legal-types";

function SectionBlock({ section }: { section: LegalSection }) {
  return (
    <section id={section.id} className="scroll-mt-24 space-y-4">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{section.title}</h2>
      {section.paragraphs?.map((p) => (
        <p key={p.slice(0, 48)} className="leading-relaxed text-zinc-600 dark:text-zinc-300">
          {p}
        </p>
      ))}
      {section.bullets ? (
        <ul className="list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-300">
          {section.bullets.map((b) => (
            <li key={b.slice(0, 48)} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.map((sub) => (
        <div key={sub.title} className="space-y-3 border-l-2 border-zinc-200 pl-4 dark:border-zinc-700">
          <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-100">{sub.title}</h3>
          {sub.paragraphs?.map((p) => (
            <p key={p.slice(0, 48)} className="leading-relaxed text-zinc-600 dark:text-zinc-300">
              {p}
            </p>
          ))}
          {sub.bullets ? (
            <ul className="list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-300">
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
      <header className="space-y-2 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{meta.productName}</p>
        <h1 className="text-3xl font-semibold tracking-tight">{meta.title}</h1>
        <p className="text-sm text-zinc-500">
          Effective Date: {meta.effectiveDate}
          <br />
          Last Updated: {meta.lastUpdated}
        </p>
      </header>

      {sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}

      <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Email:{" "}
          <a
            className="font-medium text-zinc-900 underline dark:text-zinc-50"
            href={`mailto:${meta.contactEmail}`}
          >
            {meta.contactEmail}
          </a>
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          {meta.company}
          <br />
          {meta.copyright}
        </p>
      </section>
    </article>
  );
}
