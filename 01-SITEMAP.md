# [BRAND] — Sitemap & IA

## URL-struktur

```
[DOMAIN]/                                ← Startsida (konverteringsfokus)
├── tjanster/                            ← Tjänsteöversikt
│   ├── taklaggning/                     ← Takomläggning (huvudtjänst)
│   ├── tegeltak/                        ← Tegeltak
│   ├── betongtak/                       ← Betongtak
│   ├── plattak/                         ← Plåttak
│   ├── papptak/                         ← Papptak
│   ├── eternittak/                      ← Byte av eternittak
│   ├── takfonsterkupor/                 ← Takfönster & takkupor
│   ├── hangrannorstupror/               ← Hängrännor & stuprör
│   └── totalentreprenad/                ← Totalentreprenad
├── omraden/                             ← Områdesöversikt
│   ├── [ort-1]/                         ← En sida per ort i [AREAS_LIST]
│   └── ...
├── projekt/                             ← Projektgalleri
│   └── [projekt-slug]/                  ← Enskilda projektsidor
├── priser/                              ← Prisguide
├── var-process/                         ← Hur arbetet går till
├── omdomen/                             ← Kundomdömen
├── faq/                                 ← Vanliga frågor
├── om-oss/                              ← Om företaget
├── kontakt/                             ← Kontaktinfo
├── offert/                              ← Dedikerad offertbegäran
├── tack/                                ← Konverteringssida (noindex)
└── blogg/                               ← Informationella artiklar
    └── [artikel-slug]/
```

## Navigation

### Header
- Logo (vänster)
- Desktop: Tjänster (dropdown), Områden (dropdown), Priser, Projekt, Om oss, Kontakt, Blogg
- Höger: Telefon [PHONE] + CTA "[SECONDARY_CTA]"
- Mobil: ikonlogga + CTA + hamburgermeny

### Footer
```
[Logo]
[BRAND_FULL]
[ADDRESS], [POSTAL_CODE] [CITY]
[EMAIL] | [PHONE]
Org.nr: [ORG_NR]

Tjänster          Områden            Om oss
─ Takläggning     ─ [PRIMARY_CITY]   ─ Om [BRAND_SHORT]
─ Tegeltak        ─ [ort-2]          ─ Vår process
─ Plåttak         ─ [ort-3]          ─ Omdömen
...               ...                ─ Kontakt

Trust-loggor (F-skatt, fullförsäkrade, ABT 06, ROT 30%)
```

## URL-konvention

- Slug: kebab-case, små bokstäver, inga svenska tecken (`åäö` → `aao`)
  - Bromma → `bromma`
  - Värmdö → `varmdo`
  - Österåker → `osteraker`
  - Upplands Väsby → `upplands-vasby`
- Kategori-prefix för struktur: `/tjanster/`, `/omraden/`, `/projekt/`, `/blogg/`
- Trailing slash: konsekvent (välj ett och stå för det)
- Canonical: pekar alltid på sig själv på `[DOMAIN]`
