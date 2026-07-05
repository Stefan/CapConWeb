import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";
import { cdmoFrPatch } from "@/i18n/variants/cdmo-fr";

export const cdmoVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – CDMO project controls & GMP for Europe & Switzerland`,
      description:
        "Connect capex, equipment qualification, and GMP change control in one audit-ready layer — complementing QMS and MES for European and Swiss CDMO and pharma manufacturing.",
      keywords: [
        "CDMO",
        "GMP",
        "IQ OQ PQ",
        "Change Control",
        "Validation",
        "Europe",
        "Switzerland",
        "Pharma",
        "Capex",
      ],
      openGraphLocale: "de_CH",
    },
    hero: {
      eyebrow: "CapEx & GMP · Europe",
      headline: "Owner capex control from construction through equipment qualification.",
      subheadline: `${PRODUCT_NAME} links costbook, construction programs, equipment qualification, and GMP change control in one audit-ready layer — complementing your QMS and MES, not replacing them.`,
      primaryCta: "Request a demo",
    },
    problem: {
      title: "CDMO capex must tie to qualification — not just WBS lines.",
      description:
        "When equipment release, validation, and change control live outside project controls, audits find gaps between construction and QA.",
      items: [
        {
          id: "equipment-gap",
          title: "Equipment traceability gaps",
          description:
            "CapEx spend is hard to connect to asset qualification status and release decisions.",
        },
        {
          id: "co-cc-split",
          title: "Construction vs. GMP change",
          description:
            "Construction change orders and GMP change controls run in separate tools without a bridge.",
        },
        {
          id: "validation-pack",
          title: "Validation package friction",
          description:
            "IQ/OQ/PQ evidence is scattered when project and QA systems don't share context.",
        },
        {
          id: "audit-export",
          title: "Audit readiness",
          description:
            "QA needs exportable history for change control — not screenshots from construction trackers.",
        },
      ],
    },
    solution: {
      eyebrow: "Construction ↔ GMP",
      title: "One hub from capex to qualified equipment.",
      description:
        "CapCon bridges construction change orders, forecast/SOV equipment links, and GMP change control workflows — with impact analysis and e-sign approvals.",
      steps: [
        {
          step: "01",
          title: "Capex & equipment",
          text: "Investments traced to equipment master, cleanrooms, and qualification matrix.",
        },
        {
          step: "02",
          title: "GMP change control",
          text: "Impact analysis, approval workflow, and audit export — QMS-compatible boundaries.",
        },
        {
          step: "03",
          title: "Quality & validation",
          text: "Deviation/CAPA mirror, GMP reports, and clear scope vs. Veeva/MasterControl/TrackWise.",
        },
      ],
    },
    features: {
      eyebrow: "CDMO capabilities",
      title: "From owner capex to GMP sign-off",
      description:
        "Core construction and costbook control first — GMP change control, qualification, and QMS bridge where regulated manufacturing requires them.",
      items: [
        {
          id: "costbook-capex",
          title: "Owner capex & costbook",
          description:
            "Budget, commitments, and forecasts for construction programs — traceable to equipment and asset lines.",
        },
        {
          id: "construction-co",
          title: "Construction change orders",
          description:
            "Approved COs with forecast impact and equipment links — documented from request to portfolio view.",
        },
        {
          id: "equipment",
          title: "Equipment release",
          description:
            "Release and quarantine states with auditable events on the asset.",
        },
        {
          id: "gmp-cc",
          title: "GMP change control",
          description:
            "Submit → impact analysis → approve with e-sign → audit CSV export.",
        },
        {
          id: "co-bridge",
          title: "Construction ↔ GMP bridge",
          description:
            "Create linked GMP change controls from construction CO detail — bidirectional navigation.",
        },
        {
          id: "iqoq",
          title: "IQ / OQ / PQ matrix",
          description:
            "Qualification status per equipment line — aligned with validation records.",
        },
        {
          id: "deviation",
          title: "Deviation & CAPA mirror",
          description:
            "Read-sync from QMS — mirror only, not a full quality system replacement.",
        },
        {
          id: "gmp-reports",
          title: "GMP reports",
          description:
            "CSV/text exports for validation packages and QA review.",
        },
      ],
    },
    productScreens: {
      eyebrow: "CDMO journey",
      title: "Equipment → change control → audit export",
      description:
        "The Bachem-style walkthrough: portfolio manufacturing view, CO with equipment impact, and approved GMP CC.",
      panels: [
        {
          id: "portfolio-mfg",
          title: "Manufacturing portfolio",
          caption: "Equipment-linked forecast and open change controls.",
        },
        {
          id: "co-cc",
          title: "CO → GMP CC",
          caption: "Construction change spawns linked GMP workflow.",
        },
        {
          id: "audit",
          title: "Audit export",
          caption: "Filterable history for validation evidence.",
        },
      ],
    },
    socialProof: {
      eyebrow: "CDMO · Europe",
      quote:
        "Finally a path from construction change to GMP sign-off without re-keying impact in three systems.",
      attribution: "QA lead, peptide CDMO (Europe)",
      metrics: [
        { value: "CO ↔ CC", label: "Linked change bridge" },
        { value: "IQ/OQ/PQ", label: "Qualification matrix" },
        { value: "Part 11", label: "E-sign readiness" },
      ],
    },
    audience: {
      eyebrow: "Europe",
      title: "For CDMO and GMP manufacturing capex",
      description:
        "Project controls, engineering, and QA teams investing in European and Swiss production and fill-finish capacity.",
      personas: [
        {
          title: "Project controls",
          description: "Construction COs, forecast/SOV equipment links, capex traceability.",
        },
        {
          title: "QA / validation",
          description: "Change control approval, impact analysis, validation package exports.",
        },
        {
          title: "Engineering",
          description: "Equipment master data, MES event triage, qualification status.",
        },
      ],
    },
    enterprise: {
      eyebrow: "GMP enterprise",
      title: "Validation-friendly, QMS-aware",
      description: `${PRODUCT_NAME} complements your existing quality stack with clear boundaries for regulated European and Swiss deployments.`,
      badgeDisclaimer:
        "Validation scope and Part 11 depth depend on deployment — we align in the pilot workshop.",
      signals: [
        {
          id: "part11",
          title: "21 CFR Part 11 readiness",
          description: "Electronic signatures and immutable snapshots on regulated actions.",
        },
        {
          id: "audit",
          title: "Audit trail export",
          description: "Filterable manufacturing change-control history for QA evidence.",
        },
        {
          id: "qms-boundary",
          title: "QMS complement",
          description: "No full QMS or EBR replacement — bridge construction and GMP.",
        },
        {
          id: "gdpr",
          title: "GDPR & Swiss hosting",
          description: "EU/CH-aligned data protection for enterprise buyers.",
        },
      ],
      badges: ["GMP CC", "IQ/OQ/PQ", "Part 11 readiness", "QMS complement"],
    },
    cta: {
      headline: "See the CDMO capex → GMP loop live.",
      description:
        "We'll demo equipment-linked forecast, construction CO bridge, and GMP approval on the CDMO reference pack.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
    dashboard: {
      title: "CDMO capex – validation view",
      stats: [
        { label: "Open GMP CCs", value: "4" },
        { label: "Equipment in qual", value: "12 lines" },
        { label: "Capex YTD", value: "CHF 28.4M" },
      ],
      columns: { project: "Line / asset", budget: "Budget", eac: "EAC" },
      rows: [
        { name: "Fill-finish line 3", budget: "CHF 11.2M", eac: "CHF 11.8M" },
        { name: "Cleanroom upgrade B", budget: "CHF 6.4M", eac: "CHF 6.4M" },
        { name: "Peptide suite expansion", budget: "CHF 10.8M", eac: "CHF 11.1M" },
      ],
    },
  },
  de: {
    meta: {
      title: `${PRODUCT_NAME} – CDMO Project Controls & GMP für Europa & Schweiz`,
      description:
        "CapEx, Equipment-Qualifizierung und GMP Change Control in einer auditierbaren Schicht — Ergänzung zu QMS und MES für europäische und Schweizer CDMO und Pharma-Fertigung.",
      keywords: [
        "CDMO",
        "GMP",
        "IQ OQ PQ",
        "Change Control",
        "Validierung",
        "Europa",
        "Schweiz",
        "Pharma",
        "Capex",
      ],
      openGraphLocale: "de_CH",
    },
    hero: {
      eyebrow: "CapEx & GMP · Europa",
      headline: "Owner-CapEx-Steuerung von der Baustelle bis zur Equipment-Qualifizierung.",
      subheadline: `${PRODUCT_NAME} verbindet Costbook, Bauprojekte, Equipment-Qualifizierung und GMP Change Control in einer auditierbaren Schicht — als Ergänzung zu QMS und MES, nicht als Ersatz.`,
      primaryCta: "Demo anfragen",
    },
    problem: {
      title: "CDMO-CapEx muss zur Qualifizierung führen — nicht nur zu WBS-Zeilen.",
      description:
        "Wenn Equipment-Freigabe, Validierung und Change Control außerhalb der Project Controls liegen, entstehen Audit-Lücken zwischen Bau und QA.",
      items: [
        {
          id: "equipment-gap",
          title: "Lücken bei Equipment-Traceability",
          description:
            "CapEx-Spend ist schwer mit Qualifizierungsstatus und Release-Entscheidungen zu verknüpfen.",
        },
        {
          id: "co-cc-split",
          title: "Construction vs. GMP Change",
          description:
            "Construction Change Orders und GMP Change Controls laufen getrennt ohne Brücke.",
        },
        {
          id: "validation-pack",
          title: "Reibung im Validierungspaket",
          description:
            "IQ/OQ/PQ-Belege sind verstreut, wenn Projekt- und QA-Systeme keinen gemeinsamen Kontext teilen.",
        },
        {
          id: "audit-export",
          title: "Audit-Readiness",
          description:
            "QA braucht exportierbare Change-Control-Historie — keine Screenshots aus Bau-Trackern.",
        },
      ],
    },
    solution: {
      eyebrow: "Construction ↔ GMP",
      title: "Ein Hub vom CapEx bis zum qualifizierten Equipment.",
      description:
        "CapCon verbindet Construction Change Orders, Forecast-/SOV-Equipment-Links und GMP-Change-Control-Workflows — mit Impact-Analyse und E-Sign-Freigaben.",
      steps: [
        {
          step: "01",
          title: "CapEx & Equipment",
          text: "Investitionen bis Equipment-Master, Cleanrooms und Qualifizierungsmatrix.",
        },
        {
          step: "02",
          title: "GMP Change Control",
          text: "Impact-Analyse, Freigabe-Workflow und Audit-Export — QMS-kompatible Grenzen.",
        },
        {
          step: "03",
          title: "Qualität & Validierung",
          text: "Deviation/CAPA-Spiegel, GMP-Reports und klare Abgrenzung zu Veeva/MasterControl/TrackWise.",
        },
      ],
    },
    features: {
      eyebrow: "CDMO-Funktionen",
      title: "Vom Owner-CapEx bis zur GMP-Freigabe",
      description:
        "Kern: Bau und Costbook-Steuerung — GMP Change Control, Qualifizierung und QMS-Brücke, wo regulierte Fertigung es verlangt.",
      items: [
        {
          id: "costbook-capex",
          title: "Owner CapEx & Costbook",
          description:
            "Budget, Verpflichtungen und Forecasts für Bauprogramme — nachverfolgbar bis Equipment- und Asset-Lines.",
        },
        {
          id: "construction-co",
          title: "Construction Change Orders",
          description:
            "Freigegebene COs mit Forecast-Impact und Equipment-Links — dokumentiert von der Anfrage bis zur Portfolio-Sicht.",
        },
        {
          id: "equipment",
          title: "Equipment Release",
          description:
            "Release- und Quarantäne-Status mit auditierbaren Events am Asset.",
        },
        {
          id: "gmp-cc",
          title: "GMP Change Control",
          description:
            "Submit → Impact-Analyse → Freigabe mit E-Sign → Audit-CSV-Export.",
        },
        {
          id: "co-bridge",
          title: "Construction ↔ GMP Bridge",
          description:
            "Verknüpfte GMP Change Controls aus Construction-CO-Detail — Navigation in beide Richtungen.",
        },
        {
          id: "iqoq",
          title: "IQ / OQ / PQ Matrix",
          description:
            "Qualifizierungsstatus pro Equipment-Line — abgestimmt auf Validierungsrecords.",
        },
        {
          id: "deviation",
          title: "Deviation & CAPA Mirror",
          description:
            "Read-Sync aus QMS — Spiegel only, kein vollständiger QMS-Ersatz.",
        },
        {
          id: "gmp-reports",
          title: "GMP Reports",
          description:
            "CSV/Text-Exporte für Validierungspakete und QA-Review.",
        },
      ],
    },
    productScreens: {
      eyebrow: "CDMO-Journey",
      title: "Equipment → Change Control → Audit Export",
      description:
        "Der Bachem-Style-Walkthrough: Manufacturing-Portfolio, CO mit Equipment-Impact, freigegebenes GMP CC.",
      panels: [
        {
          id: "portfolio-mfg",
          title: "Manufacturing Portfolio",
          caption: "Equipment-verknüpfter Forecast und offene Change Controls.",
        },
        {
          id: "co-cc",
          title: "CO → GMP CC",
          caption: "Construction Change startet verknüpften GMP-Workflow.",
        },
        {
          id: "audit",
          title: "Audit Export",
          caption: "Filterbare Historie für Validierungsnachweise.",
        },
      ],
    },
    socialProof: {
      eyebrow: "CDMO · Europa",
      quote:
        "Endlich ein Weg vom Construction Change zur GMP-Freigabe — ohne Impact in drei Systemen neu zu erfassen.",
      attribution: "QA Lead, Peptide-CDMO (Europa)",
      metrics: [
        { value: "CO ↔ CC", label: "Verknüpfte Change-Brücke" },
        { value: "IQ/OQ/PQ", label: "Qualifizierungsmatrix" },
        { value: "Part 11", label: "E-Sign-Readiness" },
      ],
    },
    audience: {
      eyebrow: "Europa",
      title: "Für CDMO- und GMP-Manufacturing-CapEx",
      description:
        "Project Controls, Engineering und QA bei Investitionen in europäische und Schweizer Produktion und Fill-Finish.",
      personas: [
        {
          title: "Project Controls",
          description: "Construction COs, Forecast-/SOV-Equipment-Links, CapEx-Traceability.",
        },
        {
          title: "QA / Validierung",
          description: "Change-Control-Freigabe, Impact-Analyse, Validierungspaket-Exporte.",
        },
        {
          title: "Engineering",
          description: "Equipment-Stammdaten, MES-Event-Triage, Qualifizierungsstatus.",
        },
      ],
    },
    enterprise: {
      eyebrow: "GMP Enterprise",
      title: "Validierungsnah, QMS-bewusst",
      description: `${PRODUCT_NAME} ergänzt Ihren Quality-Stack mit klaren Grenzen für regulierte europäische und Schweizer Deployments.`,
      badgeDisclaimer:
        "Validierungsumfang und Part-11-Tiefe hängen vom Deployment ab — Abstimmung im Pilot-Workshop.",
      signals: [
        {
          id: "part11",
          title: "21 CFR Part 11 Readiness",
          description: "Elektronische Signaturen und unveränderliche Snapshots bei regulierten Aktionen.",
        },
        {
          id: "audit",
          title: "Audit-Trail-Export",
          description: "Filterbare Manufacturing-Change-Control-Historie für QA-Nachweise.",
        },
        {
          id: "qms-boundary",
          title: "QMS-Ergänzung",
          description: "Kein vollständiges QMS oder EBR — Brücke zwischen Bau und GMP.",
        },
        {
          id: "gdpr",
          title: "GDPR & Swiss Hosting",
          description: "EU/CH-konformer Datenschutz für Enterprise-Einkauf.",
        },
      ],
      badges: ["GMP CC", "IQ/OQ/PQ", "Part 11 readiness", "QMS complement"],
    },
    cta: {
      headline: "Den CDMO CapEx → GMP Loop live sehen.",
      description:
        "Wir demonstrieren equipment-verknüpften Forecast, Construction-CO-Brücke und GMP-Freigabe am CDMO-Referenzpack.",
      primaryCta: "Demo anfragen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
    dashboard: {
      title: "CDMO CapEx – Validierungsansicht",
      stats: [
        { label: "Offene GMP CCs", value: "4" },
        { label: "Equipment in Qual", value: "12 Lines" },
        { label: "CapEx YTD", value: "CHF 28.4M" },
      ],
      columns: { project: "Line / Asset", budget: "Budget", eac: "EAC" },
      rows: [
        { name: "Fill-Finish Line 3", budget: "CHF 11.2M", eac: "CHF 11.8M" },
        { name: "Cleanroom Upgrade B", budget: "CHF 6.4M", eac: "CHF 6.4M" },
        { name: "Peptide Suite Expansion", budget: "CHF 10.8M", eac: "CHF 11.1M" },
      ],
    },
  },
  fr: cdmoFrPatch,
};
