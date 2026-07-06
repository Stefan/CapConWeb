export type SendResendEmailOutcome =
  | { ok: true }
  | { ok: false; reason: "not_configured" }
  | { ok: false; reason: "api_error"; detail?: string }
  | { ok: false; reason: "network"; detail?: string };

/**
 * Sends one email via Resend REST API (server-only).
 * Requires RESEND_API_KEY; sender from RESEND_FROM_EMAIL (verified domain).
 */
export async function sendResendEmail(options: {
  to: string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}): Promise<SendResendEmailOutcome> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return { ok: false, reason: "not_configured" };

  const from = process.env.RESEND_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: options.to,
        subject: options.subject,
        html: options.html,
        ...(options.text ? { text: options.text } : {}),
        ...(options.replyTo ? { reply_to: options.replyTo } : {}),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn("[resend] API error", response.status, detail.slice(0, 200));
      return { ok: false, reason: "api_error", detail: detail || String(response.status) };
    }

    const data = (await response.json().catch(() => null)) as { id?: string } | null;
    if (!data?.id) {
      return { ok: false, reason: "api_error", detail: "empty_response" };
    }
    return { ok: true };
  } catch (error) {
    console.warn("[resend] send threw", error);
    return {
      ok: false,
      reason: "network",
      detail: error instanceof Error ? error.message : undefined,
    };
  }
}
