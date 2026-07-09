"use client";

import Link from "next/link";
import { useState } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useSite } from "@/components/providers/site-provider";
import { Button } from "@/components/ui/button";
import {
  demoDeliveryFailedPrefix,
  demoMailSubject,
  demoThankYouPrefix,
} from "@/i18n/demo-locale-copy";
import { contactEmail } from "@/lib/brand";

type DemoRequestResponse = {
  ok?: boolean;
  delivered?: boolean;
  mailtoFallback?: string;
  error?: string;
};

export function DemoPageContent() {
  const { locale, dict } = useSite();
  const { demo } = dict;
  const [submitted, setSubmitted] = useState(false);
  const [deliveryFailed, setDeliveryFailed] = useState(false);
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const [consentError, setConsentError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const consent = data.get("privacyConsent") === "on";
    if (!consent) {
      setConsentError(true);
      form.querySelector<HTMLInputElement>("#privacyConsent")?.focus();
      return;
    }
    setConsentError(false);
    setDeliveryFailed(false);
    setMailtoHref(null);

    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const role = String(data.get("role") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = demoMailSubject(locale, company);
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Role: ${role}`,
      message ? `Message: ${message}` : "",
      `Locale: ${locale}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const endpoint = process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT;
    if (endpoint) {
      setSubmitting(true);
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, role, message, locale }),
      })
        .finally(() => {
          setSubmitting(false);
          setSubmitted(true);
        });
      return;
    }

    setSubmitting(true);
    void (async () => {
      try {
        const response = await fetch("/api/demo-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, company, email, role, message, locale }),
        });
        const payload = (await response.json().catch(() => ({}))) as DemoRequestResponse;
        // #region agent log
        fetch("http://127.0.0.1:7619/ingest/41eb16b3-7ed9-4c67-b75e-52406b1509e4", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "3440af" },
          body: JSON.stringify({
            sessionId: "3440af",
            runId: "post-fix",
            hypothesisId: "H5",
            location: "demo-page-content.tsx:handleSubmit",
            message: "demo form api response",
            data: {
              status: response.status,
              delivered: payload.delivered ?? null,
              hasMailtoFallback: Boolean(payload.mailtoFallback),
            },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion

        if (response.ok && payload.delivered !== false) {
          setSubmitted(true);
          return;
        }

        setMailtoHref(payload.mailtoFallback ?? mailto);
        setDeliveryFailed(true);
      } catch {
        setMailtoHref(mailto);
        setDeliveryFailed(true);
      } finally {
        setSubmitting(false);
      }
    })();
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[70vh] bg-white">
        <div className="mx-auto max-w-xl px-4 py-28 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            ← {demo.backHome}
          </Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy-950">
            {demo.title}
          </h1>
          <p className="mt-3 text-slate-600">{demo.description}</p>

          {submitted ? (
            <p className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              {demoThankYouPrefix(locale)}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium underline underline-offset-2"
              >
                {contactEmail}
              </a>
              .
            </p>
          ) : deliveryFailed && mailtoHref ? (
            <div
              className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
              role="alert"
            >
              <p>
                {demoDeliveryFailedPrefix(locale)}
                <a href={mailtoHref} className="font-medium underline underline-offset-2">
                  {contactEmail}
                </a>
                .
              </p>
              <Button
                render={<a href={mailtoHref} />}
                size="sm"
                className="mt-3 bg-indigo-600 text-white hover:bg-indigo-700"
              >
                {demo.submit}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-950">
                  {demo.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-600 focus:ring-2"
                  placeholder={demo.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-navy-950">
                  {demo.companyLabel}
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-600 focus:ring-2"
                  placeholder={demo.companyPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-950">
                  {demo.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-600 focus:ring-2"
                  placeholder={demo.emailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-navy-950">
                  {demo.roleLabel}
                </label>
                <input
                  id="role"
                  name="role"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-600 focus:ring-2"
                  placeholder={demo.rolePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-950">
                  {demo.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-600 focus:ring-2"
                  placeholder={demo.messagePlaceholder}
                />
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <input
                    id="privacyConsent"
                    name="privacyConsent"
                    type="checkbox"
                    aria-required="true"
                    aria-invalid={consentError}
                    aria-describedby={consentError ? "privacyConsent-error" : undefined}
                    onChange={() => setConsentError(false)}
                    className="mt-0.5 size-4 shrink-0 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="privacyConsent" className="cursor-pointer">
                    {demo.consentBefore}{" "}
                    <Link
                      href={`/${locale}/privacy`}
                      className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {dict.footer.privacy}
                    </Link>
                    {demo.consentAfter}
                  </label>
                </div>
                {consentError ? (
                  <p id="privacyConsent-error" className="mt-2 text-xs text-red-600" role="alert">
                    {demo.consentRequired}
                  </p>
                ) : null}
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700 sm:w-auto"
              >
                {demo.submit}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
