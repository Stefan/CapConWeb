import Link from "next/link";

import { interpolateLegalText } from "@/lib/interpolate-legal";

import type { LegalSection } from "@/i18n/types";

type LegalDocumentProps = {
  title: string;
  sections: LegalSection[];
  backLabel: string;
  backHref: string;
};

export function LegalDocument({
  title,
  sections,
  backLabel,
  backHref,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 lg:px-8">
      <Link
        href={backHref}
        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        ← {backLabel}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy-950">
        {title}
      </h1>
      <div className="mt-10 space-y-8">
        {sections.map((section) => {
          const paragraphs = section.paragraphs
            .map((paragraph) => interpolateLegalText(paragraph))
            .filter(Boolean);
          if (paragraphs.length === 0) return null;

          return (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-navy-950">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                {paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
}
