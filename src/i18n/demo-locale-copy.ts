import type { Locale } from "@/i18n/config";

const demoMailSubjectByLocale: Record<Locale, (company: string) => string> = {
  de: (company) => `Demo-Anfrage – ${company}`,
  en: (company) => `Demo request – ${company}`,
  es: (company) => `Solicitud de demo – ${company}`,
  fr: (company) => `Demande de démo – ${company}`,
  ja: (company) => `デモのお申し込み – ${company}`,
  ko: (company) => `데모 신청 – ${company}`,
  pl: (company) => `Zapytanie o demo – ${company}`,
  zh: (company) => `演示申请 – ${company}`,
};

const demoThankYouPrefixByLocale: Record<Locale, string> = {
  de: "Vielen Dank – Ihre Anfrage wurde vorbereitet. Falls sich kein E-Mail-Programm geöffnet hat, schreiben Sie uns direkt an ",
  en: "Thank you – your request was prepared. If your mail app did not open, email us at ",
  es: "Gracias – su solicitud fue preparada. Si no se abrió su cliente de correo, escríbanos a ",
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

const demoDeliveryFailedPrefixByLocale: Record<Locale, string> = {
  de: "Die Anfrage konnte nicht automatisch zugestellt werden. Bitte senden Sie uns Ihre Anfrage per E-Mail: ",
  en: "We could not deliver your request automatically. Please email us instead: ",
  es: "No pudimos entregar su solicitud automáticamente. Escríbanos por correo a: ",
  fr: "Nous n'avons pas pu transmettre votre demande automatiquement. Écrivez-nous à ",
  ja: "リクエストを自動送信できませんでした。以下までメールでお問い合わせください：",
  ko: "요청을 자동으로 전달하지 못했습니다. 아래로 이메일을 보내 주세요: ",
  pl: "Nie udało się automatycznie dostarczyć zapytania. Prosimy o kontakt e-mail: ",
  zh: "无法自动提交您的请求。请发送邮件至：",
};

export function demoDeliveryFailedPrefix(locale: Locale): string {
  return demoDeliveryFailedPrefixByLocale[locale];
}
