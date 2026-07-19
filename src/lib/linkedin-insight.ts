import { CONSENT_COOKIE } from "@/lib/consent";

/** Official LinkedIn Insight Tag loader (consent-gated at runtime). */
export const LINKEDIN_INSIGHT_SCRIPT_ID = "linkedin-insight";
export const LINKEDIN_INSIGHT_SCRIPT_SRC =
  "https://snap.licdn.com/li.lms-analytics/insight.min.js";

/**
 * SSR inline bootstrap: partner ID + lintrk queue are always present in HTML
 * (so Campaign Manager / tag helpers can detect the install). insight.min.js
 * loads only after full cookie consent ("Accept all").
 */
export function buildLinkedInInsightInitScript(partnerId: string): string {
  const pid = partnerId.replace(/[^0-9]/g, "");
  if (!pid) return "";

  return [
    `window._linkedin_partner_id="${pid}";`,
    "window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];",
    `if(window._linkedin_data_partner_ids.indexOf("${pid}")===-1)window._linkedin_data_partner_ids.push("${pid}");`,
    "if(!window.lintrk){window.lintrk=function(a,b){window.lintrk.q.push([a,b]);};window.lintrk.q=[];}",
    "(function(){",
    `function hasConsent(){return document.cookie.split("; ").indexOf("${CONSENT_COOKIE}=all")!==-1;}`,
    "function load(){",
    "if(!hasConsent())return;",
    `if(document.getElementById("${LINKEDIN_INSIGHT_SCRIPT_ID}"))return;`,
    'var s=document.getElementsByTagName("script")[0];',
    "var b=document.createElement(\"script\");",
    `b.id="${LINKEDIN_INSIGHT_SCRIPT_ID}";`,
    'b.type="text/javascript";',
    "b.async=true;",
    `b.src="${LINKEDIN_INSIGHT_SCRIPT_SRC}";`,
    "s.parentNode.insertBefore(b,s);",
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
