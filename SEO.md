# SEO & Content Guidelines – [BRAND]

Den här filen är projektets referens för SEO, copy och sökintention. Läs den innan du bygger en ny sida, lägger till ett nytt content-block eller ändrar metadata på en befintlig sida.

> **Anpassningsnot:** Dokumentet är extraherat från Sands Entreprenad-projektet och grundat i 30 dagar Google Ads-sökdata för den svenska takläggar-marknaden i Stockholm. Strukturen (synonymkluster, sökintentionshierarki, copy-regler, prestanda-budget) är allmängiltig — siffror och konkreta exempel ska bekräftas för nya kunder med faktisk data. Markeringar som `📌 Sands-exempel` betyder att raden är ett exempel från originalprojektet, inte en universell sanning.

Dokumentet är beskrivet som **regler + bakgrund**. Reglerna är obligatoriska. Bakgrunden är "därför" så att du kan fatta rimliga beslut i edge cases.

---

## 1. Affärskontext (bakgrund)

**Kund:** [BRAND_FULL]. Verksamhet: takläggning och takbyten i [REGION]. Affärsmodellen är **[CONTRACT_TYPE]** med fast pris efter kostnadsfri besiktning. Primär geografisk målgrupp: villaägare i [PRIMARY_CITY] + närförorter ([AREAS_LIST]).

**Konkurrentlandskap:** 📌 Sands-exempel: Vesivek, Villatakexperten m.fl. leder med **besiktning/konsultation** som primär CTA, inte "offertförfrågan". De använder **Reco** för verifierade recensioner. Positionera nya kunder mot samma signal — om data ger anledning till annat, dokumentera det här.

**Primär CTA överallt:** `[PRIMARY_CTA]`. Konverteringsdestination: `[CONVERSION_PAGE]`. Conversion-event fyrar via gtag på `[CONVERSION_PAGE]` — rör aldrig den filen utan explicit godkännande.

**Teknisk verklighet påverkar SEO lika mycket som copy:** Core Web Vitals är ett Google-rankingkriterium och ingår i Google Ads Quality Score som "landing page experience". Se §11.

---

## 2. Sökintentionshierarki

När du bygger en ny sida, vet först **vilken intention** sidan tjänar. Hierarkin nedan är i fallande klick-volym från faktisk data 📌 Sands-projektet:

1. **Pris/kostnad för takbyte** – dominerande intention. "pris", "kostnad", "från X kr/m²", "ROT-avdrag". Alla service-sidor måste adressera detta above the fold.
2. **Materialspecifikt takbyte** – "tegeltak pris", "kostnad byta plåttak", "papptak pris", "byta eternittak". Varje material förtjänar egen sektion eller egen sida.
3. **Synonymkluster för takbyte** – se §3. Kritiskt för Quality Score.
4. **Geografiskt** – "takläggare [förort]". Lång svans med tydlig köpintention.
5. **Skada/läckage** – "taket läcker", "fuktskada tak", "ruttet tak". Akutintention, besiktnings-CTA.
6. **Brand** – "[BRAND]". Ska landa på startsida eller dedikerad om-sida.
7. **Informationellt** – "vad är eternit", "hur länge håller tegeltak". Lågt konverterande men bygger topical authority. Bloggformat, inte ads-landningssidor.

För nya kunder: kör en första Ads-sökterm-rapport eller Search Console-rapport efter 30 dagars trafik och uppdatera hierarkin om mönstret skiljer sig.

---

## 3. Obligatoriskt synonymkluster

Detta är den enskilt viktigaste regeln i dokumentet. Användare söker på **flera olika ord** för samma sak. Google flaggar sidor som "low quality" när sidan bara täcker en av varianterna. På varje service-sida **måste** följande synonymer förekomma i copy, helst tidigt:

**Takbyte-kluster (alltid minst 3 av dessa i hero/intro):**
- takbyte
- byta tak
- lägga om tak
- lägga nytt tak
- omläggning av tak
- ny takläggning

**Pris-kluster (alltid minst 2):**
- pris
- kostnad
- från [X] kr/m²
- pris per kvadratmeter

**Material-kluster** (när relevant för sidan):
- tegeltak, tegelpannor, byta takpannor
- plåttak, byta plåttak
- papptak, byta papptak, tätskikt
- betongtak, betongpannor
- eternittak, byta eternittak

**Geografi-kluster:**
- [PRIMARY_CITY] (alltid)
- relevant förort om sidan är geospecifik

Väv in naturligt — det får aldrig kännas som keyword-stuffing. En enda välformulerad mening kan täcka 4–5 synonymer: *"Byta tak, lägga om tak eller lägga nytt tak? Vi tar helhetsansvar för takbyte i hela [REGION]."*

---

## 4. Copy-regler – alltid

