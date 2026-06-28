# CapConWeb — Marketing Website

Professionelle B2B-SaaS Landing Page für **CapCon** – Project Controls für komplexe Capex-, Construction- und Life-Science-Programme.

## Regionale Editionen (Geo-Routing)

| Edition | Region (Geo-IP) | Query-Override |
| ------- | --------------- | -------------- |
| **Large Projects** | Nordamerika (US, CA) | `?variant=large-projects` |
| **CDMO** | Schweiz (CH) | `?variant=cdmo` |
| **APAC CapEx** | Australien, Singapur (AU, SG) | `?variant=apac` |
| **Japan CapEx** | Japan (JP) | `?variant=japan` |
| **Korea CapEx** | Südkorea (KR) | `?variant=korea` |
| **Poland CapEx** | Polen (PL) | `?variant=poland` |
| **Standard CapEx** | Rest der Welt | `?variant=standard-capex` |

Der Proxy setzt ein Cookie `capcon-site-variant` anhand Geo-IP (Vercel/Cloudflare) oder Query-Parameter.

## Tech Stack

- **Next.js 16** (App Router, i18n `/de` · `/en` · `/fr` · `/ja` · `/ko` · `/pl` · `/zh`)
- **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**

## Entwicklung

```bash
npm install
npm run dev
```

- `http://localhost:3000` → leitet per Proxy auf die passende Sprache (Geo + Accept-Language)
- Edition testen: `http://localhost:3000/ja?variant=japan`, `http://localhost:3000/en?variant=apac`
- Sprache testen: `http://localhost:3000/pl?variant=poland`, `http://localhost:3000/zh?variant=apac`
- Demo-Formular: `/ja/demo`, `/ko/demo`, `/pl/demo`, `/zh/demo`
- Geo-Routing-Tests: `npm run test:geo`
- Compliance-Tests: `npm run test:consent`, `npm run test:legal`, `npm run test:demo-api`, `npm run test:webhook`
- Alles: `npm test`

## Umgebungsvariablen

Kopie nach `.env.local` (siehe `.env.example`):

```bash
NEXT_PUBLIC_SITE_URL=https://capconhq.com
NEXT_PUBLIC_APP_URL=https://app.capconhq.com
NEXT_PUBLIC_CONTACT_EMAIL=kontakt@capconhq.com

# Legal (Pflicht vor Go-Live — Platzhalter in .env.example ersetzen)
NEXT_PUBLIC_LEGAL_COMPANY=…
NEXT_PUBLIC_LEGAL_REGISTER_NUMBER=…
# … weitere NEXT_PUBLIC_LEGAL_* Felder

# Optional: Demo-Formular → Slack/CRM
# DEMO_FORM_WEBHOOK_URL=https://hooks.example.com/demo
```

## Launch-Compliance (Phase 1–3)

| Phase | Inhalt |
| ----- | ------ |
| **1 — Must-have** | Impressum/Datenschutz mit echten Env-Feldern (`src/lib/legal.ts`), Cookie-Banner + Consent (`src/lib/consent.ts`, `cookie-consent-banner.tsx`), Security-Headers/CSP (`src/lib/csp.ts` + `src/proxy.ts`), Footer-Links |
| **2 — Markt-Fit** | Regionale Datenschutz-Hinweise (APPI, PIPA, APP, PDPA, PUODO) in `src/i18n/legal/pages.ts`, `/cookies`, Demo-API `POST /api/demo-request` (Rate-Limit, optional Webhook) |
| **3 — Polish** | `public/.well-known/security.txt`, `/terms`, `/accessibility`, Social-Proof-Disclaimer, Sitemap-Einträge |

Rechtstexte werden zentral in `src/i18n/legal/pages.ts` gepflegt und zur Laufzeit via `enrichLaunchCompliance()` in alle Locales gemerged.

**Vor Production:** alle `NEXT_PUBLIC_LEGAL_*` auf Vercel setzen, Demo-Webhook anbinden (siehe unten), Cookie-Banner + Footer manuell prüfen.

## Demo-Formular → Slack

1. Slack: **Apps** → **Incoming Webhooks** → Workspace + Channel (z. B. `#demo-leads`)
2. Webhook-URL kopieren
3. Auf Vercel (Production, **nicht** `NEXT_PUBLIC_*`):

