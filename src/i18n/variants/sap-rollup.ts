import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";

/** SAP-first pharma / diagnostics division roll-up — DE, FR, GB geo-routed. */
export const sapRollupVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – SAP costbook roll-up for pharma & diagnostics`,
      description:
        "Division-level costbook, ERP reconciliation, and change control for SAP-first capex programmes — diagnostics, pharma sites, and multi-project roll-ups without a shadow Excel ledger.",
      keywords: [
        "SAP",
        "Costbook",
        "Reconciliation",
        "Diagnostics",
        "Pharma",
        "Roll-up",
        "Capex",
        "Change Management",
      ],
      openGraphLocale: "en_GB",
    },
    hero: {
      eyebrow: "CapEx & SAP · Division roll-up",
      headline: "One costbook truth across SAP and your project portfolio.",
      subheadline: `${PRODUCT_NAME} connects costbook, change management, and ERP reconciliation for SAP-first capex divisions — with defensible forecasts, division roll-up, and audit-ready approvals. Especially strong for diagnostics, pharma manufacturing, and multi-project steering teams.`,
      primaryCta: "Request a demo",
    },
    problem: {
      title: "SAP holds financials. Project controls still live in Excel.",
      description:
        "When ERP actuals, commitments, and project costbooks diverge, controllers rebuild truth every month — and division roll-up becomes a reconciliation exercise, not governance.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "ERP shadow ledger",
          description:
            "Parallel Excel costbooks because SAP imports do not match project costbook truth across WBS and divisions.",
        },
        {
          id: "rollup-gaps",
          title: "Division roll-up gaps",
          description:
            "Portfolio metrics lag when each project team maintains its own forecast assumptions and change log.",
        },
        {
          id: "change-audit-trail",
          title: "Changes without evidence",
          description:
            "Approved changes are hard to tie back to costbook lines and SAP source keys for audit.",
        },
        {
          id: "opaque-forecasts",
          title: "Opaque forecasts",
          description:
            "Version sprawl across sites makes a defensible estimate at completion difficult to present to finance.",
        },
      ],
    },
    solution: {
      eyebrow: "SAP-first project controls",
      title: "From ERP import to division roll-up — one control layer.",
      description:
        "CapCon sits above SAP with CSV/bridge import and reconciliation — costbook as SSOT, change with forecast impact, and portfolio KPIs your division can defend.",
      steps: [
        {
          step: "01",
          title: "Reconciliation",
          text: "SAP actuals vs. costbook vs. commitments — variance rows with traceable source keys.",
        },
        {
          step: "02",
          title: "Change & forecast",
          text: "Change orders and approvals with transparent impact on EAC and division metrics.",
        },
        {
          step: "03",
          title: "Division roll-up",
          text: "Consolidated portfolio view across projects, currencies, and steering KPIs.",
        },
      ],
    },
    features: {
      eyebrow: "SAP roll-up capabilities",
      title: "What diagnostics and pharma steering teams need",
      description:
        "Costbook SSOT, ERP reconciliation, and change control — without replacing SAP or building a shadow ledger in spreadsheets.",
      items: [
        {
          id: "reconciliation",
          title: "SAP reconciliation",
          description:
            "Import vs. costbook vs. commitments — explainable variance rows with source project keys.",
        },
        {
          id: "costbook",
          title: "Division costbook",
          description:
            "Budget, commitments, and forecasts with clear rationale across 5–20 projects.",
        },
        {
          id: "change-orders",
          title: "Change to forecast",
          description:
            "Approved changes flow to costbook with complete approval history and forecast impact.",
        },
        {
          id: "portfolio",
          title: "Portfolio roll-up",
          description:
            "Division KPIs, drift alerts, and executive briefs — one number the board can trust.",
        },
        {
          id: "workflows",
          title: "Workflows & audit",
          description:
            "Configurable approvals and exportable audit trail for regulated capex programmes.",
        },
      ],
    },
    productScreens: {
      eyebrow: "SAP workflow",
      title: "Reconciliation → costbook → division view",
      description:
        "The monthly steering loop: ERP variance, costbook detail, and portfolio roll-up on the diagnostics reference profile.",
      panels: [
        {
          id: "recon",
          title: "SAP reconciliation",
          caption: "Variance rows with costbook and ERP source trace.",
        },
        {
          id: "costbook",
          title: "Division costbook",
          caption: "Budget, commitments, and defensible EAC across projects.",
        },
        {
          id: "steering",
          title: "Portfolio steering",
          caption: "Division KPIs and variance alerts at a glance.",
        },
      ],
    },
    audience: {
      eyebrow: "DACH · UK · EU Pharma",
      title: "For SAP-first capex divisions",
      description:
        "Project controllers, finance, and PMO teams steering diagnostics, pharma site, and division-level capex with SAP as financial system of record.",
      personas: [
        {
          title: "Project controls",
          description:
            "Costbook SSOT, change impact, and reconciliation without parallel Excel workbooks.",
        },
        {
          title: "Finance / controlling",
          description:
            "Defensible division roll-up, commitment control, and ERP-aligned forecasts.",
        },
        {
          title: "PMO / programme management",
          description:
            "Consistent reporting and portfolio governance across multi-project divisions.",
        },
      ],
    },
    cta: {
      headline: "See SAP reconciliation and division roll-up live.",
      description:
        "We'll demo costbook, ERP variance rows, and change impact on the diagnostics reference pack.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
    dashboard: {
      title: "Division costbook – SAP roll-up",
      stats: [
        { label: "Open variances", value: "7" },
        { label: "Projects", value: "12" },
        { label: "Division EAC", value: "€142M" },
      ],
      columns: { project: "Project / WBS", budget: "Budget", eac: "EAC" },
      rows: [
        { name: "Diagnostics expansion", budget: "€38.2M", eac: "€39.1M" },
        { name: "Site infrastructure", budget: "€24.6M", eac: "€24.6M" },
        { name: "Lab retrofit programme", budget: "€18.4M", eac: "€19.0M" },
      ],
    },
  },
  de: {
    meta: {
      title: `${PRODUCT_NAME} – SAP-Costbook-Roll-up für Pharma & Diagnostics`,
      description:
        "Divisionales Costbook, ERP-Abgleich und Change Control für SAP-first CapEx-Programme — Diagnostics, Pharma-Standorte und Multi-Projekt-Roll-ups ohne Excel-Shadow-Ledger.",
      keywords: [
        "SAP",
        "Costbook",
        "Reconciliation",
        "Diagnostics",
        "Pharma",
        "Roll-up",
        "Capex",
        "Change Management",
      ],
      openGraphLocale: "de_DE",
    },
    hero: {
      eyebrow: "CapEx & SAP · Division Roll-up",
      headline: "Eine Costbook-Wahrheit über SAP und Ihr Projektportfolio.",
      subheadline: `${PRODUCT_NAME} verbindet Costbook, Change Management und ERP-Reconciliation für SAP-first CapEx-Divisionen — mit belastbaren Forecasts, Division-Roll-up und auditierbaren Freigaben. Besonders stark für Diagnostics, Pharma-Fertigung und Multi-Projekt-Steuerung.`,
      primaryCta: "Demo anfragen",
    },
    solution: {
      eyebrow: "SAP-first Project Controls",
      title: "Vom ERP-Import zum Division-Roll-up — eine Steuerungsebene.",
      description:
        "CapCon sitzt über SAP mit CSV/Bridge-Import und Reconciliation — Costbook als SSOT, Change mit Forecast-Wirkung und Portfolio-KPIs, die Ihre Division verteidigen kann.",
      steps: [
        {
          step: "01",
          title: "Reconciliation",
          text: "SAP-Ist vs. Costbook vs. Verpflichtungen — Varianzzeilen mit nachvollziehbaren Source Keys.",
        },
        {
          step: "02",
          title: "Change & Forecast",
          text: "Nachträge und Freigaben mit transparenter Wirkung auf EAC und Divisions-KPIs.",
        },
        {
          step: "03",
          title: "Division Roll-up",
          text: "Konsolidierte Portfolio-Sicht über Projekte, Währungen und Steering-KPIs.",
        },
      ],
    },
    cta: {
      headline: "SAP-Reconciliation und Division-Roll-up live sehen.",
      description:
        "Wir demonstrieren Costbook, ERP-Varianzzeilen und Change-Impact am Diagnostics-Referenzpack.",
      primaryCta: "Demo anfragen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
  },
  fr: {
    meta: {
      title: `${PRODUCT_NAME} – Roll-up costbook SAP pour pharma & diagnostics`,
      description:
        "Costbook divisionnel, rapprochement ERP et change control pour programmes capex SAP-first — diagnostics, sites pharma et roll-up multi-projets sans shadow ledger Excel.",
      keywords: [
        "SAP",
        "Costbook",
        "Rapprochement",
        "Diagnostics",
        "Pharma",
        "Roll-up",
        "Capex",
      ],
      openGraphLocale: "fr_FR",
    },
    hero: {
      eyebrow: "CapEx & SAP · Roll-up division",
      headline: "Une vérité costbook entre SAP et votre portefeuille projets.",
      subheadline: `${PRODUCT_NAME} relie costbook, change management et rapprochement ERP pour divisions capex SAP-first — forecasts défendables, roll-up divisionnel et approbations audit-ready. Particulièrement fort pour diagnostics, fabrication pharma et pilotage multi-projets.`,
      primaryCta: "Demander une démo",
    },
    audience: {
      eyebrow: "DACH · UK · Pharma EU",
      title: "Pour divisions capex SAP-first",
      description:
        "Project controllers, finance et PMO pilotant diagnostics, sites pharma et capex divisionnel avec SAP comme système financier de référence.",
      personas: [
        {
          title: "Project controls",
          description:
            "SSOT costbook, impact change et rapprochement sans workbooks Excel parallèles.",
        },
        {
          title: "Finance / controlling",
          description:
            "Roll-up divisionnel défendable, contrôle des engagements et forecasts alignés ERP.",
        },
        {
          title: "PMO / programme",
          description:
            "Reporting cohérent et gouvernance portefeuille multi-projets.",
        },
      ],
    },
    cta: {
      headline: "Voir le rapprochement SAP et le roll-up divisionnel en live.",
      description:
        "Démo costbook, lignes de variance ERP et impact change sur le pack référence diagnostics.",
      primaryCta: "Demander une démo",
      contactPrefix: "Ou contactez notre équipe à",
    },
  },
};
