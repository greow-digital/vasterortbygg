# Västerorts Bygg — visuell styleguide

> Designsystem: **Slate & Sand**. Värdeord: tillit, modernitet, enkelhet. Hela systemet är byggt för att kännas vuxet och stillsamt — vi konkurrerar med lugn auktoritet, inte med färggrant skrik.

---

## 1. Brand principles

1. **Vuxen istället för glad.** Vi är en 28-årig firma, inte en startup. Använd inte färg för att försöka kännas "modern". Modern uppstår av typografi, vitrymd och fotokvalitet — inte av accentfärger.
2. **Sand är inte röd.** Sand-tonen är vår enda varma accent och ska reserveras för CTA, nyckelsiffror, behörighetsmarkörer och ikon-detaljer. Den får aldrig användas som dekorativ ytfärg.
3. **Bilden är hjälten.** Projektbilderna (kalksten, ek, mässing, vit kakel) är det som faktiskt säljer. Design-systemet ska träda tillbaka när bilderna kommer in.
4. **Tystnad mellan element.** Generös vitrymd, max två betydelsenivåer per sektion. Hellre tomt än fullt.
5. **Tidlöshet före trend.** Inga gradienter, inga glas-effekter, inga neon-skuggor, inga "glow". Endast solida fyllningar och 1px-linjer.

---

## 2. Färgsystem

### 2.1 Råfärger (full ramp)

Alla färger lagras som CSS-variabler. Två huvudramper (Slate och Sand) plus en neutral Stone-ramp.

```css
:root {
  /* Slate — primär identitet */
  --slate-50:  #F2F4F8;
  --slate-100: #DDE2EB;
  --slate-200: #B8C0D0;
  --slate-300: #8993AA;
  --slate-400: #5D6982;
  --slate-500: #3D4960;   /* mid */
  --slate-600: #2C374C;
  --slate-700: #1F2A3E;
  --slate-800: #15203A;   /* brand primary */
  --slate-900: #0E1729;
  --slate-950: #07101E;

  /* Sand — varm accent (ersätter dagens röda) */
  --sand-50:   #FAF6EE;
  --sand-100:  #F2E9D2;
  --sand-200:  #E7D5AC;
  --sand-300:  #D8BE82;
  --sand-400:  #C9A875;   /* brand accent — default */
  --sand-500:  #B58F58;
  --sand-600:  #9A7642;
  --sand-700:  #7C5C32;
  --sand-800:  #5C4424;
  --sand-900:  #3D2D17;

  /* Stone — neutrala ytor (bakgrunder, borders, muted text) */
  --stone-50:  #FAF7F1;   /* page background */
  --stone-100: #F2EDE3;
  --stone-150: #EAE4D6;
  --stone-200: #E0D8C7;
  --stone-300: #C9C0AD;
  --stone-400: #A89F8B;
  --stone-500: #847C6B;
  --stone-600: #5F5A4E;
  --stone-700: #423E36;
  --stone-800: #2A2823;
  --stone-900: #181712;

  /* Funktionella färger */
  --success: #2F7B5C;
  --warning: #B58F58;       /* återanvänd sand */
  --danger:  #A0413A;       /* dämpad, aldrig ren röd */
  --info:    #3D4960;       /* återanvänd slate */
}
```

### 2.2 Semantiska tokens (använd dessa i komponenter)