- **Primär CTA:** `[PRIMARY_CTA]`. Samma wording överallt.
- **Prispunkter:** alltid prefixerade med `från` eller följda av `efter kostnadsfri besiktning`. Aldrig som garanterat slutpris.
- **Trust-triad:** [USP_1] · [USP_2] · [USP_3]. Minst två av tre på varje service-sida.
- **ROT-avdrag:** nämn där det är relevant (arbetskostnad 30 %). Viktigt för konvertering, inte för ranking.
- **[CONTRACT_TYPE]:** behåll som trovärdighetssignal. Är inte sökord, men signalerar seriositet.
- **Telefonnummer:** synligt i header som `tel:`-länk. Konkurrentanalys visar att det höjer CTR.
- **Social proof:** riktiga projektbilder och verifierade recensioner. Endast källbelagd data — flagga om saknas.

## 5. Copy-regler – aldrig

- Aldrig förbjudna ord (se `BRAND-PROFILE.md` "Förbjudna ord").
- Aldrig byt CTA till **"Få gratis offert"**, **"Kontakta oss"** eller liknande. Besiktnings-framingen är en medveten differentiering mot konkurrenter.
- Aldrig garantera slutpris utan besiktning.
- Aldrig syntetiska/uppdiktade recensioner, kundcitat eller case. Om en sektion behöver social proof och vi inte har källa — flagga och stanna.
- Aldrig hårdkoda priset på flera ställen. Centralisera i en konstant eller content-fil så det kan uppdateras på ett ställe.
- Aldrig använd [CONTRACT_TYPE] som H1-rubrik. Kontraktuell signal, inte hero-copy.

---

## 6. Page template – struktur för service-sidor

Varje service-sida (takbyte, plåttak, tegeltak, papptak, eternittak, skada/läckage, geografi) följer samma grundmall:

1. **Metadata**
   - Title ≤60 tecken med: primär sökterm + `[PRIMARY_CITY]` + brand
   - Description ≤155 tecken med: 2 synonymer + pris/kostnad + [PRIMARY_CITY] + trust-triad
   - OpenGraph + Twitter cards speglar title/description
2. **H1** som upprepar primär sökterm + geografi
3. **Hero-subhead** med synonymkluster (§3) invävt naturligt
4. **Primär CTA** `[PRIMARY_CTA]`
5. **Prissektion** (H2: `Vad kostar det att [verb]?`) med prispunkter, trust-triad, ROT-referens, CTA-repris
6. **Material-/tjänst-sektion(er)** med H2/H3 som innehåller pris eller kostnad
7. **Skada/läckage-sektion** om sidan passar (för akut-intention)
8. **Social proof** – projektbilder + recensioner
9. **FAQ** (visad öppen, inte accordion — SEO- och CRO-fördel)
10. **Avslutande CTA**
11. **JSON-LD** – `RoofingContractor` (page-level) + `FAQPage` (om FAQ finns)

Avsteg från mallen ska vara motiverat. Dokumentera motiveringen i PR:n.

---

## 7. Metadata-exempel (mall)

```
Title:       Takbyte [PRIMARY_CITY] – Fast pris på att lägga om tak | [BRAND_SHORT]
Description: Lägga om tak eller byta tak i [PRIMARY_CITY]? Fast pris från [PRICE_BETONG_MIN], kostnadsfri takbesiktning och [GUARANTEE_YEARS] års garanti. Tegel, plåt, papp, betong, eternit.
H1:          Takbyte i [PRIMARY_CITY] – fast pris när du ska lägga om taket
```

Varianter per sida:

- **Plåttak:** `Plåttak [PRIMARY_CITY] – Kostnad för att byta plåttak | [BRAND_SHORT]`
- **Tegeltak:** `Tegeltak [PRIMARY_CITY] – Pris och omläggning | [BRAND_SHORT]`
- **Papptak:** `Papptak [PRIMARY_CITY] – Pris per m² och byte | [BRAND_SHORT]`
- **Eternittak:** `Eternittak [PRIMARY_CITY] – Byta eternittak tryggt | [BRAND_SHORT]`
- **Skada:** `Taket läcker? Akut takbesiktning [PRIMARY_CITY] | [BRAND_SHORT]`
- **Geo (exempel):** `Takläggare [Ort] – Takbyte & fast pris | [BRAND_SHORT]`

---

## 8. FAQ-bibliotek – frågor som motsvarar faktiska sökfraser

Återanvänd från detta bibliotek när du bygger FAQ-sektioner. Frågorna är formulerade nära exakt sökfras för att matcha People-Also-Ask och Quality Score.

