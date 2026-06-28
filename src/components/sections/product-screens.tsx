"use client";

import { useSite } from "@/components/providers/site-provider";
import { AppScreenshotFrame } from "@/components/ui/app-screenshot-frame";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import {
  getPanelScreenshot,
  getPanelScreenshotCrop,
} from "@/lib/product-screenshots";

export function ProductScreensSection() {
  const { dict } = useSite();
  const { productScreens } = dict;

  return (
    <section
      id="product"
      className="bg-slate-50 py-20 sm:py-28"
      aria-labelledby="product-screens-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow={productScreens.eyebrow}
            titleId="product-screens-heading"
            title={productScreens.title}
            description={productScreens.description}
            align="center"
          />
        </FadeIn>

        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {productScreens.panels.map((panel, index) => {
            const src = getPanelScreenshot(panel.id);
            const crop = getPanelScreenshotCrop(panel.id);

            return (
              <FadeIn key={panel.id} delay={index * 0.1} as="li">
                <article>
                  {src ? (
                    <AppScreenshotFrame
                      title={panel.title}
                      src={src}
                      alt={panel.title}
                      crop={crop}
                    />
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                      {panel.title}
                    </div>
                  )}
                  <p className="mt-3 px-1 text-sm text-slate-600">{panel.caption}</p>
                </article>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
