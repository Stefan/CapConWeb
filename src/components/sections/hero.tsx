"use client";

import Link from "next/link";

import { useSite } from "@/components/providers/site-provider";
import { DashboardPreview } from "@/components/ui/dashboard-preview";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroSection() {
  const { dict, demoUrl, showEditionBadge, editionLabel, editionRegion } = useSite();
  const { hero } = dict;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-20 sm:pt-32 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn immediate className="max-w-xl lg:max-w-none">
          {showEditionBadge ? (
            <div className="mb-4">
              <span
                className="inline-flex items-center rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-800"
                title={editionRegion}
              >
                {editionLabel}
                <span className="mx-1.5 text-navy-300" aria-hidden>
                  ·
                </span>
                <span className="text-navy-600">{editionRegion}</span>
              </span>
            </div>
          ) : null}
          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {hero.subheadline}
          </p>

          <div className="mt-10">
            <Button
              render={<Link href={demoUrl} />}
              size="lg"
              className="h-12 bg-indigo-600 px-6 text-base text-white hover:bg-indigo-700"
            >
              {hero.primaryCta}
            </Button>
          </div>
        </FadeIn>

        <DashboardPreview />
      </div>
    </section>
  );
}
