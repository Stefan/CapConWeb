"use client";

import { Users } from "lucide-react";

import { useSite } from "@/components/providers/site-provider";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

export function AudienceSection() {
  const { dict } = useSite();
  const { audience } = dict;

  return (
    <section
      id="audience"
      className="py-20 sm:py-28"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow={audience.eyebrow}
            titleId="audience-heading"
            title={audience.title}
            description={audience.description}
            align="center"
          />
        </FadeIn>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {audience.personas.map((persona, index) => (
            <FadeIn key={persona.title} delay={index * 0.1} as="li">
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <Users className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-navy-950">
                  {persona.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {persona.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
