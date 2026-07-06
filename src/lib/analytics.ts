const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/;
const GOOGLE_ADS_ID_PATTERN = /^AW-\d+$/;

/** Production GA4 property — override via NEXT_PUBLIC_GA_MEASUREMENT_ID if needed. */
export const DEFAULT_GA_MEASUREMENT_ID = "G-BYVNSRDQRC";

/** Google Ads conversion tag — override via NEXT_PUBLIC_GOOGLE_ADS_ID if needed. */
export const DEFAULT_GOOGLE_ADS_ID = "AW-18304031117";

export function isValidGaMeasurementId(value: string | undefined | null): value is string {
  if (!value) return false;
  return GA4_ID_PATTERN.test(value.trim());
}

export function isValidGoogleAdsId(value: string | undefined | null): value is string {
  if (!value) return false;
  return GOOGLE_ADS_ID_PATTERN.test(value.trim());
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

export function isGoogleAnalyticsEnabled(): boolean {
  return getGaMeasurementId() !== null || getGoogleAdsId() !== null;
}
