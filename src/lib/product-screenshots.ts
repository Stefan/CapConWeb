import type { SiteVariant } from "@/lib/variant";

/** Crop focus for marketing frames (tight PNGs — optional display zoom/position). */
export type ScreenshotCrop = {
  objectPosition?: string;
  /** CSS scale for object-cover framing (default 1). */
  scale?: number;
};

export const heroScreenshotByVariant: Record<SiteVariant, string> = {
  "large-projects": "/screenshots/project-overview-evm.png",
  "standard-capex": "/screenshots/project-overview-evm.png",
  cdmo: "/screenshots/risks.png",
  apac: "/screenshots/project-overview-evm.png",
  japan: "/screenshots/project-overview-evm.png",
  korea: "/screenshots/project-overview-evm.png",
  poland: "/screenshots/project-overview-evm.png",
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
  "master-plan": "/screenshots/portfolio-command-center.png",
  steering: "/screenshots/portfolio-command-center.png",
  recon: "/screenshots/financials-reconciliation.png",
  "portfolio-mfg": "/screenshots/portfolio-command-center.png",
  "co-cc": "/screenshots/financials-change-impact.png",
  portfolio: "/screenshots/portfolio-command-center.png",
  risks: "/screenshots/risks.png",
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
  risks: { objectPosition: "left top", scale: 1 },
  audit: { objectPosition: "left top", scale: 1 },
};

export function getPanelScreenshot(panelId: string): string | undefined {
  return panelScreenshotById[panelId];
}

export function getPanelScreenshotCrop(panelId: string): ScreenshotCrop {
  return panelScreenshotCrop[panelId] ?? { objectPosition: "left top" };
}
