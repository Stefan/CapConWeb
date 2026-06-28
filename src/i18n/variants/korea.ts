import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

/** South Korea — industrial, semiconductor, infrastructure capex. */
export const koreaVariant: Partial<Record<"ko" | "en", Partial<SiteDictionary>>> = {
  ko: {
    meta: {
      title: `${PRODUCT_NAME} – 국내 CapEx 프로젝트 통합 관리`,
      description:
        "반도체·제조·인프라 CapEx 프로그램을 위한 통합 프로젝트 컨트롤: 코스트북, 변경 관리, 포트폴리오 거버넌스.",
      keywords: [
        "CapEx",
        "반도체",
        "제조",
        "인프라",
        "코스트북",
        "변경관리",
        "포트폴리오",
      ],
      openGraphLocale: "ko_KR",
    },
    hero: {
      eyebrow: "CapEx · 대한민국",
      headline: "다수 사업장 CapEx를 신뢰할 수 있는 수치로 통제하세요.",
      subheadline: `${PRODUCT_NAME}는 코스트북, 변경 승인, 포트폴리오 지표를 하나의 플랫폼에 통합합니다. 반도체·제조·인프라 대형 투자 프로그램을 월말 Excel 집계 없이 운영할 수 있습니다.`,
      primaryCta: "데모 신청",
    },
    solution: {
      eyebrow: "국내 프로그램용",
      title: "현장 실행부터 경영 포트폴리오까지 하나의 통제층.",
      description:
        "CapEx, 변경관리, 승인 프로세스가 분산되면 투자 의사결정이 지연됩니다. CapCon은 ERP와 현장 사이의 통합 컨트롤 레이어입니다.",
      steps: [
        {
          step: "01",
          title: "재무·코스트북",
          text: "예산, 약정, 예측을 근거와 함께 중앙 관리.",
        },
        {
          step: "02",
          title: "변경 관리",
          text: "변경 지시와 승인 이력을 총비용 예측·포트폴리오에 반영.",
        },
        {
          step: "03",
          title: "포트폴리오",
          text: "다수 사업장 통합 지표, 리스크 신호, 경영 보고.",
        },
      ],
    },
    audience: {
      eyebrow: "대한민국",
      title: "자본집약형 CapEx 프로그램 팀을 위해",
      description:
        "반도체·제조·인프라 분야에서 다년간 CapEx 프로그램을 운영하는 재무, PMO, 프로젝트 컨트롤 팀을 위한 솔루션입니다.",
      personas: [
        {
          title: "재무·관리회계",
          description: "방어 가능한 예측, 투자 한도 가시성, 경영진 보고.",
        },
        {
          title: "PMO / 프로그램 관리",
          description: "사업장 간 일관된 보고와 스테이지 게이트 통제.",
        },
        {
          title: "프로젝트 컨트롤",
          description: "승인된 변경까지의 추적성과 감사 대응 기록.",
        },
      ],
    },
    cta: {
      headline: "국내 CapEx 통제 레이어를 데모로 확인해 보세요.",
      description: "귀사의 산업·사업장 구성에 맞춘 데모를 제안드립니다.",
      primaryCta: "데모 신청",
      contactPrefix: "또는 아래로 문의해 주세요:",
    },
  },
};