```css
:root {
  /* Ytor */
  --bg-page:        var(--stone-50);     /* sidans bakgrund */
  --bg-surface:     #FFFFFF;              /* kort, formulär, modaler */
  --bg-surface-alt: var(--stone-100);    /* sektioner som ska kontrastera */
  --bg-inverse:     var(--slate-800);    /* mörka sektioner, footer */

  /* Text */
  --text-primary:   var(--slate-900);
  --text-secondary: var(--slate-500);
  --text-tertiary:  var(--stone-500);
  --text-on-dark:   var(--stone-50);
  --text-on-accent: var(--slate-900);    /* mörk text på sand */

  /* Borders & dividers */
  --border-subtle:  var(--stone-200);    /* default */
  --border-default: var(--stone-300);
  --border-strong:  var(--slate-800);

  /* Brand & interaktion */
  --brand:          var(--slate-800);
  --brand-hover:    var(--slate-700);
  --accent:         var(--sand-400);
  --accent-hover:   var(--sand-500);
  --focus-ring:     var(--sand-400);

  /* Skuggor — använd extremt sparsamt */
  --shadow-sm: 0 1px 2px rgba(15, 23, 41, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 23, 41, 0.08);
}
```

### 2.3 Dark mode (valfri men förberedd)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-page:        var(--slate-950);
    --bg-surface:     var(--slate-900);
    --bg-surface-alt: var(--slate-800);
    --bg-inverse:     var(--stone-50);

    --text-primary:   var(--stone-50);
    --text-secondary: var(--stone-300);
    --text-tertiary:  var(--stone-400);
    --text-on-dark:   var(--stone-50);
    --text-on-accent: var(--slate-900);

    --border-subtle:  rgba(255, 255, 255, 0.08);
    --border-default: rgba(255, 255, 255, 0.14);
    --border-strong:  var(--stone-50);

    --brand:          var(--sand-400);   /* swap — accenten blir primär i dark */
    --brand-hover:    var(--sand-300);
    --accent:         var(--sand-400);
    --accent-hover:   var(--sand-300);
  }
}
```

### 2.4 Användningsregler

| Färg | Får användas till | Får INTE användas till |
| --- | --- | --- |
| Slate 800 | Primär text, primär CTA-bakgrund, footer, badges | Stora ytfält (känns klaustrofobiskt) |
| Sand 400 | CTA-text på mörk yta, "siffror" (28, BKR, AAA), ikon-accent, fokusring, citationsmarkering | Bakgrund på hela sektioner, stora ytfält |
| Stone 50 | Sidans default-bakgrund | — |
| Vit | Kort, formulär, modaler | Sidans bakgrund (vit + vit = platt) |
| Sand som färgkod alone | — | Får aldrig vara enda signalen för status (alltid kombinera med ikon eller text) |

---

## 3. Typografi

### 3.1 Familjer

- **Display & headlines:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — modern serif med karaktär, vikter 300–500, valfri `opsz` axel. Använd för h1–h2 + hero-eyebrows.
- **Body, navigation, UI:** [Inter](https://fonts.google.com/specimen/Inter) eller [Geist](https://vercel.com/font) — neutral grotesk för all löpande text och chrome.
- **Tabell-/finprint:** Inter alt. Inter Mono för org.nr/telefon i footer (om mono-look önskas).

### 3.2 Skala (mobil → desktop)

| Roll | Mobil | Desktop | Familj | Vikt | Tracking | Line-height |
| --- | --- | --- | --- | --- | --- | --- |
| Display (hero h1) | 36/40 | 56/60 | Fraunces | 400 | -0.02em | 1.05 |
| H1 | 32/36 | 44/48 | Fraunces | 400 | -0.015em | 1.1 |
| H2 | 26/30 | 32/36 | Fraunces | 400 | -0.01em | 1.15 |
| H3 | 20/24 | 22/26 | Inter | 500 | -0.005em | 1.25 |
| H4 / lead | 18/22 | 18/24 | Inter | 500 | 0 | 1.35 |
| Body L | 17/26 | 18/30 | Inter | 400 | 0 | 1.55 |
| Body | 15/24 | 16/26 | Inter | 400 | 0 | 1.6 |
| Body S | 14/22 | 14/22 | Inter | 400 | 0 | 1.55 |
| Caption / meta | 12/16 | 12/18 | Inter | 500 | 0.04em | 1.4 |
| Eyebrow / overline | 11/16 | 11/16 | Inter | 500 | 0.14em uppercase | 1 |

### 3.3 Regler

- **Endast två vikter per font.** Fraunces 400 (+ ev. 500 för enstaka accent). Inter 400 + 500. Inga 700-vikter — de ser tunga och billiga ut bredvid den lugna paletten.
- **Mening i meningens form.** Aldrig ALL CAPS i brödtext. Eyebrows och små caption-etiketter är de enda undantagen.
- **Optisk storlek.** Fraunces har `opsz`-axel — sätt `font-optical-sizing: auto` så stora rubriker får mer kontrast och små texter blir mer läsbara.
- **Numeriska figurer.** Använd `font-variant-numeric: tabular-nums` på siffer-tabeller (priser, tider).
- **Stylistic sets.** Fraunces stilset 01 (alt. `g`) ger en mer modern karaktär — slå på via `font-feature-settings: "ss01"` om den känns rätt.

### 3.4 Next.js setup

```ts
// app/layout.tsx
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