```bash
SLACK_DEMO_WEBHOOK_URL=https://hooks.slack.com/services/T…/B…/…
```

Optional zusätzlich `DEMO_FORM_WEBHOOK_URL` für CRM/Zapier — Slack-URLs werden automatisch als Block-Kit formatiert.

Lokal testen: URL in `.env.local` setzen, `npm run dev`, `/de/demo` absenden. Payload-Tests: `npm run test:webhook`.

**Rate-Limit (Missbrauchsschutz):** `/api/demo-request` erlaubt 5 Anfragen pro IP und Stunde. In Production über **Upstash Redis** (Vercel Marketplace Integration); lokal ohne Redis automatisch In-Memory-Fallback.

1. Vercel → **Marketplace** → **Redis (Upstash)** → mit CapConWeb verbinden  
2. Env-Variablen `UPSTASH_REDIS_REST_URL` und `UPSTASH_REDIS_REST_TOKEN` werden gesetzt (Legacy: `KV_REST_API_*`)  
3. Redeploy — Rate-Limits gelten dann serverübergreifend

Tests: `npm run test:rate-limit`, `npm run test:demo-api`

## Google Analytics 4

Set on Vercel (optional):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

GA4 lädt **nur nach Cookie-Einwilligung „Alle akzeptieren“** — nicht bei „Nur notwendige“. IP-Anonymisierung ist aktiv; keine Google-Signale/Ads-Personalisierung. CSP erlaubt Google-Endpunkte automatisch, sobald die ID gesetzt ist.

## Sprachen (Geo-Routing)

| Sprache | Regionen (Auswahl) |
| ------- | ------------------ |
| **Deutsch** (`de`) | DE, AT, LI; CH wenn Browser nicht `fr` |
| **Français** (`fr`) | FR, LU, MC, DOM-TOM; BE wenn `fr`; CA wenn `fr`; CH wenn `fr` |
| **English** (`en`) | US, UK, Australien; BE (nl); CA (en); Singapur (wenn Browser nicht `zh`) |
| **日本語** (`ja`) | Japan (JP) |
| **한국어** (`ko`) | Südkorea (KR) |
| **Polski** (`pl`) | Polen (PL) |
| **中文** (`zh`) | Singapur wenn Browser `zh`; sonst manuell `/zh` |

Manuell: `/de/…`, `/en/…`, `/fr/…`, `/ja/…`, `/ko/…`, `/pl/…`, `/zh/…` oder Locale-Switcher in der Navigation.

## Projektstruktur

```
src/
├── app/[locale]/          # Landing, Demo, Impressum, Privacy, Cookies, Terms, A11y
├── app/api/demo-request/  # Demo form POST + rate limit
├── i18n/dictionaries/     # de, en, fr, ja, ko, pl, zh
├── i18n/variants/         # large-projects, cdmo, apac, japan, korea, poland
├── lib/variant.ts         # Geo-Routing & Edition-Metadaten
├── components/            # Sections, Layout, Demo, Legal
├── lib/brand.ts           # URLs (sync mit orka-ppm product-brand)
└── proxy.ts               # Locale + Variant Cookie
```

## Inhalte anpassen

- **Basis-Texte:** `src/i18n/dictionaries/de.ts` und `en.ts`
- **Edition-Overlays:** `src/i18n/variants/large-projects.ts`, `cdmo.ts`
- **Brand/URLs:** `src/lib/brand.ts`
- **Copy-Referenz (orka-ppm):** `docs/marketing/capconweb/` im Hauptrepo

## Build

```bash
npm run build
npm start
```

## Sync from orka-ppm (app repo)

Product screenshots and copy reference live in the main app repo:

```bash
# From orka-ppm
npm run sync-capconweb

# Or from CapConWeb
npm run sync-screenshots

# Re-capture with loaded demo data
cd ../orka-ppm && npm run marketing-screenshots
```

**PLG:** Secondary CTA „Plattform entdecken“ / „Explore the platform“ links to `${NEXT_PUBLIC_APP_URL}/signup` (trial + persona wizard in the app).
