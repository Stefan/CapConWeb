import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "de",
  meta: {
    title: `${PRODUCT_NAME} – Projektsteuerung für kapitalintensive Capex-Programme`,
    description:
      "Integrierte Plattform: Costbook, Change Management und Portfolio-Steuerung. Für komplexe Bauprojekte und Capex-Portfolios international.",
    keywords: [
      "Capex",
      "Projektportfolio",
      "EAC",
      "Forecasting",
      "Construction",
      "Life Sciences",
      "PMO",
      "SAP",
      "ERP Abgleich",
    ],
    openGraphLocale: "de_DE",
  },
  a11y: {
    skipToContent: "Zum Inhalt springen",
    mainNav: "Hauptnavigation",
    footerNav: "Footer-Navigation",
    home: "Startseite",
    openMenu: "Menü öffnen",
  },
  site: {
    description:
      "Integrierte Plattform für Projektsteuerung und Finanzcontrolling bei kapitalintensiven Programmen — Finanzen, Change und Portfolio in einer einheitlichen Steuerungsebene.",
  },
  nav: {
    problem: "Herausforderung",
    features: "Funktionen",
    solution: "Lösung",
    audience: "Für wen",
    enterprise: "Enterprise",
    login: "Anmelden",
    bookDemo: "Demo anfragen",
    startTrial: "Trial starten",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "Projektsteuerung und Finanzcontrolling für kapitalintensive Programme",
    subheadline: `${PRODUCT_NAME} vereint Costbook, Change Management, Terminplanbezug und Portfolio-Steuerung auf einer Plattform — mit nachvollziehbaren Forecasts, durchgängigen Freigaben und belastbaren Kennzahlen für komplexe Capex-Programme. Besonders stark dort, wo ERP die Finanzdaten liefert und Multi-Site-Portfolios eine Costbook-Wahrheit brauchen.`,
    primaryCta: "Demo anfragen",
    secondaryCta: "Plattform entdecken",
  },
  problem: {
    title: "Capex-Projekte sind komplex. Die Kontrolle darüber sollte es nicht sein.",
    description:
      "In vielen Organisationen fehlt die durchgängige Transparenz – obwohl die Daten oft vorhanden sind.",
    items: [
      {
        id: "budget-overruns",
        title: "Budgetüberschreitungen",
        description:
          "Abweichungen werden oft erst spät erkannt – wenn Korrekturmaßnahmen bereits teuer werden.",
      },
      {
        id: "opaque-forecasts",
        title: "Intransparente Forecasts",
        description:
          "Unterschiedliche Versionen und Annahmen erschweren verlässliche Planungsentscheidungen.",
      },
      {
        id: "excel-processes",
        title: "Manuelle Excel-Prozesse",
        description:
          "Zeitintensive Konsolidierung, hohe Fehleranfälligkeit und wenig Nachvollziehbarkeit.",
      },
      {
        id: "portfolio-blind-spots",
        title: "Fehlender Portfolio-Überblick",
        description:
          "Einzelprojekte sind sichtbar – die Gesamtwirkung auf Investitionsbudget, Obergrenzen und Cashflow nicht.",
      },
      {
        id: "sap-shadow-ledger",
        title: "ERP-Shadow-Ledger",
        description:
          "Controller pflegen parallele Excel-Costbooks, weil ERP-Importe nicht zur Projekt-Costbook-Wahrheit passen.",
      },
      {
        id: "change-audit-trail",
        title: "Änderungen ohne Nachweis",
        description:
          "Nachträge und Scope-Änderungen lassen sich schwer gegen genehmigtes Budget und Forecast-Baseline belegen.",
      },
    ],
  },
  solution: {
    eyebrow: "Die Lösung",
    title: `${PRODUCT_NAME} schafft Klarheit, wo andere nur Daten sehen.`,
    description:
      "Statt verstreuter Tabellen und isolierter Projektberichte führt CapCon Kosten, Verpflichtungen, Änderungsauswirkungen und Portfolio-Kennzahlen in einem verlässlichen System zusammen — vom Projekt-Costbook bis zur Konzern-Konsolidierung.",
    steps: [
      {
        step: "01",
        title: "Finanzen",
        text: "Costbook, Verpflichtungen und Forecasts mit nachvollziehbarer Herleitung — ohne parallele Excel-Listen.",
      },
      {
        step: "02",
        title: "Change Management",
        text: "Nachträge und Freigaben mit transparenter Wirkung auf Gesamtkostenprognose und Portfolio.",
      },
      {
        step: "03",
        title: "Portfolio",
        text: "Konsolidierung über Projekte, Währungs- und Risikosignale, Reporting für die Geschäftsführung.",
      },
    ],
  },
  features: {
    eyebrow: "Funktionen",
    title: "Die Werkzeuge für verlässliche Capex-Steuerung",
    description:
      "Kern-Project-Controls im Alltag — plus ERP-Abgleich und Vendor-Portal, wo Ihr Deployment es erfordert.",
    items: [
      {
        id: "costbook",
        title: "Zentrales Costbook & nachvollziehbare Gesamtkosten",
        description:
          "Budget, Forecast, Verpflichtungen und Ist-Kosten mit verständlichen Erläuterungen — eine belastbare Finanzgrundlage statt paralleler Tabellen.",
      },
      {
        id: "change-orders",
        title: "Change Management",
        description:
          "Nachträge, Freigaben und Auswirkungen auf die Prognose — lückenlos dokumentiert von der Anfrage bis zur Portfolio-Sicht.",
      },
      {
        id: "portfolio-intelligence",
        title: "Portfolio Intelligence",
        description:
          "Kennzahlen über alle Projekte, Risikotreiber und Währungseffekte für PMO und Lenkungsausschüsse.",
      },
      {
        id: "schedule-financials",
        title: "Terminplan & Kosten",
        description:
          "Terminplan und Costbook im Zusammenspiel — Soll-Ist-Vergleich, Verpflichtungen und Finanzkennzahlen in einer Sicht.",
      },
      {
        id: "workflows",
        title: "Workflows & Audit",
        description:
          "Konfigurierbare Freigaben, Compliance-Kontext und vollständiger Audit-Trail für regulierte Umgebungen.",
      },
      {
        id: "sap-reconciliation",
        title: "SAP / ERP-Abgleich",
        description:
          "Ist-Werte und Verpflichtungen importieren, ERP vs. Costbook vergleichen — weniger Shadow Ledger in der Steuerung.",
      },
      {
        id: "vendor-portal",
        title: "Vendor / GU-Portal",
        description:
          "SOV-Progress und Billing-Submissions wo aktiv — ergänzt Field-Tools, kein Vertragsmanagement-Ersatz.",
      },
    ],
  },
  productScreens: {
    eyebrow: "Produkt",
    title: "Vom Costbook über Change bis zur Portfolio-Übersicht",
    description:
      "CapCon verbindet operative Projektsteuerung mit Portfolio-Steuerung — ohne Excel-Konsolidierung am Monatsende.",
    panels: [
      {
        id: "costbook",
        title: "Costbook & Gesamtkosten",
        caption: "Kostenstruktur, Verpflichtungen und nachvollziehbare Gesamtkostenprognose (EAC).",
      },
      {
        id: "co-cc",
        title: "Auswirkungen von Nachträgen",
        caption: "Nachträge mit Prognose-Verknüpfung und Portfolio-Signalen.",
      },
      {
        id: "portfolio",
        title: "Portfolio-Steuerung",
        caption: "Programm-Kennzahlen, Frühwarnungen bei Abweichungen und priorisierte Steuerungsmaßnahmen.",
      },
      {
        id: "risks",
        title: "Risikomanagement",
        caption: "Bewertung, Kategorien und Top-Risiken — verknüpft mit Portfolio-Steuerung.",
      },
    ],
  },
  socialProof: {
    eyebrow: "Vertrauen",
    quote:
      "Endlich ein System, in dem Costbook, Change und Portfolio zusammenlaufen — ohne Excel-Konsolidierung am Monatsende.",
    attribution: "Finanzcontroller, Multi-Site-Fertigungsprogramm",
    metrics: [
      { value: "1 Plattform", label: "Finanzen, Change & Portfolio" },
      { value: "Change → EAC", label: "Durchgängige Prognosekette" },
      { value: "Prüfungssicher", label: "Protokollierung & Freigabesignaturen" },
    ],
  },
  audience: {
    eyebrow: "Zielgruppen",
    title: "Für komplexe Capex-Portfolios — branchenoffen, integrationsstark",
    description:
      "Ob Produktionserweiterung, Infrastruktur oder Multi-Site-Programm: Wenn Budget, Terminplan und Projektausführung zusammenspielen müssen, reicht Task-Management nicht aus. CapCon ist die integrierte Steuerungsebene zwischen Projektorganisation, Baustelle und Finanzcontrolling — besonders dort, wo ERP die Finanzdaten liefert.",
    personas: [
      {
        title: "Finanzcontroller / Capex",
        description:
          "Verlässliche Forecasts, transparente Verpflichtungen und belastbare Investitionsentscheidungen — in Bau, Life Sciences oder anderen kapitalintensiven Branchen.",
      },
      {
        title: "PMO / Programmmanagement",
        description:
          "Programm- und Portfolio-Steuerung mit einheitlichem Reporting und Abweichungssignalen im Gesamtportfolio.",
      },
      {
        title: "Projektcontroller & Qualität",
        description:
          "In regulierten Branchen zählen Nachweisbarkeit, elektronische Signaturen und konsistente Datenqualität — von der Abrechnungszeile bis zur Freigabe.",
      },
    ],
  },
  enterprise: {
    eyebrow: "Enterprise",
    title: "Gebaut für anspruchsvolle Unternehmensumgebungen",
    description: `${PRODUCT_NAME} erfüllt die Anforderungen regulierter Branchen und integriert sich in bestehende Finanz- und Compliance-Prozesse.`,
    badgeDisclaimer:
      "Ausbaustufen und Zertifizierungsumfang je nach Implementierung — Details besprechen wir in der Demo.",
    signals: [
      {
        id: "security",
        title: "Security & Compliance",
        description:
          "Enterprise-Sicherheitsstandards mit GxP- und 21 CFR Part 11 Readiness für regulierte Umgebungen (je nach Projektumfang).",
      },
      {
        id: "signatures",
        title: "Freigabesignaturen & Audit-Trail",
        description:
          "Elektronische Freigaben, unveränderliche Protokolle und nachvollziehbare Änderungen an Forecasts und Registerdaten.",
      },
      {
        id: "sap",
        title: "SAP-Integration",
        description:
          "Anbindung an ERP- und Finanzprozesse – Integrationspfad und Scope werden pro Kunde definiert.",
      },
      {
        id: "gdpr",
        title: "DSGVO-konform",
        description:
          "Datenschutz und Hosting in europäischen Rechenzentren nach EU-Anforderungen.",
      },
    ],
    badges: ["GxP Ready", "21 CFR Part 11 Readiness", "SAP-Anbindung", "DSGVO-konform"],
  },
  cta: {
    headline: "Klarheit in Ihrem Capex-Portfolio beginnt mit einem Gespräch.",
    description: `Erleben Sie ${PRODUCT_NAME} in einer persönlichen Demo — abgestimmt auf Ihre Projektlandschaft und Anforderungen an Finanzcontrolling und Portfolio-Steuerung.`,
    primaryCta: "Demo anfragen",
    contactPrefix: "Oder kontaktieren Sie unser Team unter",
  },
  demo: {
    metaTitle: "Demo anfragen",
    title: "Persönliche Demo anfragen",
    description:
      "Erzählen Sie uns kurz von Ihrer Projektlandschaft – wir melden uns mit einem passenden Demo-Termin.",
    nameLabel: "Name",
    namePlaceholder: "Vor- und Nachname",
    companyLabel: "Unternehmen",
    companyPlaceholder: "Firma / Organisation",
    emailLabel: "E-Mail",
    emailPlaceholder: "name@unternehmen.de",
    roleLabel: "Rolle",
    rolePlaceholder: "z. B. Finanzcontroller, PMO-Leiter",
    messageLabel: "Nachricht (optional)",
    messagePlaceholder: "Projekttyp, Programmgröße, ERP-Landschaft, besondere Anforderungen …",
    submit: "Anfrage senden",
    consentBefore: "Ich willige ein, dass meine Angaben gemäß unserer",
    consentAfter: " verarbeitet werden.",
    consentRequired: "Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung.",
    backHome: "Zurück zur Startseite",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    impressum: "Impressum",
    privacy: "Datenschutz",
  },
  legalPages: {
    impressum: {
      title: "Impressum",
      sections: [
        {
          heading: "Angaben gemäß § 5 TMG",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "Kontakt",
          paragraphs: [
            "E-Mail: {{email}}",
            "{{phoneLine}}",
          ],
        },
        {
          heading: "Verantwortlich für den Inhalt",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "Haftungsausschluss",
          paragraphs: [
            "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
          ],
        },
      ],
    },
    privacy: {
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "1. Verantwortlicher",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "E-Mail: {{email}}",
          ],
        },
        {
          heading: "2. Erhebung und Speicherung personenbezogener Daten",
          paragraphs: [
            "Beim Besuch dieser Website werden technisch notwendige Server-Logdaten (z. B. IP-Adresse, Zeitpunkt, User-Agent) verarbeitet.",
            "Wenn Sie das Demo-Formular nutzen, verarbeiten wir die von Ihnen eingegebenen Angaben (Name, Unternehmen, E-Mail, Rolle, Nachricht) zur Bearbeitung Ihrer Anfrage.",
          ],
        },
        {
          heading: "3. Rechtsgrundlage",
          paragraphs: [
            "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website).",
          ],
        },
        {
          heading: "4. Speicherdauer",
          paragraphs: [
            "Demo-Anfragen werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
          ],
        },
        {
          heading: "5. Ihre Rechte",
          paragraphs: [
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit. Beschwerden können Sie bei einer Datenschutz-Aufsichtsbehörde einreichen.",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "Projektübersicht – EVM & KI-Zusammenfassung",
    stats: [
      { label: "Gesamt-Capex", value: "101,9 M€" },
      { label: "EAC Delta", value: "+2,4 M€" },
      { label: "Projekte", value: "12 aktiv" },
    ],
    columns: { project: "Projekt", budget: "Budget", eac: "EAC" },
    rows: [
      { name: "Werk A – Erweiterung", budget: "42,8 M€", eac: "44,1 M€" },
      { name: "Clean Room Phase 2", budget: "18,2 M€", eac: "17,9 M€" },
      { name: "Logistikzentrum Nord", budget: "31,5 M€", eac: "33,2 M€" },
      { name: "IT-Infrastruktur 2026", budget: "9,4 M€", eac: "9,6 M€" },
    ],
  },
};

export default dictionary;
