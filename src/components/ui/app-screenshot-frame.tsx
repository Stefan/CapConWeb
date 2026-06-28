"use client";

import type { ScreenshotCrop } from "@/lib/product-screenshots";
import {
  MARKETING_FRAME,
  type MarketingFrameVariant,
} from "@/lib/marketing-frame-spec";

type AppScreenshotFrameProps = {
  title?: string;
  src: string;
  alt: string;
  crop?: ScreenshotCrop;
  /** Taller hero frame vs. product grid cards */
  variant?: MarketingFrameVariant;
};

export function AppScreenshotFrame({
  title,
  src,
  alt,
  crop,
  variant = "panel",
}: AppScreenshotFrameProps) {
  const frame = MARKETING_FRAME[variant];
  const isHero = variant === "hero";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
      {title ? (
        <p className="border-b border-slate-100 bg-slate-50/90 px-4 py-2.5 text-sm font-medium text-slate-700">
          {title}
        </p>
      ) : null}
      <div
        className={
          isHero
            ? "relative w-full overflow-hidden bg-slate-50"
            : "relative h-[280px] w-full overflow-hidden bg-slate-50 sm:h-[300px]"
        }
        style={
          isHero
            ? { aspectRatio: `${frame.width} / ${frame.height}` }
            : undefined
        }
      >
        <img
          src={src}
          alt={alt}
          width={isHero ? frame.width : undefined}
          height={isHero ? frame.height : undefined}
          decoding="async"
          fetchPriority={isHero ? "high" : "auto"}
          className={
            isHero
              ? "block h-full w-full"
              : "block h-full w-full object-cover object-left-top"
          }
          style={{
            objectPosition: crop?.objectPosition ?? "left top",
            imageRendering: "-webkit-optimize-contrast",
          }}
        />
      </div>
    </div>
  );
}
