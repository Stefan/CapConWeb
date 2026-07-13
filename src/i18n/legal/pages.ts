import type { Locale } from "@/i18n/config";
import type { LegalSection } from "@/i18n/types";
import { esPages } from "@/i18n/legal/locales/es";
import { frPages } from "@/i18n/legal/locales/fr";
import { jaPages } from "@/i18n/legal/locales/ja";
import { koPages } from "@/i18n/legal/locales/ko";
import { zhPages } from "@/i18n/legal/locales/zh";
import type {
  CookieBannerCopy,
  ExtendedFooterLegal,
  ExtendedLegalPages,
} from "@/i18n/legal/types";

export type { CookieBannerCopy, ExtendedFooterLegal, ExtendedLegalPages } from "@/i18n/legal/types";

const sharedPrivacyCore: LegalSection[] = [
  {
    heading: "2. Hosting and server logs",
    paragraphs: [
      "This website is hosted by {{hostingProvider}} ({{hostingRegion}}). When you visit, technically necessary server logs are processed (IP address, timestamp, requested URL, user agent, referrer).",
      "Legal basis (EU/EEA): Art. 6(1)(f) GDPR — legitimate interest in secure, stable operation. Logs are typically retained for up to 30 days unless longer retention is required for security incidents.",
    ],
  },
  {
    heading: "3. Geo-based language and regional edition",
    paragraphs: [
      "We derive an approximate country from platform headers (e.g. Vercel/Cloudflare geo-IP) to suggest language and a regional marketing edition. This is not used to build individual profiles.",
      "Legal basis (EU/EEA): Art. 6(1)(f) GDPR — presenting relevant language and content. With your consent we may store a regional preference cookie for up to 90 days (see Cookie Policy).",
    ],
  },
  {
    heading: "4. Cookies",
    paragraphs: [
      "We use a consent cookie and, with your consent, a regional edition cookie and Google Analytics 4 for aggregate traffic measurement. Details are listed in our Cookie Policy at /[locale]/cookies.",
    ],
  },
  {
    heading: "5. Web analytics (Google Analytics 4)",
    paragraphs: [
      "If you accept all cookies, we use Google Analytics 4 (Google Ireland Ltd.) to understand aggregate page views and referral sources. IP addresses are anonymized. Legal basis (EU/EEA): Art. 6(1)(a) GDPR — consent. You can withdraw consent via cookie settings.",
    ],
  },
  {
    heading: "6. Demo request form",
    paragraphs: [
      "If you submit the demo form, we process name, company, email, role, message, and locale to respond to your inquiry.",
      "Data is transmitted via HTTPS to our server endpoint or, if unavailable, opened in your local email client (mailto). We do not sell demo data to third parties.",
      "Legal basis (EU/EEA): Art. 6(1)(b) GDPR (pre-contractual steps) and Art. 6(1)(f) GDPR (handling inbound business inquiries).",
      "Retention: until the inquiry is completed and no statutory retention applies (typically up to 24 months for business correspondence unless you request earlier deletion).",
    ],
  },
  {
    heading: "7. Links to the CapCon application",
    paragraphs: [
      "Links to app.capconhq.com (login/signup) are subject to the privacy policy of the application operator. The marketing site does not authenticate you into the product.",
    ],
  },
  {
    heading: "8. International transfers",
    paragraphs: [
      "Where hosting or support tools involve processors outside the EU/EEA, we rely on appropriate safeguards (e.g. EU Standard Contractual Clauses) where required.",
    ],
  },
  {
    heading: "9. Your rights",
    paragraphs: [
      "You may request access, rectification, erasure, restriction, objection, and data portability. Contact: {{dpoEmail}}.",
      "EU/EEA: you may lodge a complaint with your supervisory authority. Poland: PUODO. Germany: competent Landesdatenschutzbehörde.",
    ],
  },
];

