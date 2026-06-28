"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isLocale, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
  ja: "JA",
  ko: "KO",
  pl: "PL",
  zh: "中文",
};

function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0]!)) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }
  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}

type LocaleSwitcherProps = {
  className?: string;
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale: Locale =
    segments.length > 0 && isLocale(segments[0]!) ? segments[0]! : "de";

  return (
    <div
      className={cn(
        "inline-flex overflow-hidden rounded-lg border border-slate-200 bg-white text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            className={cn(
              "px-2.5 py-1.5 transition-colors",
              active
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-50 hover:text-navy-950",
            )}
            aria-current={active ? "true" : undefined}
            lang={locale}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
