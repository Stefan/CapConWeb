"use client";

import { useEffect } from "react";

import { readConsentFromDocument } from "@/lib/consent";
import { gtagConsentFromLevel } from "@/lib/gtag-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function syncGtagConsent(): void {
  if (typeof window.gtag !== "function") {
    return;
  }
  window.gtag("consent", "update", gtagConsentFromLevel(readConsentFromDocument()));
}

/** Applies stored cookie consent to gtag after hydration and banner actions. */
export function GoogleConsentSync() {
  useEffect(() => {
    syncGtagConsent();

    const onConsentChange = () => syncGtagConsent();
    window.addEventListener("capcon-consent-change", onConsentChange);
    return () => window.removeEventListener("capcon-consent-change", onConsentChange);
  }, []);

  return null;
}
