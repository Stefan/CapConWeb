"use client";

import Link from "next/link";

import { CookieSettingsLink } from "@/components/legal/cookie-settings-link";
import { useSite } from "@/components/providers/site-provider";
import { Logo } from "@/components/layout/logo";
import { PRODUCT_NAME } from "@/lib/brand";

export function Footer() {
  const { locale, dict, navLinks, contactEmail } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo variant="dark" size={48} showTagline className="text-left" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {dict.site.description}
            </p>
          </div>
          <nav aria-label={dict.a11y.footerNav}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {PRODUCT_NAME}. {dict.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href={`/${locale}/impressum`}
              className="transition-colors hover:text-slate-300"
            >
              {dict.footer.impressum}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="transition-colors hover:text-slate-300"
            >
              {dict.footer.privacy}
            </Link>
            <Link
              href={`/${locale}/cookies`}
              className="transition-colors hover:text-slate-300"
            >
              {dict.footer.cookies}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="transition-colors hover:text-slate-300"
            >
              {dict.footer.terms}
            </Link>
            <Link
              href={`/${locale}/accessibility`}
              className="transition-colors hover:text-slate-300"
            >
              {dict.footer.accessibility}
            </Link>
            <CookieSettingsLink label={dict.footer.cookieSettings ?? "Cookie settings"} />
            <Link
              href={`mailto:${contactEmail}`}
              className="transition-colors hover:text-slate-300"
            >
              {contactEmail}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
