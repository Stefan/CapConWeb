import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";
import { largeProjectsFrPatch } from "@/i18n/variants/large-projects-fr";

export const largeProjectsVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – Owner project controls for capital-intensive programs (North America)`,
      description:
        "Costbook, SOV, retainage, change, and portfolio in one platform. For life-science, industrial, and campus capex in the US and Canada — with master plan compliance for mega-programs.",
      keywords: [
        "Project Controls",
        "SOV",
        "Retainage",
        "Change Management",
        "Costbook",
        "Life Sciences",
        "General Contractor",
        "Capex",
        "Campus",
        "Master Plan",
      ],
      openGraphLocale: "en_US",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · North America",
      headline: "Owner financial control for capital-intensive construction programs.",
      subheadline:
        "Costbook, SOV billing, and change in one owner layer — with campus master-plan control where programs require it.",
      boundaryNote:
        "Not task PPM — CapCon is owner financial control with SOV and change.",
      primaryCta: "Request a demo",
    },
    solution: {
      eyebrow: "For project owners",
      title: "From costbook to GC billing — one owner control layer.",
      description:
        "Whether you are expanding a pharma facility, delivering industrial capex, or running a multi-building campus, when a general contractor bills across SOV lines and change orders drive total cost forecast, month-end consolidation cannot keep pace with the programme. CapCon is the owner control layer between ERP, contract, and the job site.",
      steps: [
        {
          step: "01",
          title: "Financials & contract",
          text: "Authoritative costbook, commitments, SOV, and GC billing with explainable EAC/ETC — not status slides.",
        },
        {
          step: "02",
          title: "Change & control",
          text: "Change orders and approvals with transparent impact on forecast and portfolio; optional master plan / stage-gate impact for campus programs.",
        },
        {
          step: "03",
          title: "Portfolio & compliance",
          text: "Program KPIs, drift alerts, and audit-ready approvals — especially for regulated owner programs.",
        },
      ],
    },
    features: {
      eyebrow: "Owner capabilities",
      title: "What capital-intensive owner teams need every month",
      description:
        "Costbook, SOV, change, and portfolio governance in one platform — with campus master plan and stage-gate compliance where programs require it.",
      items: [
        {
          id: "sov-retainage",
          title: "SOV & retainage",
          description:
            "Prime contractor schedule of values, monthly payment applications, and program-level retainage control.",
        },
        {
          id: "change-orders",
          title: "Change to forecast",
          description:
            "Approved change orders flow to costbook and SOV lines with a complete approval history.",
        },
        {
          id: "explainability",
          title: "Defensible forecasts",
          description:
            "Trace any number from portfolio metrics to costbook detail — one consolidated costbook without parallel Excel workbooks.",
        },
        {
          id: "portfolio",
          title: "Portfolio governance",
          description:
            "Program metrics, variance alerts, and executive briefs across multi-site capex portfolios.",
        },
        {
          id: "master-plan",
          title: "Campus master plan",
          description:
            "Investment cap utilization, zones, and variance between approved plan and current portfolio — for campus programs.",
        },
        {
          id: "stage-gates",
          title: "Stage-gate compliance",
          description:
            "Mandatory checks at approval time — master plan compliance in the workflow, not in a quarterly slide deck.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Owner workflow",
      title: "Costbook → SOV → financial trace",
      description:
        "The end-to-end workflow owners review each month: billing baseline, change implementation, and financial follow-through — with master plan steering for campus programs.",
      panels: [
        {
          id: "steering",
          title: "Portfolio & program steering",
          caption: "Program KPIs, variance alerts, and financial health at a glance.",
        },
        {
          id: "sov",
          title: "SOV & payment apps",
          caption: "Contract PO, line-level billing, and approved payment history.",
        },
        {
          id: "recon",
          title: "Financial trace",
          caption: "Reconciled and variance rows with costbook detail.",
        },
      ],
    },
    audience: {
      eyebrow: "North America",
      title: "For owners of capital-intensive construction programs",
      description:
        "Program management, finance, and PMO leaders running GC-heavy capex — life science, industrial, commercial owner, and multi-site campus programs.",
      personas: [
        {
          title: "Life science & pharma",
          description: "Regulated capex with SOV billing, change control, and audit-ready approvals.",
        },
        {
          title: "Industrial & manufacturing",
          description: "Multi-site programs with consolidated costbook, commitments, and defensible forecasts.",
        },
        {
          title: "Campus & mega-programs",
          description: "Master plan compliance, retainage control, and portfolio steering at program scale.",
        },
      ],
    },
    cta: {
      headline: "See owner financial control in a live demo.",
      description:
        "We will walk through costbook, SOV billing, and change implementation — and master plan steering for campus programs.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
  },
  de: {
    meta: {
      title: `${PRODUCT_NAME} – Owner Project Controls für kapitalintensive Bauprogramme (NA)`,
      description:
        "Costbook, SOV, Retainage, Change und Portfolio in einer Plattform. Für Life-Science-, Industrial- und Campus-CapEx in den USA und Kanada — mit Master-Plan-Compliance für Mega-Programme.",
      keywords: [
        "Projektsteuerung",
        "SOV",
        "Retainage",
        "Change Management",
        "Costbook",
        "Life Sciences",
        "General Contractor",
        "Capex",
        "Campus",
        "Master Plan",
      ],
      openGraphLocale: "de_DE",
    },
    hero: {
      eyebrow: "CapEx & Portfolio Intelligence · Nordamerika",
      headline: "Owner Financial Control für kapitalintensive Bauprogramme.",
      subheadline:
        "Costbook, SOV-Abrechnung und Change in einer Owner-Schicht — mit Campus-Master-Plan-Steuerung, wo Programme sie brauchen.",
      boundaryNote:
        "Kein Task-PPM — CapCon ist Owner Financial Control mit SOV und Change.",
      primaryCta: "Demo anfragen",
    },
    solution: {
      eyebrow: "Für Bauherren",
      title: "Vom Costbook bis zur GU-Abrechnung — eine Owner-Schicht.",
      description:
        "Ob Pharma-Erweiterung, Industrial CapEx oder Multi-Building-Campus: Wenn der General Contractor über SOV-Positionen abrechnet und Nachträge die Gesamtkostenprognose treiben, hält die Monatskonsolidierung nicht mit dem Programm mit. CapCon ist die Steuerungsebene des Bauherrn zwischen ERP, Vertrag und Baustelle.",
      steps: [
        {
          step: "01",
          title: "Finanzen & Vertrag",
          text: "Verbindliches Costbook, Verpflichtungen, SOV und GU-Abrechnung mit nachvollziehbaren EAC/ETC — nicht nur Statusfolien.",
        },
        {
          step: "02",
          title: "Change & Steuerung",
          text: "Nachträge und Freigaben mit transparenter Wirkung auf Forecast und Portfolio; optional Master-Plan-/Stage-Gate-Auswirkungen für Campus-Programme.",
        },
        {
          step: "03",
          title: "Portfolio & Compliance",
          text: "Programm-KPIs, Drift-Alerts und auditierbare Freigaben — besonders für regulierte Owner-Programme.",
        },
      ],
    },
    features: {
      eyebrow: "Owner-Funktionen",
      title: "Was Owner-Teams bei kapitalintensiven Programmen jeden Monat brauchen",
      description:
        "Costbook, SOV, Change und Portfolio-Steuerung in einer Plattform — mit Campus-Master-Plan und Stage-Gate-Compliance dort, wo Programme das verlangen.",
      items: [
        {
          id: "sov-retainage",
          title: "SOV & Retainage",
          description:
            "Schedule of Values des Generalunternehmers, monatliche Zahlungsanträge und programmweite Retainage-Steuerung.",
        },
        {
          id: "change-orders",
          title: "Nachtrag bis Prognose",
          description:
            "Freigegebene Nachträge fließen in Costbook und SOV-Positionen — mit lückenloser Freigabehistorie.",
        },
        {
          id: "explainability",
          title: "Belastbare Forecasts",
          description:
            "Jede Kennzahl vom Portfolio bis zur Costbook-Zeile nachvollziehbar — ein einheitliches Costbook ohne parallele Excel-Listen.",
        },
        {
          id: "portfolio",
          title: "Portfolio-Steuerung",
          description:
            "Programm-Kennzahlen, Abweichungswarnungen und Management-Briefings über Multi-Site-CapEx-Portfolios.",
        },
        {
          id: "master-plan",
          title: "Campus Master Plan",
          description:
            "Auslastung der Investitionsobergrenzen, Zonen und Abweichungen zwischen genehmigtem Plan und aktuellem Portfolio — für Campus-Programme.",
        },
        {
          id: "stage-gates",
          title: "Stage-Gate-Compliance",
          description:
            "Verbindliche Prüfungen bei Freigaben — Master-Plan-Compliance im Prozess, nicht im Quartalsdeck.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Owner-Workflow",
      title: "Costbook → SOV → Finanzielle Nachverfolgung",
      description:
        "Der monatliche Durchlauf für Bauherren: Abrechnungsbasis, Nachtragsumsetzung und finanzielle Nachverfolgung — mit Master-Plan-Steering für Campus-Programme.",
      panels: [
        {
          id: "steering",
          title: "Portfolio- & Programm-Steering",
          caption: "Programm-KPIs, Abweichungswarnungen und finanzielle Gesundheit auf einen Blick.",
        },
        {
          id: "sov",
          title: "SOV & Zahlungsanträge",
          caption: "Auftrag, positionsweise Abrechnung und Historie freigegebener Zahlungsanträge.",
        },
        {
          id: "recon",
          title: "Finanzielle Nachverfolgung",
          caption: "Abgeglichene und abweichende Positionen mit Costbook-Detail.",
        },
      ],
    },
    audience: {
      eyebrow: "Nordamerika",
      title: "Für Owner kapitalintensiver Bauprogramme",
      description:
        "Programmmanagement, Finance und PMO bei GU-lastigen CapEx-Programmen — Life Science, Industrial, Commercial Owner und Multi-Site-Campus.",
      personas: [
        {
          title: "Life Science & Pharma",
          description: "Reguliertes CapEx mit SOV-Abrechnung, Change Control und auditierbaren Freigaben.",
        },
        {
          title: "Industrial & Manufacturing",
          description: "Multi-Site-Programme mit einheitlichem Costbook, Verpflichtungen und belastbaren Forecasts.",
        },
        {
          title: "Campus & Mega-Programme",
          description: "Master-Plan-Compliance, Retainage-Steuerung und Portfolio-Steering in Programmgröße.",
        },
      ],
    },
    cta: {
      headline: "Owner Financial Control live erleben.",
      description:
        "Wir führen Costbook, SOV-Abrechnung und Nachtragsumsetzung vor — und Master-Plan-Steering für Campus-Programme.",
      primaryCta: "Demo anfragen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
  },
  fr: largeProjectsFrPatch,
};
