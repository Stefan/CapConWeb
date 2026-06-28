"use client";

import { reopenCookieSettings } from "@/components/legal/cookie-consent-banner";

type CookieSettingsLinkProps = {
  label: string;
};

export function CookieSettingsLink({ label }: CookieSettingsLinkProps) {
  return (
    <button
      type="button"
      onClick={() => reopenCookieSettings()}
      className="transition-colors hover:text-slate-300"
    >
      {label}
    </button>
  );
}
