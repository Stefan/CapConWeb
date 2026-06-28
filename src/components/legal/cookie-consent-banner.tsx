"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useSite } from "@/components/providers/site-provider";
import { cookieBannerCopy } from "@/i18n/legal/pages";
import { CONSENT_COOKIE, type ConsentLevel } from "@/lib/consent";
import { cn } from "@/lib/utils";

function readConsent(): ConsentLevel | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;
  const value = match.split("=")[1];
  return value === "all" || value === "essential" ? value : null;
}

function writeConsent(level: ConsentLevel): void {
  const maxAge = 60 * 60 * 24 * 365;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${level}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent("capcon-consent-change", { detail: level }));
}

export function CookieConsentBanner() {
  const { locale, dict } = useSite();
  const copy = cookieBannerCopy[locale];
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  const accept = (level: ConsentLevel) => {
    writeConsent(level);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className={cn(
        "fixed inset-x-0 bottom-0 z-[200] border-t border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur sm:p-6",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 id="cookie-consent-title" className="text-sm font-semibold text-navy-950">
            {copy.title}
          </h2>
          <p id="cookie-consent-desc" className="mt-2 text-sm leading-relaxed text-slate-600">
            {copy.description}{" "}
            <Link
              href={`/${locale}/cookies`}
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
            >
              {copy.settingsLink}
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => accept("essential")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {copy.essentialOnly}
          </button>
          <button
            type="button"
            onClick={() => accept("all")}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            {copy.acceptAll}
          </button>
          <button
            type="button"
            onClick={() => setSettingsOpen((v) => !v)}
            className="rounded-lg px-3 py-2 text-sm text-slate-500 underline underline-offset-2 hover:text-slate-700"
          >
            {dict.footer.cookieSettings}
          </button>
        </div>
      </div>
      {settingsOpen ? (
        <p className="mx-auto mt-3 max-w-6xl text-xs text-slate-500">
          {locale === "de"
            ? "„Nur notwendige“: Consent-Cookie + Sitzungs-Edition. „Alle akzeptieren“: zusätzlich 90-Tage-Edition-Cookie."
            : "Essential only: consent + session edition cookie. Accept all: also 90-day regional edition cookie."}
        </p>
      ) : null}
    </div>
  );
}

/** Re-open banner from footer (clears consent cookie). */
export function reopenCookieSettings(): void {
  document.cookie = `${CONSENT_COOKIE}=; Path=/; Max-Age=0`;
  window.dispatchEvent(new CustomEvent("capcon-consent-change", { detail: null }));
  window.location.reload();
}
