import type { ExtendedLegalPages } from "@/i18n/legal/types";
import type { LegalSection } from "@/i18n/types";

const impressum: LegalSection[] = [
  {
    heading: "运营方信息",
    paragraphs: [
      "{{companyName}}",
      "{{legalForm}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "{{registerLine}}",
      "{{vatLine}}",
    ],
  },
  {
    heading: "代表",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "联系方式",
    paragraphs: ["电子邮件: {{email}}", "{{phoneLine}}"],
  },
  {
    heading: "内容负责人",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "免责声明",
    paragraphs: [
      "我们谨慎维护本网站内容，但不保证全部信息的准确、完整或最新。",
      "产品截图展示演示工作流，可能与您的部署不同。",
    ],
  },
];

const privacy: LegalSection[] = [
  {
    heading: "1. 数据控制者",
    paragraphs: [
      "{{companyName}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "电子邮件: {{email}}",
      "隐私联系: {{dpoEmail}}",
    ],
  },
  {
    heading: "2. 托管与服务器日志",
    paragraphs: [
      "本网站由 {{hostingProvider}}（{{hostingRegion}}）托管。访问时会处理 IP、时间戳、URL、用户代理等技术日志。",
      "目的：安全、稳定运行。通常保留不超过 30 天（安全事件除外）。",
    ],
  },
  {
    heading: "3. 语言与区域版本（Geo-IP）",
    paragraphs: [
      "我们通过 Vercel/Cloudflare 等平台头信息推断大致国家/地区，以推荐语言和营销版本，不用于建立个人画像。",
      "经您同意后，区域版本 Cookie 最多保存 90 天（见 Cookie 政策）。",
    ],
  },
  {
    heading: "4. Cookie",
    paragraphs: ["使用同意 Cookie 及（经同意）区域版本 Cookie。详情: /zh/cookies。"],
  },
  {
    heading: "5. 演示申请表",
    paragraphs: [
      "处理姓名、公司、电子邮件、职位、留言及语言设置，用于回复您的咨询。",
      "通过 HTTPS 提交至服务器，或在不可用时打开 mailto。我们不会出售演示数据。",
      "保留：直至咨询完成，商业通信通常最多 24 个月。",
    ],
  },
  {
    heading: "6. CapCon 应用链接",
    paragraphs: ["指向 app.capcon.io 的链接适用产品隐私政策。"],
  },
  {
    heading: "7. 跨境传输",
    paragraphs: ["在 EU/EEA 以外处理时，我们采用标准合同条款等适当保障措施。"],
  },
  {
    heading: "8. 您的权利",
    paragraphs: ["访问、更正、删除等请求请联系 {{dpoEmail}}。"],
  },
  {
    heading: "9. 地区说明（新加坡 PDPA 等）",
    paragraphs: [
      "我们为合理商业目的处理个人数据。新加坡用户可通过 {{dpoEmail}} 申请访问/更正。",
      "澳大利亚用户：联系数据可能因美国托管而境外披露，详情请联系我们。",
    ],
  },
];

const cookies: LegalSection[] = [
  {
    heading: "1. 什么是 Cookie",
    paragraphs: ["存储在您设备上的小型文本文件。本营销网站仅使用必要 Cookie。"],
  },
  {
    heading: "2. 我们使用的 Cookie",
    paragraphs: [
      "capcon-cookie-consent — 存储同意选择（essential / all）。期限：12 个月。",
      "capcon-site-variant — 区域营销版本。「全部接受」时 90 天，否则仅会话。",
    ],
  },
  {
    heading: "3. 管理 Cookie",
    paragraphs: ["通过页脚「Cookie 设置」更改，或在浏览器中删除。"],
  },
];

const terms: LegalSection[] = [
  {
    heading: "1. 适用范围",
    paragraphs: ["本条款适用于 capcon.io 营销网站。CapCon 软件产品适用单独条款。"],
  },
  {
    heading: "2. 内容",
    paragraphs: ["营销信息不作保证。截图可能包含演示数据。"],
  },
  {
    heading: "3. 不构成合同",
    paragraphs: ["浏览网站或提交演示申请不构成有约束力的合同。"],
  },
  {
    heading: "4. 知识产权",
    paragraphs: ["CapCon 品牌与内容受保护，未经许可不得复制。"],
  },
  {
    heading: "5. 责任",
    paragraphs: ["在适用法律允许范围内限制责任。"],
  },
  {
    heading: "6. 适用法律",
    paragraphs: ["无强制性消费者规则时，适用德国法及提供者注册地管辖。"],
  },
];

const accessibility: LegalSection[] = [
  {
    heading: "1. 承诺",
    paragraphs: ["我们力求 capcon.io 在合理范围内符合 WCAG 2.1 AA。"],
  },
  {
    heading: "2. 措施",
    paragraphs: ["跳过链接、语义标题、键盘导航、主要 UI 对比度。"],
  },
  {
    heading: "3. 已知限制",
    paragraphs: ["部分产品截图为图像，未提供完整无障碍元数据。"],
  },
  {
    heading: "4. 反馈",
    paragraphs: ["请联系 {{email}}。"],
  },
];

export const zhPages: ExtendedLegalPages = {
  impressum: { title: "法律信息", sections: impressum },
  privacy: { title: "隐私政策", sections: privacy },
  cookies: { title: "Cookie 政策", sections: cookies },
  terms: { title: "使用条款", sections: terms },
  accessibility: { title: "无障碍声明", sections: accessibility },
};
