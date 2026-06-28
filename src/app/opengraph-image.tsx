import { ImageResponse } from "next/og";

import { PRODUCT_NAME } from "@/lib/brand";

export const alt = PRODUCT_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0b1120 0%, #1e3a5f 45%, #6366f1 100%)",
          color: "white",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            CC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em" }}>
              {PRODUCT_NAME}
            </div>
            <div style={{ fontSize: 24, opacity: 0.85 }}>
              Capex & Portfolio Intelligence
            </div>
          </div>
        </div>
        <div style={{ fontSize: 34, lineHeight: 1.35, maxWidth: 900, opacity: 0.95 }}>
          Project controls for complex capex – financials, schedule, change management &
          master plan compliance.
        </div>
      </div>
    ),
    { ...size },
  );
}
