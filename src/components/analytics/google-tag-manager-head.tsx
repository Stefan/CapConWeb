import { getGtmContainerId } from "@/lib/analytics";
import { buildGtmInitScript, GTM_SCRIPT_ID } from "@/lib/gtm";

type GoogleTagManagerHeadProps = {
  nonce?: string;
};

/**
 * Official GTM snippet as high in <head> as possible.
 * Consent Mode defaults are set before gtm.js loads.
 */
export function GoogleTagManagerHead({ nonce }: GoogleTagManagerHeadProps) {
  const containerId = getGtmContainerId();
  if (!containerId) {
    return null;
  }

  const init = buildGtmInitScript(containerId);
  if (!init) {
    return null;
  }

  // Native <script> tags (not next/script): same nonce rationale as GoogleTagsHead.
  const nonceProps = nonce ? { nonce } : {};

  return (
    <script
      id={GTM_SCRIPT_ID}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: init }}
      {...nonceProps}
    />
  );
}