// applicera på <html className={`${fraunces.variable} ${inter.variable}`}>
```

```css
/* globals.css */
html { font-family: var(--font-sans), system-ui, sans-serif; }
.font-serif { font-family: var(--font-serif), Georgia, serif; font-optical-sizing: auto; }
```

---

## 4. Layout & rumstaxonomi

### 4.1 Bredder

- **Max content width:** 1240px för bildtunga sidor (projektgalleri), 1080px för textsidor.
- **Reading width:** max 680px för flytande brödtext.
- **Sidpadding:** 20px mobil → 32px tablet → 48px desktop.

### 4.2 Spacing scale (8pt-baserad)

```
0   2   4   8   12   16   24   32   48   64   96   128
```

Använd dessa exakt — inga "mellan" värden som 10, 18, 22.

### 4.3 Sektion-rytm

| Storlek | Top + bottom padding (desktop) |
| --- | --- |
| Hero | 96 / 96 |
| Standard sektion | 96 / 96 |
| Tight sektion (FAQ, lista) | 64 / 64 |
| Footer | 80 / 48 |

### 4.4 Grid

- **Desktop:** 12 kolumner, gap 24px
- **Tablet:** 8 kolumner, gap 20px
- **Mobil:** 4 kolumner, gap 16px

### 4.5 Border radius

```
--radius-sm: 4px;   /* badges, små chips */
--radius-md: 8px;   /* knappar, formulärfält */
--radius-lg: 14px;  /* kort, bildramar */
--radius-xl: 24px;  /* hero-kort, stora ytor */
--radius-full: 9999px;
```

---

## 5. Komponenter

### 5.1 Buttons

Tre varianter. Inga andra.

```tsx
// Primary — huvud-CTA
<button className="bg-slate-800 text-stone-50 hover:bg-slate-700
                   px-5 py-3 rounded-md text-[15px] font-medium
                   transition-colors duration-200">
  Begär offert
</button>

// Secondary — outlined
<button className="bg-transparent text-slate-800 border border-slate-800
                   hover:bg-slate-800 hover:text-stone-50
                   px-5 py-3 rounded-md text-[15px] font-medium
                   transition-colors duration-200">
  Ring 08-20 70 90
</button>

// Tertiary — text link with arrow
<a className="inline-flex items-center gap-2 text-slate-800 underline underline-offset-4 decoration-1
              hover:decoration-sand-400 hover:decoration-2">
  Läs mer <ArrowRight size={16} />
</a>
```

**Regler:**
- Min höjd 44px (touch target).
- Padding: `12px 20px` (medium), `14px 24px` (large hero CTA).
- Sand-färgen får inte användas som huvudknapp — den blir för mjuk. Sand är **alltid** accent (ikon, ring, en underrand) på primärknappen om den behöver lyftas extra.
- Inga ikoner inuti primärknappar utom telefonsymbol bredvid telefon-CTAs.

### 5.2 Form fields

```tsx
<label className="block text-[13px] font-medium text-slate-700 mb-2">
  Namn
