import { NextRequest, NextResponse } from "next/server";

import { contactEmail } from "@/lib/brand";
import { deliverDemoRequest, type DemoRequestPayload } from "@/lib/demo-webhook";
import {
  extractDemoRequestClientKey,
  isDemoRateLimited,
} from "@/lib/demo-rate-limit";

type DemoPayload = {
  name?: string;
  company?: string;
  email?: string;
  role?: string;
  message?: string;
  locale?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: DemoPayload;
  try {
    body = (await request.json()) as DemoPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const clientKey = extractDemoRequestClientKey(request.headers);
  if (await isDemoRateLimited(clientKey)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const name = String(body.name ?? "").trim();
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();
  const role = String(body.role ?? "").trim();
  const message = String(body.message ?? "").trim();
  const locale = String(body.locale ?? "").trim();

  if (!name || !company || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  if (name.length > 200 || company.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ error: "Payload too large" }, { status: 400 });
  }

  const payload: DemoRequestPayload = {
    name,
    company,
    email,
    role,
    message,
    locale,
    submittedAt: new Date().toISOString(),
  };

  try {
    const { delivered } = await deliverDemoRequest(payload);
    // #region agent log
    fetch("http://127.0.0.1:7619/ingest/41eb16b3-7ed9-4c67-b75e-52406b1509e4", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "3440af" },
      body: JSON.stringify({
        sessionId: "3440af",
        runId: "post-fix",
        hypothesisId: "H1-H5",
        location: "demo-request/route.ts:POST",
        message: "demo delivery outcome",
        data: { delivered, hasResendKey: Boolean(process.env.RESEND_API_KEY?.trim()) },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
    if (!delivered) {
      if (process.env.NODE_ENV === "production") {
        console.info("[demo-request]", JSON.stringify({ ...payload, email: "[redacted]" }));
      } else {
        console.info("[demo-request]", payload);
      }
    }

    return NextResponse.json({
      ok: true,
      delivered,
      mailtoFallback: `mailto:${contactEmail}?subject=${encodeURIComponent(`Demo request – ${company}`)}`,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Upstream failed";
    // #region agent log
    fetch("http://127.0.0.1:7619/ingest/41eb16b3-7ed9-4c67-b75e-52406b1509e4", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "3440af" },
      body: JSON.stringify({
        sessionId: "3440af",
        runId: "post-fix",
        hypothesisId: "H3-H4",
        location: "demo-request/route.ts:POST",
        message: "demo delivery threw",
        data: { detail: detail.slice(0, 120) },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
    console.warn("[demo-request] delivery failed:", detail);
    return NextResponse.json({ error: "Upstream failed" }, { status: 502 });
  }
}
