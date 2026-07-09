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

export function buildContentSecurityPolicy(
  nonce: string,
  options: CspOptions = {},
): string {
  const isDev = options.isDev ?? process.env.NODE_ENV === "development";
  const enableAnalytics = options.enableAnalytics ?? false;
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...(enableAnalytics ? ["https://www.googletagmanager.com"] : []),
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  const connectSrc = [
    "'self'",
    ...(enableAnalytics ? [...GA_CONNECT_SRC, ...GOOGLE_ADS_CONNECT_SRC] : []),
  ].join(" ");
  const imgSrc = [
    "'self'",
    "data:",
    "blob:",
    ...(enableAnalytics ? [...GA_IMG_SRC, ...GOOGLE_ADS_IMG_SRC] : []),
  ].join(" ");

  const frameSrc = "frame-src 'self' https://vercel.live";

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    // Nonce on styles breaks Next-generated <link rel="stylesheet"> when request/response
    // nonces drift; unsafe-inline keeps React inline style={{}} valid.
    `style-src 'self' 'unsafe-inline'`,
    `img-src ${imgSrc}`,
    "font-src 'self' data:",
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
