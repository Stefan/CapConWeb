import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";

/** Global FMCG multi-site plant capex — sales/campaign variant via ?variant=fmcg-sap (no geo routing). */
export const fmcgSapVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – Global manufacturing plant capex`,
      description:
        "Multi-site manufacturing capex with portfolio consolidation, change control, and vendor collaboration — for global food and consumer goods programmes at plant-line scale.",
      keywords: [
        "FMCG",
        "Manufacturing",
        "SAP",
        "Plant CapEx",
        "Multi-Site",
        "Costbook",
        "SOV",
        "Portfolio consolidation",
      ],
      openGraphLocale: "en_US",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · Global manufacturing",
      headline: "Steer global plant capex with one consolidated costbook.",
      subheadline: `${PRODUCT_NAME} unifies costbook, change control, vendor collaboration, and ERP reconciliation across regions — one portfolio view for capital excellence teams running multi-site manufacturing programmes.`,
      primaryCta: "Request a demo",
    },
    problem: {
      title: "Global programmes deserve more than regional spreadsheets.",
      description:
        "When each region maintains its own costbook in Excel and ERP consolidation lives in finance, capital excellence teams lose weeks each month on consolidation — and forecast drift surfaces too late for steering.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "Parallel costbook workbooks",
          description:
            "Regional controllers maintain separate workbooks because ERP consolidation does not match project costbook data.",
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
        "CapCon gives regional engineering, plant controllers, and global PMO a shared costbook — reconciled with ERP, connected to SOV billing where contracts require it, and rolled up for executive steering.",
      steps: [
        {
          step: "01",
          title: "Costbook & ERP",
          text: "WBS-linked costbook, commitments, and reconciliation — less reliance on parallel workbooks across sites.",
        },
        {
          step: "02",
          title: "Line & contract",
          text: "Change orders, SOV progress, and vendor portal for EPC/GC self-service where enabled.",
        },
        {
          step: "03",
          title: "Global portfolio",
          text: "Programme consolidation across regions with variance signals and health matrix views.",
        },
      ],
    },
    features: {
      eyebrow: "FMCG capabilities",
      title: "Built for global capital excellence teams",
      description:
        "ERP consolidation, multi-site portfolio, and line-level change control — focused on plant and line capex at programme scale.",
      items: [
        {
          id: "sap-rollup",
          title: "ERP / WBS consolidation",
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
      eyebrow: "Manufacturing journey",
      title: "Programme → costbook → packaging line",
      description:
        "The capital excellence walkthrough: global programme view, ERP reconciliation on a control project, and line-level SOV.",
      panels: [
        {
          id: "steering",
          title: "Global programme steering",
          caption: "Regional programmes and portfolio KPIs in one view.",
        },
        {
          id: "recon",
          title: "ERP reconciliation",
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
      eyebrow: "Global manufacturing",
      title: "For multi-site manufacturing capex",
      description:
        "Global capital excellence, regional engineering PM, plant controllers, and ERP steering teams running multi-site plant programmes.",
      personas: [
        {
          title: "Capital excellence / finance",
          description:
            "Programme consolidation, commitment control, and board-ready metrics across regions.",
        },
        {
          title: "Regional engineering PM",
          description:
            "Line-level costbook, change control, and EPC/GC collaboration on plant capex.",
        },
        {
          title: "Plant controller",
          description:
            "Consolidated costbook, ERP reconciliation, and defensible forecasts per site.",
        },
      ],
    },
    cta: {
      headline: "See global plant capex on one control layer.",
      description:
        "We will demonstrate programme consolidation, ERP reconciliation, and line-level SOV on a representative manufacturing programme.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
    dashboard: {
      title: "Global manufacturing programme – plant capex",
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
      title: `${PRODUCT_NAME} – Globales Werks-CapEx für Manufacturing-Programme`,
      description:
        "Multi-Site-Manufacturing-CapEx mit Portfolio-Konsolidierung, Change Management und Vendor-Zusammenarbeit — für globale Fertigungsprogramme auf Werkslinien-Ebene.",
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
      eyebrow: "CapEx & Portfolio Intelligence · Globales Manufacturing",
      headline: "Globales Werks-CapEx mit einem einheitlichen Costbook steuern.",
      subheadline: `${PRODUCT_NAME} vereint Costbook, Change Management, Vendor-Zusammenarbeit und ERP-Abgleich über Regionen — eine Portfolio-Sicht für CapEx-Excellence-Teams mit Multi-Site-Fertigungsprogrammen.`,
      primaryCta: "Demo anfragen",
    },
    audience: {
      eyebrow: "Globales Manufacturing",
      title: "Für Multi-Site-Manufacturing-CapEx",
      description:
        "Global Capital Excellence, Regional Engineering PM, Werkscontroller und ERP-Steuerung bei Multi-Site-Werksprogrammen.",
      personas: [
        {
          title: "Capital Excellence / Finance",
          description:
            "Programm-Konsolidierung, Verpflichtungssteuerung und managementfähige Metriken über Regionen.",
        },
        {
          title: "Regional Engineering PM",
          description:
            "Line-Costbook, Change Control und EPC/GU-Zusammenarbeit im Werks-CapEx.",
        },
        {
          title: "Werkscontroller",
          description:
            "Einheitliches Costbook, ERP-Abgleich und belastbare Forecasts pro Standort.",
        },
      ],
    },
    cta: {
      headline: "Globales Werks-CapEx auf einer Steuerungsebene sehen.",
      description:
        "Wir demonstrieren Programm-Konsolidierung, ERP-Abgleich und Line-SOV an einem repräsentativen Fertigungsprogramm.",
      primaryCta: "Demo anfragen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
  },
  fr: {
    meta: {
      title: `${PRODUCT_NAME} – Capex usines manufacturing global`,
      description:
        "Capex manufacturing multi-sites avec consolidation portefeuille, gestion des changements et collaboration GC/EPC — programmes food & consumer goods à l'échelle ligne de production.",
      keywords: ["FMCG", "Manufacturing", "Capex usine", "Multi-sites", "Consolidation portefeuille"],
      openGraphLocale: "fr_FR",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · Manufacturing global",
      headline: "Piloter le capex usines multi-sites avec un costbook consolidé.",
      subheadline: `${PRODUCT_NAME} unifie costbook, gestion des changements, collaboration fournisseurs/GC et rapprochement ERP sur les régions — une vue portefeuille pour les équipes capital excellence sur programmes manufacturing multi-sites.`,
      primaryCta: "Demander une démo",
    },
    problem: {
      title: "Les programmes globaux méritent mieux que des feuilles régionales.",
      description:
        "Quand chaque région tient son costbook dans Excel et que la consolidation ERP vit en finance, les équipes capital excellence perdent des semaines chaque mois — et la dérive de prévision arrive trop tard pour le pilotage.",
      items: [
        {
          id: "sap-shadow-ledger",
          title: "Classeurs costbook parallèles",
          description:
            "Les contrôleurs régionaux maintiennent des classeurs séparés parce que la consolidation ERP ne correspond pas aux données costbook projet.",
        },
        {
          id: "multi-site-blind-spots",
          title: "Angles morts multi-sites",
          description:
            "Les projets usine individuels sont suivis — cash programme, utilisation des plafonds et SPI/CPI inter-sites souvent pas.",
        },
        {
          id: "change-audit-trail",
          title: "Changements de ligne sans trace",
          description:
            "Les variations de ligne packaging et scope EPC sont difficiles à relier au budget approuvé et baseline prévision.",
        },
        {
          id: "gc-collaboration",
          title: "Friction collaboration GC",
          description:
            "Entreprises générales et EPC ressaisissent avancement et facturation faute d'une couche fournisseur maîtrisée par le maître d'ouvrage.",
        },
      ],
    },
    solution: {
      eyebrow: "Pour capital excellence",
      title: "Une couche de pilotage de la ligne usine au programme global.",
      description:
        "CapCon donne à l'ingénierie régionale, contrôleurs d'usine et PMO global un costbook partagé — rapproché ERP, connecté à la facturation SOV où le contrat l'exige, consolidé pour le pilotage direction.",
      steps: [
        {
          step: "01",
          title: "Costbook & ERP",
          text: "Costbook lié WBS, engagements et rapprochement — moins de classeurs parallèles entre sites.",
        },
        {
          step: "02",
          title: "Ligne & contrat",
          text: "Change orders, avancement SOV et portail vendor pour self-service EPC/GC où activé.",
        },
        {
          step: "03",
          title: "Portefeuille global",
          text: "Consolidation programme inter-régions avec signaux d'écart et vues matrice santé.",
        },
      ],
    },
    features: {
      eyebrow: "Capacités manufacturing",
      title: "Conçu pour les équipes capital excellence globales",
      description:
        "Consolidation ERP, portefeuille multi-sites et change control au niveau ligne — focalisé sur capex usine et ligne à l'échelle programme.",
      items: [
        {
          id: "sap-rollup",
          title: "Consolidation ERP / WBS",
          description:
            "Consolidation programme et division avec clés projet source et lignes d'écart rapprochement.",
        },
        {
          id: "costbook",
          title: "Costbook usine",
          description:
            "Budget, engagements et EAC défendable pour lignes packaging, utilities et infrastructure site.",
        },
        {
          id: "change-orders",
          title: "Change vers prévision",
          description:
            "Changements approuvés avec impact prévision — documentés de la demande à la vue portefeuille.",
        },
        {
          id: "sov-vendor",
          title: "SOV & portail vendor",
          description:
            "Soumissions facturation et avancement EPC/GC où la structure contrat exige SOV — complément, pas remplacement ERP.",
        },
        {
          id: "portfolio",
          title: "Portefeuille global",
          description:
            "KPI programme multi-régions, outliers SPI/CPI et brief direction sur 3 à 10 sites.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Parcours manufacturing",
      title: "Programme → costbook → ligne packaging",
      description:
        "Le parcours capital excellence : vue programme global, rapprochement ERP sur projet témoin, et SOV au niveau ligne.",
      panels: [
        {
          id: "steering",
          title: "Pilotage programme global",
          caption: "Programmes régionaux et KPI portefeuille en une vue.",
        },
        {
          id: "recon",
          title: "Rapprochement ERP",
          caption: "Liens SOV ↔ engagement sur le projet témoin.",
        },
        {
          id: "sov",
          title: "SOV ligne packaging",
          caption: "Base de facturation au niveau ligne pour collaboration EPC/GC.",
        },
      ],
    },
    audience: {
      eyebrow: "Manufacturing global",
      title: "Pour capex manufacturing multi-sites",
      description:
        "Capital excellence global, PM engineering régional, contrôleurs d'usine et pilotage ERP pour programmes multi-sites.",
      personas: [
        {
          title: "Capital excellence / finance",
          description:
            "Consolidation programme, contrôle engagements et métriques pour la direction multi-régions.",
        },
        {
          title: "PM engineering régional",
          description:
            "Costbook ligne, gestion des changements et collaboration EPC/GC sur capex usine.",
        },
        {
          title: "Contrôleur d'usine",
          description:
            "Costbook consolidé, rapprochement ERP et prévisions défendables par site.",
        },
      ],
    },
    cta: {
      headline: "Voir le capex usines global sur une couche de pilotage.",
      description:
        "Démo consolidation programme, rapprochement ERP et SOV ligne sur un programme manufacturing représentatif.",
      primaryCta: "Demander une démo",
      contactPrefix: "Ou contactez notre équipe à",
    },
    dashboard: {
      title: "Programme manufacturing global – capex usine",
      stats: [
        { label: "Sites actifs", value: "8" },
        { label: "EAC programme", value: "$284M" },
        { label: "CO ouverts", value: "11" },
      ],
      columns: { project: "Site / ligne", budget: "Budget", eac: "EAC" },
      rows: [
        { name: "Ligne packaging Meadowbrook", budget: "$42,1M", eac: "$43,6M" },
        { name: "Upgrade utilities EMEA", budget: "$28,4M", eac: "$28,4M" },
        { name: "Retrofit remplisseuse APAC", budget: "$19,8M", eac: "$20,2M" },
      ],
    },
  },
};