const cookieSectionsEn: LegalSection[] = [
  {
    heading: "1. What are cookies?",
    paragraphs: [
      "Cookies are small text files stored on your device. We use only cookies necessary for this marketing site.",
    ],
  },
  {
    heading: "2. Cookies we use",
    paragraphs: [
      "capcon-cookie-consent — stores your consent choice (essential / all). Duration: 12 months. Purpose: legal compliance.",
      "capcon-site-variant — stores your regional marketing edition (e.g. APAC, Japan). Duration: 90 days only if you accept all cookies; otherwise session-only. Purpose: consistent regional content.",
      "Google Analytics (only if you accept all cookies): _ga, _ga_* — aggregate visit statistics via Google Analytics 4. Duration: up to 24 months. Provider: Google Ireland Ltd. Privacy: https://policies.google.com/privacy",
    ],
  },
  {
    heading: "3. Managing cookies",
    paragraphs: [
      "You can change your choice via the cookie settings link in the footer. You may also delete cookies in your browser settings.",
    ],
  },
];

const termsSectionsEn: LegalSection[] = [
  {
    heading: "1. Scope",
    paragraphs: [
      "These terms govern use of the CapCon marketing website (capconhq.com). They do not govern the CapCon software product or trial — separate terms apply in the application.",
    ],
  },
  {
    heading: "2. Content and availability",
    paragraphs: [
      "Information on this site is provided for general marketing purposes. Features, certifications, and integrations described may vary by deployment. Screenshots may show demo data.",
    ],
  },
  {
    heading: "3. No contract",
    paragraphs: [
      "Browsing this site or submitting a demo request does not create a binding contract. Any engagement is subject to separate commercial agreement.",
    ],
  },
  {
    heading: "4. Intellectual property",
    paragraphs: [
      "CapCon branding, text, and visuals are protected. You may not copy or reuse content without written permission.",
    ],
  },
  {
    heading: "5. Liability",
    paragraphs: [
      "We strive for accurate content but do not warrant completeness or fitness for a particular decision. Liability is limited to the extent permitted by applicable law.",
    ],
  },
  {
    heading: "6. Applicable law",
    paragraphs: [
      "Unless mandatory consumer protection rules apply, German law governs with jurisdiction at the provider's registered seat (see Legal notice).",
    ],
  },
];

const accessibilitySectionsEn: LegalSection[] = [
  {
    heading: "1. Commitment",
    paragraphs: [
      "We aim to make capconhq.com accessible per WCAG 2.1 Level AA where reasonably practicable for a marketing site.",
    ],
  },
  {
    heading: "2. Measures",
    paragraphs: [
      "Skip links, semantic headings, keyboard-navigable components, sufficient color contrast on primary UI, and descriptive link text.",
    ],
  },
  {
    heading: "3. Known limitations",
    paragraphs: [
      "Some marketing screenshots are images of the product UI and may not expose full accessibility metadata. Animated sections respect prefers-reduced-motion where supported.",
    ],
  },
  {
    heading: "4. Feedback",
    paragraphs: [
      "Report barriers to {{email}} — we will respond within a reasonable time.",
    ],
  },
];

function impressumEn(): LegalSection[] {
  return [
    {
      heading: "Provider",
      paragraphs: [
        "{{companyName}}",
        "{{legalForm}}",
        "{{addressLine1}}",
        "{{addressLine2}}",
        "{{registerLine}}",
        "{{vatLine}}",
      ],
    },
    {
      heading: "Represented by",
      paragraphs: ["{{responsiblePerson}}"],
    },
    {
      heading: "Contact",
      paragraphs: ["Email: {{email}}", "{{phoneLine}}"],
    },
    {
      heading: "Responsible for content (§ 18 Abs. 2 MStV)",
      paragraphs: ["{{responsiblePerson}}"],
    },
    {
      heading: "Disclaimer",
      paragraphs: [
        "We create this website with care but cannot guarantee the accuracy, completeness, or timeliness of all content.",
        "Product screenshots illustrate demo workflows and may not reflect your deployment.",
      ],
    },
  ];
}

