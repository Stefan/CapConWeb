import type { Locale } from "@/i18n/config";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type SiteDictionary = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    openGraphLocale: string;
  };
  a11y: {
    skipToContent: string;
    mainNav: string;
    footerNav: string;
    home: string;
    openMenu: string;
  };
  site: {
    description: string;
  };
  nav: {
    problem: string;
    features: string;
    solution: string;
    audience: string;
    enterprise: string;
    login: string;
    bookDemo: string;
    startTrial: string;
  };
  tagline: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta?: string;
  };
  problem: {
    title: string;
    description: string;
    items: Array<{ id: string; title: string; description: string }>;
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ step: string; title: string; text: string }>;
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ id: string; title: string; description: string }>;
  };
  productScreens: {
    eyebrow: string;
    title: string;
    description: string;
    panels: Array<{ id: string; title: string; caption: string }>;
  };
  socialProof: {
    eyebrow: string;
    quote: string;
    attribution: string;
    metrics: Array<{ value: string; label: string }>;
  };
  audience: {
    eyebrow: string;
    title: string;
    description: string;
    personas: Array<{ title: string; description: string }>;
  };
  enterprise: {
    eyebrow: string;
    title: string;
    description: string;
    badgeDisclaimer: string;
    signals: Array<{ id: string; title: string; description: string }>;
    badges: string[];
  };
  cta: {
    headline: string;
    description: string;
    primaryCta: string;
    contactPrefix: string;
  };
  demo: {
    metaTitle: string;
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    roleLabel: string;
    rolePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    consentBefore: string;
    consentAfter: string;
    consentRequired: string;
    backHome: string;
  };
  footer: {
    rights: string;
    impressum: string;
    privacy: string;
    cookies?: string;
    terms?: string;
    accessibility?: string;
    cookieSettings?: string;
  };
  legalPages: {
    impressum: { title: string; sections: LegalSection[] };
    privacy: { title: string; sections: LegalSection[] };
    cookies?: { title: string; sections: LegalSection[] };
    terms?: { title: string; sections: LegalSection[] };
    accessibility?: { title: string; sections: LegalSection[] };
  };
  socialProofDisclaimer?: string;
  dashboard: {
    title: string;
    stats: Array<{ label: string; value: string }>;
    columns: { project: string; budget: string; eac: string };
    rows: Array<{ name: string; budget: string; eac: string }>;
  };
};
