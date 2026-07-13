import { createHash } from "node:crypto";

import { getGaMeasurementId, getGoogleAdsId } from "@/lib/analytics";
import { buildGtagInitScript } from "@/lib/gtag-consent";

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

/** Vercel Live / Preview toolbar (feedback overlay on deployments). */
const VERCEL_LIVE_SRC = ["https://vercel.live"];

/** Vercel dashboard assets loaded by the Live toolbar (e.g. collaborator avatars). */
const VERCEL_TOOLBAR_IMG_SRC = ["https://vercel.com"];

function sha256Source(script: string): string {
  return `'sha256-${createHash("sha256").update(script).digest("base64")}'`;
}

function analyticsScriptHashes(enableAnalytics: boolean): string[] {
  if (!enableAnalytics) return [];

  const measurementId = getGaMeasurementId();
  const googleAdsId = getGoogleAdsId();
  if (!measurementId && !googleAdsId) return [];

  return [sha256Source(buildGtagInitScript(measurementId, googleAdsId))];
}

export function buildContentSecurityPolicy(options: CspOptions = {}): string {
  const isDev = options.isDev ?? process.env.NODE_ENV === "development";
  const enableAnalytics = options.enableAnalytics ?? false;
  const scriptHashes = analyticsScriptHashes(enableAnalytics);
  const scriptSrcElem = [
    "'self'",
    ...(enableAnalytics ? ["https://www.googletagmanager.com"] : []),
    ...VERCEL_LIVE_SRC,
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  // strict-dynamic trusts the hashed inline gtag bootstrap without making the
  // route dynamic for per-request nonces.
  const scriptSrc = [
    "'self'",
    ...scriptHashes,
    "'strict-dynamic'",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  const connectSrc = [
    "'self'",
    ...(enableAnalytics ? [...GA_CONNECT_SRC, ...GOOGLE_ADS_CONNECT_SRC] : []),
    ...VERCEL_LIVE_SRC,
  ].join(" ");
  const imgSrc = [
    "'self'",
    "data:",
    "blob:",
    ...(enableAnalytics ? [...GA_IMG_SRC, ...GOOGLE_ADS_IMG_SRC] : []),
    ...VERCEL_TOOLBAR_IMG_SRC,
  ].join(" ");

  const frameSrc = `frame-src 'self' ${VERCEL_LIVE_SRC.join(" ")}`;

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
