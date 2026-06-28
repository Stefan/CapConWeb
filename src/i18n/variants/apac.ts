import { PRODUCT_NAME } from "@/lib/brand";

import type { Locale } from "@/i18n/config";
import type { SiteDictionary } from "@/i18n/types";

/** Australia & Singapore — infrastructure, mining, life-sciences hubs. */
export const apacVariant: Partial<Record<Locale, Partial<SiteDictionary>>> = {
  en: {
    meta: {
      title: `${PRODUCT_NAME} – CapEx controls for APAC programs`,
      description:
        "Project controls for capital-intensive programs across Australia and Singapore — costbook, change management, and portfolio governance for infrastructure, resources, and life-sciences investments.",
      keywords: [
        "CapEx",
        "Australia",
        "Singapore",
        "Infrastructure",
        "Life Sciences",
        "Mining",
        "Portfolio",
        "PMO",
      ],
      openGraphLocale: "en_AU",
    },
    hero: {
      eyebrow: "CapEx · Australia & Singapore",
      headline: "Govern multi-site CapEx with numbers the board can trust.",
      subheadline: `${PRODUCT_NAME} connects costbook, change approvals, and portfolio metrics for infrastructure, resources, and life-sciences programs across APAC — without month-end spreadsheet consolidation.`,
      primaryCta: "Request a demo",
    },
    problem: {
      title: "Complex programs. Fragmented control.",
      description:
        "Major APAC investments span contractors, currencies, and regulators — yet many teams still reconcile in Excel.",
      items: [
        {
          id: "budget-overruns",
          title: "Late variance signals",
          description:
            "Cost pressure shows up after steering committees meet — when options to recover are limited.",
        },
        {
          id: "opaque-forecasts",
          title: "Forecast versions",
          description:
            "Different assumptions across sites make a defensible estimate at completion hard to present.",
        },
        {
          id: "excel-processes",
          title: "Spreadsheet consolidation",
          description:
            "PMO teams lose days each month merging contractor data, change logs, and portfolio views.",
        },
        {
          id: "portfolio-blind-spots",
          title: "Programme blind spots",
          description:
            "Individual projects are tracked — programme-level cash and cap utilisation often are not.",
        },
        {
          id: "change-audit-trail",
          title: "Change evidence gaps",
          description:
            "Variations and scope shifts are hard to tie back to approved budgets and stage gates.",
        },
      ],
    },
    solution: {
      eyebrow: "For programme owners",
      title: "One control layer from site delivery to portfolio.",
      description:
        "CapCon gives finance, PMO, and project teams a shared source of truth — aligned with ERP where financial truth lives.",
      steps: [
        {
          step: "01",
          title: "Financials",
          text: "Costbook, commitments, and forecasts with clear rationale across contractors and sites.",
        },
        {
          step: "02",
          title: "Change",
          text: "Change orders and approvals with transparent impact on total cost and programme metrics.",
        },
        {
          step: "03",
          title: "Portfolio",
          text: "Consolidated programme view, FX-aware signals, and executive reporting.",
        },
      ],
    },
    audience: {
      eyebrow: "APAC",
      title: "Built for capital-intensive programme teams",
      description:
        "Infrastructure owners, resources operators, and life-sciences manufacturers running multi-year CapEx across Australia, Singapore, and the wider region.",
      personas: [
        {
          title: "Finance & commercial",
          description:
            "Defensible forecasts, commitment control, and board-ready programme metrics.",
        },
        {
          title: "PMO / programme management",
          description:
            "Consistent reporting, stage-gate compliance, and portfolio governance across sites.",
        },
        {
          title: "Project controls",
          description:
            "Traceability from contractor billing to approved change — audit-ready in regulated sectors.",
        },
      ],
    },
    cta: {
      headline: "See how APAC programmes run on one control layer.",
      description:
        "We'll tailor the walkthrough to your sector — infrastructure, resources, or life sciences.",
      primaryCta: "Request a demo",
      contactPrefix: "Or contact our team at",
    },
  },
  zh: {
    meta: {
      title: `${PRODUCT_NAME} – 亚太区资本支出管控`,
      description:
        "面向澳大利亚与新加坡的资本密集型项目：成本账、变更管理与投资组合治理，适用于基础设施、资源与生命科学投资。",
      keywords: ["CapEx", "澳大利亚", "新加坡", "基础设施", "生命科学", "投资组合"],
      openGraphLocale: "zh_SG",
    },
    hero: {
      eyebrow: "CapEx · 澳大利亚与新加坡",
      headline: "以可辩护的数据，管控多站点资本支出。",
      subheadline: `${PRODUCT_NAME} 将成本账、变更审批与投资组合指标贯通——适用于亚太区基础设施、资源与生命科学项目，无需月末 Excel 汇总。`,
      primaryCta: "申请演示",
    },
    audience: {
      eyebrow: "亚太",
      title: "面向资本密集型项目团队",
      description:
        "在澳大利亚、新加坡及更广泛区域开展多年期 CapEx 的基础设施业主、资源企业与生命科学制造商。",
      personas: [
        {
          title: "财务与商务",
          description: "可辩护的预测、承诺管控及面向董事会的项目指标。",
        },
        {
          title: "PMO / 项目管理",
          description: "统一报告、阶段门合规及跨站点投资组合治理。",
        },
        {
          title: "项目控制",
          description: "从承包商账单到批准变更的全链路追溯——满足受监管行业审计要求。",
        },
      ],
    },
    cta: {
      headline: "了解亚太项目如何在一层管控中运行。",
      description: "我们将根据您的基础设施、资源或生命科学场景定制演示。",
      primaryCta: "申请演示",
      contactPrefix: "或联系我们的团队：",
    },
  },
};
