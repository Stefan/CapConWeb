#!/usr/bin/env node
/**
 * Copy curated CapCon app screenshots from orka-ppm into CapConWeb/public/screenshots/.
 *
 * Usage (from CapConWeb root):
 *   node scripts/sync-product-screenshots.mjs
 *   node scripts/sync-product-screenshots.mjs --source /path/to/orka-ppm
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const capconWebRoot = path.resolve(__dirname, "..");

const sourceArg = process.argv.find((arg) => arg.startsWith("--source="));
const defaultOrkaRoot = path.resolve(capconWebRoot, "..", "orka-ppm");
const orkaRoot = sourceArg ? sourceArg.slice("--source=".length) : defaultOrkaRoot;

const sourceDir = path.join(orkaRoot, "public", "feature-screenshots");
const targetDir = path.join(capconWebRoot, "public", "screenshots");

/**
 * Legacy copy from orka-ppm/public/feature-screenshots (stale).
 * Prefer: cd orka-ppm && npm run marketing-screenshots
 */
const FILES = [
  "project-overview-evm.png",
  "portfolio-command-center.png",
  "portfolio-master-plan.png",
  "financials-sov.png",
  "financials-reconciliation.png",
  "financials-costbook.png",
  "financials-change-impact.png",
  "risks.png",
  "risks-hero.png",
  "portfolio-risk-steering.png",
  "workflows.png",
  "dashboards.png",
];

if (!fs.existsSync(sourceDir)) {
  console.error(`Source not found: ${sourceDir}`);
  console.error("Run from CapConWeb or pass --source=/path/to/orka-ppm");
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

let copied = 0;
for (const file of FILES) {
  const from = path.join(sourceDir, file);
  const to = path.join(targetDir, file);
  if (!fs.existsSync(from)) {
    console.warn(`skip (missing): ${file}`);
    continue;
  }
  fs.copyFileSync(from, to);
  copied += 1;
}

console.log(`Synced ${copied} screenshot(s) → ${targetDir}`);
