import type { SiteVariant } from "@/lib/variant";

/** Crop focus for marketing frames (tight PNGs — optional display zoom/position). */
export type ScreenshotCrop = {
  objectPosition?: string;
  /** CSS scale for object-cover framing (default 1). */
  scale?: number;
};

export const heroScreenshotByVariant: Record<SiteVariant, string> = {
  "large-projects": "/screenshots/portfolio-master-plan.png",
  "standard-capex": "/screenshots/financials-costbook.png",
  cdmo: "/screenshots/portfolio-risk-steering.png",
  apac: "/screenshots/portfolio-risk-steering.png",
  japan: "/screenshots/financials-costbook.png",
  korea: "/screenshots/financials-costbook.png",
  poland: "/screenshots/financials-costbook.png",
};

/** Pre-cropped marketing PNGs (CapCon top bar + loaded content). */
export const heroScreenshotCrop: Record<SiteVariant, ScreenshotCrop> = {
  "large-projects": { objectPosition: "left top", scale: 1 },
  "standard-capex": { objectPosition: "left top", scale: 1 },
  cdmo: { objectPosition: "left top", scale: 1 },
  apac: { objectPosition: "left top", scale: 1 },
  japan: { objectPosition: "left top", scale: 1 },
  korea: { objectPosition: "left top", scale: 1 },
  poland: { objectPosition: "left top", scale: 1 },
};

/** Panel id → PNG under public/screenshots/ (shared across locale variants). */
export const panelScreenshotById: Record<string, string> = {
  costbook: "/screenshots/financials-costbook.png",
  sov: "/screenshots/financials-sov.png",
  "master-plan": "/screenshots/portfolio-master-plan.png",
  steering: "/screenshots/portfolio-master-plan.png",
  recon: "/screenshots/financials-reconciliation.png",
  "portfolio-mfg": "/screenshots/dashboards.png",
  "co-cc": "/screenshots/financials-change-impact.png",
  portfolio: "/screenshots/portfolio-risk-steering.png",
  audit: "/screenshots/workflows.png",
};

export const panelScreenshotCrop: Record<string, ScreenshotCrop> = {
  costbook: { objectPosition: "left top", scale: 1 },
  sov: { objectPosition: "left top", scale: 1 },
  "master-plan": { objectPosition: "left top", scale: 1 },
  steering: { objectPosition: "left top", scale: 1 },
  recon: { objectPosition: "left top", scale: 1 },
  "portfolio-mfg": { objectPosition: "left top", scale: 1 },
  "co-cc": { objectPosition: "left top", scale: 1 },
  portfolio: { objectPosition: "left top", scale: 1 },
  audit: { objectPosition: "left top", scale: 1 },
};

export function getPanelScreenshot(panelId: string): string | undefined {
  return panelScreenshotById[panelId];
}

export function getPanelScreenshotCrop(panelId: string): ScreenshotCrop {
  return panelScreenshotCrop[panelId] ?? { objectPosition: "left top" };
}
