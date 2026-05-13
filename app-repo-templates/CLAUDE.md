@AGENTS.md

## Specifikationer
Copy- och strukturspecifikationer ligger i parallellt repo (specifikationsmappen). Läs alltid `SEO.md` och relevant `0X-*.md` innan du ändrar copy.

## Projektregler

**Läs alltid `SEO.md` innan du ändrar copy, metadata, rubriker, FAQ eller strukturerad data.** Den innehåller obligatoriska regler för sökintention, synonymkluster, copy-regler (vad som aldrig får skrivas), prisformatering och teknisk SEO.

Kort sammanfattning av det viktigaste:
- **CTA:** alltid "[PRIMARY_CTA]" — aldrig "Få gratis offert" eller "Kontakta oss"
- **Priser:** alltid med "från" eller "efter kostnadsfri takbesiktning"
- **Förbjudet:** se `BRAND-PROFILE.md` (typiskt "familjeföretag" och felaktig geografi-positionering), syntetiska recensioner
- **Synonymer:** varje service-sida måste väva in minst 3 av: takbyte, byta tak, lägga om tak, lägga nytt tak, omläggning av tak
- **JSON-LD:** RoofingContractor + FAQPage på alla service-sidor
- **Konvertering:** rör ALDRIG `[CONVERSION_PAGE]`-sidan eller gtag-koden utan explicit godkännande
- **Prestanda:** hero-bild = LCP-elementet, alltid `priority` + `fetchPriority="high"`, aldrig lazy
