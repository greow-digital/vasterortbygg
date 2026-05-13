# Designspecifikation — [BRAND]

## Designriktning

Tonen är: **professionell, trygg, lokal.** Inte flashig — trovärdig. Mobilförst.

## Typografi

- **Rubriker:** [FONT_HEADING] (600–800 weight)
- **Brödtext:** [FONT_BODY] (400–500 weight)
- H1: 62px desktop / 42px mobil, -0.03em letter-spacing
- H2: 40px desktop / 30px mobil
- H3: 30px desktop / 24px mobil
- Body: 16px, 1.6 line-height

Ladda fonts via `next/font` — aldrig `@font-face` manuellt eller `<link>` till Google Fonts direkt. Använd `font-display: swap`.

## Färger

```css
--color-primary: [COLOR_PRIMARY];           /* CTA-knappar, länkar */
--color-primary-hover: [COLOR_PRIMARY_HOVER];
--color-dark: [COLOR_DARK];                 /* Text, footer */
--color-white: #FFFFFF;
--color-bg-light: [COLOR_BG_LIGHT];         /* Sektionsbakgrunder */
--color-border: #BDBDBD;
--color-accent: [COLOR_ACCENT];             /* Hover, highlights */
```

## Komponenter

### CTA-knapp
- Bakgrund: `--color-primary`
- Text: vit, [FONT_BODY] 500, 16px
- Border-radius: 5px (eller pill: 9999px om designen rör sig dit)
- Padding: 12px 24px
- Hover: `--color-primary-hover`

### Formulär
- Vit bakgrund med subtil skugga
- Border-radius: 10px
- Fält: ljusgrå bakgrund, 5px radius
- Labels: `--color-primary`, [FONT_BODY] 600, 14px

### Kort (taktyper, projekt)
- Vit bakgrund
- Border-radius: 10px
- Subtil skugga vid hover
- Bild med `object-fit: cover`, fast höjd

### Trust badges
- Inline rad under hero
- Checkmark-ikon + text
- [FONT_BODY] 500, 14px
- Vit text mot hero-bakgrund

### Stats bar
- Stora siffror: [FONT_HEADING] 700, 48px
- Beskrivning: [FONT_BODY] 400, 14px
- Centrerade, 3-4 kolumner

## Layout

### Breakpoints
- Desktop: ≥ 1200px (max-width: 1280px content)
- Tablet: 810px – 1199px
- Mobil: < 810px

### Spacing
- Sektioner: 80px padding top/bottom (desktop), 40px (mobil)
- Gap mellan kort: 24px
- Content max-width: 1280px, centrerat

### Hero
- Full-width bakgrundsbild med mörk gradient
- Content-container med max-width 1280px
- Formulär till höger (desktop), under (mobil)
- Gradient overlay: `linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.20) 100%)`

### Navigation
- Sticky header (`fixed top-0`)
- Desktop: ordmark-logga vänster, nav mitten, CTA höger
- Mobil: **ikonlogga** vänster, CTA mitten, hamburger höger (`sm:hidden` switch)
- Vit bakgrund, subtil skugga vid scroll
- Hover-dropdowns för Tjänster och Områden på desktop

### Footer
- Mörk bakgrund (`--color-dark`)
- Tak-bild med overlay ovanför (valfritt)
- Logo, adress, kontaktinfo, länkkolumner
- Trust-loggor i botten

## Bilder

- **Hero:** LCP-element. Modern format (WebP/AVIF), `priority` + `fetchPriority="high"`, aldrig lazy
- **Taktyper:** 4 bilder (320×320, `object-fit: cover`)
- **Projekt:** Stora bilder, minst 800px bredd
- **Alla bilder:** lazy loading (utom hero), WebP/AVIF, explicit `width`/`height`
- **Favicon:** SVG (vektor) + PNG (512×512 raster) + apple-icon (180×180)
- **og-image:** 1200×630 JPG i `/public/og-image.jpg`

## SEO

Se `SEO.md` för fullständiga regler. Designen ska stödja:

### Meta per sidtyp
- Startsida: "Takläggare i [PRIMARY_CITY] | Fast pris & [GUARANTEE_YEARS] års garanti | [BRAND_SHORT]"
- Tjänst: "[Tjänst] i [PRIMARY_CITY] | [BRAND_SHORT]"
- Område: "Takläggare i [Ort] | [BRAND_SHORT]"
- Projekt: "[Beskrivning] i [Ort] | [BRAND_SHORT]"

### Schema markup
- RoofingContractor (LocalBusiness)
- Service
- FAQPage
- Review/AggregateRating (endast verifierad data)
- BreadcrumbList

### Tekniskt
- Next.js App Router (SSG för publika sidor)
- Automatisk sitemap.xml via `app/sitemap.ts`
- robots.txt via `app/robots.ts`
- Canonical URLs per sida
- Open Graph + Twitter Cards
- Structured data (JSON-LD)
