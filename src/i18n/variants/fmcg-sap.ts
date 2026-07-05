import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";

/** Global FMCG multi-site plant capex — sales/campaign variant via ?variant=fmcg-sap (no geo routing). */
export const fmcgSapVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – Global FMCG plant capex & SAP roll-up`,
      description:
        "Multi-site manufacturing capex with SAP WBS roll-up, costbook, change control, and GC collaboration — for global food and consumer goods plant programmes without campus or GMP complexity.",
      keywords: [
        "FMCG",
        "Manufacturing",
        "SAP",
        "Plant CapEx",
        "Multi-Site",
        "Costbook",
        "SOV",
        "Roll-up",
      ],
      openGraphLocale: "en_US",
    },
    hero: {
      eyebrow: "CapEx · Global FMCG Manufacturing",
      headline: "Steer multi-site plant capex with one SAP-aligned costbook.",
      subheadline: `${PRODUCT_NAME} connects costbook, SAP reconciliation, change orders, and vendor/GC collaboration for global manufacturing programmes — NA, EMEA, LATAM, and APAC in one portfolio view. No campus master plan. No GMP module. Built for plant-line capex at scale.`,
      primaryCta: "Request a demo",
    },
    problem: {
      title: "Global plant programmes. Local spreadsheets.",
      description:
        "When each region runs its own costbook in Excel and SAP WBS truth lives in finance, capital excellence teams lose weeks every month on consolidation — and forecast drift shows up late.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "SAP shadow ledger",
          description:
            "Regional controllers maintain parallel workbooks because SAP roll-up does not match project costbook truth.",
        },
        {
          id: "multi-site-blind-spots",
          title: "Multi-site blind spots",
          description:
            "Individual plant projects are tracked — programme-level cash, cap utilisation, and SPI/CPI across sites often are not.",
        },
        {
          id: "change-audit-trail",
          title: "Line changes without trace",
          description:
            "Packaging-line scope shifts and EPC variations are hard to tie back to approved budget and forecast baseline.",
        },
        {
          id: "gc-collaboration",
          title: "GC collaboration friction",
          description:
            "General contractors and EPCs re-key progress and billing data because there is no owner-controlled vendor layer.",
        },
      ],
    },
    solution: {
      eyebrow: "For capital excellence",
      title: "One control layer from plant line to global programme.",
      description:
        "CapCon gives regional engineering, plant controllers, and global PMO a shared costbook — reconciled with SAP, connected to SOV billing where contracts require it, and rolled up for executive steering.",
      steps: [
        {
          step: "01",
          title: "SAP & costbook",
          text: "WBS-linked costbook, commitments, and reconciliation — less shadow Excel across sites.",
        },
        {
          step: "02",
          title: "Line & contract",
          text: "Change orders, SOV progress, and vendor portal for EPC/GC self-service where enabled.",
        },
        {
          step: "03",
          title: "Global portfolio",
          text: "Programme roll-up across regions with variance signals and health matrix views.",
        },
      ],
    },
    features: {
      eyebrow: "FMCG capabilities",
      title: "What global plant capex teams need",
      description:
        "SAP roll-up, multi-site portfolio, and line-level change control — without US campus master plan or CDMO/GMP modules.",
      items: [
        {
          id: "sap-rollup",
          title: "SAP WBS roll-up",
          description:
            "Division and programme consolidation with source project keys and reconciliation variance rows.",
        },
        {
          id: "costbook",
          title: "Plant costbook",
          description:
            "Budget, commitments, and defensible EAC for packaging lines, utilities, and site infrastructure.",
        },
        {
          id: "change-orders",
          title: "Change to forecast",
          description:
            "Approved changes with forecast impact — documented from request to portfolio view.",
        },
        {
          id: "sov-vendor",
          title: "SOV & vendor portal",
          description:
            "EPC/GC billing submissions and progress where contract structure requires SOV — complement, not replace ERP.",
        },
        {
          id: "portfolio",
          title: "Global portfolio",
          description:
            "Multi-region programme KPIs, SPI/CPI outliers, and executive brief across 3–10 sites.",
        },
      ],
    },
    productScreens: {
      eyebrow: "FMCG journey",
      title: "Programme → SAP → packaging line",
      description:
        "The Mondelez-style walkthrough: global programme view, SAP reconciliation on a control project, and packaging-line SOV.",
      panels: [
        {
          id: "steering",
          title: "Global programme steering",
          caption: "Regional programmes and portfolio KPIs in one view.",
        },
        {
          id: "recon",
          title: "SAP reconciliation",
          caption: "SOV ↔ commitment links on the control project.",
        },
        {
          id: "sov",
          title: "Packaging line SOV",
          caption: "Line-level billing baseline for EPC/GC collaboration.",
        },
      ],
    },
    audience: {
      eyebrow: "Global FMCG",
      title: "For multi-site manufacturing capex",
      description:
        "Global capital excellence, regional engineering PM, plant controllers, and SAP steering teams running 3–10 site plant programmes.",
      personas: [
        {
          title: "Capital excellence / finance",
          description:
            "Programme roll-up, commitment control, and board-ready metrics across regions.",
        },
        {
          title: "Regional engineering PM",
          description:
            "Line-level costbook, change control, and EPC/GC collaboration on plant capex.",
        },
        {
          title: "Plant controller",
          description:
            "SAP-aligned costbook truth, reconciliation, and defensible forecasts per site.",
        },
      ],
    },
    cta: {
      headline: "See global FMCG plant capex on one control layer.",
      description:
        "We'll demo programme roll-up, SAP reconciliation, and packaging-line SOV on the FMCG reference pack.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
    dashboard: {
      title: "Global FMCG programme – plant capex",
      stats: [
        { label: "Active sites", value: "8" },
        { label: "Programme EAC", value: "$284M" },
        { label: "Open COs", value: "11" },
      ],
      columns: { project: "Site / line", budget: "Budget", eac: "EAC" },
      rows: [
        { name: "Meadowbrook packaging line", budget: "$42.1M", eac: "$43.6M" },
        { name: "EMEA utilities upgrade", budget: "$28.4M", eac: "$28.4M" },
        { name: "APAC filler retrofit", budget: "$19.8M", eac: "$20.2M" },
      ],
    },
  },
  de: {
    meta: {
      title: `${PRODUCT_NAME} – Globales FMCG-Werks-CapEx & SAP-Roll-up`,
      description:
        "Multi-Site-Manufacturing-CapEx mit SAP-WBS-Roll-up, Costbook, Change Control und GU/EPC-Zusammenarbeit — für globale Food- und Consumer-Goods-Werksprogramme ohne Campus- oder GMP-Komplexität.",
      keywords: [
        "FMCG",
        "Manufacturing",
        "SAP",
        "Werks CapEx",
        "Multi-Site",
        "Costbook",
        "SOV",
      ],
      openGraphLocale: "de_DE",
    },
    hero: {
      eyebrow: "CapEx · Globales FMCG Manufacturing",
      headline: "Multi-Site-Werks-CapEx mit einem SAP-abgestimmten Costbook steuern.",
      subheadline: `${PRODUCT_NAME} verbindet Costbook, SAP-Reconciliation, Nachträge und Vendor-/GU-Zusammenarbeit für globale Fertigungsprogramme — NA, EMEA, LATAM und APAC in einer Portfolio-Sicht. Kein Campus Master Plan. Kein GMP-Modul. Gebaut für Werkslinien-CapEx im großen Maßstab.`,
      primaryCta: "Demo anfragen",
    },
    audience: {
      eyebrow: "Global FMCG",
      title: "Für Multi-Site-Manufacturing-CapEx",
      description:
        "Global Capital Excellence, Regional Engineering PM, Werkscontroller und SAP-Steuerung bei 3–10 Standort-Werksprogrammen.",
      personas: [
        {
          title: "Capital Excellence / Finance",
          description:
            "Programm-Roll-up, Commitment-Control und board-taugliche Metriken über Regionen.",
        },
        {
          title: "Regional Engineering PM",
          description:
            "Line-Costbook, Change Control und EPC/GU-Zusammenarbeit im Werks-CapEx.",
        },
        {
          title: "Werkscontroller",
          description:
            "SAP-abgestimmte Costbook-Wahrheit, Reconciliation und belastbare Forecasts pro Standort.",
        },
      ],
    },
    cta: {
      headline: "Globales FMCG-Werks-CapEx auf einer Steuerungsebene sehen.",
      description:
        "Wir demonstrieren Programm-Roll-up, SAP-Reconciliation und Packaging-Line-SOV am FMCG-Referenzpack.",
      primaryCta: "Demo anfragen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
  },
  fr: {
    meta: {
      title: `${PRODUCT_NAME} – Capex usines FMCG global & roll-up SAP`,
      description:
        "Capex manufacturing multi-sites avec roll-up WBS SAP, costbook, change control et collaboration GC/EPC — programmes usines food & consumer goods sans campus ni GMP.",
      keywords: ["FMCG", "Manufacturing", "SAP", "Capex usine", "Multi-sites"],
      openGraphLocale: "fr_FR",
    },
    hero: {
      eyebrow: "CapEx · FMCG Manufacturing global",
      headline: "Piloter le capex usines multi-sites avec un costbook aligné SAP.",
      subheadline: `${PRODUCT_NAME} relie costbook, rapprochement SAP, change orders et collaboration vendor/GC pour programmes manufacturing globaux — NA, EMEA, LATAM et APAC dans une vue portefeuille. Sans master plan campus. Sans module GMP.`,
      primaryCta: "Demander une démo",
    },
    audience: {
      eyebrow: "FMCG global",
      title: "Pour capex manufacturing multi-sites",
      description:
        "Capital excellence global, PM engineering régional, contrôleurs d'usine et pilotage SAP pour programmes 3–10 sites.",
      personas: [
        {
          title: "Capital excellence / finance",
          description:
            "Roll-up programme, contrôle engagements et métriques board-ready multi-régions.",
        },
        {
          title: "PM engineering régional",
          description:
            "Costbook ligne, change control et collaboration EPC/GC sur capex usine.",
        },
        {
          title: "Contrôleur d'usine",
          description:
            "Vérité costbook alignée SAP, rapprochement et forecasts défendables par site.",
        },
      ],
    },
    cta: {
      headline: "Voir le capex usines FMCG global sur une couche de pilotage.",
      description:
        "Démo roll-up programme, rapprochement SAP et SOV ligne packaging sur le pack référence FMCG.",
      primaryCta: "Demander une démo",
      contactPrefix: "Ou contactez notre équipe à",
    },
  },
};
