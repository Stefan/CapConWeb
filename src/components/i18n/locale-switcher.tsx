"use client";

import { Menu } from "@base-ui/react/menu";
import { Check, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  es: "ES",
  fr: "FR",
  ja: "JA",
  ko: "KO",
  pl: "PL",
  zh: "ZH",
};

const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  ja: "日本語",
  ko: "한국어",
  pl: "Polski",
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
    <Menu.Root>
      <Menu.Trigger
        render={
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 gap-1.5 border-slate-200 bg-white/80 px-2.5 text-xs font-semibold text-slate-700 shadow-none hover:bg-white",
              className,
            )}
            aria-label="Language"
          />
        }
      >
        <Globe className="size-3.5 text-slate-500" aria-hidden />
        <span>{localeLabels[currentLocale]}</span>
        <ChevronDown className="size-3.5 text-slate-400" aria-hidden />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          side="bottom"
          align="end"
          sideOffset={8}
          positionMethod="fixed"
          className="z-50 origin-[var(--transform-origin)]"
        >
          <Menu.Popup
            className={cn(
              "min-w-44 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 shadow-lg outline-none",
              "transition duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
            )}
          >
            {locales.map((locale) => {
              const active = locale === currentLocale;
              return (
                <Menu.LinkItem
                  key={locale}
                  closeOnClick
                  render={
                    <Link
                      href={switchLocalePath(pathname, locale)}
                      lang={locale}
                      aria-current={active ? "true" : undefined}
                    />
                  }
                  className={cn(
                    "flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-sm outline-none data-highlighted:bg-slate-50",
                    active ? "font-medium text-indigo-600" : "text-slate-700",
                  )}
                >
                  <span className="min-w-0 flex-1">{localeNames[locale]}</span>
                  <span className="text-xs font-semibold text-slate-400">
                    {localeLabels[locale]}
                  </span>
                  {active ? (
                    <Check className="size-4 shrink-0 text-indigo-600" aria-hidden />
                  ) : (
                    <span className="size-4 shrink-0" aria-hidden />
                  )}
                </Menu.LinkItem>
              );
            })}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
