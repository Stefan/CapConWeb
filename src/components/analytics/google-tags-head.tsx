import Script from "next/script";

import { getGaMeasurementId, getGoogleAdsId } from "@/lib/analytics";
import { buildGtagInitScript } from "@/lib/gtag-consent";

type GoogleTagsHeadProps = {
  nonce?: string;
};

/** Loads gtag in <head> with Consent Mode defaults; updates after cookie choice. */
export function GoogleTagsHead({ nonce }: GoogleTagsHeadProps) {
  const measurementId = getGaMeasurementId();
  const googleAdsId = getGoogleAdsId();
  const loaderId = googleAdsId ?? measurementId;

  if (!loaderId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="beforeInteractive"
        nonce={nonce}
      />
      <Script id="capcon-gtag-init" strategy="beforeInteractive" nonce={nonce}>
        {buildGtagInitScript(measurementId, googleAdsId)}
      </Script>
    </>
  );
}
