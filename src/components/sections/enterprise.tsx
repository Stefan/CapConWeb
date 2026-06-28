"use client";

import { useSite } from "@/components/providers/site-provider";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { trustSignalIcons } from "@/lib/content-icons";

export function EnterpriseSection() {
  const { dict } = useSite();
  const { enterprise } = dict;

  return (
    <section
      id="enterprise"
      className="border-y border-slate-200 bg-white py-20 sm:py-28"
      aria-labelledby="enterprise-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow={enterprise.eyebrow}
            titleId="enterprise-heading"
            title={enterprise.title}
            description={enterprise.description}
            align="center"
          />
        </FadeIn>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {enterprise.signals.map((signal, index) => {
            const Icon = trustSignalIcons[signal.id];
            return (
              <FadeIn key={signal.id} delay={index * 0.08} as="li">
                <article className="flex gap-4 rounded-xl border border-slate-200 p-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy-950 text-white">
                    {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-950">{signal.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {signal.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </ul>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-xs text-slate-400">
            {enterprise.badgeDisclaimer}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-slate-100 pt-10 text-center text-sm font-medium text-slate-500">
            {enterprise.badges.map((badge, index) => (
              <span key={badge} className="contents">
                {index > 0 ? (
                  <span aria-hidden="true" className="hidden text-slate-300 sm:inline">
                    ·
                  </span>
                ) : null}
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