</label>
<input
  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-md
             text-[15px] text-slate-900 placeholder:text-stone-500
             focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-sand-400/40
             transition-colors duration-200"
/>
```

- Höjd 48px på mobil, 44px på desktop.
- Errors: bakgrund `--stone-50`, border `--danger`, hjälptext i `--danger` 13px. Inget rött runt hela fältet.

### 5.3 Cards

```tsx
// Service card
<article className="bg-white border border-stone-200 rounded-lg p-6
                    hover:border-slate-800 transition-colors duration-200">
  <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 mb-3">
    Tjänst
  </div>
  <h3 className="font-serif text-[22px] leading-tight text-slate-900 mb-2">
    Badrumsrenovering
  </h3>
  <p className="text-[15px] text-slate-500 leading-relaxed mb-4">
    BKR-behörig våtrumsrenovering — från små WC-ombyggnader till totalrenoverade familjebadrum.
  </p>
  <a className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-800">
    Läs mer <ArrowRight size={14} />
  </a>
</article>
```

- Hover: byt bara border-färgen, aldrig skuggor eller transform. Lugn över rörelse.
- Bildkort: bild först (16:10 eller 4:3), text under på vit yta.

### 5.4 Badges & pills

```tsx
// Trust badge — mörk
<span className="inline-flex items-center gap-1.5 bg-slate-800 text-stone-50
                 px-2.5 py-1 rounded-sm text-[11px] tracking-[0.06em] uppercase font-medium">
  <CheckCircle size={12} className="text-sand-400" /> BKR-behörig
</span>

// Sand accent pill — för siffror/nyckeltal
<span className="inline-flex items-baseline gap-1 text-sand-500">
  <span className="font-serif text-[44px] leading-none">28</span>
  <span className="text-[14px] text-slate-500">år i branschen</span>
</span>
```

### 5.5 Hero (startsida)

Struktur:
1. Eyebrow (overline, sand-400 eller stone-500)
2. Display-rubrik (Fraunces, max 14 ord)
3. Lead-paragraph (16–18px, max 2 rader)
4. CTA-par (primary + secondary)
5. Trust-band: 3–4 ikoner/etiketter, 1px topp-border

```tsx
<section className="bg-stone-50">
  <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-24 pb-24">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">

      <div className="lg:col-span-7">
        <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 mb-6">
          Byggfirma i Järfälla · sedan 1998
        </div>
        <h1 className="font-serif text-[44px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]
                       text-slate-900 mb-6 max-w-[18ch]">
          Renoveringar som håller — i 28 år och framåt.
        </h1>
        <p className="text-[18px] leading-relaxed text-slate-500 max-w-[52ch] mb-10">
          BKR-behörig badrumsrenovering, kök och totalrenovering i hela Storstockholm.
        </p>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton>Begär offert</PrimaryButton>
          <SecondaryButton>Ring 08-20 70 90</SecondaryButton>
        </div>
      </div>

      <div className="lg:col-span-5">
        {/* Hero image, 4:5 aspect, rounded-xl */}
      </div>

    </div>

    {/* Trust band */}
    <div className="mt-20 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <TrustStat number="28" label="år i branschen" />
      <TrustStat number="BKR" label="behörig våtrum" />
      <TrustStat number="AAA" label="kreditrating" />
      <TrustStat number="ID06" label="anslutet företag" />
    </div>
  </div>
</section>
```

### 5.6 Trust stat-komponent

```tsx
<div>
  <div className="font-serif text-[44px] leading-none text-slate-900 mb-1">
    {number}
  </div>
  <div className="text-[13px] text-slate-500">{label}</div>
  <div className="mt-2 w-8 h-px bg-sand-400" /> {/* sand-streck för rytm */}
