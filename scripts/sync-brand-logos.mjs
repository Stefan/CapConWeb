#!/usr/bin/env node
/**
 * Copy CapCon logo + favicon assets from orka-ppm into CapConWeb.
 *
 * Usage (from CapConWeb root):
 *   node scripts/sync-brand-logos.mjs
 *   node scripts/sync-brand-logos.mjs --source=/path/to/orka-ppm
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const capconWebRoot = path.resolve(__dirname, "..");

const sourceArg = process.argv.find((arg) => arg.startsWith("--source="));
const defaultOrkaRoot = path.resolve(capconWebRoot, "..", "orka-ppm");
const orkaRoot = sourceArg ? sourceArg.slice("--source=".length) : defaultOrkaRoot;

const copies = [
  ["public/logos/celestra-icon-square.png", "public/brand/capcon-icon.png"],
  ["public/logos/celestra-icon-square-on-dark.png", "public/brand/capcon-icon-on-dark.png"],
  ["public/logos/celestra-logo-monochrome.png", "public/brand/capcon-wordmark.png"],
  ["app/icon.png", "src/app/icon.png"],
  ["app/favicon.ico", "src/app/favicon.ico"],
  ["public/favicon.ico", "public/favicon.ico"],
  ["public/favicon-16.png", "public/favicon-16.png"],
  ["public/favicon-32.png", "public/favicon-32.png"],
  ["public/apple-touch-icon.png", "public/apple-touch-icon.png"],
];

let copied = 0;
for (const [fromRel, toRel] of copies) {
  const from = path.join(orkaRoot, fromRel);
  const to = path.join(capconWebRoot, toRel);
  if (!fs.existsSync(from)) {
    console.warn(`skip (missing): ${fromRel}`);
    continue;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  copied += 1;
}

console.log(`Synced ${copied} logo/favicon asset(s) from ${orkaRoot}`);
