/** Marketing site brand — keep in sync with orka-ppm `lib/product-brand.ts`. */
export const PRODUCT_NAME = "CapCon";
export const PRODUCT_TAGLINE = "CapEx & Portfolio Intelligence";
export const PRODUCT_ENGINE_NAME = "CapCon Engine";
export const PRODUCT_NAVY = "#0f2744";

const trimSlash = (url: string) => url.replace(/\/$/, "");

export const marketingSiteUrl =
  trimSlash(process.env.NEXT_PUBLIC_SITE_URL ?? "https://capcon.io");

export const appUrl = trimSlash(
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.capcon.io",
);

export const appLoginUrl = `${appUrl}/login`;
export const appSignupUrl = `${appUrl}/signup`;
export const demoRequestUrl =
  process.env.NEXT_PUBLIC_DEMO_URL ?? `mailto:kontakt@capcon.io?subject=Demo%20anfragen`;

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@capcon.io";
