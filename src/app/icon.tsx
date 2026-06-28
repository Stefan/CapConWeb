import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1120 0%, #6366f1 100%)",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
          }}
        >
          CC
        </div>
      </div>
    ),
    { ...size },
  );
}
