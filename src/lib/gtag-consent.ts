import { allowsAnalytics, type ConsentLevel } from "@/lib/consent";

export type GtagConsentState = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

export function gtagConsentFromLevel(consent: ConsentLevel | null): GtagConsentState {
  const granted = allowsAnalytics(consent);
  return {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: "denied",
  };
}

export function buildGtagInitScript(measurementId: string | null, googleAdsId: string | null): string {
  const configLines = [
    googleAdsId ? `gtag('config','${googleAdsId}');` : null,
    measurementId
      ? `gtag('config','${measurementId}',{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});`
      : null,
  ]
    .filter(Boolean)
    .join("");

  return [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js',new Date());",
    "gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});",
    configLines,
  ]
    .filter(Boolean)
    .join("");
}
