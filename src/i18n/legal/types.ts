import type { LegalSection } from "@/i18n/types";

export type ExtendedLegalPages = {
  impressum: { title: string; sections: LegalSection[] };
  privacy: { title: string; sections: LegalSection[] };
  cookies: { title: string; sections: LegalSection[] };
  terms: { title: string; sections: LegalSection[] };
  accessibility: { title: string; sections: LegalSection[] };
};

export type ExtendedFooterLegal = {
  cookies: string;
  terms: string;
  accessibility: string;
};

export type CookieBannerCopy = {
  title: string;
  description: string;
  acceptAll: string;
  essentialOnly: string;
  settingsLink: string;
  privacyLink: string;
  settingsDetailEssential: string;
  settingsDetailAll: string;
};
