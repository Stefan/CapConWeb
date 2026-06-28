import Image from "next/image";

import { PRODUCT_NAME, PRODUCT_TAGLINE } from "@/lib/brand";
import { LOGO_PATHS, logoIconDimensions } from "@/lib/logo-paths";
import { cn } from "@/lib/utils";

type LogoTone = "light" | "dark" | "color";

type CapConMarkProps = {
  size?: number;
  tone?: LogoTone;
  className?: string;
  priority?: boolean;
};

function markSrcForTone(tone: LogoTone): string {
  // Same mapping as orka-ppm `components/Logo` icon variant.
  if (tone === "light") return LOGO_PATHS.iconOnDark;
  return LOGO_PATHS.icon;
}

/** App icon (C monogram) — same asset as orka-ppm TopBar. */
export function CapConMark({
  size = 40,
  tone = "color",
  className,
  priority = false,
}: CapConMarkProps) {
  const src = markSrcForTone(tone);
  const { width, height } = logoIconDimensions(src);

  return (
    <Image
      src={src}
      alt={PRODUCT_NAME}
      width={width}
      height={height}
      priority={priority}
      unoptimized
      className={cn("block shrink-0 object-contain", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}

type CapConWordmarkProps = {
  tone?: LogoTone;
  showTagline?: boolean;
  markSize?: number;
  className?: string;
  compact?: boolean;
  tagline?: string;
  priority?: boolean;
};

export function CapConWordmark({
  tone = "color",
  showTagline = true,
  markSize = 44,
  className,
  compact = false,
  tagline = PRODUCT_TAGLINE,
  priority = false,
}: CapConWordmarkProps) {
  const titleClass =
    tone === "light"
      ? "text-white"
      : tone === "dark"
        ? "text-slate-100"
        : "text-navy-950";

  const taglineClass =
    tone === "light"
      ? "text-slate-300"
      : tone === "dark"
        ? "text-slate-400"
        : "text-slate-600";

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5 sm:gap-3", className)}>
      <CapConMark size={markSize} tone={tone} priority={priority} />
      {!compact ? (
        <span className="flex min-w-0 flex-col leading-tight">
          <span
            className={cn(
              "text-lg font-semibold tracking-tight sm:text-xl",
              titleClass,
            )}
          >
            {PRODUCT_NAME}
          </span>
          {showTagline ? (
            <span className={cn("text-xs font-medium sm:text-sm", taglineClass)}>
              {tagline}
            </span>
          ) : null}
        </span>
      ) : (
        <span className={cn("text-base font-semibold tracking-tight", titleClass)}>
          {PRODUCT_NAME}
        </span>
      )}
    </span>
  );
}

/** @deprecated Use CapConMark */
export const ChangeLedgerMark = CapConMark;

/** @deprecated Use CapConWordmark */
export const ChangeLedgerWordmark = CapConWordmark;
