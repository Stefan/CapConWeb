"use client";

import { CapConMark, CapConWordmark } from "@/components/brand/capcon-logo";
import { useSite } from "@/components/providers/site-provider";
import { cn } from "@/lib/utils";

export type ProductLogoVariant = "icon" | "primary" | "dark" | "wordmark";

type LogoProps = {
  variant?: ProductLogoVariant;
  size?: number;
  priority?: boolean;
  className?: string;
  alt?: string;
  showTagline?: boolean;
};

function toneForVariant(variant: ProductLogoVariant): "light" | "dark" | "color" {
  if (variant === "dark") return "light";
  return "color";
}

export function Logo({
  variant = "wordmark",
  size = 44,
  className,
  showTagline = true,
  priority = false,
}: LogoProps) {
  const { dict } = useSite();

  if (variant === "icon") {
    return (
      <CapConMark
        size={size}
        tone={toneForVariant(variant)}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <CapConWordmark
      tone={toneForVariant(variant)}
      showTagline={showTagline}
      markSize={size}
      tagline={dict.tagline}
      className={cn(className)}
      compact={variant === "primary" && !showTagline}
      priority={priority}
    />
  );
}
