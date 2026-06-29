/** Marketing site brand — keep in sync with orka-ppm `lib/product-brand.ts`. */
export const PRODUCT_NAME = "CapCon";
export const PRODUCT_TAGLINE = "CapEx & Portfolio Intelligence";
export const PRODUCT_ENGINE_NAME = "CapCon Engine";
export const PRODUCT_NAVY = "#0f2744";

const trimSlash = (url: string) => url.replace(/\/$/, "");

export const marketingSiteUrl =
  trimSlash(process.env.NEXT_PUBLIC_SITE_URL ?? "https://capconhq.com");

export const appUrl = trimSlash(
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.capconhq.com",
);

export const appLoginUrl = `${appUrl}/login`;
export const appSignupUrl = `${appUrl}/signup`;
export const demoRequestUrl =
  process.env.NEXT_PUBLIC_DEMO_URL ??
  `mailto:contact@capconhq.com?subject=Demo%20anfragen`;

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@capconhq.com";
