import type { DemoRequestPayload } from "@/lib/demo-webhook";
import { sendResendEmail } from "@/lib/send-via-resend";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function resolveDemoNotifyRecipients(): string[] {
  const raw =
    process.env.DEMO_NOTIFY_EMAIL?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    "";
  if (!raw) return [];
  return [...new Set(raw.split(/[,;]/).map((e) => e.trim()).filter(Boolean))];
}

export function buildDemoRequestEmail(payload: DemoRequestPayload): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = `CapCon demo request — ${payload.company}`;
  const lines = [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Role: ${payload.role || "—"}`,
    payload.message ? `Message:\n${payload.message}` : "",
    `Locale: ${payload.locale || "unknown"}`,
    `Submitted: ${payload.submittedAt}`,
  ].filter(Boolean);

  const text = lines.join("\n\n");
  const html = `
    <h2>New CapCon demo request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(payload.company)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
      <tr><td><strong>Role</strong></td><td>${escapeHtml(payload.role || "—")}</td></tr>
      <tr><td><strong>Locale</strong></td><td>${escapeHtml(payload.locale || "unknown")}</td></tr>
      <tr><td><strong>Submitted</strong></td><td>${escapeHtml(payload.submittedAt)}</td></tr>
    </table>
    ${
      payload.message.trim()
        ? `<p><strong>Message</strong></p><p style="white-space:pre-wrap">${escapeHtml(payload.message.trim())}</p>`
        : ""
    }
  `.trim();

  return { subject, html, text };
}

export async function deliverDemoRequestEmail(payload: DemoRequestPayload): Promise<{
  delivered: boolean;
  recipientCount: number;
}> {
  const recipients = resolveDemoNotifyRecipients();
  if (!recipients.length) {
    return { delivered: false, recipientCount: 0 };
  }

  const { subject, html, text } = buildDemoRequestEmail(payload);
  const result = await sendResendEmail({
    to: recipients,
    subject,
    html,
    text,
    replyTo: payload.email,
  });

  if (!result.ok) {
    if (result.reason === "not_configured") {
      return { delivered: false, recipientCount: 0 };
    }
    throw new Error(result.detail || `Resend failed (${result.reason})`);
  }

  return { delivered: true, recipientCount: recipients.length };
}
