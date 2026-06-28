/** Exact @2× Retina pixel sizes for landing-page screenshot frames. */
export const MARKETING_FRAME = {
  hero: { width: 1152, height: 800, cssWidth: 576, cssHeight: 400 },
  panel: { width: 1120, height: 600, cssWidth: 560, cssHeight: 300 },
} as const;

export type MarketingFrameVariant = keyof typeof MARKETING_FRAME;
