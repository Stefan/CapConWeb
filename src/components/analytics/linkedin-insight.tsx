"use client";

import { useEffect } from "react";

import { getLinkedInPartnerId } from "@/lib/analytics";
import { allowsAnalytics, readConsentFromDocument } from "@/lib/consent";

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: ((a: string, b?: unknown) => void) & { q?: unknown[] };
  }
}

const INSIGHT_SCRIPT_ID = "linkedin-insight";
const INSIGHT_SCRIPT_SRC = "https://snap.licdn.com/li.lms-analytics/insight.min.js";

function ensureLinkedInQueue(): void {
  if (!window.lintrk) {
    window.lintrk = function lintrk(a: string, b?: unknown) {
      window.lintrk!.q = window.lintrk!.q || [];
      window.lintrk!.q.push([a, b]);
    };
    window.lintrk.q = [];
  }
}

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

  if (document.getElementById(INSIGHT_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = INSIGHT_SCRIPT_ID;
  script.type = "text/javascript";
  script.async = true;
  script.src = INSIGHT_SCRIPT_SRC;
  const first = document.getElementsByTagName("script")[0];
  first?.parentNode?.insertBefore(script, first);
}

/**
 * LinkedIn Insight Tag — loads only after full cookie consent ("Accept all"),
 * matching GA / Ads consent gating on CapConWeb.
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
