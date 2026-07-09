import { deliverDemoRequestEmail, resolveDemoNotifyRecipients } from "@/lib/demo-email";

export type DemoRequestPayload = {
  name: string;
  company: string;
  email: string;
  role: string;
  message: string;
  locale: string;
  submittedAt: string;
};

type SlackTextObject = {
  type: "plain_text" | "mrkdwn";
  text: string;
  emoji?: boolean;
};

type SlackBlock =
  | { type: "header"; text: SlackTextObject }
  | { type: "section"; text?: SlackTextObject; fields?: SlackTextObject[] }
  | { type: "divider" }
  | { type: "context"; elements: SlackTextObject[] };

export type SlackIncomingWebhookBody = {
  text: string;
  blocks: SlackBlock[];
};

function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1)}…`;
}

export function isSlackWebhookUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return host === "hooks.slack.com" || host.endsWith(".hooks.slack.com");
  } catch {
    return false;
  }
}

export function buildSlackDemoPayload(payload: DemoRequestPayload): SlackIncomingWebhookBody {
  const fallbackText = `New CapCon demo request — ${payload.name} (${payload.company})`;
  const messageBlock =
    payload.message.trim().length > 0
      ? [
          { type: "divider" as const },
          {
            type: "section" as const,
            text: {
              type: "mrkdwn" as const,
              text: `*Message*\n${truncate(payload.message.trim(), 2800)}`,
            },
          },
        ]
      : [];

  return {
    text: fallbackText,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "New CapCon demo request", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name*\n${payload.name}` },
          { type: "mrkdwn", text: `*Company*\n${payload.company}` },
          { type: "mrkdwn", text: `*Email*\n<mailto:${payload.email}|${payload.email}>` },
          { type: "mrkdwn", text: `*Role*\n${payload.role || "—"}` },
        ],
      },
      ...messageBlock,
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Locale: \`${payload.locale || "unknown"}\` · ${payload.submittedAt}`,
          },
        ],
      },
    ],
  };
}

function resolveWebhookTargets(): string[] {
  const urls = [
    process.env.SLACK_DEMO_WEBHOOK_URL?.trim(),
    process.env.DEMO_FORM_WEBHOOK_URL?.trim(),
  ].filter((url): url is string => Boolean(url));

  return [...new Set(urls)];
}

async function postWebhook(url: string, body: unknown): Promise<void> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed (${response.status})`);
  }
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

export async function deliverDemoRequest(payload: DemoRequestPayload): Promise<{
  delivered: boolean;
  targetCount: number;
}> {
  const targets = resolveWebhookTargets();
  const recipients = resolveDemoNotifyRecipients();
  const emailConfigured = isResendConfigured();
  const emailAttempted = recipients.length > 0 && emailConfigured;
  const failures: Error[] = [];
  let successCount = 0;

  if (targets.length > 0) {
    await Promise.all(
      targets.map(async (url) => {
        try {
          const body = isSlackWebhookUrl(url) ? buildSlackDemoPayload(payload) : payload;
          await postWebhook(url, body);
          successCount += 1;
        } catch (error) {
          failures.push(error instanceof Error ? error : new Error("Webhook delivery failed"));
        }
      }),
    );
  }

  try {
    const emailResult = await deliverDemoRequestEmail(payload);
    if (emailResult.delivered) {
      successCount += emailResult.recipientCount;
    }
  } catch (error) {
    failures.push(error instanceof Error ? error : new Error("Email delivery failed"));
  }

  const channelsConfigured = targets.length + (emailAttempted ? 1 : 0);

  if (successCount === 0 && channelsConfigured > 0) {
    throw failures[0] ?? new Error("All demo notification channels failed");
  }

  return { delivered: successCount > 0, targetCount: successCount };
}
