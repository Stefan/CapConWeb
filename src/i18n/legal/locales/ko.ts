import type { ExtendedLegalPages } from "@/i18n/legal/types";
import type { LegalSection } from "@/i18n/types";

const impressum: LegalSection[] = [
  {
    heading: "사업자 정보",
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
    heading: "대표자",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "연락처",
    paragraphs: ["이메일: {{email}}", "{{phoneLine}}"],
  },
  {
    heading: "콘텐츠 책임자",
    paragraphs: ["{{responsiblePerson}}"],
  },
  {
    heading: "면책",
    paragraphs: [
      "본 웹사이트는 신중하게 작성되었으나 정확성·완전성·최신성을 보장하지 않습니다.",
      "제품 스크린샷은 데모 워크플로를 보여주며 실제 배포와 다를 수 있습니다.",
    ],
  },
];

const privacy: LegalSection[] = [
  {
    heading: "1. 개인정보 처리자",
    paragraphs: [
      "{{companyName}}",
      "{{addressLine1}}",
      "{{addressLine2}}",
      "이메일: {{email}}",
      "개인정보 문의: {{dpoEmail}}",
    ],
  },
  {
    heading: "2. 호스팅 및 서버 로그",
    paragraphs: [
      "본 사이트는 {{hostingProvider}}({{hostingRegion}})에서 호스팅됩니다. 방문 시 IP, 시간, URL, 사용자 에이전트 등 기술 로그를 처리합니다.",
      "목적: 안전하고 안정적인 운영. 보관 기간은 원칙 30일(보안 사고 시 예외).",
    ],
  },
  {
    heading: "3. 언어 및 지역 에디션(Geo-IP)",
    paragraphs: [
      "Vercel/Cloudflare 등 헤더에서 대략적인 국가를 추정해 언어와 마케팅 에디션을 제안합니다. 개인 프로필 생성에는 사용하지 않습니다.",
      "동의 시 지역 에디션 쿠키를 최대 90일 저장할 수 있습니다(쿠키 정책 참조).",
    ],
  },
  {
    heading: "4. 쿠키",
    paragraphs: ["동의 쿠키 및(동의 시) 지역 에디션 쿠키를 사용합니다. 자세히: /ko/cookies."],
  },
  {
    heading: "5. 데모 문의 양식",
    paragraphs: [
      "이름, 회사, 이메일, 직책, 메시지, 언어를 문의 응대 목적으로 처리합니다.",
      "HTTPS로 서버에 전송하거나 mailto로 메일 클라이언트를 엽니다. 제3자에게 판매하지 않습니다.",
      "보관: 문의 완료까지, 일반적으로 상업적 통신으로 최대 24개월.",
    ],
  },
  {
    heading: "6. CapCon 애플리케이션 링크",
    paragraphs: ["app.capconhq.com 링크는 제품 개인정보 처리방침이 적용됩니다."],
  },
  {
    heading: "7. 국외 이전",
    paragraphs: ["EU/EEA 외 처리 시 표준계약조항 등 적절한 보호조치를 사용합니다."],
  },
  {
    heading: "8. 이용자 권리",
    paragraphs: ["열람·정정·삭제 요청: {{dpoEmail}}"],
  },
  {
    heading: "9. 개인정보 보호법(PIPA) 안내",
    paragraphs: [
      "각 조항에 처리 목적을 명시합니다. 국외 이전 관련 문의는 {{dpoEmail}}로 연락해 주세요.",
      "개인정보보호위원회에 분쟁조정·신고를 할 수 있습니다.",
    ],
  },
];

const cookies: LegalSection[] = [
  {
    heading: "1. 쿠키란?",
    paragraphs: ["기기에 저장되는 작은 텍스트 파일입니다. 본 마케팅 사이트에 필요한 쿠키만 사용합니다."],
  },
  {
    heading: "2. 사용 쿠키",
    paragraphs: [
      "capcon-cookie-consent — 동의 선택(essential / all). 보관: 12개월.",
      "capcon-site-variant — 지역 마케팅 에디션. «모두 동의» 시 90일, 그 외 세션만.",
    ],
  },
  {
    heading: "3. 관리",
    paragraphs: ["푸터 «쿠키 설정»에서 변경하거나 브라우저에서 삭제할 수 있습니다."],
  },
];

const terms: LegalSection[] = [
  {
    heading: "1. 적용 범위",
    paragraphs: ["본 약관은 capconhq.com 마케팅 사이트에 적용됩니다. 제품·체험판은 별도 약관입니다."],
  },
  {
    heading: "2. 콘텐츠",
    paragraphs: ["마케팅 정보는 보증 없이 제공됩니다. 스크린샷은 데모 데이터일 수 있습니다."],
  },
  {
    heading: "3. 계약 미성립",
    paragraphs: ["사이트 방문 또는 데모 신청만으로 구속력 있는 계약이 성립하지 않습니다."],
  },
  {
    heading: "4. 지적재산",
    paragraphs: ["CapCon 브랜드·콘텐츠는 보호됩니다. 무단 복제 금지."],
  },
  {
    heading: "5. 책임",
    paragraphs: ["적용법이 허용하는 범위에서 책임을 제한합니다."],
  },
  {
    heading: "6. 준거법",
    paragraphs: ["강행규정이 없는 한 독일법 및 제공자 본점 관할이 적용됩니다."],
  },
];

const accessibility: LegalSection[] = [
  {
    heading: "1. 목표",
    paragraphs: ["capconhq.com에 대해 WCAG 2.1 AA 수준을 합리적 범위에서 추구합니다."],
  },
  {
    heading: "2. 조치",
    paragraphs: ["건너뛰기 링크, 제목 구조, 키보드 탐색, 주요 UI 대비."],
  },
  {
    heading: "3. 알려진 제한",
    paragraphs: ["제품 스크린샷은 이미지로 완전한 접근성 메타데이터가 없습니다."],
  },
  {
    heading: "4. 피드백",
    paragraphs: ["{{email}}으로 연락해 주세요."],
  },
];

export const koPages: ExtendedLegalPages = {
  impressum: { title: "법적 고지", sections: impressum },
  privacy: { title: "개인정보 처리방침", sections: privacy },
  cookies: { title: "쿠키 정책", sections: cookies },
  terms: { title: "이용약관", sections: terms },
  accessibility: { title: "접근성", sections: accessibility },
};
