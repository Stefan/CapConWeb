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
      eyebrow: "CapEx & Portfolio Intelligence · 대한민국",
      headline: "다수 사업장 CapEx를 신뢰할 수 있는 수치로 통제하세요.",
      subheadline:
        "예산·예측·변경·포트폴리오를 위한 하나의 코스트북 — 특히 ERP가 재무 데이터를 보유한 다수 사업장 프로그램에서.",
      boundaryNote:
        "작업형 PPM이 아닙니다 — CapCon은 코스트북과 변경을 갖춘 오너 재무 통제입니다.",
      primaryCta: "데모 신청",
    },
    problem: {
      title: "복잡한 프로그램. 분산된 통제.",
      description:
        "국내 CapEx 투자는 사업장, 협력사, 규제 요건을 아우르지만, 많은 팀이 여전히 Excel로 조정합니다.",
      items: [
        {
          id: "budget-overruns",
          title: "늦게 드러나는 비용 편차",
          description:
            "비용 압력은 스티어링 위원회 이후에야 확인되어 회복 옵션이 제한됩니다.",
        },
        {
          id: "excel-processes",
          title: "스프레드시트 통합",
          description:
            "PMO 팀은 매월 협력사 데이터, 변경 로그, 포트폴리오 뷰 병합에 며칠을 소비합니다.",
        },
        {
          id: "sap-shadow-ledger",
          title: "ERP ≠ 프로젝트 코스트북",
          description:
            "ERP 가져오기 ≠ 프로젝트 코스트북 — 컨트롤러가 그림자 Excel로 진실을 다시 만듭니다.",
        },
      ],
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
    features: {
      eyebrow: "국내 프로그램 기능",
      title: "CapEx 팀이 매월 필요로 하는 통제",
      description:
        "반도체·제조·인프라 대형 투자에 필요한 신뢰할 수 있는 수치와 감사 가능한 승인 흐름.",
      items: [
        {
          id: "costbook",
          title: "코스트북과 예측",
          description: "예산·실적·약정을 중앙 관리하고 방어 가능한 EAC를 유지합니다.",
        },
        {
          id: "change-orders",
          title: "변경 관리",
          description: "변경 지시부터 승인, 예측 영향까지 전 과정을 기록합니다.",
        },
        {
          id: "workflows",
          title: "워크플로 및 감사",
          description: "규제 환경을 고려한 승인 흐름과 전자 기록.",
        },
        {
          id: "portfolio-intelligence",
          title: "포트폴리오 통제",
          description: "다수 사업장 투자의 통합 뷰와 조기 편차 경고.",
        },
        {
          id: "sap-reconciliation",
          title: "SAP / ERP 조정",
          description: "ERP와 코스트북 비교 — 스티어링에서 병행 워크북을 줄입니다.",
        },
      ],
    },
    productScreens: {
      eyebrow: "제품",
      title: "코스트북에서 변경 관리, 포트폴리오 개요까지",
      description:
        "CapCon은 운영 프로젝트 컨트롤과 포트폴리오 거버넌스를 연결합니다 — 월말 Excel 통합 없이.",
      panels: [
        {
          id: "costbook",
          title: "코스트북 및 총비용",
          caption: "비용 구조, 약정, 방어 가능한 완료 시점 추정(EAC).",
        },
        {
          id: "co-cc",
          title: "변경 영향",
          caption: "예측 및 포트폴리오 신호와 연결된 변경 지시.",
        },
        {
          id: "portfolio",
          title: "포트폴리오 거버넌스",
          caption: "프로그램 지표, 조기 편차 경고, 우선순위 조치.",
        },
        {
          id: "risks",
          title: "리스크 관리",
          caption: "점수, 카테고리 분석, 포트폴리오 연계 주요 리스크.",
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
