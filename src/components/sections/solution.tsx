"use client";

import { useSite } from "@/components/providers/site-provider";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

export function SolutionSection() {
  const { dict } = useSite();
  const { solution } = dict;

  return (
    <section
      id="solution"
      className="py-20 sm:py-28"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeader
              eyebrow={solution.eyebrow}
              titleId="solution-heading"
              title={solution.title}
              description={solution.description}
              align="left"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg shadow-slate-200/50">
              <div
                className="absolute -right-4 -top-4 size-24 rounded-full bg-teal-400/20 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -left-4 size-32 rounded-full bg-indigo-500/15 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative space-y-6">
                {solution.steps.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-bold text-indigo-600">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
