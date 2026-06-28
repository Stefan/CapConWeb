"use client";

import Link from "next/link";

import { useSite } from "@/components/providers/site-provider";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const { dict, demoUrl, contactEmail } = useSite();
  const { cta } = dict;

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-navy-950 py-20 sm:py-28"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(20,184,166,0.15),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2
            id="cta-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {cta.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            {cta.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              render={<Link href={demoUrl} />}
              size="lg"
              className="h-14 min-w-[240px] bg-teal-500 px-10 text-lg font-semibold text-navy-950 hover:bg-teal-400"
            >
              {cta.primaryCta}
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            {cta.contactPrefix}{" "}
            <Link
              href={`mailto:${contactEmail}`}
              className="font-medium text-teal-400 underline-offset-4 hover:text-teal-300 hover:underline"
            >
              {contactEmail}
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
