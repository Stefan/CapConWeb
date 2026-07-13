# SEO Launch — Google Search Console (capconhq.com)

Checklist for indexing the CapCon marketing site at **https://capconhq.com**.

## Current status (2026-07-05)

| Check | Status |
| ----- | ------ |
| `robots.txt` allows crawling | ✅ Live (`Allow: /`, sitemap linked) |
| `sitemap.xml` with BCP47 hreflang | ✅ 8 locales × core routes + edition landings |
| Edition landing pages (`/de/editions/sap-rollup`, …) | ✅ Indexable segment SEO |
| JSON-LD (Organization, WebSite, SoftwareApplication) | ✅ Variant-aware on home + editions |
| Query `?variant=` → edition redirect | ✅ Consolidates duplicate URLs |
| FMCG edition | ✅ `/editions/fmcg-sap` with `noindex` (campaign only) |
| GSC property verified | ❌ **Pending** — set DNS TXT or `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` |

---

## URL model (2026-07)

| URL type | Example | SEO role |
| -------- | ------- | -------- |
| Locale home (geo/cookie variant) | `/de` | Broad CapEx — geo-personalized |
| **Edition landing** | `/de/editions/sap-rollup` | **Segment SEO** — stable, indexable |
| Sales campaign | `/en/editions/fmcg-sap` | `noindex` — demo links only |
| Legal / demo | `/de/demo`, `/de/privacy` | Supporting pages |

**Submit these edition URLs in GSC after launch (examples):**

- `https://capconhq.com/de/editions/sap-rollup`
- `https://capconhq.com/en/editions/large-projects`
- `https://capconhq.com/de/editions/cdmo`
- `https://capconhq.com/en/editions/apac`

Full list: open `https://capconhq.com/sitemap.xml` and filter `/editions/`.

---

## Option A — Domain property (recommended long-term)

Covers `https://capconhq.com`, `http://capconhq.com`, and all subdomains.

### 1. Get the token from Google Search Console

1. [Google Search Console](https://search.google.com/search-console) → **Add property**
2. Choose **Domain** → enter `capconhq.com`
3. Copy the **TXT record value** (full string, e.g. `google-site-verification=AbCdEf…`)

### 2. Add TXT in Vercel (not at the registrar)

Because nameservers are Vercel, DNS records must be set in **Vercel**, not only at the domain registrar.

1. Vercel → Project **CapConWeb** (or team) → **Settings** → **Domains** → `capconhq.com`
2. **DNS Records** → **Add**
   - **Type:** `TXT`
   - **Name:** `@` (apex / root — leave blank if Vercel shows “root”)
   - **Value:** paste the **exact** string from GSC (including `google-site-verification=`)
3. Save

### 3. Wait and verify

- Propagation often takes **15 minutes–24 hours**; occasionally up to 48h.
- Re-check: `dig +short TXT capconhq.com`
- In GSC → **Verify**

### 4. Submit sitemap

After verification:

1. GSC → property `capconhq.com` → **Sitemaps**
2. Submit: `https://capconhq.com/sitemap.xml`

### 5. Request indexing (priority URLs)

1. **URL Inspection** → edition landings (segment focus):
   - `https://capconhq.com/de/editions/sap-rollup`
   - `https://capconhq.com/en/editions/large-projects`
   - `https://capconhq.com/de/editions/cdmo`
2. **Request indexing** for each

---

## Option B — URL prefix property (faster if DNS is awkward)

Use when you only need `https://capconhq.com/*` (not other subdomains).

### 1. Create URL-prefix property

GSC → **Add property** → **URL prefix** → `https://capconhq.com/`

### 2. Verify via HTML meta tag

1. GSC shows a meta tag: `content="…"` (verification code only, not the full tag)
2. In Vercel → **Environment Variables** (Production):
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = the code from GSC
3. Redeploy CapConWeb (env change requires a new deployment)
4. Confirm in browser: View source on `https://capconhq.com/de` → search for `google-site-verification`
5. GSC → **Verify**

The site reads this env var in `src/app/layout.tsx` (`metadata.verification.google`).

---

## After verification — what to expect

| Milestone | Typical timing |
| --------- | -------------- |
| GSC shows “Ownership verified” | Minutes after DNS/meta is correct |
| Edition URLs in **Pages** | 3–14 days |
| Brand query “CapCon” / “capconhq” | Days to a few weeks |
| Segment keywords (SAP costbook, CDMO GMP) | Weeks to months |

GSC does not guarantee ranking; edition landings improve **segment** discoverability vs. cookie-only variants.

---

## Production checklist

- [ ] `NEXT_PUBLIC_SITE_URL=https://capconhq.com` on Vercel Production
- [ ] GSC property verified (Option A or B)
- [ ] Sitemap `https://capconhq.com/sitemap.xml` submitted
- [ ] URL Inspection for `/de/editions/sap-rollup`, `/en/editions/large-projects`, `/de/editions/cdmo`
- [ ] Confirm `?variant=sap-rollup` on `/de` redirects to `/de/editions/sap-rollup` (301/308)
- [ ] Optional: GA4 consent flow gates `NEXT_PUBLIC_GA_MEASUREMENT_ID` until “Accept all”

---

## Troubleshooting

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| “Couldn't find verification token in TXT records” | No TXT on apex, or wrong DNS panel | Add TXT in **Vercel** DNS; `dig +short TXT capconhq.com` |
| TXT at registrar but NS = Vercel | Records ignored | Move TXT to Vercel DNS |
| Meta tag verify fails | Env not set or old deploy | Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, hard-refresh |
| Sitemap “Couldn't fetch” | Site down or wrong URL | Open `https://capconhq.com/sitemap.xml` in browser |
| Edition page shows wrong copy | Old deploy | Redeploy; check `/de/editions/sap-rollup` hero |
| Duplicate content warnings | Query + edition both indexed | Query variants redirect to edition paths (built-in) |

---

## Useful URLs

- Sitemap: https://capconhq.com/sitemap.xml
- Robots: https://capconhq.com/robots.txt
- Locale home: https://capconhq.com/de
- SAP Roll-up (DE): https://capconhq.com/de/editions/sap-rollup
- Large Projects (EN): https://capconhq.com/en/editions/large-projects
- CDMO (DE): https://capconhq.com/de/editions/cdmo