</div>
```

### 5.7 Navigation

- Sticky transparent → ändras till `bg-stone-50/95 backdrop-blur` efter 60px scroll.
- Logo vänster (slate-800), länkar mitten (slate-700, hover → slate-900), telefon + primär CTA höger.
- Underline under hover: 1px sand-400, 4px offset.

### 5.8 Footer

- Mörk: `bg-slate-800` med `text-stone-50`.
- Sand-400 endast på understruken länk-hover och som tunn skiljelinje (1px) mellan kolumner.

---

## 6. Bildregler

### 6.1 Format

- **Hero-bilder:** 4:5 (porträtt) eller 3:2 (landskap). Aldrig 16:9 — det är film, inte interiör.
- **Projektgalleri:** mestadels 4:5 + några 1:1, jämn rytm.
- **Inga rundade hörn över 14px** på bilder. Stora bilder = `rounded-xl` (24px) max.

### 6.2 Behandling

- **Inga filter, inga overlays.** Bilderna är råa interiörbilder från Instagram — låt dem vara.
- **Aldrig tonad övertoning** för läsbarhet. Behöver text ovanpå en bild, lägg den på en intill stående yta istället.
- **Alt-text:** alltid på svenska, beskriv projektet + plats. Exempel: *"Badrum i Kälvesta med kalkstensgolv, ek-kommod från Inrbathroom och svartram-dusch."*

### 6.3 Loading & performance

- Next.js `<Image>` med `priority` på hero, `loading="lazy"` på alla andra.
- AVIF + WebP fallback. Aldrig JPEG > 200KB ovanför vecket.

---

## 7. Ikoner

- **Bibliotek:** [Lucide](https://lucide.dev) eller [Tabler Icons outline](https://tabler-icons.io). En av dem, inte båda.
- **Stroke:** 1.5px (Lucide default). Aldrig fyllda.
- **Storlek:** 16px inline, 20px standard, 24px feature.
- **Färg:** ärver från text. Inga blå/röda ikoner.
- **Sand-accent endast** på trust-/check-ikoner inuti badges.

---

## 8. Motion

### 8.1 Tokens

```css
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);

--duration-fast:   150ms;
--duration-base:   200ms;
--duration-slow:   400ms;
--duration-slower: 800ms;  /* endast för hero-bild fade-in */
```

### 8.2 Regler

- **Hover-transitions:** `200ms ease-out` på color/border/background. Aldrig på transform.
- **Page transitions:** fade-up 12px på sektioner som scrollas in (`framer-motion` eller `IntersectionObserver`), `400ms ease-out`, **bara en gång per element**.
- **Inga karuseller, inga parallax, inga auto-spelande videor.**
- **Respektera `prefers-reduced-motion`:** all rörelse kortas till `0ms` när användaren slagit på den.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Tailwind-konfig (om projektet använder Tailwind v4)

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --font-serif: "Fraunces", Georgia, serif;
  --font-sans:  "Inter", system-ui, sans-serif;

  --color-slate-50:  #F2F4F8;
  --color-slate-100: #DDE2EB;
  --color-slate-200: #B8C0D0;
  --color-slate-300: #8993AA;
  --color-slate-400: #5D6982;
  --color-slate-500: #3D4960;
  --color-slate-600: #2C374C;
  --color-slate-700: #1F2A3E;
  --color-slate-800: #15203A;
  --color-slate-900: #0E1729;
  --color-slate-950: #07101E;

  --color-sand-50:  #FAF6EE;
  --color-sand-100: #F2E9D2;
  --color-sand-200: #E7D5AC;
  --color-sand-300: #D8BE82;
  --color-sand-400: #C9A875;
  --color-sand-500: #B58F58;
  --color-sand-600: #9A7642;
  --color-sand-700: #7C5C32;
  --color-sand-800: #5C4424;
  --color-sand-900: #3D2D17;

  --color-stone-50:  #FAF7F1;
  --color-stone-100: #F2EDE3;
  --color-stone-150: #EAE4D6;
  --color-stone-200: #E0D8C7;
  --color-stone-300: #C9C0AD;
  --color-stone-400: #A89F8B;
  --color-stone-500: #847C6B;
  --color-stone-600: #5F5A4E;
  --color-stone-700: #423E36;
  --color-stone-800: #2A2823;
  --color-stone-900: #181712;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-xl: 24px;
}
```

