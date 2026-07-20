import { getGtmContainerId } from "@/lib/analytics";
import { gtmNoscriptUrl } from "@/lib/gtm";

/**
 * Official GTM noscript — first child of <body> in root layout.
 * Markup matches Google's install snippet (container id from analytics config).
 */
export function GoogleTagManagerBody() {
  const containerId = getGtmContainerId();
  if (!containerId) {
    return null;
  }

  // Exact official attributes (no extra title/attrs) for Tag Assistant detection.
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="${gtmNoscriptUrl(containerId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}
