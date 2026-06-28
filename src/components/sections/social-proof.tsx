"use client";

import { useSite } from "@/components/providers/site-provider";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

export function SocialProofSection() {
  const { dict } = useSite();
  const { socialProof } = dict;

  return (
    <section
      className="border-y border-slate-200 bg-white py-16 sm:py-20"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow={socialProof.eyebrow}
            titleId="social-proof-heading"
            title={socialProof.quote}
            align="center"
            className="[&_h2]:max-w-3xl [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:leading-snug [&_h2]:text-navy-950 sm:[&_h2]:text-3xl"
          />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm font-medium text-slate-500">
            — {socialProof.attribution}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs text-slate-400">
            {dict.socialProofDisclaimer ?? ""}
          </p>
        </FadeIn>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {socialProof.metrics.map((metric, index) => (
            <FadeIn key={metric.label} delay={index * 0.08} as="li">
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 text-center">
                <p className="text-2xl font-semibold text-indigo-600">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
