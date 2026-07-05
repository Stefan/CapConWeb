import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";

/** Division-level costbook consolidation for pharma / diagnostics — edition landing pages only. */
export const sapRollupVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – Costbook consolidation for pharma & diagnostics divisions`,
      description:
        "Consolidated division costbook, ERP reconciliation, and change control for capital programmes — diagnostics, pharma sites, and multi-project portfolios without parallel spreadsheet workbooks.",
      keywords: [
        "Costbook",
        "ERP reconciliation",
        "Diagnostics",
        "Pharma",
        "Portfolio consolidation",
        "Capex",
        "Change Management",
        "Project Controls",
      ],
      openGraphLocale: "en_GB",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · Pharma & diagnostics",
      headline: "Steer division capex with forecasts leadership can defend.",
      subheadline: `${PRODUCT_NAME} unifies costbook, change management, and portfolio consolidation for multi-project divisions — with ERP reconciliation, audit-ready approvals, and traceability from project detail to management metrics. Built for diagnostics, pharma site investments, and division steering teams.`,
      primaryCta: "Request a demo",
    },
    problem: {
      title: "Financial data fragments between ERP and the field.",
      description:
        "When ERP actuals, commitments, and project costbooks diverge, controllers rebuild the numbers every month — and division consolidation becomes reconciliation, not governance.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "Parallel costbook workbooks",
          description:
            "Project teams maintain Excel workbooks because ERP imports do not match the consolidated costbook across WBS and divisions.",
        },
        {
          id: "rollup-gaps",
          title: "Consolidation gaps",
          description:
            "Portfolio metrics lag when each project team maintains its own forecast assumptions and change log.",
        },
        {
          id: "change-audit-trail",
          title: "Changes without evidence",
          description:
            "Approved changes are hard to tie back to costbook lines and ERP source references for audit and steering.",
        },
        {
          id: "opaque-forecasts",
          title: "Opaque forecasts",
          description:
            "Version sprawl across sites makes a defensible estimate at completion difficult to present to finance leadership.",
        },
      ],
    },
    solution: {
      eyebrow: "For division steering",
      title: "From project costbook to division consolidation — one control layer.",
      description:
        "CapCon complements your ERP with import, reconciliation, and project controls — a consolidated costbook, change with forecast impact, and portfolio KPIs your division can defend in every steering cycle.",
      steps: [
        {
          step: "01",
          title: "ERP reconciliation",
          text: "ERP actuals vs. costbook vs. commitments — variance rows with traceable source references.",
        },
        {
          step: "02",
          title: "Change & forecast",
          text: "Change orders and approvals with transparent impact on EAC and division metrics.",
        },
        {
          step: "03",
          title: "Portfolio consolidation",
          text: "Consolidated portfolio view across projects, currencies, and steering KPIs.",
        },
      ],
    },
    features: {
      eyebrow: "Division capabilities",
      title: "What pharma and diagnostics steering teams require",
      description:
        "Consolidated costbook, ERP reconciliation, and change control — complementing your ERP, not replacing it.",
      items: [
        {
          id: "reconciliation",
          title: "ERP reconciliation",
          description:
            "Import vs. costbook vs. commitments — explainable variance rows with source project references.",
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
          title: "Portfolio consolidation",
          description:
            "Division KPIs, drift alerts, and executive briefs — one number leadership can trust.",
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
      eyebrow: "Division workflow",
      title: "Reconciliation → costbook → portfolio steering",
      description:
        "The monthly steering loop finance and project controls run together: ERP variance, costbook detail, and division consolidation.",
      panels: [
        {
          id: "recon",
          title: "ERP reconciliation",
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
      eyebrow: "Pharma & diagnostics",
      title: "For division-level capex steering",
      description:
        "Project controllers, finance, and PMO leaders governing diagnostics, pharma site, and division-level capital programmes where ERP holds financial data.",
      personas: [
        {
          title: "Project controls",
          description:
            "Consolidated costbook, change impact, and reconciliation without parallel Excel workbooks.",
        },
        {
          title: "Finance / controlling",
          description:
            "Defensible division consolidation, commitment control, and ERP-aligned forecasts.",
        },
        {
          title: "PMO / programme management",
          description:
            "Consistent reporting and portfolio governance across multi-project divisions.",
        },
      ],
    },
    cta: {
      headline: "See division consolidation and costbook control in a live walkthrough.",
      description:
        "We will demonstrate costbook, variance reconciliation, and change impact on a representative division programme.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
    dashboard: {
      title: "Division costbook – consolidated view",
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
      title: `${PRODUCT_NAME} – Costbook-Konsolidierung für Pharma & Diagnostics`,
      description:
        "Einheitliches Divisions-Costbook, ERP-Abgleich und Change Management für CapEx-Programme — Diagnostics, Pharma-Standorte und Multi-Projekt-Portfolios ohne parallele Excel-Listen.",
      keywords: [
        "Costbook",
        "ERP-Abgleich",
        "Diagnostics",
        "Pharma",
        "Portfolio-Konsolidierung",
        "Capex",
        "Change Management",
        "Projektsteuerung",
      ],
      openGraphLocale: "de_DE",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · Pharma & Diagnostics",
      headline: "CapEx auf Divisionsebene mit belastbaren Forecasts steuern.",
      subheadline: `${PRODUCT_NAME} vereint Costbook, Change Management und Portfolio-Konsolidierung für Multi-Projekt-Divisionen — mit ERP-Abgleich, auditierbaren Freigaben und Nachverfolgbarkeit vom Projektdetail bis zur Management-Kennzahl. Für Diagnostics, Pharma-Standortinvestitionen und Divisions-Steuerung.`,
      primaryCta: "Demo anfragen",
    },
    problem: {
      title: "Finanzdaten gehen zwischen ERP und Projekt auseinander.",
      description:
        "Wenn ERP-Ist, Verpflichtungen und Projekt-Costbooks nicht zusammenpassen, bauen Controller jeden Monat die Zahlen neu — Konsolidierung wird zur Abstimmung statt Steuerung.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "Parallele Costbook-Listen",
          description:
            "Projektteams pflegen Excel-Listen, weil ERP-Importe nicht mit dem einheitlichen Costbook über WBS und Divisionen übereinstimmen.",
        },
        {
          id: "rollup-gaps",
          title: "Lücken in der Portfolio-Konsolidierung",
          description:
            "Portfolio-Kennzahlen hinken hinterher, wenn jedes Projekt eigene Forecast-Annahmen und Nachtragsprotokolle führt.",
        },
      ],
    },
    solution: {
      eyebrow: "Für Divisions-Steuerung",
      title: "Vom Projekt-Costbook zur Divisions-Konsolidierung — eine Steuerungsebene.",
      description:
        "CapCon ergänzt Ihr ERP mit Import, Abgleich und Projektsteuerung — ein einheitliches Costbook, Nachträge mit Forecast-Wirkung und Portfolio-KPIs für jeden Lenkungszyklus.",
      steps: [
        {
          step: "01",
          title: "ERP-Abgleich",
          text: "ERP-Ist vs. Costbook vs. Verpflichtungen — Varianzzeilen mit nachvollziehbaren Quellreferenzen.",
        },
        {
          step: "02",
          title: "Change & Forecast",
          text: "Nachträge und Freigaben mit transparenter Wirkung auf EAC und Divisions-KPIs.",
        },
        {
          step: "03",
          title: "Portfolio-Konsolidierung",
          text: "Konsolidierte Portfolio-Sicht über Projekte, Währungen und Lenkungs-KPIs.",
        },
      ],
    },
    audience: {
      eyebrow: "Pharma & Diagnostics",
      title: "Für CapEx-Steuerung auf Divisionsebene",
      description:
        "Projektsteuerung, Finance und PMO bei Diagnostics-, Pharma-Standort- und Divisions-CapEx — wenn das ERP die Finanzdaten führt.",
      personas: [
        {
          title: "Projektsteuerung",
          description:
            "Einheitliches Costbook, Nachtragswirkung und Abgleich ohne parallele Excel-Listen.",
        },
        {
          title: "Finance / Controlling",
          description:
            "Belastbare Divisions-Konsolidierung, Verpflichtungssteuerung und ERP-abgestimmte Forecasts.",
        },
        {
          title: "PMO / Programmmanagement",
          description:
            "Einheitliches Reporting und Portfolio-Steuerung über Multi-Projekt-Divisionen.",
        },
      ],
    },
    cta: {
      headline: "Portfolio-Konsolidierung und Costbook-Steuerung live erleben.",
      description:
        "Wir demonstrieren Costbook, Varianzabgleich und Forecast-Auswirkung von Nachträgen an einem repräsentativen Divisionsprogramm.",
      primaryCta: "Demo anfragen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
  },
  fr: {
    meta: {
      title: `${PRODUCT_NAME} – Consolidation costbook pour pharma & diagnostics`,
      description:
        "Costbook divisionnel consolidé, rapprochement ERP et gestion des changements pour programmes capex — diagnostics, sites pharma et portefeuilles multi-projets sans classeurs Excel parallèles.",
      keywords: [
        "Costbook",
        "Rapprochement ERP",
        "Diagnostics",
        "Pharma",
        "Consolidation portefeuille",
        "Capex",
        "Project Controls",
      ],
      openGraphLocale: "fr_FR",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · Pharma & diagnostics",
      headline: "Piloter le capex divisionnel avec des prévisions défendables.",
      subheadline: `${PRODUCT_NAME} unifie costbook, gestion des changements et consolidation portefeuille pour divisions multi-projets — avec rapprochement ERP, approbations auditables et traçabilité du détail projet aux indicateurs de direction. Conçu pour diagnostics, sites pharma et pilotage divisionnel.`,
      primaryCta: "Demander une démo",
    },
    problem: {
      title: "Les données financières se fragmentent entre l'ERP et le terrain.",
      description:
        "Quand les actuals ERP, engagements et costbooks projet divergent, les contrôleurs reconstruisent les chiffres chaque mois — la consolidation divisionnelle devient du rapprochement, pas du pilotage.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "Classeurs costbook parallèles",
          description:
            "Les équipes projet maintiennent des Excel parce que les imports ERP ne correspondent pas au costbook consolidé sur les WBS et divisions.",
        },
        {
          id: "rollup-gaps",
          title: "Lacunes de consolidation",
          description:
            "Les métriques portefeuille prennent du retard quand chaque projet conserve ses propres hypothèses de prévision et journal des changements.",
        },
        {
          id: "change-audit-trail",
          title: "Changements sans preuve",
          description:
            "Les changements approuvés sont difficiles à relier aux lignes costbook et références ERP pour audit et pilotage.",
        },
        {
          id: "opaque-forecasts",
          title: "Prévisions opaques",
          description:
            "La prolifération de versions entre sites rend difficile la présentation d'un EAC défendable à la direction finance.",
        },
      ],
    },
    solution: {
      eyebrow: "Pour le pilotage divisionnel",
      title: "Du costbook projet à la consolidation divisionnelle — une couche de pilotage.",
      description:
        "CapCon complète votre ERP avec import, rapprochement et project controls — un costbook consolidé, changements avec impact prévision, et KPI portefeuille défendables à chaque cycle de pilotage.",
      steps: [
        {
          step: "01",
          title: "Rapprochement ERP",
          text: "Actuals ERP vs. costbook vs. engagements — lignes d'écart avec références sources traçables.",
        },
        {
          step: "02",
          title: "Change & prévision",
          text: "Change orders et approbations avec impact transparent sur EAC et métriques divisionnelles.",
        },
        {
          step: "03",
          title: "Consolidation portefeuille",
          text: "Vue portefeuille consolidée sur projets, devises et KPI de pilotage.",
        },
      ],
    },
    features: {
      eyebrow: "Capacités divisionnelles",
      title: "Ce dont les équipes pharma et diagnostics ont besoin",
      description:
        "Costbook consolidé, rapprochement ERP et gestion des changements — en complément de votre ERP, sans le remplacer.",
      items: [
        {
          id: "reconciliation",
          title: "Rapprochement ERP",
          description:
            "Import vs. costbook vs. engagements — lignes d'écart explicables avec références projet source.",
        },
        {
          id: "costbook",
          title: "Costbook divisionnel",
          description:
            "Budget, engagements et prévisions avec justification claire sur 5 à 20 projets.",
        },
        {
          id: "change-orders",
          title: "Change vers prévision",
          description:
            "Changements approuvés vers costbook avec historique d'approbation complet et impact prévision.",
        },
        {
          id: "portfolio",
          title: "Consolidation portefeuille",
          description:
            "KPI divisionnels, alertes d'écart et briefs direction — un chiffre en lequel la direction peut avoir confiance.",
        },
        {
          id: "workflows",
          title: "Workflows & audit",
          description:
            "Approbations configurables et piste d'audit exportable pour programmes capex réglementés.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Workflow divisionnel",
      title: "Rapprochement → costbook → pilotage portefeuille",
      description:
        "La boucle mensuelle que finance et project controls mènent ensemble : écarts ERP, détail costbook et consolidation divisionnelle.",
      panels: [
        {
          id: "recon",
          title: "Rapprochement ERP",
          caption: "Lignes d'écart avec trace costbook et source ERP.",
        },
        {
          id: "costbook",
          title: "Costbook divisionnel",
          caption: "Budget, engagements et EAC défendable sur les projets.",
        },
        {
          id: "steering",
          title: "Pilotage portefeuille",
          caption: "KPI divisionnels et alertes d'écart en un coup d'œil.",
        },
      ],
    },
    audience: {
      eyebrow: "Pharma & diagnostics",
      title: "Pour le pilotage capex divisionnel",
      description:
        "Project controllers, finance et PMO gouvernant diagnostics, sites pharma et capex divisionnel lorsque l'ERP détient les données financières.",
      personas: [
        {
          title: "Project controls",
          description:
            "Costbook consolidé, impact des changements et rapprochement sans classeurs Excel parallèles.",
        },
        {
          title: "Finance / controlling",
          description:
            "Consolidation divisionnelle défendable, contrôle des engagements et prévisions alignées ERP.",
        },
        {
          title: "PMO / programme",
          description:
            "Reporting cohérent et gouvernance portefeuille multi-projets.",
        },
      ],
    },
    cta: {
      headline: "Voir la consolidation divisionnelle et le pilotage costbook en démo.",
      description:
        "Démonstration costbook, rapprochement des variances et impact des changements sur un programme divisionnel représentatif.",
      primaryCta: "Demander une démo",
      contactPrefix: "Ou contactez notre équipe à",
    },
    dashboard: {
      title: "Costbook divisionnel – vue consolidée",
      stats: [
        { label: "Écarts ouverts", value: "7" },
        { label: "Projets", value: "12" },
        { label: "EAC division", value: "€142M" },
      ],
      columns: { project: "Projet / WBS", budget: "Budget", eac: "EAC" },
      rows: [
        { name: "Extension diagnostics", budget: "€38,2M", eac: "€39,1M" },
        { name: "Infrastructure site", budget: "€24,6M", eac: "€24,6M" },
        { name: "Programme retrofit labo", budget: "€18,4M", eac: "€19,0M" },
      ],
    },
  },
};
