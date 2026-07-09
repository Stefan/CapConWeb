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
    console.warn("[demo-request] delivery failed:", detail);
    return NextResponse.json({ error: "Upstream failed" }, { status: 502 });
  }
}
