"use client";

import { motion } from "framer-motion";

import { useSite } from "@/components/providers/site-provider";
import { AppScreenshotFrame } from "@/components/ui/app-screenshot-frame";
import {
  heroScreenshotByVariant,
  heroScreenshotCrop,
} from "@/lib/product-screenshots";

export function DashboardPreview() {
  const { dict, variant } = useSite();
  const { dashboard } = dict;
  const src = heroScreenshotByVariant[variant];
  const crop = heroScreenshotCrop[variant];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-xl"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-teal-400/10 to-transparent blur-2xl"
        aria-hidden
      />
      <div className="relative">
        <AppScreenshotFrame
          title={dashboard.title}
          src={src}
          alt={dashboard.title}
          crop={crop}
          variant="hero"
        />
      </div>
    </motion.div>
  );
}
