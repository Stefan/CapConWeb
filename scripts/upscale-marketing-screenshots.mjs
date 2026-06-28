#!/usr/bin/env node
/**
 * Upscale marketing PNGs 2× (LANCZOS) for Retina landing-page frames (~560 CSS px → 1120 physical).
 *
 * Usage: node scripts/upscale-marketing-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "screenshots");

const FILES = [
  "project-overview-evm.png",
  "financials-costbook.png",
  "financials-change-impact.png",
  "portfolio-command-center.png",
  "risks.png",
];

const py = spawnSync(
  process.env.PYTHON ?? "python3",
  [
    "-",
    dir,
    ...FILES,
  ],
  {
    input: `
from pathlib import Path
import sys
from PIL import Image

target_dir = Path(sys.argv[1])
files = sys.argv[2:]

for name in files:
    src = target_dir / name
    if not src.is_file():
        print(f"skip missing: {name}")
        continue
    im = Image.open(src)
    w, h = im.size
    out = im.resize((w * 2, h * 2), Image.Resampling.LANCZOS)
    out.save(src, format="PNG", optimize=True)
    print(f"{name}: {w}x{h} -> {w * 2}x{h * 2}")
`,
    encoding: "utf-8",
  }
);

if (py.status !== 0) {
  console.error(py.stderr || py.stdout);
  process.exit(py.status ?? 1);
}

console.log(py.stdout.trim());
