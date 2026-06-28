import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";
import { largeProjectsFrPatch } from "@/i18n/variants/large-projects-fr";

export const largeProjectsVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – Project controls for large North American campus programs`,
      description:
        "Financial control for project owners: costbook, schedule of values, retainage, master plan compliance, and change management for capital-intensive US and Canadian campus programs.",
      keywords: [
        "Campus",
        "Master Plan",
        "SOV",
        "Retainage",
        "Life Sciences",
        "General Contractor",
        "Capex",
      ],
      openGraphLocale: "en_US",
    },
    hero: {
      eyebrow: "Campus programs · North America",
      headline: "Steer large campus programs with numbers you can defend.",
      subheadline: `${PRODUCT_NAME} unifies costbook, schedule of values, general contractor billing, retainage, and master plan compliance — built for large life-science and mega-capex campus programs in the US and Canada.`,
      primaryCta: "Book a demo",
    },
    solution: {
      eyebrow: "For project owners",
      title: "From billing line to campus master plan — one continuous process.",
      description:
        "When a general contractor bills across dozens of schedule-of-values lines and every change approval must reflect investment caps and stage-gate rules, spreadsheets break. CapCon is the owner's control layer between ERP, GC billing, and the job site.",
      steps: [
        {
          step: "01",
          title: "Financials & GC billing",
          text: "Central costbook, commitments, SOV, payment applications, and retainage with defensible total cost forecasts.",
        },
        {
          step: "02",
          title: "Change & master plan",
          text: "Change orders, risk registers, cap utilization, and planned vs. current master plan views.",
        },
        {
          step: "03",
          title: "Portfolio governance",
          text: "Program consolidation, variance alerts, and executive briefs for campus steering committees.",
        },
      ],
    },
    features: {
      eyebrow: "Campus capabilities",
      title: "What large-program owners need every month",
      description:
        "Master plan, SOV, and portfolio governance in one platform — built for North American campus and mega-programs.",
      items: [
        {
          id: "master-plan",
          title: "Campus master plan",
          description:
            "Investment cap utilization, zones, and variance between approved plan and current portfolio.",
        },
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
            "Trace any number from portfolio metrics to costbook detail — forecasts you can present in steering forums.",
        },
        {
          id: "stage-gates",
          title: "Stage-gate compliance",
          description:
            "Mandatory checks at approval time — compliance in the workflow, not in a quarterly slide deck.",
        },
        {
          id: "portfolio",
          title: "Portfolio governance",
          description:
            "Campus metrics, prioritized actions, and program financial health across the portfolio.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Campus workflow",
      title: "Master plan → SOV → financial trace",
      description:
        "The end-to-end workflow owners review each month: steering, billing baseline, change implementation, and financial follow-through.",
      panels: [
        {
          id: "steering",
          title: "Master plan steering",
          caption: "Cap utilization, stage gates, and program health at a glance.",
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
      title: "Built for owner program management teams",
      description:
        "Program management, finance, and PMO leaders running general-contractor-heavy campus capital programs with master-plan obligations.",
      personas: [
        {
          title: "Program management / PMO",
          description: "Campus steering, master plan compliance, and portfolio governance.",
        },
        {
          title: "Project controllers",
          description: "Reliable costbook data, SOV alignment, and defensible forecasts for leadership.",
        },
        {
          title: "Finance & compliance",
          description: "Retainage control, audit-ready approvals, and electronic signature workflows.",
        },
      ],
    },
    cta: {
      headline: "See the campus workflow in a live demo.",
      description:
        "We'll walk through master plan steering, SOV billing, and change implementation on a large-campus reference program.",
      primaryCta: "Book a demo",
      contactPrefix: "Or contact our team at",
    },
  },
  de: {
    meta: {
      title: `${PRODUCT_NAME} – Projektsteuerung für große US-Campus-Programme`,
      description:
        "Finanzsteuerung für Bauherren: Costbook, Schedule of Values, Retainage, Master-Plan-Compliance und Change Management für kapitalintensive Campus-Programme in den USA und Kanada.",
      keywords: [
        "Campus",
        "Master Plan",
        "SOV",
        "Retainage",
        "Life Sciences",
        "General Contractor",
        "Capex",
      ],
      openGraphLocale: "de_DE",
    },
    hero: {
      eyebrow: "Campus-Programme · Nordamerika",
      headline: "Große Campus-Programme mit belastbaren Zahlen steuern.",
      subheadline: `${PRODUCT_NAME} vereint Costbook, Schedule of Values, Generalunternehmer-Abrechnung, Retainage und Master-Plan-Compliance — für große Life-Science- und Mega-Capex-Campus-Programme in den USA und Kanada.`,
      primaryCta: "Demo buchen",
    },
    solution: {
      eyebrow: "Für Bauherren",
      title: "Von der Abrechnungszeile bis zum Campus-Master-Plan — ein durchgängiger Prozess.",
      description:
        "Wenn der Generalunternehmer über Dutzende SOV-Positionen abrechnet und jede Nachtragsfreigabe Investitionsobergrenzen und Stage Gates berücksichtigen muss, scheitern Tabellen. CapCon ist die Steuerungsebene des Bauherrn zwischen ERP, GU-Abrechnung und Baustelle.",
      steps: [
        {
          step: "01",
          title: "Finanzen & GU-Abrechnung",
          text: "Zentrales Costbook, Verpflichtungen, SOV, Zahlungsanträge und Retainage mit belastbarer Gesamtkostenprognose.",
        },
        {
          step: "02",
          title: "Change & Master Plan",
          text: "Nachträge, Risikoregister, Auslastung der Investitionsobergrenzen sowie Plan- vs. Ist-Master-Plan.",
        },
        {
          step: "03",
          title: "Portfolio-Steuerung",
          text: "Programm-Konsolidierung, Abweichungswarnungen und Management-Briefings für Campus-Gremien.",
        },
      ],
    },
    features: {
      eyebrow: "Campus-Funktionen",
      title: "Was Bauherren-Teams jeden Monat brauchen",
      description:
        "Master Plan, SOV und Portfolio-Steuerung in einer Plattform — für nordamerikanische Campus- und Mega-Programme.",
      items: [
        {
          id: "master-plan",
          title: "Campus Master Plan",
          description:
            "Auslastung der Investitionsobergrenzen, Zonen und Abweichungen zwischen genehmigtem Plan und aktuellem Portfolio.",
        },
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
            "Jede Kennzahl vom Portfolio bis zur Costbook-Zeile nachvollziehbar — Prognosen, die Sie im Lenkungsausschuss vertreten können.",
        },
        {
          id: "stage-gates",
          title: "Stage-Gate-Compliance",
          description:
            "Verbindliche Prüfungen bei Freigaben — Compliance im Prozess, nicht im Quartalsdeck.",
        },
        {
          id: "portfolio",
          title: "Portfolio-Steuerung",
          description:
            "Campus-Kennzahlen, priorisierte Maßnahmen und finanzielle Programmgesundheit über das gesamte Portfolio.",
        },
      ],
    },
    productScreens: {
      eyebrow: "Campus-Workflow",
      title: "Master Plan → SOV → Finanzielle Nachverfolgung",
      description:
        "Der monatliche Durchlauf für Bauherren: Steering, Abrechnungsbasis, Nachtragsumsetzung und finanzielle Nachverfolgung.",
      panels: [
        {
          id: "steering",
          title: "Master-Plan-Steering",
          caption: "Auslastung der Obergrenzen, Stage Gates und Programmgesundheit auf einen Blick.",
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
      title: "Für Programmmanagement-Teams von Bauherren",
      description:
        "Programmmanagement, Finance und PMO bei GU-lastigen Campus-Capex-Programmen mit Master-Plan-Vorgaben.",
      personas: [
        {
          title: "Programmmanagement / PMO",
          description: "Campus-Steering, Master-Plan-Compliance und Portfolio-Steuerung.",
        },
        {
          title: "Projektcontroller",
          description: "Verlässliche Costbook-Daten, SOV-Abstimmung und belastbare Forecasts für die Führung.",
        },
        {
          title: "Finance & Compliance",
          description: "Retainage-Steuerung, prüfungssichere Freigaben und elektronische Signatur-Workflows.",
        },
      ],
    },
    cta: {
      headline: "Den Campus-Workflow live erleben.",
      description:
        "Wir führen Master-Plan-Steering, SOV-Abrechnung und Nachtragsumsetzung an einem Referenz-Campus-Programm vor.",
      primaryCta: "Demo buchen",
      contactPrefix: "Oder kontaktieren Sie uns unter",
    },
  },
  fr: largeProjectsFrPatch,
};
