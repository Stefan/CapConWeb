export type CspOptions = {
  isDev?: boolean;
  enableAnalytics?: boolean;
};

const GA_CONNECT_SRC = [
  "https://www.google-analytics.com",
  "https://analytics.google.com",
  "https://www.googletagmanager.com",
  "https://region1.google-analytics.com",
];

const GA_IMG_SRC = [
  "https://www.google-analytics.com",
  "https://www.googletagmanager.com",
];

/** Google Ads conversion tag (AW-…) beacons — not covered by GA4-only hosts. */
const GOOGLE_ADS_CONNECT_SRC = [
  "https://pagead2.googlesyndication.com",
  "https://www.googleadservices.com",
  "https://googleads.g.doubleclick.net",
];

const GOOGLE_ADS_IMG_SRC = ["https://pagead2.googlesyndication.com"];

/** LinkedIn Insight Tag (loads after full cookie consent). */
const LINKEDIN_SCRIPT_SRC = ["https://snap.licdn.com"];
const LINKEDIN_CONNECT_SRC = [
  "https://snap.licdn.com",
  "https://px.ads.linkedin.com",
  "https://www.linkedin.com",
];
const LINKEDIN_IMG_SRC = ["https://px.ads.linkedin.com", "https://www.linkedin.com"];

/** Vercel Live / Preview toolbar (feedback overlay on deployments). */
const VERCEL_LIVE_SRC = ["https://vercel.live"];

/** Vercel dashboard assets loaded by the Live toolbar (e.g. collaborator avatars). */
const VERCEL_TOOLBAR_IMG_SRC = ["https://vercel.com"];

export function buildContentSecurityPolicy(
  nonce: string,
  options: CspOptions = {},
): string {
  const isDev = options.isDev ?? process.env.NODE_ENV === "development";
  const enableAnalytics = options.enableAnalytics ?? false;
  const scriptSrcElem = [
    "'self'",
    `'nonce-${nonce}'`,
    ...(enableAnalytics
      ? ["https://www.googletagmanager.com", ...LINKEDIN_SCRIPT_SRC]
      : []),
    ...VERCEL_LIVE_SRC,
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  // strict-dynamic ignores host allowlists — external <script src> hosts belong on script-src-elem.
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  const connectSrc = [
    "'self'",
    ...(enableAnalytics
      ? [...GA_CONNECT_SRC, ...GOOGLE_ADS_CONNECT_SRC, ...LINKEDIN_CONNECT_SRC]
      : []),
    ...VERCEL_LIVE_SRC,
  ].join(" ");
  const imgSrc = [
    "'self'",
    "data:",
    "blob:",
    ...(enableAnalytics
      ? [...GA_IMG_SRC, ...GOOGLE_ADS_IMG_SRC, ...LINKEDIN_IMG_SRC]
      : []),
    ...VERCEL_TOOLBAR_IMG_SRC,
  ].join(" ");

  const frameSrc = [
    "frame-src 'self'",
    ...VERCEL_LIVE_SRC,
    ...(enableAnalytics ? ["https://www.googletagmanager.com"] : []),
  ].join(" ");

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `script-src-elem ${scriptSrcElem}`,
    // Nonce on styles breaks Next-generated <link rel="stylesheet"> when request/response
    // nonces drift; unsafe-inline keeps React inline style={{}} valid.
    `style-src 'self' 'unsafe-inline'`,
    `img-src ${imgSrc}`,
    `font-src 'self' data: ${VERCEL_LIVE_SRC.join(" ")}`,
    `connect-src ${connectSrc}`,
    ...(frameSrc ? [frameSrc] : []),
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "frame-ancestors 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");
}

export function createCspNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString("base64");
}
