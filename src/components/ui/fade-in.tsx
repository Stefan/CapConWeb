"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "li";
  /** Above-the-fold content: animate on mount instead of waiting for scroll into view. */
  immediate?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  as = "div",
  immediate = false,
}: FadeInProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial={immediate ? "visible" : "hidden"}
      animate={immediate ? "visible" : undefined}
      whileInView={immediate ? undefined : "visible"}
      viewport={immediate ? undefined : { once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      variants={defaultVariants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
