import { CONSENT_COOKIE } from "@/lib/consent";

/** Official LinkedIn Insight Tag loader (consent-gated at runtime). */
export const LINKEDIN_INSIGHT_SCRIPT_ID = "linkedin-insight";
export const LINKEDIN_INSIGHT_SCRIPT_SRC =
  "https://snap.licdn.com/li.lms-analytics/insight.min.js";

/**
 * Partner-ID markers — matches Campaign Manager snippet globals exactly
 * (`_linkedin_partner_id` bare assign + `_linkedin_data_partner_ids` push).
 */
export function buildLinkedInPartnerIdScript(partnerId: string): string {
  const pid = partnerId.replace(/[^0-9]/g, "");
  if (!pid) return "";

  return [
    `_linkedin_partner_id="${pid}";`,
    "window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];",
    "window._linkedin_data_partner_ids.push(_linkedin_partner_id);",
  ].join("");
}

/**
 * Official insight.min.js loader IIFE, wrapped only with cookie consent.
 * LinkedIn docs: do not edit the loader body; we gate *when* it runs (GDPR).
 */
export function buildLinkedInInsightInitScript(partnerId: string): string {
  const pid = partnerId.replace(/[^0-9]/g, "");
  if (!pid) return "";

  // Official Campaign Manager loader body (unchanged), invoked after consent.
  const officialLoader = [
    "(function(l){",
    "if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b]);};window.lintrk.q=[];}",
    'var s=document.getElementsByTagName("script")[0];',
    "var b=document.createElement(\"script\");",
    'b.type="text/javascript";',
    "b.async=true;",
    `b.id="${LINKEDIN_INSIGHT_SCRIPT_ID}";`,
    `b.src="${LINKEDIN_INSIGHT_SCRIPT_SRC}";`,
    "s.parentNode.insertBefore(b,s);",
    "})(window.lintrk);",
  ].join("");

  return [
    buildLinkedInPartnerIdScript(pid),
    "(function(){",
    `function hasConsent(){return document.cookie.split("; ").indexOf("${CONSENT_COOKIE}=all")!==-1;}`,
    "function load(){",
    "if(!hasConsent())return;",
    `if(document.getElementById("${LINKEDIN_INSIGHT_SCRIPT_ID}"))return;`,
    officialLoader,
    "}",
    "load();",
    'window.addEventListener("capcon-consent-change",load);',
    "})();",
  ].join("");
}

export function linkedInCollectPixelUrl(partnerId: string): string {
  const pid = partnerId.replace(/[^0-9]/g, "");
  return `https://px.ads.linkedin.com/collect/?pid=${pid}&fmt=gif`;
}
