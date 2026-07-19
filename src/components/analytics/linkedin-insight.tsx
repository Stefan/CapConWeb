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

function ensureLinkedInQueue(): void {
  if (!window.lintrk) {
    window.lintrk = function lintrk(a: string, b?: unknown) {
      window.lintrk!.q = window.lintrk!.q || [];
      window.lintrk!.q.push([a, b]);
    };
    window.lintrk.q = [];
  }
}

/** Client fallback if the head bootstrap missed a late consent change. */
function loadLinkedInInsight(partnerId: string): void {
  if (!allowsAnalytics(readConsentFromDocument())) {
    return;
  }

  window._linkedin_partner_id = partnerId;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  if (!window._linkedin_data_partner_ids.includes(partnerId)) {
    window._linkedin_data_partner_ids.push(partnerId);
  }

  ensureLinkedInQueue();

  if (document.getElementById(LINKEDIN_INSIGHT_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = LINKEDIN_INSIGHT_SCRIPT_ID;
  script.type = "text/javascript";
  script.async = true;
  script.src = LINKEDIN_INSIGHT_SCRIPT_SRC;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);
}

/**
 * LinkedIn Insight Tag — client sync after consent changes.
 * SSR markers + consent-gated loader live in LinkedInInsightHead.
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
