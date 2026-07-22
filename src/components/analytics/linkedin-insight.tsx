"use client";

import { useEffect } from "react";

import { getLinkedInPartnerId } from "@/lib/analytics";
import { allowsAnalytics, readConsentFromDocument } from "@/lib/consent";
import {
  LINKEDIN_INSIGHT_SCRIPT_ID,
  LINKEDIN_INSIGHT_SCRIPT_SRC,
} from "@/lib/linkedin-insight";

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: ((a: string, b?: unknown) => void) & { q?: unknown[] };
  }
}

/**
 * Client fallback if the head bootstrap missed a late consent change.
 * Uses the same official loader shape as Campaign Manager.
 */
function loadLinkedInInsight(partnerId: string): void {
  if (!allowsAnalytics(readConsentFromDocument())) {
    return;
  }

  // Match Campaign Manager globals (bare + array push).
  window._linkedin_partner_id = partnerId;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(partnerId);

  if (document.getElementById(LINKEDIN_INSIGHT_SCRIPT_ID)) {
    return;
  }

  if (!window.lintrk) {
    window.lintrk = function lintrk(a: string, b?: unknown) {
      window.lintrk!.q = window.lintrk!.q || [];
      window.lintrk!.q.push([a, b]);
    };
    window.lintrk.q = [];
  }

  const s = document.getElementsByTagName("script")[0];
  const b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.id = LINKEDIN_INSIGHT_SCRIPT_ID;
  b.src = LINKEDIN_INSIGHT_SCRIPT_SRC;
  s?.parentNode?.insertBefore(b, s);
}

/**
 * LinkedIn Insight Tag — client sync after consent changes.
 * SSR markers + consent-gated official loader live in LinkedInInsightHead.
 */
export function LinkedInInsight() {
  const partnerId = getLinkedInPartnerId();

  useEffect(() => {
    if (!partnerId) return;

    const sync = () => loadLinkedInInsight(partnerId);
    sync();
    window.addEventListener("capcon-consent-change", sync);
    return () => window.removeEventListener("capcon-consent-change", sync);
  }, [partnerId]);

  return null;
}
