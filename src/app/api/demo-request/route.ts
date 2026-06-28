import { NextRequest, NextResponse } from "next/server";

import { contactEmail } from "@/lib/brand";

type DemoPayload = {
  name?: string;
  company?: string;
  email?: string;
  role?: string;
  message?: string;
  locale?: string;
};

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function clientKey(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

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

  const key = clientKey(request);
  if (isRateLimited(key)) {
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

  const webhook = process.env.DEMO_FORM_WEBHOOK_URL?.trim();
  const payload = { name, company, email, role, message, locale, submittedAt: new Date().toISOString() };

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "Upstream failed" }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ error: "Upstream unavailable" }, { status: 502 });
    }
  } else if (process.env.NODE_ENV === "production") {
    console.info("[demo-request]", JSON.stringify({ ...payload, email: "[redacted]" }));
  } else {
    console.info("[demo-request]", payload);
  }

  return NextResponse.json({
    ok: true,
    mailtoFallback: `mailto:${contactEmail}?subject=${encodeURIComponent(`Demo request – ${company}`)}`,
  });
}