function privacyEn(): LegalSection[] {
  return [
    {
      heading: "1. Controller",
      paragraphs: [
        "{{companyName}}",
        "{{addressLine1}}",
        "{{addressLine2}}",
        "Email: {{email}}",
        "Privacy contact: {{dpoEmail}}",
      ],
    },
    ...sharedPrivacyCore,
    {
      heading: "10. Region-specific notes",
      paragraphs: [
        "Australia (Privacy Act): we collect contact and technical data for business inquiries; overseas disclosure may occur via hosting in the US — contact us for details.",
        "Singapore (PDPA): we process personal data for reasonable business purposes; contact {{dpoEmail}} for access/correction.",
        "Japan (APPI): purpose of use is stated in each section above; contact us before cross-border transfer requests.",
        "Korea (PIPA): you may request access, correction, or deletion via {{dpoEmail}}.",
      ],
    },
  ];
}

function impressumDe(): LegalSection[] {
  return [
    {
      heading: "Angaben gemäß § 5 TMG",
      paragraphs: [
        "{{companyName}}",
        "{{legalForm}}",
        "{{addressLine1}}",
        "{{addressLine2}}",
        "{{registerLine}}",
        "{{vatLine}}",
      ],
    },
    {
      heading: "Kontakt",
      paragraphs: ["E-Mail: {{email}}", "{{phoneLine}}"],
    },
    {
      heading: "Haftungsausschluss",
      paragraphs: [
        "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr.",
        "Produkt-Screenshots zeigen Demo-Workflows und können von Ihrer Konfiguration abweichen.",
      ],
    },
  ];
}

function privacyDe(): LegalSection[] {
  return [
    {
      heading: "1. Verantwortlicher",
      paragraphs: [
        "{{companyName}}",
        "{{addressLine1}}",
        "{{addressLine2}}",
        "E-Mail: {{email}}",
        "Datenschutz-Kontakt: {{dpoEmail}}",
      ],
    },
    {
      heading: "2. Hosting und Server-Logdaten",
      paragraphs: [
        "Diese Website wird bei {{hostingProvider}} ({{hostingRegion}}) gehostet. Beim Besuch werden technisch notwendige Server-Logdaten verarbeitet (IP-Adresse, Zeitpunkt, URL, User-Agent, Referrer).",
        "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer in der Regel bis zu 30 Tage, sofern keine längere Aufbewahrung aus Sicherheitsgründen erforderlich ist.",
      ],
    },
    {
      heading: "3. Sprache und regionale Edition (Geo-IP)",
      paragraphs: [
        "Aus Plattform-Headern (z. B. Vercel/Cloudflare) leiten wir ein ungefähres Herkunftsland ab, um Sprache und Marketing-Edition vorzuschlagen.",
        "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Mit Ihrer Einwilligung speichern wir die Edition in einem Cookie (siehe Cookie-Richtlinie).",
      ],
    },
    {
      heading: "4. Cookies",
      paragraphs: [
        "Wir setzen ein Consent-Cookie und — mit Einwilligung — Editions-Cookie sowie Google Analytics 4. Details unter /de/cookies.",
      ],
    },
    {
      heading: "5. Webanalyse (Google Analytics 4)",
      paragraphs: [
        "Bei „Alle akzeptieren“ nutzen wir Google Analytics 4 (Google Ireland Ltd.) für aggregierte Seitenaufrufe und Referrer. IP-Anonymisierung ist aktiv. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Widerruf über Cookie-Einstellungen.",
      ],
    },
    {
      heading: "6. Demo-Anfrage",
      paragraphs: [
        "Bei Nutzung des Demo-Formulars verarbeiten wir Name, Unternehmen, E-Mail, Rolle, Nachricht und Locale zur Bearbeitung.",
        "Übermittlung per HTTPS an unseren Server-Endpunkt oder per mailto in Ihrem E-Mail-Programm.",
        "Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO. Speicherdauer: bis Abschluss der Anfrage, typischerweise bis zu 24 Monate für Geschäftskorrespondenz.",
      ],
    },
    {
      heading: "7. Links zur CapCon-Anwendung",
      paragraphs: [
        "Links zu app.capconhq.com unterliegen der Datenschutzerklärung des Produktbetreibers.",
      ],
    },
    {
      heading: "8. Drittlandübermittlung",
      paragraphs: [
        "Bei Hosting außerhalb der EU/EWR setzen wir geeignete Garantien ein (z. B. EU-Standardvertragsklauseln), soweit erforderlich.",
      ],
    },
    {
      heading: "9. Ihre Rechte",
      paragraphs: [
        "Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit: {{dpoEmail}}.",
        "Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.",
      ],
    },
    {
      heading: "10. Barrierefreiheit",
      paragraphs: ["Siehe /de/accessibility."],
    },
  ];
}

