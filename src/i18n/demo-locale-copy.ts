import type { Locale } from "@/i18n/config";

const demoMailSubjectByLocale: Record<Locale, (company: string) => string> = {
  de: (company) => `Demo-Anfrage – ${company}`,
  en: (company) => `Demo request – ${company}`,
  fr: (company) => `Demande de démo – ${company}`,
  ja: (company) => `デモのお申し込み – ${company}`,
  ko: (company) => `데모 신청 – ${company}`,
  pl: (company) => `Zapytanie o demo – ${company}`,
  zh: (company) => `演示申请 – ${company}`,
};

const demoThankYouPrefixByLocale: Record<Locale, string> = {
  de: "Vielen Dank – Ihre Anfrage wurde vorbereitet. Falls sich kein E-Mail-Programm geöffnet hat, schreiben Sie uns direkt an ",
  en: "Thank you – your request was prepared. If your mail app did not open, email us at ",
  fr: "Merci – votre demande a été préparée. Si votre client mail ne s'est pas ouvert, écrivez-nous à ",
  ja: "お申し込みありがとうございます。メールアプリが開かない場合は、下記まで直接ご連絡ください：",
  ko: "신청해 주셔서 감사합니다. 메일 앱이 열리지 않으면 아래로 직접 문의해 주세요: ",
  pl: "Dziękujemy – Państwa zapytanie zostało przygotowane. Jeśli program pocztowy się nie otworzył, prosimy o kontakt: ",
  zh: "感谢您的申请。若邮件客户端未打开，请直接联系我们：",
};

export function demoMailSubject(locale: Locale, company: string): string {
  return demoMailSubjectByLocale[locale](company);
}

export function demoThankYouPrefix(locale: Locale): string {
  return demoThankYouPrefixByLocale[locale];
}
