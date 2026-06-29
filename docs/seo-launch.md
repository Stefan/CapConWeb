# SEO Launch — Google Search Console (capconhq.com)

Checklist for indexing the CapCon marketing site at **https://capconhq.com**.

## Current status (2026-06-16)

| Check | Status |
| ----- | ------ |
| `robots.txt` allows crawling | ✅ Live (`Allow: /`, sitemap linked) |
| `sitemap.xml` with hreflang | ✅ Live (7 locales × marketing routes) |
| GSC property verified | ❌ **Failed** — no Google verification TXT on DNS |
| DNS host | Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) |

**Why domain verification failed:** Google looks for a TXT record like `google-site-verification=…` on the apex domain. As of the last DNS check, `capconhq.com` had **no TXT records at all**. The token was either never added, added at the wrong DNS provider (e.g. registrar while nameservers point to Vercel), or not yet propagated.

Verify yourself:

```bash
dig +short TXT capconhq.com
```

You should see a line containing `google-site-verification=`.

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

### 5. Request indexing (optional, speeds up first crawl)

1. **URL Inspection** → `https://capconhq.com/de` (and `/en` if needed)
2. **Request indexing**

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
| First URLs in **Coverage** / **Pages** | 1–7 days |
| Brand query “CapCon” / “capconhq” | Days to a few weeks (low competition helps) |
| Broader keywords | Weeks to months (content + backlinks) |

GSC does not guarantee ranking; it only lets you monitor indexing and request crawls.

---

## Production checklist

- [ ] `NEXT_PUBLIC_SITE_URL=https://capconhq.com` on Vercel Production
- [ ] GSC property verified (Option A or B)
- [ ] Sitemap `https://capconhq.com/sitemap.xml` submitted
- [ ] URL Inspection run for `/de` (primary locale)
- [ ] Optional: GA4 consent flow already gates `NEXT_PUBLIC_GA_MEASUREMENT_ID` until “Accept all”

---

## Troubleshooting

| Symptom | Likely cause | Fix |
| ------- | ------------ | --- |
| “Couldn't find verification token in TXT records” | No TXT on apex, or wrong DNS panel | Add TXT in **Vercel** DNS; `dig +short TXT capconhq.com` |
| TXT at registrar but NS = Vercel | Records ignored | Move TXT to Vercel DNS |
| Meta tag verify fails | Env not set or old deploy | Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, hard-refresh |
| Sitemap “Couldn't fetch” | Site down or wrong URL | Open `https://capconhq.com/sitemap.xml` in browser |
| Pages not indexed yet | Normal delay | Wait 3–7 days; use URL Inspection |

---

## Useful URLs

- Sitemap: https://capconhq.com/sitemap.xml
- Robots: https://capconhq.com/robots.txt
- Primary landing: https://capconhq.com/de
