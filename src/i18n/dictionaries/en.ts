import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "en",
  meta: {
    title: `${PRODUCT_NAME} – Project controls for capital-intensive capex programs`,
    description:
      "Integrated platform: costbook, change management, and portfolio governance. For complex construction and capex programs globally.",
    keywords: [
      "Capex",
      "Project Portfolio",
      "EAC",
      "Forecasting",
      "Construction",
      "Life Sciences",
      "PMO",
      "SAP",
      "ERP Reconciliation",
    ],
    openGraphLocale: "en_US",
  },
  a11y: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    footerNav: "Footer navigation",
    home: "Home",
    openMenu: "Open menu",
  },
  site: {
    description:
      "Integrated platform for project controls and financial governance on capital-intensive programs — financials, change, and portfolio in one control layer.",
  },
  nav: {
    problem: "Challenge",
    features: "Features",
    solution: "Solution",
    audience: "Who it's for",
    enterprise: "Enterprise",
    login: "Sign in",
    bookDemo: "Request a demo",
    startTrial: "Start trial",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "Project controls and financial governance for capital-intensive programs",
    subheadline: `${PRODUCT_NAME} unifies costbook, change management, schedule alignment, and portfolio governance on one platform — with defensible forecasts, end-to-end approvals, and dependable metrics for complex capex programs. Especially strong where ERP holds financial data and multi-site portfolios need one costbook truth.`,
    primaryCta: "Request a demo",
    secondaryCta: "Explore the platform",
  },
  problem: {
    title: "Capex projects are complex. Controlling them shouldn't be.",
    description:
      "Many organizations lack end-to-end transparency – even when the data is already there.",
    items: [
      {
        id: "budget-overruns",
        title: "Budget overruns",
        description:
          "Variances are often spotted late – when corrective action is already expensive.",
      },
      {
        id: "opaque-forecasts",
        title: "Opaque forecasts",
        description:
          "Different versions and assumptions make reliable planning decisions difficult.",
      },
      {
        id: "excel-processes",
        title: "Manual Excel processes",
        description:
          "Time-consuming consolidation, high error rates, and limited traceability.",
      },
      {
        id: "portfolio-blind-spots",
        title: "Missing portfolio view",
        description:
          "Individual projects are visible – the impact on investment budget, caps, and cash flow is not.",
      },
      {
        id: "sap-shadow-ledger",
        title: "Parallel costbook workbooks",
        description:
          "Controllers maintain parallel Excel costbooks because ERP imports do not match the consolidated project costbook.",
      },
      {
        id: "change-audit-trail",
        title: "Changes without evidence",
        description:
          "Variations and scope changes are hard to substantiate against approved budget and forecast baseline.",
      },
    ],
  },
  solution: {
    eyebrow: "The solution",
    title: `${PRODUCT_NAME} — one control layer for capital programmes.`,
    description:
      "Instead of scattered spreadsheets and isolated project reports, CapCon brings costs, commitments, change impacts, and portfolio metrics together in one reliable system — from project costbook to enterprise consolidation.",
    steps: [
      {
        step: "01",
        title: "Financials",
        text: "Costbook, commitments, and forecasts with clear rationale — no parallel Excel workbooks.",
      },
      {
        step: "02",
        title: "Change management",
        text: "Change orders and approvals with transparent impact on total cost forecast and portfolio.",
      },
      {
        step: "03",
        title: "Portfolio",
        text: "Consolidation across projects, currency and risk signals, reporting for leadership.",
      },
    ],
  },
  features: {
    eyebrow: "Capabilities",
    title: "The toolkit for reliable capex control",
    description:
      "Core project controls every day — plus ERP reconciliation and vendor billing where your deployment requires them.",
    items: [
      {
        id: "costbook",
        title: "Central costbook & defensible forecasts",
        description:
          "Budget, forecast, commitments, and actuals with clear explanations — one financial foundation instead of parallel spreadsheets.",
      },
      {
        id: "change-orders",
        title: "Change management",
        description:
          "Change orders, approvals, and forecast impact — fully documented from request to portfolio view.",
      },
      {
        id: "portfolio-intelligence",
        title: "Portfolio intelligence",
        description:
          "Metrics across all projects, risk drivers, and currency effects for PMO and steering committees.",
      },
      {
        id: "schedule-financials",
        title: "Schedule & cost",
        description:
          "Schedule and costbook working together — plan vs. actual, commitments, and financial metrics in one view.",
      },
      {
        id: "workflows",
        title: "Workflows & audit",
        description:
          "Configurable approvals, compliance context, and a complete audit trail for regulated environments.",
      },
      {
        id: "sap-reconciliation",
        title: "SAP / ERP reconciliation",
        description:
          "Import actuals and commitments, compare ERP vs. costbook — reduce parallel workbooks in steering.",
      },
      {
        id: "vendor-portal",
        title: "Vendor / GC portal",
        description:
          "SOV progress and billing submissions where enabled — complementing field tools, not replacing CLM.",
      },
    ],
  },
  productScreens: {
    eyebrow: "Product",
    title: "From costbook through change to portfolio overview",
    description:
      "CapCon connects operational project controls with portfolio governance — without month-end Excel consolidation.",
    panels: [
      {
        id: "costbook",
        title: "Costbook & total cost",
        caption: "Cost structure, commitments, and defensible estimate at completion.",
      },
      {
        id: "co-cc",
        title: "Change impact",
        caption: "Change orders linked to forecast and portfolio signals.",
      },
      {
        id: "portfolio",
        title: "Portfolio governance",
        caption: "Program metrics, early variance warnings, and prioritized actions.",
      },
      {
        id: "risks",
        title: "Risk management",
        caption: "Scoring, category breakdown, and top risks linked to portfolio steering.",
      },
    ],
  },
  socialProof: {
    eyebrow: "Trust",
    quote:
      "Finally a system where costbook, change, and portfolio work as one — without month-end Excel consolidation.",
    attribution: "Finance controller, multi-site manufacturing program",
    metrics: [
      { value: "1 platform", label: "Financials, change & portfolio" },
      { value: "Change → EAC", label: "End-to-end forecast chain" },
      { value: "Audit-ready", label: "Records & approval signatures" },
    ],
  },
  audience: {
    eyebrow: "Audiences",
    title: "For complex capex portfolios — industry-open, integration-strong",
    description:
      "Whether you are expanding production, building infrastructure, or running a multi-site program, budget, schedule, and project execution must align. CapCon is the integrated control layer between project teams, site delivery, and financial governance — especially where ERP holds financial data.",
    personas: [
      {
        title: "Finance controllers",
        description:
          "Reliable forecasts, transparent commitments, and defensible investment decisions — in construction, life sciences, or other capital-intensive industries.",
      },
      {
        title: "PMO / program management",
        description:
          "Program and portfolio governance with consistent reporting and variance signals across the full portfolio.",
      },
      {
        title: "Project controllers & quality",
        description:
          "In regulated industries, traceability, electronic signatures, and consistent data quality matter — from billing line to approval.",
      },
    ],
  },
  enterprise: {
    eyebrow: "Enterprise",
    title: "Built for demanding enterprise environments",
    description: `${PRODUCT_NAME} meets the requirements of regulated industries and integrates with existing finance and compliance processes.`,
    badgeDisclaimer:
      "Maturity and certification scope depend on implementation — we cover details in the demo.",
    signals: [
      {
        id: "security",
        title: "Security & compliance",
        description:
          "Enterprise security standards with GxP and 21 CFR Part 11 readiness for regulated environments (depending on project scope).",
      },
      {
        id: "signatures",
        title: "Approval signatures & audit trail",
        description:
          "Electronic approvals, permanent records, and traceable changes to forecasts and register data.",
      },
      {
        id: "sap",
        title: "SAP integration",
        description:
          "Connection to ERP and finance processes – integration path and scope are defined per customer.",
      },
      {
        id: "gdpr",
        title: "GDPR compliant",
        description:
          "Data protection and hosting in European data centers aligned with EU requirements.",
      },
    ],
    badges: ["GxP ready", "21 CFR Part 11 readiness", "SAP integration", "GDPR compliant"],
  },
  cta: {
    headline: "Clarity in your capex portfolio starts with a conversation.",
    description: `Experience ${PRODUCT_NAME} in a personal demo — tailored to your project landscape and financial control requirements.`,
    primaryCta: "Request a demo",
    contactPrefix: "Or contact our team at",
  },
  demo: {
    metaTitle: "Request a demo",
    title: "Request a personal demo",
    description:
      "Tell us briefly about your project landscape – we'll follow up with a suitable demo slot.",
    nameLabel: "Name",
    namePlaceholder: "First and last name",
    companyLabel: "Company",
    companyPlaceholder: "Organization",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    roleLabel: "Role",
    rolePlaceholder: "e.g. finance controller, PMO lead",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Project type, program size, ERP landscape, specific requirements …",
    submit: "Send request",
    consentBefore: "I agree to the processing of my data under our",
    consentAfter: ".",
    consentRequired: "Please confirm your consent to data processing.",
    backHome: "Back to home",
  },
  footer: {
    rights: "All rights reserved.",
    impressum: "Legal notice",
    privacy: "Privacy policy",
  },
  legalPages: {
    impressum: {
      title: "Legal notice",
      sections: [
        {
          heading: "Provider",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Email: {{email}}",
            "{{phoneLine}}",
          ],
        },
        {
          heading: "Responsible for content",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "Disclaimer",
          paragraphs: [
            "We create this website with care but cannot guarantee the accuracy, completeness, or timeliness of all content.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy policy",
      sections: [
        {
          heading: "1. Controller",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "Email: {{email}}",
          ],
        },
        {
          heading: "2. Personal data we process",
          paragraphs: [
            "When you visit this site, technically necessary server logs (e.g. IP address, timestamp, user agent) are processed.",
            "If you use the demo form, we process the details you provide (name, company, email, role, message) to handle your request.",
          ],
        },
        {
          heading: "3. Legal basis",
          paragraphs: [
            "Processing is based on Art. 6(1)(b) GDPR (pre-contractual steps) and Art. 6(1)(f) GDPR (legitimate interest in secure website operation).",
          ],
        },
        {
          heading: "4. Retention",
          paragraphs: [
            "Demo requests are deleted once the inquiry is fully handled and no statutory retention obligations apply.",
          ],
        },
        {
          heading: "5. Your rights",
          paragraphs: [
            "You have the right to access, rectification, erasure, restriction, objection, and data portability. You may lodge a complaint with a supervisory authority.",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "Project overview – EVM & AI summary",
    stats: [
      { label: "Total capex", value: "€101.9M" },
      { label: "EAC delta", value: "+€2.4M" },
      { label: "Projects", value: "12 active" },
    ],
    columns: { project: "Project", budget: "Budget", eac: "EAC" },
    rows: [
      { name: "Plant A – expansion", budget: "€42.8M", eac: "€44.1M" },
      { name: "Clean room phase 2", budget: "€18.2M", eac: "€17.9M" },
      { name: "Logistics hub north", budget: "€31.5M", eac: "€33.2M" },
      { name: "IT infrastructure 2026", budget: "€9.4M", eac: "€9.6M" },
    ],
  },
};

export default dictionary;
