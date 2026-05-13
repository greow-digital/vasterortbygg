# Startprompt — bygga [BRAND] Webb

Klistra in detta i en ny Claude Code-session efter att du fyllt i `BRAND-PROFILE.md`.

---

## Kontext

Du ska bygga en ny webbplats för [BRAND_FULL], ett takläggningsföretag i [PRIMARY_CITY]. Sajten ska köras på `[DOMAIN]` med auto-deploy via Vercel vid push till `main`.

## Referensfiler

Läs dessa i ordning innan du börjar koda:

1. `BRAND-PROFILE.md` — alla brand-specifika värden, ersätt platshållare
2. `SEO.md` — **viktigast.** Hela SEO/copy-strategin. Bryt aldrig reglerna här utan att flagga
3. `01-SITEMAP.md` — komplett sidstruktur och URL-hierarki
4. `02-STARTSIDA.md` — startsidans copy och sektioner
5. `03-TJANSTER.md` — alla tjänstesidor med copy
6. `04-FAQ-PRISER-OMRADEN.md` — FAQ, prisguide, områdesmallar, om-sida
7. `05-DESIGN.md` — designspecifikation (färger, typografi, komponenter, layout)

## Teknisk stack

- **Framework:** Next.js (App Router, senaste stabila) med TypeScript
- **Styling:** Tailwind CSS med custom config för [BRAND]-färger/typografi
- **Rendering:** SSG (Static Site Generation) — alla publika sidor genereras vid build
- **Fonts:** [FONT_HEADING] (rubriker), [FONT_BODY] (brödtext) via `next/font`
- **Ikoner:** Lucide React
- **Formulär:** React Hook Form + POST till Google Sheets webhook eller liknande lead-mottagare
- **Schema:** JSON-LD för RoofingContractor, Service, FAQPage, BreadcrumbList
- **Spårning:** Google Ads gtag ([GTAG_ID]) + Hotjar ([HOTJAR_ID])
- **Deployment:** Vercel

## Faser

### Fas 1 — Grundstruktur + Startsida
1. Sätt upp Next.js-projekt med Tailwind, fonts, Lucide
2. Bygg layout (sticky Header, Footer)
3. Bygg startsidan enligt `02-STARTSIDA.md`
4. Implementera responsivitet (desktop/tablet/mobil)
5. LeadForm-komponent som POSTar till valt webhook-mål

### Fas 2 — Tjänstesidor
1. Skapa template-komponent för tjänstesidor (`PageHero` + content-sektioner)
2. Bygg alla tjänstesidor enligt `03-TJANSTER.md`
3. Varje sida har unik H1, content, prisintervall och FAQ — följ mallarna i `SEO.md`

### Fas 3 — Områdessidor (SEO)
1. Skapa template för områdessidor `/omraden/[slug]/`
2. Generera en sida per ort i `[AREAS_LIST]`
3. Varje sida: "Takläggare i [Ort]" + lokal text + projekt + CTA
4. Intern länkning mellan närliggande orter

### Fas 4 — Övriga sidor
1. Prisguide (`/priser/`)
2. Projekt-galleri (`/projekt/`) + enskilda projektsidor
3. Omdömen (`/omdomen/`)
4. Om oss (`/om-oss/`)
5. FAQ (`/faq/`)
6. Kontakt (`/kontakt/`)
7. Offert (`/offert/`) — dedikerat formulär
8. Tack (`/tack/`) — konverteringsspårning, **noindex**

### Fas 5 — SEO & Tracking
1. Meta-taggar per sida (title, description, OG) — följ `SEO.md` §7
2. JSON-LD structured data — följ `SEO.md` §10
3. Sitemap.xml (Next.js `app/sitemap.ts`)
4. robots.txt (Next.js `app/robots.ts`) — disallow `/tack` och `/api/`
5. Google Tag globalt
6. Konverteringsevent på `/tack/`
7. Hotjar-script i `<head>`
8. Favicon: SVG + PNG fallback + `apple-icon.png`
9. og-image.jpg (1200×630) i `/public/`
10. `google-site-verification` meta-tag

## Hårda regler

- **Primär CTA:** alltid `[PRIMARY_CTA]` — aldrig "Få gratis offert" eller "Kontakta oss"
- **Prispunkter:** alltid med `från` eller `efter kostnadsfri besiktning`
- **Förbjudna ord:** se `BRAND-PROFILE.md` (typiskt "familjeföretag" och felaktig geografi)
- **Synonymkluster:** varje service-sida måste väva in minst 3 av: takbyte, byta tak, lägga om tak, lägga nytt tak, omläggning av tak
- **JSON-LD:** RoofingContractor + FAQPage på alla service-sidor
- **Konvertering:** rör ALDRIG `/tack`-sidan eller gtag-koden utan explicit godkännande
- **Prestanda:** hero-bild = LCP-elementet, alltid `priority` + `fetchPriority="high"`, aldrig lazy
- **Inga syntetiska recensioner.** Om en sektion behöver social proof och vi inte har källa — flagga och stanna

## Designprinciper

- **Professionell och trovärdig** — inte flashig, utan trygg
- **Konverteringsfokus** — varje sida ska ha en CTA above the fold
- **Mobilförst** — 70%+ av trafiken kommer från mobil
- **Snabb** — SSG, lazy loading, WebP/AVIF, minimal JS

Börja med Fas 1. Läs `BRAND-PROFILE.md` och `SEO.md` först, sedan sätt upp projektet och bygg startsidan.
