#!/usr/bin/env node
/**
 * Copy raw Mac/desktop screenshots into public/screenshots/sources/ for frame export.
 * Edit IMPORT_MAP when new files land in public/screenshots/.
 *
 * Usage: node scripts/import-user-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, "..", "public", "screenshots");
const sourcesDir = path.join(screenshotsDir, "sources");

/** Mac screenshot filename → canonical marketing source name */
const IMPORT_MAP = [
  {
    from: "Screenshot 2026-06-28 at 22.33.26.png",
    to: "portfolio-command-center.png",
  },
  {
    from: "Screenshot 2026-06-28 at 22.34.21.png",
    to: "financials-costbook.png",
  },
  {
    from: "Screenshot 2026-06-28 at 22.35.02.png",
    to: "financials-change-impact.png",
  },
  {
    from: "Screenshot 2026-06-28 at 22.37.52.png",
    to: "risks.png",
  },
];

fs.mkdirSync(sourcesDir, { recursive: true });

let copied = 0;
for (const { from, to } of IMPORT_MAP) {
  const src = path.join(screenshotsDir, from);
  const dest = path.join(sourcesDir, to);
  if (!fs.existsSync(src)) {
    console.warn(`skip (missing): ${from}`);
    continue;
  }
  fs.copyFileSync(src, dest);
  copied += 1;
  console.log(`${from} → sources/${to}`);
}

console.log(`Imported ${copied} source screenshot(s) → ${sourcesDir}`);
