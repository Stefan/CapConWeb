"use client";

import { useSite } from "@/components/providers/site-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { featureIcons } from "@/lib/content-icons";

export function FeaturesSection() {
  const { dict } = useSite();
  const { features } = dict;

  return (
    <section
      id="features"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow={features.eyebrow}
            titleId="features-heading"
            title={features.title}
            description={features.description}
            align="center"
          />
        </FadeIn>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.items.map((feature, index) => {
            const Icon = featureIcons[feature.id];
            return (
              <FadeIn key={feature.id} delay={index * 0.08} as="li">
                <Card className="h-full border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                    </div>
                    <CardTitle className="text-lg text-navy-950">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