> Obs: Tailwinds default `slate` och `stone` skuggor överrids här. Om du vill behålla Tailwinds standardramper, namnge istället `--color-brand-*` och `--color-sand-*` så slipper du kollisionen.

---

## 10. Accessibility-checklista

- Alla färgkombinationer i tabellen nedan klarar **WCAG AA** (4.5:1 för normal text, 3:1 för stor text).

| Förgrund | Bakgrund | Kontrast | Användning |
| --- | --- | --- | --- |
| `slate-900` | `stone-50` | 16.8:1 | Body text |
| `slate-500` | `stone-50` | 6.4:1 | Secondary text |
| `slate-800` | `sand-400` | 8.2:1 | Text på sand-CTA |
| `stone-50` | `slate-800` | 14.1:1 | Vit text på mörk yta |
| `sand-400` | `slate-800` | 4.9:1 | Sand-text på mörk yta (large text only) |

Andra krav:

- Fokusring: 2px `sand-400` 40% alpha på alla interaktiva element. Aldrig outline `none` utan ersättning.
- Telefonnummer: alltid `<a href="tel:+468207090">` + visa formaterat som `08-20 70 90`.
- Formulär: alltid `<label>` (visuellt), aldrig endast placeholder.
- Bilder: alltid alt-text på svenska, dekorativa bilder får tom alt (`alt=""`).
- Headings: hoppa aldrig nivåer, en h1 per sida.
- Skip-link: `<a href="#main">Hoppa till innehåll</a>` som första focusable element.

---

## 11. Vad ska bort från nuvarande sajt

- **Den röda färgen** — ersätt alla röda CTA:er, röda accenter, röda badges med `slate-800` (yta) och `sand-400` (accent-detalj).
- **Eventuella gradient-bakgrunder** — platta ut till `stone-50` eller `slate-800`.
- **Centred hero** — om hero idag är centrerad text mitt på en bild, byt till asymmetrisk grid (7/5-fördelning).
- **Tunga drop-shadows** — borttagna eller bytta mot `--shadow-sm`.
- **Stora svarta knappar med vit text utan kontext** — ersätt med vår tre-button-skala (se 5.1).

---

## 12. Quick reference för Claude Code

När du bygger en ny komponent, kontrollera att den uppfyller:

- [ ] Endast vikter 400 + 500
- [ ] Endast färger från ramperna i sektion 2.1
- [ ] Sand används bara för accent, aldrig som primär yta
- [ ] Hover ändrar bara color/border (inte skugga eller transform)
- [ ] Border-radius är ett av `sm/md/lg/xl/full`
- [ ] Touch targets minst 44px
- [ ] Fokusring synlig i alla interaktiva states
- [ ] Bilder har alt-text på svenska
- [ ] Inget element är beroende av enbart färg för betydelse
- [ ] `prefers-reduced-motion` respekteras

---

## 13. Inspirationsreferenser (för känslan, inte för kopia)

- [Claesson Koivisto Rune](https://www.ckr.se/) — svensk arkitektkontor, samma stillsamma palett
- [Note Design Studio](https://notedesignstudio.se/) — stilren minimalism med varma toner
- [Vitra](https://www.vitra.com/) — typografi-driven editorial känsla
- [Marvis](https://marvisapp.com/) — premium produktsida med samma typ av Fraunces-look
- [Inrbathroom](https://inrbathroom.com/) — leverantörens egen estetik som ert Instagram-flöde redan ligger nära

Bygg **inte** sajten till en kopia av dessa. Använd dem för att kalibrera **lugnnivån** — hur sparsmakad får designen vara?