- Vad kostar det att lägga om tak?
- Vad kostar det att byta tak?
- Vad kostar takbyte per kvadratmeter?
- Hur mycket kostar det att byta takpannor?
- Vad kostar det att byta plåttak?
- Vad kostar det att byta papptak?
- Vad kostar det att byta tegeltak?
- Vad kostar det att byta eternittak?
- Kan man få ROT-avdrag på takbyte?
- Mitt tak läcker – vad gör jag?
- Hur vet jag om taket behöver bytas?
- Hur länge håller ett nytt tak?
- Hur lång tid tar ett takbyte?
- Måste jag flytta ut under takbytet?
- Vad ingår i en kostnadsfri takbesiktning?
- Vilket takmaterial är bäst?

Svar ska vara 2–4 meningar, konkreta, och sluta med en mjuk hänvisning till besiktningen som nästa steg.

---

## 9. Negativa nyckelord (referens)

Dessa undviks aktivt i Ads och vi bygger inte sidor för dem (lågt kommersiellt värde):

```
själv / gör det själv
hyra
jobb
utbildning
bild / bilder
ritning
takstol
takfönster (om brand inte säljer det)
snörasskydd (om brand inte säljer det)
```

Var försiktig med `eternittak` ensamt — det är ofta informationell sökning ("är eternit farligt"). Material-sidan för eternit ska adressera säkerhet/sanering tydligt, annars blir CTR låg.

---

## 10. Strukturerad data

På varje publicerad sida (minst):

- **RoofingContractor** (sub-typ av LocalBusiness) med `name`, `address`, `telephone`, `geo`, `areaServed` ([REGION] + förorter), `priceRange`, `url`, `image`.
- **FAQPage** om sidan har FAQ-sektion, spegla innehållet 1:1.

När recensionsdata finns:

- **aggregateRating** inom RoofingContractor med källa. Uppdatera inte med gissade siffror — bara verifierad data.

När en specifik tjänst beskrivs:

- **Service** schema kopplat till RoofingContractor, med `serviceType` (t.ex. "Takbyte", "Takbesiktning"), `areaServed`, `offers` (prisintervall).

JSON-LD läggs via Next.js metadata-standard eller i layout — aldrig inline i `<body>`.

---

## 11. Teknisk SEO & prestanda

Teknisk SEO påverkar både organisk ranking (Core Web Vitals är ett Google-rankingkriterium sedan 2021) **och** Google Ads Quality Score via signalen "landing page experience". Långsamma sidor, CLS och dålig tillgänglighet försämrar båda samtidigt. Därför är tekniska regler lika viktiga som copy-regler på det här projektet.

### 11.1 Core Web Vitals – mål

Mål (mobil, fältdata från CrUX):

| Metric | Mål | "Needs improvement" | "Poor" |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ 2,5 s | 2,5–4,0 s | > 4,0 s |
| **INP** (Interaction to Next Paint) | ≤ 200 ms | 200–500 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0,1 | 0,1–0,25 | > 0,25 |

Kompletterande lab-metrics att hålla koll på: FCP ≤ 1,8 s · TBT ≤ 200 ms · Speed Index ≤ 3,4 s.

### 11.2 Hero-bilden förtjänar särskild omsorg

LCP-elementet är med stor sannolikhet hero-bilden. Det gör den till den **enskilt viktigaste prestanda-resursen** på varje sida. Regler:

- En mobilvariant ≤ 100 KiB, AVIF eller WebP, rätt dimension för 375–430 px viewport
- `<Image priority fetchPriority="high">` (Next.js) eller `<link rel="preload" as="image" imagesrcset="...">` i `<head>`
- Aldrig lazy-loadad
- Aldrig laddad via CSS `background-image` (försvårar preload + gömmer sig från LCP-detektion)
- Aldrig beroende av webfont för LCP-detektion — texten ovanpå hero ska renderas med `font-display: swap`

### 11.3 Obligatorisk checklista – varje ny eller ändrad sida

**Metadata & semantik**

- [ ] Exakt en `<h1>` per sida
- [ ] Title ≤ 60 tecken, unik per sida
- [ ] Meta description ≤ 155 tecken, unik per sida
- [ ] `<html lang="sv">`
- [ ] Canonical-tag pekar på sig själv
- [ ] `robots`: `index, follow` (om publik) — dra inte in staging-URL:er i Google
- [ ] Sitemap uppdaterad
- [ ] OpenGraph + Twitter cards komplett och matchar title/description
- [ ] JSON-LD validerar i Google Rich Results Test
- [ ] Brödtext använder semantiska element (`<article>`, `<section>`, `<nav>`)

**Prestanda**