const cookieSectionsDe: LegalSection[] = [
  {
    heading: "1. Was sind Cookies?",
    paragraphs: [
      "Cookies sind kleine Textdateien auf Ihrem Gerät. Wir verwenden nur für diese Marketing-Website erforderliche Cookies.",
    ],
  },
  {
    heading: "2. Von uns gesetzte Cookies",
    paragraphs: [
      "capcon-cookie-consent — speichert Ihre Einwilligung (essential / all). Dauer: 12 Monate.",
      "capcon-site-variant — regionale Marketing-Edition. Dauer: 90 Tage nur bei „Alle akzeptieren“, sonst Sitzung.",
      "Google Analytics (nur bei „Alle akzeptieren“): _ga, _ga_* — aggregierte Besuchsstatistik via Google Analytics 4. Dauer: bis zu 24 Monate. Anbieter: Google Ireland Ltd. Datenschutz: https://policies.google.com/privacy",
    ],
  },
  {
    heading: "3. Verwaltung",
    paragraphs: [
      "Einwilligung über den Footer-Link „Cookie-Einstellungen“ ändern oder Cookies im Browser löschen.",
    ],
  },
];

const termsSectionsDe: LegalSection[] = [
  {
    heading: "1. Geltungsbereich",
    paragraphs: [
      "Diese Nutzungsbedingungen gelten für die CapCon-Marketing-Website. Für die Software gelten separate Bedingungen in der Anwendung.",
    ],
  },
  {
    heading: "2. Inhalte",
    paragraphs: [
      "Marketinginformationen ohne Gewähr. Screenshots können Demo-Daten zeigen. Zertifizierungs- und Integrationsangaben sind implementierungsabhängig.",
    ],
  },
  {
    heading: "3. Kein Vertragsschluss",
    paragraphs: ["Website-Besuch oder Demo-Anfrage begründet keinen bindenden Vertrag."],
  },
  {
    heading: "4. Urheberrecht",
    paragraphs: ["Inhalte sind geschützt. Vervielfältigung nur mit Zustimmung."],
  },
  {
    heading: "5. Haftung",
    paragraphs: ["Haftung im gesetzlich zulässigen Umfang beschränkt."],
  },
  {
    heading: "6. Recht",
    paragraphs: ["Deutsches Recht, Gerichtsstand am Sitz des Anbieters, soweit zulässig."],
  },
];

const accessibilitySectionsDe: LegalSection[] = [
  {
    heading: "1. Ziel",
    paragraphs: [
      "Wir streben WCAG 2.1 Level AA für capconhq.com an, soweit zumutbar.",
    ],
  },
  {
    heading: "2. Maßnahmen",
    paragraphs: [
      "Skip-Links, semantische Struktur, Tastaturbedienung, Kontrast auf Kern-UI.",
    ],
  },
  {
    heading: "3. Grenzen",
    paragraphs: [
      "Produkt-Screenshots sind Bilder und nicht vollständig barrierefrei aufbereitet.",
    ],
  },
  {
    heading: "4. Feedback",
    paragraphs: ["Hinweise an {{email}}."],
  },
  {
    heading: "5. Schlichtung (BFSG)",
    paragraphs: [
      "Bei nicht zufriedenstellender Antwort können Sie sich an die Schlichtungsstelle nach dem Barrierefreiheitsstärkungsgesetz wenden.",
    ],
  },
];

/** Fallback: English legal pages for locales without full translation. */
const enPages: ExtendedLegalPages = {
  impressum: { title: "Legal notice", sections: impressumEn() },
  privacy: { title: "Privacy policy", sections: privacyEn() },
  cookies: { title: "Cookie policy", sections: cookieSectionsEn },
  terms: { title: "Terms of use", sections: termsSectionsEn },
  accessibility: { title: "Accessibility statement", sections: accessibilitySectionsEn },
};

