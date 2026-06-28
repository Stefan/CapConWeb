"use client";

import { CapConWordmark } from "@/components/brand/capcon-logo";
import { useSite } from "@/components/providers/site-provider";
import { cn } from "@/lib/utils";

type BrandLockupProps = {
  logoSize?: number;
  className?: string;
  showTagline?: boolean;
  tone?: "light" | "dark" | "color";
  priority?: boolean;
};

export function BrandLockup({
  logoSize = 44,
  className,
  showTagline = true,
  tone = "color",
  priority = false,
}: BrandLockupProps) {
  const { dict } = useSite();

  return (
    <CapConWordmark
      tone={tone}
      showTagline={showTagline}
      markSize={logoSize}
      tagline={dict.tagline}
      className={cn("min-w-0", className)}
      priority={priority}
    />
  );
}
