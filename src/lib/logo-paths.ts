/** CapCon logo assets — synced from orka-ppm `public/logos/` (legacy Celestra filenames on disk). */
export const LOGO_PATHS = {
  icon: "/brand/capcon-icon.png",
  iconOnDark: "/brand/capcon-icon-on-dark.png",
  wordmark: "/brand/capcon-wordmark.png",
} as const;

export const LOGO_ICON_SIZE = 784;

export function logoIconDimensions(src: string): { width: number; height: number } {
  if (src === LOGO_PATHS.wordmark) {
    return { width: 784, height: 1168 };
  }
  return { width: LOGO_ICON_SIZE, height: LOGO_ICON_SIZE };
}
