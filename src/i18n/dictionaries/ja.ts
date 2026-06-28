import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "ja",
  meta: {
    title: `${PRODUCT_NAME} – 設備投資プログラム向けプロジェクトコントロール`,
    description:
      "コストブック、変更管理、ポートフォリオガバナンスを統合したプラットフォーム。製造・ライフサイエンスをはじめ、複雑な設備投資・建設プログラムに対応します。",
    keywords: [
      "Capex",
      "設備投資",
      "プロジェクトポートフォリオ",
      "EAC",
      "フォーキャスト",
      "製造業",
      "ライフサイエンス",
      "PMO",
      "SOV",
      "マスタープラン",
      "GMP",
    ],
    openGraphLocale: "ja_JP",
  },
  a11y: {
    skipToContent: "本文へスキップ",
    mainNav: "メインナビゲーション",
    footerNav: "フッターナビゲーション",
    home: "ホーム",
    openMenu: "メニューを開く",
  },
  site: {
    description:
      "設備投資プログラムにおけるプロジェクトコントロールと財務ガバナンスの統合プラットフォーム — 財務、変更、ポートフォリオを一つのコントロールレイヤーで管理します。",
  },
  nav: {
    problem: "課題",
    features: "機能",
    solution: "ソリューション",
    audience: "対象ユーザー",
    enterprise: "エンタープライズ",
    login: "ログイン",
    bookDemo: "デモを予約",
    startTrial: "トライアルを開始",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "設備投資プログラム向けプロジェクトコントロールと財務ガバナンス",
    subheadline: `${PRODUCT_NAME}は、コストブック、変更管理、スケジュール連携、ポートフォリオガバナンスを一つのプラットフォームに統合します。根拠のあるフォーキャスト、エンドツーエンドの承認フロー、信頼性の高い指標により、複雑な設備投資プログラムを確実にコントロールできます。`,
    primaryCta: "デモを申し込む",
    secondaryCta: "プラットフォームを見る",
  },
  problem: {
    title: "設備投資プロジェクトは複雑です。コントロールは、そうあるべきではありません。",
    description:
      "多くの企業では、データが存在しているにもかかわらず、エンドツーエンドの可視性が不足しています。",
    items: [
      {
        id: "budget-overruns",
        title: "予算超過",
        description:
          "差異の発見が遅れがちです — 是正措置が必要になった段階では、すでにコストが膨らんでいます。",
      },
      {
        id: "opaque-forecasts",
        title: "不透明なフォーキャスト",
        description:
          "バージョンや前提条件がバラバラのため、信頼できる計画判断が困難になります。",
      },
      {
        id: "excel-processes",
        title: "Excelによる手作業プロセス",
        description:
          "集計に時間がかかり、入力ミスが起きやすく、トレーサビリティも限定的です。",
      },
      {
        id: "portfolio-blind-spots",
        title: "ポートフォリオ視点の欠如",
        description:
          "個別プロジェクトは見えていても、投資予算・上限・キャッシュフローへの影響が把握できません。",
      },
      {
        id: "change-audit-trail",
        title: "根拠のない変更",
        description:
          "設計変更やスコープ変更を、当初計画やマスタープランに対して立証することが困難です。",
      },
    ],
  },
  solution: {
    eyebrow: "ソリューション",
    title: `${PRODUCT_NAME}は、データだけではなく、明確な意思決定の根拠を提供します。`,
    description:
      "散在するスプレッドシートや個別のプロジェクト報告書に代わり、CapConはコスト、コミットメント、変更影響、ポートフォリオ指標を一つの信頼できるシステムに統合します — プロジェクトコストブックから全社コンソリデーションまで。",
    steps: [
      {
        step: "01",
        title: "財務管理",
        text: "コストブック、コミットメント、フォーキャストを根拠とともに一元管理 — 並行するExcelブックは不要です。",
      },
      {
        step: "02",
        title: "変更管理",
        text: "変更指示と承認を透明化し、総コストフォーキャストおよびポートフォリオへの影響を可視化します。",
      },
      {
        step: "03",
        title: "ポートフォリオ",
        text: "プロジェクト横断のコンソリデーション、通貨・リスクシグナル、経営層向けレポーティング。",
      },
    ],
  },
  features: {
    eyebrow: "機能",
    title: "信頼できる設備投資コントロールのためのツールキット",
    description:
      "財務コントローラーやPMOリーダーが日々必要とするもの — 信頼できる数値、明確な差異分析、継続的なポートフォリオ視点。",
    items: [
      {
        id: "costbook",
        title: "中央コストブックと根拠のあるフォーキャスト",
        description:
          "予算、フォーキャスト、コミットメント、実績を明確な説明とともに管理 — 並行するスプレッドシートに頼らない、一つの財務基盤。",
      },
      {
        id: "change-orders",
        title: "変更管理",
        description:
          "変更指示、承認、フォーキャストへの影響を、申請からポートフォリオビューまで完全に記録します。",
      },
      {
        id: "portfolio-intelligence",
        title: "ポートフォリオインテリジェンス",
        description:
          "全プロジェクト横断の指標、リスク要因、為替影響をPMOおよびステアリング委員会向けに提供します。",
      },
      {
        id: "schedule-financials",
        title: "スケジュールとコスト",
        description:
          "スケジュールとコストブックの連携 — 計画対実績、コミットメント、財務指標を一画面で把握。",
      },
      {
        id: "registers",
        title: "リスク・課題・決定事項",
        description:
          "影響履歴と承認プロセスへのリンクを備えたレジスター管理。",
      },
      {
        id: "workflows",
        title: "ワークフローと監査",
        description:
          "設定可能な承認フロー、コンプライアンスコンテキスト、規制環境向けの完全な監査証跡。",
      },
    ],
  },
  productScreens: {
    eyebrow: "プロダクト",
    title: "コストブックから変更管理、ポートフォリオ概要まで",
    description:
      "CapConは、現場のプロジェクトコントロールとポートフォリオガバナンスを連携 — 月末のExcel集計は不要です。",
    panels: [
      {
        id: "costbook",
        title: "コストブックと総コスト",
        caption: "コスト構造、コミットメント、根拠のある完了時総コスト見込み（EAC）。",
      },
      {
        id: "co-cc",
        title: "変更影響",
        caption: "変更指示とフォーキャスト・ポートフォリオシグナルの連携。",
      },
      {
        id: "portfolio",
        title: "ポートフォリオガバナンス",
        caption: "プログラム指標、早期差異アラート、優先アクション。",
      },
    ],
  },
  socialProof: {
    eyebrow: "信頼",
    quote:
      "コストブック、変更管理、ポートフォリオが一つのシステムで連動する — 月末のExcel集計が不要になりました。",
    attribution: "財務コントローラー、多拠点製造プログラム",
    metrics: [
      { value: "1 platform", label: "財務・変更・ポートフォリオ" },
      { value: "Change → EAC", label: "エンドツーエンドのフォーキャスト連鎖" },
      { value: "Audit-ready", label: "記録と承認署名" },
    ],
  },
  audience: {
    eyebrow: "対象ユーザー",
    title: "複雑な設備投資ポートフォリオ向け — 業界横断、ERP連携に強み",
    description:
      "生産拡大、インフラ整備、多拠点プログラムのいずれにおいても、予算・スケジュール・実行状況の整合が不可欠です。CapConは、プロジェクトチーム、拠点デリバリー、財務ガバナンスの間にある統合コントロールレイヤーとして機能します — 特にERPに財務データを保持している環境において。",
    personas: [
      {
        title: "財務コントローラー",
        description:
          "信頼できるフォーキャスト、透明なコミットメント、根拠のある投資判断 — 製造、ライフサイエンス、その他の設備投資集約型産業向け。",
      },
      {
        title: "PMO / プログラム管理",
        description:
          "一貫したレポーティング、マスタープラン、ポートフォリオ全体の差異分析による、プログラムおよびポートフォリオガバナンス。",
      },
      {
        title: "プロジェクトコントローラー・品質保証",
        description:
          "規制産業では、請求明細から承認まで、トレーサビリティ、電子署名、一貫したデータ品質が求められます — GMP/GxP環境において特に重要です。",
      },
    ],
  },
  enterprise: {
    eyebrow: "エンタープライズ",
    title: "厳しいエンタープライズ環境向けに設計",
    description: `${PRODUCT_NAME}は、規制産業の要件に対応し、既存の財務・コンプライアンスプロセスと連携します。`,
    badgeDisclaimer:
      "成熟度および認証の範囲は導入内容により異なります — 詳細はデモにてご説明いたします。",
    signals: [
      {
        id: "security",
        title: "セキュリティとコンプライアンス",
        description:
          "エンタープライズセキュリティ基準に準拠。GxPおよび21 CFR Part 11への対応準備（プロジェクトスコープによる）で、規制環境に対応します。",
      },
      {
        id: "signatures",
        title: "承認署名と監査証跡",
        description:
          "電子承認、永続的な記録、フォーキャストおよびレジスターデータへの変更の完全なトレーサビリティ。",
      },
      {
        id: "sap",
        title: "SAP連携",
        description:
          "ERPおよび財務プロセスとの接続 — 連携方式と範囲は貴社ごとに定義します。",
      },
      {
        id: "gdpr",
        title: "GDPR準拠",
        description:
          "EU要件に沿ったデータ保護と、欧州データセンターでのホスティング。",
      },
    ],
    badges: ["GxP ready", "21 CFR Part 11 readiness", "SAP integration", "GDPR compliant"],
  },
  cta: {
    headline: "設備投資ポートフォリオの可視化は、まず対話から始まります。",
    description: `${PRODUCT_NAME}を、貴社のプロジェクト環境と財務コントロール要件に合わせた個別デモでご体験ください。`,
    primaryCta: "デモを予約",
    contactPrefix: "または、下記までお問い合わせください",
  },
  demo: {
    metaTitle: "デモを予約",
    title: "個別デモのお申し込み",
    description:
      "貴社のプロジェクト環境について簡単にお聞かせください — 適切なデモ日程をご連絡いたします。",
    nameLabel: "お名前",
    namePlaceholder: "氏名",
    companyLabel: "会社名",
    companyPlaceholder: "貴社名",
    emailLabel: "メールアドレス",
    emailPlaceholder: "name@company.co.jp",
    roleLabel: "役職",
    rolePlaceholder: "例：財務コントローラー、PMOリード",
    messageLabel: "メッセージ（任意）",
    messagePlaceholder: "プロジェクト種別、拠点数、GMP要件など …",
    submit: "送信する",
    privacyNote:
      "送信いただくことで、プライバシーポリシーに基づく個人データの取り扱いに同意いただいたものとみなします。",
    backHome: "ホームに戻る",
  },
  footer: {
    rights: "All rights reserved.",
    impressum: "法的情報",
    privacy: "プライバシーポリシー",
  },
  legalPages: {
    impressum: {
      title: "法的情報",
      sections: [
        {
          heading: "提供者",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "お問い合わせ",
          paragraphs: [
            "Email: {{email}}",
            "{{phoneLine}}",
          ],
        },
        {
          heading: "コンテンツ責任者",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "免責事項",
          paragraphs: [
            "当サイトのコンテンツは慎重に作成していますが、すべての情報の正確性、完全性、最新性を保証するものではありません。",
          ],
        },
      ],
    },
    privacy: {
      title: "プライバシーポリシー",
      sections: [
        {
          heading: "1. 管理者",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "Email: {{email}}",
          ],
        },
        {
          heading: "2. 処理する個人データ",
          paragraphs: [
            "当サイトへのアクセス時、技術的に必要なサーバーログ（IPアドレス、タイムスタンプ、ユーザーエージェント等）を処理します。",
            "デモフォームをご利用の場合、お問い合わせ対応のため、ご入力いただいた情報（氏名、会社名、メールアドレス、役職、メッセージ）を処理します。",
          ],
        },
        {
          heading: "3. 法的根拠",
          paragraphs: [
            "処理は、GDPR第6条(1)(b)（契約前の措置）および第6条(1)(f)（安全なウェブサイト運営に関する正当な利益）に基づきます。",
          ],
        },
        {
          heading: "4. 保存期間",
          paragraphs: [
            "デモのお問い合わせは、対応完了後、法定の保存義務がない限り削除します。",
          ],
        },
        {
          heading: "5. お客様の権利",
          paragraphs: [
            "アクセス、訂正、削除、処理制限、異議申立て、データポータビリティの権利を有します。監督機関への苦情申立ても可能です。",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "設備投資ポートフォリオ – 2026年Q2",
    stats: [
      { label: "設備投資合計", value: "¥15.3B" },
      { label: "EAC差異", value: "+¥360M" },
      { label: "プロジェクト", value: "12件 進行中" },
    ],
    columns: { project: "プロジェクト", budget: "予算", eac: "EAC" },
    rows: [
      { name: "A工場 – 増設", budget: "¥6.4B", eac: "¥6.6B" },
      { name: "クリーンルーム 第2期", budget: "¥2.7B", eac: "¥2.7B" },
      { name: "北部物流ハブ", budget: "¥4.7B", eac: "¥5.0B" },
      { name: "IT基盤 2026", budget: "¥1.4B", eac: "¥1.4B" },
    ],
  },
};

export default dictionary;
