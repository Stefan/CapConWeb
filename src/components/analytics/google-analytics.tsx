"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  allowsAnalytics,
  readConsentFromDocument,
  type ConsentLevel,
} from "@/lib/consent";
import {
  getGaMeasurementId,
  getGoogleAdsId,
} from "@/lib/analytics";

type GoogleAnalyticsProps = {
  nonce?: string;
};

export function GoogleAnalytics({ nonce }: GoogleAnalyticsProps) {
  const measurementId = getGaMeasurementId();
  const googleAdsId = getGoogleAdsId();
  const gtagLoaderId = measurementId ?? googleAdsId;
  const [consent, setConsent] = useState<ConsentLevel | null>(null);

  useEffect(() => {
    setConsent(readConsentFromDocument());

    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentLevel | null>).detail;
      setConsent(detail ?? readConsentFromDocument());
    };

    window.addEventListener("capcon-consent-change", onConsentChange);
    return () => window.removeEventListener("capcon-consent-change", onConsentChange);
  }, []);

  if (!gtagLoaderId || !allowsAnalytics(consent)) {
    return null;
  }

  const configLines = [
    "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());",
    measurementId
      ? `gtag('config','${measurementId}',{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});`
      : null,
    googleAdsId ? `gtag('config','${googleAdsId}');` : null,
  ]
    .filter(Boolean)
    .join("");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`}
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script id="capcon-google-tags" strategy="afterInteractive" nonce={nonce}>
        {configLines}
      </Script>
    </>
  );
}
