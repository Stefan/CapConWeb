import { getLinkedInPartnerId } from "@/lib/analytics";
import {
  buildLinkedInInsightInitScript,
  linkedInCollectPixelUrl,
} from "@/lib/linkedin-insight";

type LinkedInInsightHeadProps = {
  nonce?: string;
};

/**
 * SSR Insight Tag markers in <head> (partner ID + official loader URL in HTML).
 * Actual insight.min.js fetch remains consent-gated inside the inline script.
 */
export function LinkedInInsightHead({ nonce }: LinkedInInsightHeadProps) {
  const partnerId = getLinkedInPartnerId();
  if (!partnerId) {
    return null;
  }

  const init = buildLinkedInInsightInitScript(partnerId);
  if (!init) {
    return null;
  }

  // Native <script> tags (not next/script): same nonce rationale as GoogleTagsHead.
  const nonceProps = nonce ? { nonce } : {};

  return (
    <>
      <script
        id="capcon-linkedin-insight-init"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: init }}
        {...nonceProps}
      />
      {/* Official noscript fallback — present for tag detectors; JS users use the consent-gated loader. */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height={1}
          width={1}
          style={{ display: "none" }}
          alt=""
          src={linkedInCollectPixelUrl(partnerId)}
        />
      </noscript>
    </>
  );
}
