"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";

import type { ScreenshotCrop } from "@/lib/product-screenshots";
import {
  MARKETING_FRAME,
  type MarketingFrameVariant,
} from "@/lib/marketing-frame-spec";

import { ScreenshotLightbox } from "@/components/ui/screenshot-lightbox";

type AppScreenshotFrameProps = {
  title?: string;
  src: string;
  alt: string;
  crop?: ScreenshotCrop;
  /** Taller hero frame vs. product grid cards */
  variant?: MarketingFrameVariant;
  /** Allow click-to-enlarge lightbox (default: true) */
  enlargeable?: boolean;
};

function screenshotLayoutId(src: string, instanceId: string) {
  return `screenshot-${instanceId}-${src.replace(/\W/g, "-")}`;
}

export function AppScreenshotFrame({
  title,
  src,
  alt,
  crop,
  variant = "panel",
  enlargeable = true,
}: AppScreenshotFrameProps) {
  const instanceId = useId();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const frame = MARKETING_FRAME[variant];
  const isHero = variant === "hero";
  const layoutId = screenshotLayoutId(src, instanceId);

  const frameShell = (
    <motion.div
      layoutId={enlargeable ? layoutId : undefined}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
    >
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
    </motion.div>
  );

  if (!enlargeable) {
    return frameShell;
  }

  return (
    <>
      <button
        type="button"
        className="group block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={() => setLightboxOpen(true)}
        aria-label={`${alt} — enlarge`}
      >
        <div className="transition-transform duration-300 group-hover:scale-[1.01] group-active:scale-[0.995]">
          {frameShell}
        </div>
      </button>

      <ScreenshotLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={src}
        alt={alt}
        title={title}
        layoutId={layoutId}
      />
    </>
  );
}
