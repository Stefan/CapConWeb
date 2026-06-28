/** Cookie consent — ePrivacy / GDPR functional vs. persistent storage. */
export const CONSENT_COOKIE = "capcon-cookie-consent";

export type ConsentLevel = "essential" | "all";

export function isConsentLevel(value: string | null | undefined): value is ConsentLevel {
  return value === "essential" || value === "all";
}

export function parseConsentLevel(value: string | null | undefined): ConsentLevel | null {
  return isConsentLevel(value) ? value : null;
}

/** Persistent variant cookie only after explicit consent to functional cookies. */
export function allowsPersistentVariantCookie(consent: ConsentLevel | null): boolean {
  return consent === "all";
}
