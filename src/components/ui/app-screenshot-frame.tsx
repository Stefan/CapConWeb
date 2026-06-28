import Image from "next/image";

import type { ScreenshotCrop } from "@/lib/product-screenshots";

type AppScreenshotFrameProps = {
  title?: string;
  src: string;
  alt: string;
  crop?: ScreenshotCrop;
  /** Taller hero frame vs. product grid cards */
  variant?: "hero" | "panel";
};

export function AppScreenshotFrame({
  title,
  src,
  alt,
  crop,
  variant = "panel",
}: AppScreenshotFrameProps) {
  const heightClass = variant === "hero" ? "h-[360px] sm:h-[400px]" : "h-[280px] sm:h-[300px]";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
      {title ? (
        <p className="border-b border-slate-100 bg-slate-50/90 px-4 py-2.5 text-sm font-medium text-slate-700">
          {title}
        </p>
      ) : null}
      <div className={`relative w-full overflow-hidden bg-slate-50 ${heightClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes={
            variant === "hero"
              ? "(max-width: 768px) 100vw, 576px"
              : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 560px"
          }
          className="object-cover object-left-top"
          style={{
            objectPosition: crop?.objectPosition ?? "left top",
            transform: crop?.scale && crop.scale !== 1 ? `scale(${crop.scale})` : undefined,
            transformOrigin: crop?.objectPosition ?? "left top",
          }}
          priority={variant === "hero"}
        />
      </div>
    </div>
  );
}
