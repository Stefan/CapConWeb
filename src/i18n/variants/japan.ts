import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/** Japan — manufacturing, pharma, precision industry capex. */
export const japanVariant: Partial<Record<"ja" | "en", Partial<SiteDictionary>>> = {
  ja: {
    meta: {
      title: `${PRODUCT_NAME} – 国内キャピタルプロジェクト管理`,
      description:
        "製造・ライフサイエンス向けの統合型プロジェクト管理：コストブック、変更管理、ポートフォリオガバナンス。GMP・品質体制に沿った監査可能な運用を支援します。",
      keywords: [
        "CapEx",
        "製造",
        "ライフサイエンス",
        "GMP",
        "コストブック",
        "変更管理",
        "ポートフォリオ",
      ],
      openGraphLocale: "ja_JP",
    },
    hero: {
      eyebrow: "CapEx · 日本",
      headline: "複数拠点の設備投資を、説明可能な数字で統制する。",
      subheadline: `${PRODUCT_NAME}は、コストブック、変更承認、ポートフォリオ指標を一つのプラットフォームに統合。製造・ライフサイエンスの大規模設備投資に、月末の Excel 集計なしで対応します。`,
      primaryCta: "デモを申し込む",
    },
    solution: {
      eyebrow: "国内プログラム向け",
      title: "現場から経営ポートフォリオまで、一気通貫の統制。",
      description:
        "設備投資、バリデーション、変更管理が分断されると、説明責任と投資判断が遅れます。CapCon は ERP と現場の間にある統制レイヤーとして機能します。",
      steps: [
        {
          step: "01",
          title: "財務・コストブック",
          text: "予算、コミットメント、予測を根拠付きで一元管理。",
        },
        {
          step: "02",
          title: "変更管理",
          text: "変更指示と承認履歴を、総コスト予測・ポートフォリオへ反映。",
        },
        {
          step: "03",
          title: "ポートフォリオ",
          text: "複数拠点の統合指標、リスクシグナル、経営向けレポート。",
        },
      ],
    },
    features: {
      eyebrow: "国内向け機能",
      title: "設備投資チームが毎月必要とする統制",
      description:
        "製造・ライフサイエンスの設備投資に必要な、信頼できる数値と監査可能な承認フロー。",
      items: [
        {
          id: "costbook",
          title: "コストブックと予測",
          description: "予算・実績・コミットメントを一元的に管理し、説明可能な EAC を維持。",
        },
        {
          id: "change-orders",
          title: "変更管理",
          description: "変更指示から承認、予測への影響まで完全に記録。",
        },
        {
          id: "workflows",
          title: "ワークフローと監査",
          description: "GMP 環境を意識した承認フローと電子記録。",
        },
        {
          id: "portfolio-intelligence",
          title: "ポートフォリオ統制",
          description: "複数拠点投資の統合ビューと早期の乖離警告。",
        },
      ],
    },
    audience: {
      eyebrow: "日本",
      title: "製造・ライフサイエンスの設備投資チーム向け",
      description:
        "国内複数拠点の設備投資、GMP 変更管理、ポートフォリオ統制を担う財務・PMO・品質の方々向け。",
      personas: [
        {
          title: "財務・管理会計",
          description: "説明可能な予測、投資上限の可視化、経営向けレポート。",
        },
        {
          title: "PMO / プログラム管理",
          description: "拠点横断の統一レポートとステージゲート統制。",
        },
        {
          title: "品質・バリデーション",
          description: "変更のトレーサビリティと承認記録の監査対応。",
        },
      ],
    },
    cta: {
      headline: "国内プログラムの統制レイヤーを、デモでご確認ください。",
      description: "貴社の拠点構成・業種に合わせたデモをご提案いたします。",
      primaryCta: "デモを申し込む",
      contactPrefix: "または下記までお問い合わせください：",
    },
  },
};