const dePages: ExtendedLegalPages = {
  impressum: { title: "Impressum", sections: impressumDe() },
  privacy: { title: "Datenschutzerklärung", sections: privacyDe() },
  cookies: { title: "Cookie-Richtlinie", sections: cookieSectionsDe },
  terms: { title: "Nutzungsbedingungen", sections: termsSectionsDe },
  accessibility: { title: "Barrierefreiheit", sections: accessibilitySectionsDe },
};

const footerLegalEn: ExtendedFooterLegal = {
  cookies: "Cookies",
  terms: "Terms",
  accessibility: "Accessibility",
};

const footerLegalDe: ExtendedFooterLegal = {
  cookies: "Cookies",
  terms: "Nutzungsbedingungen",
  accessibility: "Barrierefreiheit",
};

export const cookieSettingsLabel: Record<Locale, string> = {
  de: "Cookie-Einstellungen",
  en: "Cookie settings",
  es: "Configuración de cookies",
  fr: "Paramètres cookies",
  ja: "Cookie設定",
  ko: "쿠키 설정",
  pl: "Ustawienia cookies",
  zh: "Cookie 设置",
};

export const socialProofDisclaimerByLocale: Record<Locale, string> = {
  de: "Beispielzitat zu Illustrationszwecken — kein verifiziertes Kundenstatement.",
  en: "Illustrative example — not a verified customer testimonial.",
  es: "Ejemplo ilustrativo — no es un testimonio verificado de cliente.",
  fr: "Exemple illustratif — témoignage non vérifié.",
  ja: "説明用の示例引用であり、特定のお客様の声ではありません。",
  ko: "설명용 예시 인용이며, 검증된 고객 후기가 아닙니다.",
  pl: "Przykład ilustracyjny — niezweryfikowana opinia klienta.",
  zh: "仅供说明的示例引述，并非经核实的客户评价。",
};

export const legalPagesByLocale: Record<Locale, ExtendedLegalPages> = {
  de: dePages,
  en: enPages,
  es: esPages,
  fr: frPages,
  ja: jaPages,
  ko: koPages,
  pl: {
    ...enPages,
    impressum: { title: "Informacje prawne", sections: impressumEn() },
    privacy: {
      title: "Polityka prywatności",
      sections: privacyEn().map((s) =>
        s.heading === "9. Your rights"
          ? {
              ...s,
              paragraphs: [
                ...s.paragraphs,
                "Polska: przysługuje Państwu prawo skargi do Prezesa UODO.",
              ],
            }
          : s,
      ),
    },
    cookies: { title: "Polityka cookies", sections: cookieSectionsEn },
    terms: { title: "Regulamin", sections: termsSectionsEn },
    accessibility: { title: "Dostępność", sections: accessibilitySectionsEn },
  },
  zh: zhPages,
};

export const footerLegalByLocale: Record<Locale, ExtendedFooterLegal> = {
  de: footerLegalDe,
  en: footerLegalEn,
  es: { cookies: "Cookies", terms: "Condiciones", accessibility: "Accesibilidad" },
  fr: { cookies: "Cookies", terms: "Conditions", accessibility: "Accessibilité" },
  ja: { cookies: "Cookie", terms: "利用規約", accessibility: "アクセシビリティ" },
  ko: { cookies: "쿠키", terms: "이용약관", accessibility: "접근성" },
  pl: { cookies: "Cookies", terms: "Regulamin", accessibility: "Dostępność" },
  zh: { cookies: "Cookie", terms: "使用条款", accessibility: "无障碍" },
};

