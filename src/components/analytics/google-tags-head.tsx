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

  // Native <script> tags (not next/script): next/script clears nonce on the client during
  // hydration, which mismatches the CSP nonce set in middleware for SSR.
  const nonceProps = nonce ? { nonce } : {};

  return (
    <>
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        async
        suppressHydrationWarning
        {...nonceProps}
      />
      <script
        id="capcon-gtag-init"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: buildGtagInitScript(measurementId, googleAdsId) }}
        {...nonceProps}
      />
    </>
  );
}
