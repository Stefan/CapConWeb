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
      eyebrow: "CapEx & Portfolio Intelligence · Australia & Singapore",
      headline: "Govern multi-site CapEx with numbers the board can trust.",
      subheadline:
        "One costbook for budget, forecast, change, and portfolio — across APAC programmes where ERP holds financial truth.",
      boundaryNote:
        "Not task PPM — CapCon is owner financial control with costbook and change.",
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
          title: "Change approved, forecast wrong",
          description:
            "A change is approved — the forecast still does not update. Impact never lands in the costbook.",
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
          id: "sap-shadow-ledger",
          title: "ERP ≠ project costbook",
          description:
            "ERP import ≠ project costbook — controllers rebuild the truth in shadow Excel across sites.",
        },
        {
          id: "change-audit-trail",
          title: "SOV billed, EAC unclear",
          description:
            "SOV billed, retainage held, EAC unclear — or change evidence controllers cannot defend.",
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
            "Consistent reporting, portfolio governance, and variance signals across sites.",
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
        "We will tailor the walkthrough to your sector — infrastructure, resources, or life sciences.",
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
      eyebrow: "CapEx & Portfolio Intelligence · 澳大利亚与新加坡",
      headline: "以可辩护的数据，管控多站点资本支出。",
      subheadline:
        "一本成本账覆盖预算、预测、变更与组合 — 适用于亚太区 ERP 作为财务事实来源的项目。",
      boundaryNote:
        "不是任务型 PPM — CapCon 是带成本账与变更的业主财务管控。",
      primaryCta: "申请演示",
    },
    problem: {
      title: "复杂项目。分散管控。",
      description:
        "亚太区重大投资跨越承包商、币种与监管要求 — 许多团队仍在 Excel 中汇总对账。",
      items: [
        {
          id: "budget-overruns",
          title: "滞后的偏差信号",
          description: "成本压力往往在指导委员会之后才显现 — 此时补救选项已有限。",
        },
        {
          id: "excel-processes",
          title: "电子表格汇总",
          description: "PMO 团队每月耗费数日合并承包商数据、变更日志与组合视图。",
        },
        {
          id: "sap-shadow-ledger",
          title: "ERP ≠ 项目成本账",
          description: "ERP 导入 ≠ 项目成本账 — 控制器用影子 Excel 重建真相。",
        },
        {
          id: "change-audit-trail",
          title: "SOV 已开票，EAC 不清",
          description: "SOV 已开票、保留金已扣、EAC 仍不清 — 或控制器无法辩护的变更依据。",
        },
      ],
    },
    solution: {
      eyebrow: "面向项目负责人",
      title: "从现场交付到组合的一层统一管控。",
      description:
        "CapCon 为财务、PMO 与项目团队提供共享依据 — 与 ERP 财务数据对齐。",
      steps: [
        {
          step: "01",
          title: "财务",
          text: "跨承包商与站点的成本账、承诺与预测，附清晰依据。",
        },
        {
          step: "02",
          title: "变更",
          text: "变更单与审批，对总成本与项目指标的影响透明可见。",
        },
        {
          step: "03",
          title: "投资组合",
          text: "组合级视图、汇率感知信号与高管报告。",
        },
      ],
    },
    features: {
      eyebrow: "亚太项目能力",
      title: "资本密集型项目团队所需的管控工具",
      description:
        "日常项目管控 — 并在部署需要时支持 ERP 对账与承包商账单。",
      items: [
        {
          id: "costbook",
          title: "集中式成本账与可辩护预测",
          description: "预算、承诺与实际值统一管理 — 取代并行电子表格。",
        },
        {
          id: "change-orders",
          title: "变更管理",
          description: "变更单、审批与预测影响 — 从申请到组合视图全程记录。",
        },
        {
          id: "portfolio-intelligence",
          title: "投资组合智能",
          description: "跨项目指标、风险驱动因素与汇率影响，服务 PMO 与指导委员会。",
        },
        {
          id: "sap-reconciliation",
          title: "SAP / ERP 对账",
          description: "导入实际值与承诺，比对 ERP 与成本账 — 减少指导会议中的并行工作簿。",
        },
        {
          id: "workflows",
          title: "工作流与审计",
          description: "可配置审批与完整审计轨迹，适用于受监管行业。",
        },
      ],
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
