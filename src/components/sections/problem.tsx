"use client";

import { useSite } from "@/components/providers/site-provider";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { painPointIcons } from "@/lib/content-icons";

export function ProblemSection() {
  const { dict } = useSite();
  const { problem } = dict;

  return (
    <section
      id="problem"
      className="bg-navy-950 py-20 sm:py-28"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            titleId="problem-heading"
            title={problem.title}
            description={problem.description}
            align="center"
            className="[&_h2]:text-white [&_p]:text-slate-400"
          />
        </FadeIn>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problem.items.map((point, index) => {
            const Icon = painPointIcons[point.id];
            return (
              <FadeIn key={point.id} delay={index * 0.08} as="li">
                <article className="h-full rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                    {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
