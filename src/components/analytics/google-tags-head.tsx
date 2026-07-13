import { getGaMeasurementId, getGoogleAdsId } from "@/lib/analytics";
import { buildGtagInitScript } from "@/lib/gtag-consent";

/** Loads gtag in <head> with Consent Mode defaults; updates after cookie choice. */
export function GoogleTagsHead() {
  const measurementId = getGaMeasurementId();
  const googleAdsId = getGoogleAdsId();
  const loaderId = googleAdsId ?? measurementId;

  if (!loaderId) {
    return null;
  }

  return (
    <>
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        async
        suppressHydrationWarning
      />
      <script
        id="capcon-gtag-init"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: buildGtagInitScript(measurementId, googleAdsId) }}
      />
    </>
  );
}
