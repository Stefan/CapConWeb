"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  allowsAnalytics,
  readConsentFromDocument,
  type ConsentLevel,
} from "@/lib/consent";
import { getGaMeasurementId } from "@/lib/analytics";

type GoogleAnalyticsProps = {
  nonce?: string;
};

export function GoogleAnalytics({ nonce }: GoogleAnalyticsProps) {
  const measurementId = getGaMeasurementId();
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

  if (!measurementId || !allowsAnalytics(consent)) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script id="capcon-ga4" strategy="afterInteractive" nonce={nonce}>
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true,allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
    </>
  );
}
