const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/;

export function isValidGaMeasurementId(value: string | undefined | null): value is string {
  if (!value) return false;
  return GA4_ID_PATTERN.test(value.trim());
}

export function getGaMeasurementId(): string | null {
  const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return isValidGaMeasurementId(raw) ? raw : null;
}

export function isGoogleAnalyticsEnabled(): boolean {
  return getGaMeasurementId() !== null;
}
