#!/usr/bin/env python3
"""Erzeugt PNG-Logos mit transparentem Hintergrund aus den JPG-Quellen."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
LOGOS = ROOT / "public" / "logos"


def remove_near_white(im: Image.Image, threshold: int = 245) -> Image.Image:
    rgba = im.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    fringe = threshold - 35
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = min(r, g, b)
            if m >= threshold:
                px[x, y] = (r, g, b, 0)
            elif m >= fringe:
                fade = int(255 * (threshold - m) / max(1, threshold - fringe))
                px[x, y] = (r, g, b, max(0, min(255, fade)))
    return rgba


def remove_near_black(im: Image.Image, threshold: int = 25) -> Image.Image:
    rgba = im.convert("RGBA")
    px = rgba.load()
    w, h = rgba.size
    fringe = threshold + 35
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            m = max(r, g, b)
            if m <= threshold:
                px[x, y] = (r, g, b, 0)
            elif m <= fringe:
                fade = int(255 * (m - threshold) / max(1, fringe - threshold))
                px[x, y] = (r, g, b, max(0, min(255, fade)))
    return rgba


def convert(src_name: str, out_name: str, mode: str) -> None:
    src = LOGOS / src_name
    out = LOGOS / out_name
    im = Image.open(src)
    if mode == "white":
        result = remove_near_white(im)
    else:
        result = remove_near_black(im)
    result.save(out, format="PNG", optimize=True)
    print(f"Wrote {out.relative_to(ROOT)}")


def main() -> None:
    convert("celestra-logo-icon.jpg", "celestra-logo-icon.png", "white")
    convert("celestra-logo-darkmode.jpg", "celestra-logo-darkmode.png", "black")
    convert("celestra-icon-square.jpg", "celestra-icon-square.png", "white")


if __name__ == "__main__":
    main()
