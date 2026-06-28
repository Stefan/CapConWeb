#!/usr/bin/env node
/**
 * Crop + downscale marketing PNGs to exact landing-page frame pixels (@2× Retina).
 * Avoids browser object-cover resampling (main cause of soft UI text vs 1:1 originals).
 *
 * Usage: node scripts/prepare-marketing-frame-pngs.mjs
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "screenshots");

/** Hero: exact @2× frame. Panels: crop-only at native width (no downscale — dense UI text). */
export const FRAMES = {
  hero: { width: 1152, height: 800, cropOnly: false },
  panel: { width: 1120, height: 600, cropOnly: true },
};

/** Each input can produce multiple frame outputs (processed from the same source). */
const JOBS = [
  { input: "project-overview-evm.png", outputs: [{ frame: "hero" }] },
  { input: "financials-costbook.png", outputs: [{ frame: "panel" }] },
  { input: "financials-change-impact.png", outputs: [{ frame: "panel" }] },
  { input: "portfolio-command-center.png", outputs: [{ frame: "panel" }] },
  {
    input: "risks.png",
    outputs: [
      { frame: "hero", output: "risks-hero.png" },
      { frame: "panel" },
    ],
  },
];

const py = spawnSync(
  process.env.PYTHON ?? "python3",
  ["-", dir, JSON.stringify(FRAMES), JSON.stringify(JOBS)],
  {
    input: `
from pathlib import Path
import json, sys
from PIL import Image

target_dir = Path(sys.argv[1])
frames = json.loads(sys.argv[2])
jobs = json.loads(sys.argv[3])

def crop_top_left_to_aspect(im, target_aspect):
    w, h = im.size
    src_aspect = w / h
    if src_aspect > target_aspect:
        crop_w = int(round(h * target_aspect))
        return im.crop((0, 0, crop_w, h))
    crop_h = int(round(w / target_aspect))
    return im.crop((0, 0, w, crop_h))

for job in jobs:
    src_name = job["input"]
    src = target_dir / "sources" / src_name
    if not src.is_file():
        src = target_dir / src_name
    if not src.is_file():
        print(f"skip missing: {src_name}")
        continue
    im = Image.open(src)
    for spec in job["outputs"]:
        out_name = spec.get("output", src_name)
        frame = frames[spec["frame"]]
        tw, th = frame["width"], frame["height"]
        target_aspect = tw / th
        cropped = crop_top_left_to_aspect(im, target_aspect)
        if frame.get("cropOnly"):
            out = cropped
            out_w, out_h = out.size
            print(f"{out_name}: {im.size[0]}x{im.size[1]} -> {out_w}x{out_h} ({spec['frame']}, crop-only)")
        else:
            out = cropped.resize((tw, th), Image.Resampling.LANCZOS)
            print(f"{out_name}: {im.size[0]}x{im.size[1]} -> {tw}x{th} ({spec['frame']})")
        dest = target_dir / out_name
        out.save(dest, format="PNG", compress_level=1)
`,
    encoding: "utf-8",
  }
);

if (py.status !== 0) {
  console.error(py.stderr || py.stdout);
  process.exit(py.status ?? 1);
}

console.log(py.stdout.trim());
