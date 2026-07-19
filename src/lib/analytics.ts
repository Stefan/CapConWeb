const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/;
const GOOGLE_ADS_ID_PATTERN = /^AW-\d+$/;
const LINKEDIN_PARTNER_ID_PATTERN = /^\d{4,12}$/;

/** Production GA4 property — override via NEXT_PUBLIC_GA_MEASUREMENT_ID if needed. */
export const DEFAULT_GA_MEASUREMENT_ID = "G-BYVNSRDQRC";

/** Google Ads conversion tag — override via NEXT_PUBLIC_GOOGLE_ADS_ID if needed. */
export const DEFAULT_GOOGLE_ADS_ID = "AW-18304031117";

/** LinkedIn Insight Tag partner ID — override via NEXT_PUBLIC_LINKEDIN_PARTNER_ID. */
export const DEFAULT_LINKEDIN_PARTNER_ID = "9391730";

export function isValidGaMeasurementId(value: string | undefined | null): value is string {
  if (!value) return false;
  return GA4_ID_PATTERN.test(value.trim());
}

export function isValidGoogleAdsId(value: string | undefined | null): value is string {
  if (!value) return false;
  return GOOGLE_ADS_ID_PATTERN.test(value.trim());
}

export function isValidLinkedInPartnerId(value: string | undefined | null): value is string {
  if (!value) return false;
  return LINKEDIN_PARTNER_ID_PATTERN.test(value.trim());
}

export function getGaMeasurementId(): string | null {
  const raw = (
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? DEFAULT_GA_MEASUREMENT_ID
  ).trim();
  return isValidGaMeasurementId(raw) ? raw : null;
}

export function getGoogleAdsId(): string | null {
  const raw = (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? DEFAULT_GOOGLE_ADS_ID).trim();
  return isValidGoogleAdsId(raw) ? raw : null;
}

export function getLinkedInPartnerId(): string | null {
  const raw = (
    process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? DEFAULT_LINKEDIN_PARTNER_ID
  ).trim();
  return isValidLinkedInPartnerId(raw) ? raw : null;
}

export function isGoogleAnalyticsEnabled(): boolean {
  return getGaMeasurementId() !== null || getGoogleAdsId() !== null;
}

export function isLinkedInInsightEnabled(): boolean {
  return getLinkedInPartnerId() !== null;
}

/** CSP / marketing tags — GA, Ads, or LinkedIn Insight configured. */
export function isMarketingAnalyticsEnabled(): boolean {
  return isGoogleAnalyticsEnabled() || isLinkedInInsightEnabled();
}
