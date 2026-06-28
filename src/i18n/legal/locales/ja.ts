import type { ExtendedLegalPages } from "@/i18n/legal/types";
import type { LegalSection } from "@/i18n/types";

const impressum: LegalSection[] = [
  {
    heading: "事業者情報",
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
    heading: "代表者",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "お問い合わせ",
    paragraphs: ["メール: {{email}}", "{{phoneLine}}"],
  },
  {
    heading: "コンテンツ責任者",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "免責事項",
    paragraphs: [
      "当サイトの内容は慎重に作成していますが、正確性・完全性・最新性を保証するものではありません。",
      "製品スクリーンショットはデモ用ワークフローを示しており、お客様の環境と異なる場合があります。",
    ],
  },
];

const privacy: LegalSection[] = [
  {
    heading: "1. 個人情報の管理者",
    paragraphs: [
      "{{companyName}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "メール: {{email}}",
      "プライバシー窓口: {{dpoEmail}}",
    ],
  },
  {
    heading: "2. ホスティングとサーバーログ",
    paragraphs: [
      "本サイトは {{hostingProvider}}（{{hostingRegion}}）でホストされています。アクセス時に IP アドレス、日時、URL、ユーザーエージェント等の技術ログを処理します。",
      "目的: サイトの安全・安定運用。保存期間は原則 30 日以内（セキュリティ上必要な場合を除く）。",
    ],
  },
  {
    heading: "3. 言語・地域版（Geo-IP）",
    paragraphs: [
      "Vercel/Cloudflare 等のヘッダーからおおよその国を推定し、言語とマーケティング版を提案します。個人プロファイルの作成には使用しません。",
      "同意いただいた場合、地域版 Cookie を最大 90 日保存することがあります（Cookie ポリシー参照）。",
    ],
  },
  {
    heading: "4. Cookie",
    paragraphs: ["同意 Cookie および（同意時）地域版 Cookie を使用します。詳細: /ja/cookies。"],
  },
  {
    heading: "5. デモお問い合わせフォーム",
    paragraphs: [
      "氏名、会社名、メール、役職、メッセージ、言語設定を、お問い合わせ対応のために処理します。",
      "HTTPS 経由でサーバーに送信、または mailto でメールクライアントを開きます。第三者への販売は行いません。",
      "保存期間: 対応完了まで、通常は商業通信として最大 24 か月。",
    ],
  },
  {
    heading: "6. CapCon アプリケーションへのリンク",
    paragraphs: [
      "app.capconhq.com へのリンクは、製品側のプライバシーポリシーが適用されます。",
    ],
  },
  {
    heading: "7. 国外への移転",
    paragraphs: [
      "EU/EEA 外での処理が必要な場合、標準契約条項等の適切な保護措置を講じます。",
    ],
  },
  {
    heading: "8. お客様の権利",
    paragraphs: [
      "開示、訂正、削除等の請求: {{dpoEmail}} までご連絡ください。",
    ],
  },
  {
    heading: "9. 個人情報保護法（APPI）に関する注記",
    paragraphs: [
      "各条項に利用目的を記載しています。国外移転に関するお問い合わせは事前に {{dpoEmail}} までご連絡ください。",
      "個人情報保護委員会への苦情申立ても可能です。",
    ],
  },
];

const cookies: LegalSection[] = [
  {
    heading: "1. Cookie とは",
    paragraphs: ["端末に保存される小さなテキストファイルです。本マーケティングサイトに必要な Cookie のみ使用します。"],
  },
  {
    heading: "2. 使用する Cookie",
    paragraphs: [
      "capcon-cookie-consent — 同意の選択（essential / all）。保存: 12 か月。",
      "capcon-site-variant — 地域マーケティング版。「すべて同意」の場合 90 日、それ以外はセッションのみ。",
    ],
  },
  {
    heading: "3. 管理方法",
    paragraphs: [
      "フッターの「Cookie設定」から変更、またはブラウザ設定で削除できます。",
    ],
  },
];

const terms: LegalSection[] = [
  {
    heading: "1. 適用範囲",
    paragraphs: ["本規約は capconhq.com マーケティングサイトに適用されます。製品・トライアルは別規約です。"],
  },
  {
    heading: "2. コンテンツ",
    paragraphs: ["マーケティング情報は保証なく提供されます。スクリーンショットはデモデータの場合があります。"],
  },
  {
    heading: "3. 契約の不成立",
    paragraphs: ["サイト閲覧やデモ申込みだけでは拘束力のある契約は成立しません。"],
  },
  {
    heading: "4. 知的財産",
    paragraphs: ["CapCon のブランド・コンテンツは保護されています。無断複製は禁止です。"],
  },
  {
    heading: "5. 責任",
    paragraphs: ["適用法で許される範囲で責任を限定します。"],
  },
  {
    heading: "6. 準拠法",
    paragraphs: ["特段の強行規定がない限り、ドイツ法および提供者本店地の管轄が適用されます。"],
  },
];

const accessibility: LegalSection[] = [
  {
    heading: "1. 目標",
    paragraphs: ["capconhq.com について WCAG 2.1 レベル AA を合理的な範囲で目指します。"],
  },
  {
    heading: "2. 施策",
    paragraphs: ["スキップリンク、見出し構造、キーボード操作、主要 UI のコントラスト。"],
  },
  {
    heading: "3. 既知の制限",
    paragraphs: ["製品スクリーンショットは画像のため、完全なアクセシビリティメタデータがありません。"],
  },
  {
    heading: "4. フィードバック",
    paragraphs: ["{{email}} までご連絡ください。"],
  },
];

export const jaPages: ExtendedLegalPages = {
  impressum: { title: "法的情報", sections: impressum },
  privacy: { title: "プライバシーポリシー", sections: privacy },
  cookies: { title: "Cookieポリシー", sections: cookies },
  terms: { title: "利用規約", sections: terms },
  accessibility: { title: "アクセシビリティ", sections: accessibility },
};
