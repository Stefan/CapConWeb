import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "zh",
  meta: {
    title: `${PRODUCT_NAME} – 资本密集型 CAPEX 项目的项目管控平台`,
    description:
      "一体化平台：成本账簿、变更管理与投资组合治理。适用于新加坡及亚太地区的生命科学、基础设施与复杂 CAPEX 项目。",
    keywords: [
      "Capex",
      "项目组合",
      "EAC",
      "预测",
      "建设",
      "生命科学",
      "PMO",
      "SOV",
      "Master Plan",
    ],
    openGraphLocale: "zh_SG",
  },
  a11y: {
    skipToContent: "跳至主要内容",
    mainNav: "主导航",
    footerNav: "页脚导航",
    home: "首页",
    openMenu: "打开菜单",
  },
  site: {
    description:
      "面向资本密集型项目的一体化项目管控与财务治理平台 — 将财务、变更与投资组合整合于同一管控层。",
  },
  nav: {
    problem: "挑战",
    features: "功能",
    solution: "解决方案",
    audience: "适用对象",
    enterprise: "企业版",
    login: "登录",
    bookDemo: "预约演示",
    startTrial: "开始试用",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "资本密集型项目的项目管控与财务治理",
    subheadline: `${PRODUCT_NAME} 将成本账簿、变更管理、进度协同与投资组合治理整合于同一平台 — 为复杂 CAPEX 项目提供可辩护的预测、端到端审批与可靠指标。`,
    primaryCta: "申请演示",
    secondaryCta: "了解平台",
  },
  problem: {
    title: "CAPEX 项目复杂，管控不必如此。",
    description:
      "许多组织缺乏端到端的透明度 — 即便数据本身已经存在。",
    items: [
      {
        id: "budget-overruns",
        title: "预算超支",
        description:
          "偏差往往在发现时已为时过晚 — 纠正措施代价高昂。",
      },
      {
        id: "opaque-forecasts",
        title: "预测不透明",
        description:
          "不同版本与假设使可靠的规划决策难以做出。",
      },
      {
        id: "excel-processes",
        title: "手工 Excel 流程",
        description:
          "耗时的汇总、高错误率与有限的追溯能力。",
      },
      {
        id: "portfolio-blind-spots",
        title: "缺少组合视图",
        description:
          "单个项目可见 — 对投资预算、上限与现金流的影响却不可见。",
      },
      {
        id: "change-audit-trail",
        title: "变更缺乏依据",
        description:
          "变更与范围调整难以对照原始计划与 master plan 予以证明。",
      },
    ],
  },
  solution: {
    eyebrow: "解决方案",
    title: `${PRODUCT_NAME} 在他人只见数据之处，创造清晰洞察。`,
    description:
      "CapCon 将分散的电子表格与孤立的项目报告，整合为可靠的一体化系统 — 涵盖成本、承诺、变更影响与组合指标，从项目成本账簿到企业级汇总。",
    steps: [
      {
        step: "01",
        title: "财务",
        text: "成本账簿、承诺与预测，附清晰依据 — 无需并行 Excel 工作簿。",
      },
      {
        step: "02",
        title: "变更管理",
        text: "变更单与审批，对总成本预测与投资组合的影响透明可见。",
      },
      {
        step: "03",
        title: "投资组合",
        text: "跨项目汇总、货币与风险信号，为管理层提供报告。",
      },
    ],
  },
  features: {
    eyebrow: "能力",
    title: "可靠 CAPEX 管控的工具集",
    description:
      "财务控制人员与 PMO 负责人每日所需：可靠数字、清晰偏差与持续的投资组合视图。",
    items: [
      {
        id: "costbook",
        title: "集中式成本账簿与可辩护预测",
        description:
          "预算、预测、承诺与实际值，附清晰说明 — 以单一财务基础取代并行电子表格。",
      },
      {
        id: "change-orders",
        title: "变更管理",
        description:
          "变更单、审批与预测影响 — 从申请到组合视图全程记录。",
      },
      {
        id: "portfolio-intelligence",
        title: "投资组合智能",
        description:
          "跨项目指标、风险驱动因素与汇率影响，服务 PMO 与指导委员会。",
      },
      {
        id: "schedule-financials",
        title: "进度与成本",
        description:
          "进度与成本账簿协同 — 计划 vs. 实际、承诺与财务指标于同一视图呈现。",
      },
      {
        id: "registers",
        title: "风险、问题与决策",
        description:
          "登记册含影响历史与关联审批流程。",
      },
      {
        id: "workflows",
        title: "工作流与审计",
        description:
          "可配置审批、合规上下文与完整审计轨迹，适用于受监管环境。",
      },
    ],
  },
  productScreens: {
    eyebrow: "产品",
    title: "从成本账簿、变更到组合概览",
    description:
      "CapCon 连接运营级项目管控与投资组合治理 — 无需月末 Excel 汇总。",
    panels: [
      {
        id: "costbook",
        title: "成本账簿与总成本",
        caption: "成本结构、承诺与可辩护的完工估算。",
      },
      {
        id: "co-cc",
        title: "变更影响",
        caption: "变更单关联预测与组合信号。",
      },
      {
        id: "portfolio",
        title: "投资组合治理",
        caption: "项目指标、早期偏差预警与优先行动。",
      },
    ],
  },
  socialProof: {
    eyebrow: "信任",
    quote:
      "终于有一个系统将成本账簿、变更与投资组合融为一体 — 无需月末 Excel 汇总。",
    attribution: "财务控制人员，多站点生命科学项目",
    metrics: [
      { value: "1 个平台", label: "财务、变更与投资组合" },
      { value: "变更 → EAC", label: "端到端预测链" },
      { value: "审计就绪", label: "记录与审批签名" },
    ],
  },
  audience: {
    eyebrow: "适用对象",
    title: "面向复杂 CAPEX 投资组合 — 行业开放、集成能力强",
    description:
      "无论您是在扩展生产、建设基础设施，还是管理多站点项目，预算、进度与项目执行必须保持一致。CapCon 是项目团队、现场交付与财务治理之间的集成管控层 — 尤其适用于 ERP 承载财务数据的场景，在新加坡及亚太双语商业环境中同样适用。",
    personas: [
      {
        title: "财务控制人员",
        description:
          "可靠预测、透明承诺与可辩护的投资决策 — 适用于生命科学、基础设施及其他资本密集型行业。",
      },
      {
        title: "PMO / 项目管理",
        description:
          "项目与投资组合治理，含一致报告、master plan 与全组合偏差分析。",
      },
      {
        title: "项目控制与质量",
        description:
          "在受监管行业中，追溯性、电子签名与一致的数据质量至关重要 — 从计费行到审批。",
      },
    ],
  },
  enterprise: {
    eyebrow: "企业版",
    title: "为严苛的企业环境而构建",
    description: `${PRODUCT_NAME} 满足受监管行业的要求，并与现有财务及合规流程集成 — 适用于新加坡及亚太枢纽的运营需求。`,
    badgeDisclaimer:
      "成熟度与认证范围因实施而异 — 详情请于演示中讨论。",
    signals: [
      {
        id: "security",
        title: "安全与合规",
        description:
          "企业级安全标准，具备 GxP 与 21 CFR Part 11 就绪能力，适用于受监管环境（视项目范围而定）。",
      },
      {
        id: "signatures",
        title: "审批签名与审计轨迹",
        description:
          "电子审批、永久记录与对预测及登记数据的可追溯变更。",
      },
      {
        id: "sap",
        title: "SAP 集成",
        description:
          "连接 ERP 与财务流程 — 集成路径与范围按客户定义。",
      },
      {
        id: "gdpr",
        title: "GDPR 合规",
        description:
          "数据保护与托管符合欧盟要求，并满足跨境数据治理对亚太企业的合规预期。",
      },
    ],
    badges: ["GxP 就绪", "21 CFR Part 11 readiness", "SAP 集成", "GDPR 合规"],
  },
  cta: {
    headline: "您的 CAPEX 投资组合清晰化，从一次对话开始。",
    description: `在个性化演示中体验 ${PRODUCT_NAME} — 根据您的项目格局与财务管控需求量身定制。`,
    primaryCta: "预约演示",
    contactPrefix: "或联系我们的团队：",
  },
  demo: {
    metaTitle: "预约演示",
    title: "申请个性化演示",
    description:
      "请简要介绍您的项目格局 — 我们将跟进并提供合适的演示时段。",
    nameLabel: "姓名",
    namePlaceholder: "姓名",
    companyLabel: "公司",
    companyPlaceholder: "机构名称",
    emailLabel: "电子邮件",
    emailPlaceholder: "name@company.com",
    roleLabel: "职位",
    rolePlaceholder: "例如：财务控制、PMO 负责人",
    messageLabel: "留言（选填）",
    messagePlaceholder: "项目类型、园区规模、特定需求 …",
    submit: "提交申请",
    privacyNote:
      "提交即表示您同意我们依照隐私政策处理您的数据。",
    backHome: "返回首页",
  },
  footer: {
    rights: "保留所有权利。",
    impressum: "法律声明",
    privacy: "隐私政策",
  },
  legalPages: {
    impressum: {
      title: "法律声明",
      sections: [
        {
          heading: "服务提供商",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "联系方式",
          paragraphs: [
            "电子邮件：{{email}}",
            "{{phoneLine}}",
          ],
        },
        {
          heading: "内容负责人",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "免责声明",
          paragraphs: [
            "我们谨慎维护本网站，但无法保证所有内容的准确性、完整性或时效性。",
          ],
        },
      ],
    },
    privacy: {
      title: "隐私政策",
      sections: [
        {
          heading: "1. 数据控制者",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "电子邮件：{{email}}",
          ],
        },
        {
          heading: "2. 我们处理的个人数据",
          paragraphs: [
            "当您访问本网站时，我们会处理技术上必要的服务器日志（例如 IP 地址、时间戳、用户代理）。",
            "若您使用演示表单，我们将处理您提供的信息（姓名、公司、电子邮件、职位、留言）以处理您的请求。",
          ],
        },
        {
          heading: "3. 法律依据",
          paragraphs: [
            "处理依据 GDPR 第 6(1)(b) 条（合同前步骤）及第 6(1)(f) 条（保障网站安全运行的合法利益）。",
          ],
        },
        {
          heading: "4. 保留期限",
          paragraphs: [
            "演示请求在处理完毕且无法定保留义务后将予以删除。",
          ],
        },
        {
          heading: "5. 您的权利",
          paragraphs: [
            "您享有访问、更正、删除、限制处理、反对及数据可携权。您可向监管机构提出投诉。",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "CAPEX 投资组合 – 2026 年第二季度",
    stats: [
      { label: "总 CAPEX", value: "€101.9M" },
      { label: "EAC 差异", value: "+€2.4M" },
      { label: "项目", value: "12 个进行中" },
    ],
    columns: { project: "项目", budget: "预算", eac: "EAC" },
    rows: [
      { name: "A 厂 – 扩建", budget: "€42.8M", eac: "€44.1M" },
      { name: "洁净室二期", budget: "€18.2M", eac: "€17.9M" },
      { name: "北部物流枢纽", budget: "€31.5M", eac: "€33.2M" },
      { name: "2026 IT 基础设施", budget: "€9.4M", eac: "€9.6M" },
    ],
  },
};

export default dictionary;