- [ ] PageSpeed Insights (mobil) körd efter större ändringar – Performance ≥ 85
- [ ] LCP ≤ 2,5 s i lab – fältdata följs upp separat efter 28 dagar
- [ ] CLS ≤ 0,1
- [ ] Hero-bild: modern format, preload, `fetchPriority="high"`, rätt dimension per breakpoint
- [ ] Alla övriga bilder: `srcset`/`sizes`, lazy-loaded, WebP/AVIF, explicit `width`/`height`
- [ ] Fonts: `font-display: swap`, preload endast kritiska varianter, subsetta
- [ ] Tredjepartsskript (gtag, chat, Hotjar) laddas med `strategy="lazyOnload"` eller `afterInteractive`
- [ ] Ingen render-blockerande CSS > 20 KiB
- [ ] Bundle-size per route granskad efter större tillägg

**Tillgänglighet (a11y)**

- [ ] Alla interaktiva element (inkl. `<select>`) har synligt label eller `aria-label`
- [ ] Textkontrast ≥ 4,5:1 (normal text) eller ≥ 3:1 (≥ 18 px eller fet ≥ 14 px)
- [ ] Fokusring synlig på alla interaktiva element
- [ ] Tangentbordsnavigerbar hela flödet inkl. CTA
- [ ] Bilder har `alt`-text (tomt `alt=""` för dekorativa)

**Konvertering & spårning**

- [ ] Primär CTA går till samma destination som övriga CTAs
- [ ] Konverteringsspårning på `[CONVERSION_PAGE]` verifierat fortfarande aktiv efter ändring
- [ ] Inga nya tredjepartsskript tillagda utan godkännande
- [ ] gtag-event firar i DevTools Network-tab

**Validering**

- [ ] Mobil rendering verifierad vid 375 px
- [ ] Tablet verifierad vid 768 px
- [ ] Desktop verifierad vid 1280 px
- [ ] Inga brutna interna länkar
- [ ] Lighthouse CI eller PSI-körning bifogad PR-beskrivning

### 11.4 Rutin – löpande mätning

- **Per PR med visuell påverkan:** kör PSI (mobil) innan merge och klistra in scores i PR-beskrivningen
- **Varje månad:** snapshot av CrUX-fältdata per sida, logga i en enkel tabell. Observera trend, inte enskilda dagar
- **Efter större releaser:** Search Console → Core Web Vitals-rapport 14–28 dagar efter release för att se om fält följer labb

### 11.5 Vad som särskilt påverkar Next.js-projekt

- `next/image` är default för alla bilder. Undvik `<img>` utanför inbäddad markdown
- `next/font` för alla fonts – aldrig `@font-face` manuellt eller `<link>` till Google Fonts direkt
- `next/script` med `strategy` – aldrig `<script>` inline i page-komponenter (utom när Next.js kräver det för `<head>`)
- Metadata via `export const metadata` (App Router) – aldrig duplicerat mellan layout och sida
- Vercel Analytics + Speed Insights är billiga att aktivera och ger kontinuerlig RUM-data (komplement till PSI fältdata)

---

## 12. Intern länkstrategi

När en ny sida publiceras:

- Länka **in** från minst 2 existerande sidor med meningsfull ankartext (använd synonymer från §3, inte "klicka här").
- Länka **ut** till relaterade tjänstesidor (t.ex. plåttak-sidan länkar till takbesiktning och till takbyte-huvudsidan).
- Undvik kannibalisering: två sidor ska inte tävla om samma primära sökfras. Om ämnet överlappar — slå ihop, eller differentiera tydligt per intention (t.ex. informationellt vs transaktionellt).

---

## 13. Innan du publicerar en ny sida – quality gate

Svara på dessa frågor i PR-beskrivningen:

1. **Primär sökintention?** (En mening, med exempel på sökfras.)
2. **Synonymkluster täckt?** (Lista de synonymer som finns i copy.)
3. **Pris-information above the fold?** (Ja/nej + hänvisning.)
4. **Primär CTA korrekt?** (`[PRIMARY_CTA]`, ja/nej.)
5. **Strukturerad data?** (Vilka schema-typer används.)
6. **Intern länkning?** (Från vilka sidor, till vilka sidor.)
7. **Kannibalisering?** (Finns det en existerande sida som konkurrerar? Hur differentieras de?)
8. **Copy-regler följda?** (Inga förbjudna termer, inga syntetiska citat, prispunkter har "från".)

Om något svar är "nej" eller otydligt — åtgärda innan merge.

---

## 14. När i tvivel

- **Stanna och fråga** hellre än att gissa copy. Speciellt kring prispunkter, garantier och recensioner.
- **Följ data, inte magkänsla.** "Takläggare" känns intuitivt som huvudordet — data säger ofta att "takbyte" och "lägga om tak" dominerar. Bygg för det.
- **Granska konvertering separat från ranking.** Höjd CTR i Ads ≠ fler leads om CTA är svag. Båda måste hållas i huvudet.
- **Rör inte `[CONVERSION_PAGE]`** eller konverteringsspårningskoden. Någonsin. Utan uttryckligt godkännande.