export const cookieBannerCopy: Record<Locale, CookieBannerCopy> = {
  de: {
    title: "Cookies & Datenschutz",
    description:
      "Wir verwenden technisch notwendige Cookies und — mit Ihrer Einwilligung — ein Cookie für Ihre regionale Edition.",
    acceptAll: "Alle akzeptieren",
    essentialOnly: "Nur notwendige",
    settingsLink: "Cookie-Richtlinie",
    privacyLink: "Datenschutzerklärung",
    settingsDetailEssential:
      "„Nur notwendige“: Consent-Cookie + Sitzungs-Edition.",
    settingsDetailAll: "„Alle akzeptieren“: zusätzlich 90-Tage-Edition-Cookie und Google Analytics (aggregierte Statistik).",
  },
  en: {
    title: "Cookies & privacy",
    description:
      "We use essential cookies and — with your consent — a cookie to remember your regional edition.",
    acceptAll: "Accept all",
    essentialOnly: "Essential only",
    settingsLink: "Cookie policy",
    privacyLink: "Privacy policy",
    settingsDetailEssential: "Essential only: consent + session edition cookie.",
    settingsDetailAll: "Accept all: also 90-day regional edition cookie and Google Analytics (aggregate statistics).",
  },
  es: {
    title: "Cookies y privacidad",
    description:
      "Usamos cookies esenciales y — con su consentimiento — una cookie para recordar su edición regional.",
    acceptAll: "Aceptar todas",
    essentialOnly: "Solo necesarias",
    settingsLink: "Política de cookies",
    privacyLink: "Política de privacidad",
    settingsDetailEssential: "Solo necesarias: cookie de consentimiento + edición de sesión.",
    settingsDetailAll: "Aceptar todas: también cookie de edición regional de 90 días y Google Analytics (estadísticas agregadas).",
  },
  fr: {
    title: "Cookies & confidentialité",
    description:
      "Cookies essentiels et, avec votre consentement, un cookie d'édition régionale.",
    acceptAll: "Tout accepter",
    essentialOnly: "Essentiels uniquement",
    settingsLink: "Politique cookies",
    privacyLink: "Politique de confidentialité",
    settingsDetailEssential: "Essentiels : cookie de consentement + édition session.",
    settingsDetailAll: "Tout accepter : cookie d'édition 90 jours en plus.",
  },
  ja: {
    title: "Cookieとプライバシー",
    description:
      "必須Cookieおよび、同意いただいた場合に地域版を記憶するCookieを使用します。",
    acceptAll: "すべて同意",
    essentialOnly: "必須のみ",
    settingsLink: "Cookieポリシー",
    privacyLink: "プライバシーポリシー",
    settingsDetailEssential: "必須のみ：同意Cookie＋セッション版。",
    settingsDetailAll: "すべて同意：90日間の地域版Cookieも保存。",
  },
  ko: {
    title: "쿠키 및 개인정보",
    description: "필수 쿠키 및 동의 시 지역 에디션 쿠키를 사용합니다.",
    acceptAll: "모두 동의",
    essentialOnly: "필수만",
    settingsLink: "쿠키 정책",
    privacyLink: "개인정보 처리방침",
    settingsDetailEssential: "필수만: 동의 쿠키 + 세션 에디션.",
    settingsDetailAll: "모두 동의: 90일 지역 에디션 쿠키 추가.",
  },
  pl: {
    title: "Cookies i prywatność",
    description:
      "Stosujemy niezbędne pliki cookie oraz — za Państwa zgodą — cookie edycji regionalnej.",
    acceptAll: "Akceptuj wszystkie",
    essentialOnly: "Tylko niezbędne",
    settingsLink: "Polityka cookies",
    privacyLink: "Polityka prywatności",
    settingsDetailEssential: "Tylko niezbędne: cookie zgody + edycja sesyjna.",
    settingsDetailAll: "Akceptuj wszystkie: dodatkowo cookie edycji na 90 dni.",
  },
  zh: {
    title: "Cookie 与隐私",
    description: "我们使用必要 Cookie；经您同意后会记住区域版本。",
    acceptAll: "全部接受",
    essentialOnly: "仅必要",
    settingsLink: "Cookie 政策",
    privacyLink: "隐私政策",
    settingsDetailEssential: "仅必要：同意 Cookie + 会话版本。",
    settingsDetailAll: "全部接受：另保存 90 天区域版本 Cookie。",
  },
};
