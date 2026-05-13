# Västerorts Bygg — SEO och sökord

> Sökord, location pages och innehållsförslag för att fånga lokal trafik i Storstockholm. Använd som checklista när du bygger metadata och innehållsplan.

---

## Primära sökfraser (huvudtjänster)

| Fras | Avsedd sida | Volym | Konkurrens |
| --- | --- | --- | --- |
| badrumsrenovering stockholm | `/tjanster/badrumsrenovering` | Hög | Mycket hög |
| badrumsrenovering järfälla | `/tjanster/badrumsrenovering` | Medel | Medel |
| renovera badrum stockholm | `/tjanster/badrumsrenovering` | Hög | Mycket hög |
| köksrenovering stockholm | `/tjanster/koksrenovering` | Hög | Mycket hög |
| köksrenovering järfälla | `/tjanster/koksrenovering` | Medel | Låg |
| totalrenovering stockholm | `/tjanster/totalrenovering` | Medel | Hög |
| stambyte brf stockholm | `/tjanster/stambyte` | Medel | Hög |
| byggfirma järfälla | `/` | Medel | Medel |
| byggföretag västerort | `/` | Låg | Låg |
| våtrumsbehörigt företag stockholm | `/garantier` | Låg | Låg |

## Location pages — föreslagna stadsdelar

Egna landningssidor med samma struktur (intro → 3 case → behörighet → CTA) per ort. Prioritera där företaget redan har bevisuppdrag.

### Hög prioritet (bevisade projekt)

- `/badrumsrenovering-jarfalla`
- `/badrumsrenovering-solna`
- `/badrumsrenovering-sundbyberg`
- `/badrumsrenovering-valingby` *(stavning på sajten: Vällingby)*
- `/badrumsrenovering-kalvesta`
- `/koksrenovering-jarfalla`
- `/koksrenovering-sundbyberg`

### Medel prioritet (närliggande)

- `/badrumsrenovering-bromma`
- `/badrumsrenovering-spanga`
- `/badrumsrenovering-kista`
- `/badrumsrenovering-sollentuna`
- `/badrumsrenovering-akersberga`
- `/koksrenovering-bromma`
- `/koksrenovering-solna`

### Översiktssida

- `/omraden` — karta + lista över alla orter

## Long-tail / informationssökningar (blogg)

Förslag på artiklar som fångar köpresan i tidigt skede.

- Vad kostar det att renovera badrum i Stockholm 2026?
- Hur lång tid tar en badrumsrenovering?
- Skillnaden på en plattsättare och en våtrumsbehörig firma — vad spelar BKR för roll?
- Så fungerar ROT-avdraget vid badrumsrenovering (med räkneexempel)
- Hur väljer BRF rätt entreprenör för stambyte?
- IKEA-kök med skräddarsydda fronter — så fungerar det
- Före och efter: 5 typiska badrumstransformationer
- Liten badrumsdusch på 2 kvm — det här går att göra
- Tidplan för att renovera kök — så ser de fyra veckorna ut
- Vad är en kvalitetsdokumentation enligt BKR och varför ska du kräva den?

## Teknisk SEO — checklista

### Grund
- [ ] Mobile-first responsive på alla mallar
- [ ] LCP < 2,5s på alla huvudsidor (testa även 4G)
- [ ] CLS < 0,1
- [ ] WebP/AVIF för alla bilder med rätt fallback
- [ ] Lazy-loading utom på hero-bilder
- [ ] Automatisk `srcset` baserat på faktiska skärmstorlekar

### Strukturerad data (JSON-LD)
- [ ] `LocalBusiness` på startsida/footer:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Västerorts Bygg AB",
    "image": "...",
    "address": {"@type":"PostalAddress","streetAddress":"Spjutvägen 5A","postalCode":"175 61","addressLocality":"Järfälla","addressCountry":"SE"},
    "telephone":"+46820 70 90",
    "url":"https://www.vasterortsbygg.se",
    "areaServed":["Stockholm","Järfälla","Solna","Sundbyberg","Bromma"]
  }
  ```
- [ ] `Service` på tjänstesidor
- [ ] `Review` / `AggregateRating` när Google-omdömen samlats in
- [ ] `BreadcrumbList` på alla undersidor
- [ ] `FAQPage` på FAQ-block

### Innehåll
- [ ] Unika title-taggar per sida (mall: `[Tjänst] i [Ort] | Västerorts Bygg`)
- [ ] Unika meta description (max 155 tecken)
- [ ] Endast en H1 per sida
- [ ] Alt-text på alla bilder (svenska, beskrivande)
- [ ] Interna länkar mellan tjänster, projekt och location pages
- [ ] H2/H3 som matchar sökintention

### Lokal SEO
- [ ] Google Business Profile uppdaterad och verifierad
- [ ] NAP konsekvent på alla externa kataloger (Hitta, Eniro, Bygg.se, Allabolag, BKR, Byggkatalogen)
- [ ] Bygg-relaterade kataloger uppdaterade (BKR-listning, Byggföretagen)
- [ ] Recensionsinsamling som standardrutin (Google → Reco som backup)

### Filer
- [ ] `robots.txt` med sitemap-länk
- [ ] `sitemap.xml` automatisk
- [ ] `humans.txt` (valfritt)
- [ ] Favicon-paket (16x16, 32x32, 180x180, OG-image)

## Sökord per målgrupp (för annonsering om aktuellt)

### Privatperson
badrumsrenovering, renovera badrum, kostnad badrum, kök stockholm, totalrenovering villa, ROT-avdrag badrum

### BRF
stambyte BRF, badrumsrenovering BRF, fasadrenovering BRF, BRF-renovering Stockholm

### Fastighetsägare
fastighetsservice Stockholm, ramavtal byggservice, underhåll fastighet Stockholm

### Företag
kontorsanpassning Stockholm, ombyggnad kontor, lokalanpassning Järfälla

## Konkurrentobservationer (Stockholm/Järfälla)

- **Badrumsstudio (Järfälla)** — 4,9 betyg, 29 omdömen på Hitta. Tydligt visuell sajt. Direkt konkurrent på badrum.
- **Renovella Bygg (Järfälla)** — 4,9 betyg, 10 omdömen på Hitta. Stark recensionsnärvaro.
- **Generella Stockholmsfirmor** — många med många hundra Reco-omdömen. Här vinner Västerorts inte på volym men kan vinna på **förtroende** (BKR + AAA + 28 år).

Tag-away för positioneringen: Konkurrera **inte** på "lägsta pris" eller "snabbast" — positionera på **kvalitet, behörighet och relation**. Det är där företaget faktiskt sticker ut.
