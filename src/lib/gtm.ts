/** Official GTM container loader (Consent Mode defaults applied first). */
export const GTM_SCRIPT_ID = "capcon-gtm";

/**
 * SSR bootstrap: Consent Mode denied-by-default, then official GTM snippet.
 * Consent updates flow through existing GoogleConsentSync / dataLayer.
 */
export function buildGtmInitScript(containerId: string): string {
  const id = containerId.replace(/[^A-Z0-9-]/gi, "").toUpperCase();
  if (!id.startsWith("GTM-")) return "";

  return [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});",
    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`,
  ].join("");
}

export function gtmNoscriptUrl(containerId: string): string {
  const id = containerId.replace(/[^A-Z0-9-]/gi, "").toUpperCase();
  return `https://www.googletagmanager.com/ns.html?id=${id}`;
}
