const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/;

/** Production GA4 property — override via NEXT_PUBLIC_GA_MEASUREMENT_ID if needed. */
export const DEFAULT_GA_MEASUREMENT_ID = "G-BYVNSRDQRC";

export function isValidGaMeasurementId(value: string | undefined | null): value is string {
  if (!value) return false;
  return GA4_ID_PATTERN.test(value.trim());
}

export function getGaMeasurementId(): string | null {
  const raw = (
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? DEFAULT_GA_MEASUREMENT_ID
  ).trim();
  return isValidGaMeasurementId(raw) ? raw : null;
}

export function isGoogleAnalyticsEnabled(): boolean {
  return getGaMeasurementId() !== null;
}
