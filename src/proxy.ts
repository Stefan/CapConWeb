import { NextRequest, NextResponse } from "next/server";

import { isLocale, locales } from "@/i18n/config";
import { detectLocale } from "@/i18n/detect-locale";
import {
  CONSENT_COOKIE,
  allowsPersistentVariantCookie,
  parseConsentLevel,
} from "@/lib/consent";
import { buildContentSecurityPolicy, createCspNonce } from "@/lib/csp";
import { isGoogleAnalyticsEnabled } from "@/lib/analytics";
import { VARIANT_COOKIE, detectVariant } from "@/lib/variant";

const VARIANT_SESSION_MAX_AGE = 60 * 60 * 24; // 24h without full consent
const VARIANT_PERSISTENT_MAX_AGE = 60 * 60 * 24 * 90;
const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;

function getCountryCode(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    null
  );
}

function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

function applyVariantCookie(request: NextRequest, response: NextResponse): NextResponse {
  const variant = detectVariant({
    countryCode: getCountryCode(request),
    queryOverride: request.nextUrl.searchParams.get("variant"),
  });
  const consent = parseConsentLevel(request.cookies.get(CONSENT_COOKIE)?.value);
  const maxAge = allowsPersistentVariantCookie(consent)
    ? VARIANT_PERSISTENT_MAX_AGE
    : VARIANT_SESSION_MAX_AGE;

  response.cookies.set(VARIANT_COOKIE, variant, {
    path: "/",
    maxAge,
    sameSite: "lax",
    secure: isProduction(),
    httpOnly: false,
  });
  return response;
}

function nextWithCsp(request: NextRequest): NextResponse {
  const nonce = createCspNonce();
  const csp = buildContentSecurityPolicy(nonce, {
    enableAnalytics: isGoogleAnalyticsEnabled(),
  });
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", csp);
  return applyVariantCookie(request, response);
}

function redirectWithVariant(request: NextRequest, url: URL): NextResponse {
  return applyVariantCookie(request, NextResponse.redirect(url));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameLocale) {
    return nextWithCsp(request);
  }

  const locale = detectLocale({
    countryCode: getCountryCode(request),
    acceptLanguage: request.headers.get("accept-language"),
  });

  if (!isLocale(locale)) {
    return nextWithCsp(request);
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return redirectWithVariant(request, redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

export function setConsentCookie(response: NextResponse, level: "essential" | "all"): void {
  response.cookies.set(CONSENT_COOKIE, level, {
    path: "/",
    maxAge: CONSENT_MAX_AGE,
    sameSite: "lax",
    secure: isProduction(),
  });
}
