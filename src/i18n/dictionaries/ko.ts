import { PRODUCT_NAME } from "@/lib/brand";

import type { SiteDictionary } from "@/i18n/types";

const dictionary: SiteDictionary = {
  locale: "ko",
  meta: {
    title: `${PRODUCT_NAME} – 자본집약형 Capex 프로그램을 위한 프로젝트 컨트롤`,
    description:
      "코스트북, 변경 관리, 포트폴리오 거버넌스를 통합한 플랫폼입니다. 반도체, 제조, 인프라 등 복잡한 Capex 프로그램에 적합합니다.",
    keywords: [
      "Capex",
      "프로젝트 포트폴리오",
      "EAC",
      "Forecasting",
      "반도체",
      "제조",
      "인프라",
      "PMO",
      "SOV",
      "Master Plan",
    ],
    openGraphLocale: "ko_KR",
  },
  a11y: {
    skipToContent: "본문으로 건너뛰기",
    mainNav: "주요 내비게이션",
    footerNav: "푸터 내비게이션",
    home: "홈",
    openMenu: "메뉴 열기",
  },
  site: {
    description:
      "자본집약형 프로그램의 프로젝트 컨트롤 및 재무 거버넌스를 위한 통합 플랫폼 — 재무, 변경, 포트폴리오를 하나의 컨트롤 레이어에서 관리합니다.",
  },
  nav: {
    problem: "과제",
    features: "기능",
    solution: "솔루션",
    audience: "적용 대상",
    enterprise: "엔터프라이즈",
    login: "로그인",
    bookDemo: "데모 예약",
    startTrial: "체험 시작",
  },
  tagline: "CapEx & Portfolio Intelligence",
  hero: {
    eyebrow: "CapEx & Portfolio Intelligence",
    headline: "자본집약형 프로그램을 위한 프로젝트 컨트롤 및 재무 거버넌스",
    subheadline: `${PRODUCT_NAME}은(는) 코스트북, 변경 관리, 일정 정렬, 포트폴리오 거버넌스를 하나의 플랫폼에서 통합합니다 — 방어 가능한 예측, 전 구간 승인, 복잡한 Capex 프로그램을 위한 신뢰할 수 있는 지표를 제공합니다.`,
    primaryCta: "데모 요청",
    secondaryCta: "플랫폼 살펴보기",
  },
  problem: {
    title: "Capex 프로젝트는 복잡합니다. 통제는 그렇지 않아야 합니다.",
    description:
      "많은 조직에서 데이터는 이미 존재함에도 불구하고 전 구간 투명성이 부족합니다.",
    items: [
      {
        id: "budget-overruns",
        title: "예산 초과",
        description:
          "편차가 늦게 발견되는 경우가 많습니다 — 시정 조치가 이미 비용 부담이 큰 시점입니다.",
      },
      {
        id: "opaque-forecasts",
        title: "불투명한 예측",
        description:
          "버전과 가정이 제각각이어서 신뢰할 수 있는 계획 의사결정이 어렵습니다.",
      },
      {
        id: "excel-processes",
        title: "수동 Excel 프로세스",
        description:
          "시간이 많이 소요되는 통합, 높은 오류율, 제한적인 추적 가능성.",
      },
      {
        id: "portfolio-blind-spots",
        title: "포트폴리오 시야 부재",
        description:
          "개별 프로젝트는 보이지만 투자 예산, 상한, 현금 흐름에 미치는 영향은 보이지 않습니다.",
      },
      {
        id: "change-audit-trail",
        title: "근거 없는 변경",
        description:
          "변경 및 범위 조정을 원래 계획 및 마스터 플랜에 대해 입증하기 어렵습니다.",
      },
    ],
  },
  solution: {
    eyebrow: "솔루션",
    title: `${PRODUCT_NAME}은(는) 다른 솔루션이 데이터만 보여주는 곳에서 명확성을 제공합니다.`,
    description:
      "흩어진 스프레드시트와 개별 프로젝트 보고서 대신, CapCon은 비용, 약정, 변경 영향, 포트폴리오 지표를 하나의 신뢰할 수 있는 시스템으로 통합합니다 — 프로젝트 코스트북부터 기업 차원의 통합까지.",
    steps: [
      {
        step: "01",
        title: "재무",
        text: "코스트북, 약정, 근거가 명확한 예측 — 병행 Excel 워크북 없이.",
      },
      {
        step: "02",
        title: "변경 관리",
        text: "변경 지시 및 승인, 총비용 예측과 포트폴리오에 대한 투명한 영향.",
      },
      {
        step: "03",
        title: "포트폴리오",
        text: "프로젝트 간 통합, 통화 및 리스크 신호, 경영진 보고.",
      },
    ],
  },
  features: {
    eyebrow: "기능",
    title: "신뢰할 수 있는 Capex 통제를 위한 도구",
    description:
      "재무 컨트롤러와 PMO 리더가 매일 필요로 하는 것: 신뢰할 수 있는 수치, 명확한 편차, 지속적인 포트폴리오 시야.",
    items: [
      {
        id: "costbook",
        title: "중앙 코스트북 및 방어 가능한 예측",
        description:
          "예산, 예측, 약정, 실적과 명확한 설명 — 병행 스프레드시트 대신 하나의 재무 기반.",
      },
      {
        id: "change-orders",
        title: "변경 관리",
        description:
          "변경 지시, 승인, 예측 영향 — 요청부터 포트폴리오 시야까지 전 과정이 문서화됩니다.",
      },
      {
        id: "portfolio-intelligence",
        title: "포트폴리오 인텔리전스",
        description:
          "전체 프로젝트 지표, 리스크 요인, PMO 및 스티어링 위원회를 위한 통화 효과.",
      },
      {
        id: "schedule-financials",
        title: "일정 및 비용",
        description:
          "일정과 코스트북의 연동 — 계획 대비 실적, 약정, 재무 지표를 하나의 화면에서.",
      },
      {
        id: "registers",
        title: "리스크, 이슈 및 의사결정",
        description:
          "영향 이력과 연결된 승인 프로세스가 있는 레지스터.",
      },
      {
        id: "workflows",
        title: "워크플로 및 감사",
        description:
          "구성 가능한 승인, 컴플라이언스 맥락, 규제 환경을 위한 완전한 감사 추적.",
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
  socialProof: {
    eyebrow: "신뢰",
    quote:
      "코스트북, 변경, 포트폴리오가 하나로 작동하는 시스템 — 월말 Excel 통합 없이.",
    attribution: "재무 컨트롤러, 다공장 반도체·제조 프로그램",
    metrics: [
      { value: "1개 플랫폼", label: "재무, 변경 및 포트폴리오" },
      { value: "Change → EAC", label: "전 구간 예측 체인" },
      { value: "Audit-ready", label: "기록 및 승인 서명" },
    ],
  },
  audience: {
    eyebrow: "적용 대상",
    title: "복잡한 Capex 포트폴리오를 위해 — 업종 무관, 통합 중심",
    description:
      "반도체 Fab 증설, 스마트 팩토리 구축, SOC·인프라 투자, 다공장 프로그램 등 예산, 일정, 프로젝트 실행이 정렬되어야 하는 경우 CapCon이 통합 컨트롤 레이어 역할을 합니다 — ERP에 재무 데이터가 있는 환경에서 특히 효과적입니다.",
    personas: [
      {
        title: "재무 컨트롤러",
        description:
          "신뢰할 수 있는 예측, 투명한 약정, 방어 가능한 투자 의사결정 — 반도체, 제조, 인프라 등 자본집약형 산업.",
      },
      {
        title: "PMO / 프로그램 관리",
        description:
          "일관된 보고, 마스터 플랜, 전체 포트폴리오 편차를 갖춘 프로그램 및 포트폴리오 거버넌스.",
      },
      {
        title: "프로젝트 컨트롤러 및 품질",
        description:
          "규제 산업에서는 청구 라인부터 승인까지 추적 가능성, 전자 서명, 일관된 데이터 품질이 중요합니다.",
      },
    ],
  },
  enterprise: {
    eyebrow: "엔터프라이즈",
    title: "까다로운 엔터프라이즈 환경을 위해 설계되었습니다",
    description: `${PRODUCT_NAME}은(는) 규제 산업의 요건을 충족하며 기존 재무 및 컴플라이언스 프로세스와 통합됩니다.`,
    badgeDisclaimer:
      "성숙도 및 인증 범위는 구현에 따라 달라집니다 — 데모에서 상세히 안내해 드립니다.",
    signals: [
      {
        id: "security",
        title: "보안 및 컴플라이언스",
        description:
          "규제 환경을 위한 GxP 및 21 CFR Part 11 준비를 갖춘 엔터프라이즈 보안 표준(프로젝트 범위에 따라).",
      },
      {
        id: "signatures",
        title: "승인 서명 및 감사 추적",
        description:
          "전자 승인, 영구 기록, 예측 및 레지스터 데이터에 대한 추적 가능한 변경.",
      },
      {
        id: "sap",
        title: "SAP 통합",
        description:
          "ERP 및 재무 프로세스 연결 — 통합 경로 및 범위는 고객별로 정의합니다.",
      },
      {
        id: "gdpr",
        title: "GDPR 준수",
        description:
          "EU 요건에 부합하는 유럽 데이터 센터의 데이터 보호 및 호스팅.",
      },
    ],
    badges: ["GxP ready", "21 CFR Part 11 readiness", "SAP 통합", "GDPR 준수"],
  },
  cta: {
    headline: "Capex 포트폴리오의 명확성은 대화에서 시작됩니다.",
    description: `${PRODUCT_NAME}을(를) 맞춤형 데모로 경험해 보십시오 — 귀사의 프로젝트 환경과 재무 통제 요건에 맞춰 안내합니다.`,
    primaryCta: "데모 예약",
    contactPrefix: "또는 아래로 팀에 문의하십시오",
  },
  demo: {
    metaTitle: "데모 예약",
    title: "맞춤형 데모 요청",
    description:
      "프로젝트 환경을 간략히 알려 주시면 적합한 데모 일정을 안내해 드립니다.",
    nameLabel: "이름",
    namePlaceholder: "성명",
    companyLabel: "회사",
    companyPlaceholder: "조직명",
    emailLabel: "이메일",
    emailPlaceholder: "name@company.com",
    roleLabel: "직책",
    rolePlaceholder: "예: 재무 컨트롤러, PMO 리드",
    messageLabel: "메시지(선택)",
    messagePlaceholder: "프로젝트 유형, Fab·캠퍼스 규모, 특정 요건 …",
    submit: "요청 보내기",
    consentBefore: "본인은",
    consentAfter: "에 따른 개인정보 처리에 동의합니다.",
    consentRequired: "동의 항목에 체크해 주세요.",
    backHome: "홈으로 돌아가기",
  },
  footer: {
    rights: "All rights reserved.",
    impressum: "법적 고지",
    privacy: "개인정보 처리방침",
  },
  legalPages: {
    impressum: {
      title: "법적 고지",
      sections: [
        {
          heading: "제공자",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
          ],
        },
        {
          heading: "연락처",
          paragraphs: [
            "이메일: {{email}}",
            "{{phoneLine}}",
          ],
        },
        {
          heading: "콘텐츠 책임자",
          paragraphs: ["{{responsiblePerson}}"],
        },
        {
          heading: "면책 조항",
          paragraphs: [
            "본 웹사이트는 신중하게 작성하였으나, 모든 콘텐츠의 정확성, 완전성, 최신성을 보장할 수는 없습니다.",
          ],
        },
      ],
    },
    privacy: {
      title: "개인정보 처리방침",
      sections: [
        {
          heading: "1. 개인정보 처리자",
          paragraphs: [
            "{{companyName}}",
            "{{addressLine1}}",
            "{{addressLine2}}",
            "이메일: {{email}}",
          ],
        },
        {
          heading: "2. 처리하는 개인정보",
          paragraphs: [
            "본 사이트 방문 시 기술적으로 필요한 서버 로그(예: IP 주소, 타임스탬프, 사용자 에이전트)가 처리됩니다.",
            "데모 양식을 이용하시면 요청 처리를 위해 제공하신 정보(이름, 회사, 이메일, 직책, 메시지)를 처리합니다.",
          ],
        },
        {
          heading: "3. 법적 근거",
          paragraphs: [
            "처리는 GDPR 제6조(1)(b)(계약 전 조치) 및 GDPR 제6조(1)(f)(안전한 웹사이트 운영에 대한 정당한 이익)에 근거합니다.",
          ],
        },
        {
          heading: "4. 보관 기간",
          paragraphs: [
            "데모 요청은 문의 처리가 완료되고 법정 보관 의무가 없는 경우 삭제됩니다.",
          ],
        },
        {
          heading: "5. 귀하의 권리",
          paragraphs: [
            "열람, 정정, 삭제, 처리 제한, 이의 제기, 데이터 이동권을 행사하실 수 있습니다. 감독 기관에 불만을 제기하실 수 있습니다.",
          ],
        },
      ],
    },
  },
  dashboard: {
    title: "Capex 포트폴리오 – 2026년 2분기",
    stats: [
      { label: "총 Capex", value: "₩1,450억" },
      { label: "EAC 편차", value: "+₩34억" },
      { label: "프로젝트", value: "12개 진행 중" },
    ],
    columns: { project: "프로젝트", budget: "예산", eac: "EAC" },
    rows: [
      { name: "Fab A – 증설", budget: "₩610억", eac: "₩628억" },
      { name: "클린룸 2단계", budget: "₩259억", eac: "₩255억" },
      { name: "스마트 팩토리 물류 허브", budget: "₩448억", eac: "₩472억" },
      { name: "SOC 인프라 2026", budget: "₩134억", eac: "₩137억" },
    ],
  },
};

export default dictionary;
