/**
 * Brand constants for Västerorts Bygg AB.
 * Source of truth: ../../vasterortsbygg-context/vasterortsbygg-context.md
 *
 * Search `TODO_PROFILE` for values that are still missing.
 */

export const TODO_PROFILE = "TODO_PROFILE" as const;

export const BRAND = {
  // Company
  name: "Västerorts Bygg",
  shortName: "Västerorts Bygg",
  fullName: "Västerorts Bygg AB",
  orgNr: "556560-4203",
  founded: 1998,
  yearsInBusiness: 28, // drift sedan 2005, etablerat 1998
  industryYears: 35,
  ceo: "Daniel Eie Fredriksson",

  // Contact
  phone: "08-20 70 90",
  phoneTel: "+468207090",
  email: "info@vasterortsbygg.se",
  address: "Spjutvägen 5A",
  postalCode: "175 61",
  city: "Järfälla",
  region: "Storstockholm",
  primaryCity: "Stockholm",

  // Domain / repo
  domain: TODO_PROFILE, // user has not decided final domain yet
  url: "https://vasterortsbygg.se", // existing WP site — used for metadata base for now

  // Social
  instagramHandle: "vasterortsbygg",
  instagramUrl: "https://www.instagram.com/vasterortsbygg/",

  // Tracking
  gtagId: TODO_PROFILE,
  hotjarId: TODO_PROFILE,
  gscVerification: TODO_PROFILE,
  conversionPage: "/tack",

  // CTA & messaging — anchored on offert, not roofing besiktning
  primaryCta: "Begär offert",
  secondaryCta: "Boka kostnadsfritt möte",

  // USP triad — what the company actually stands out on
  usps: [
    { label: "28 år i branschen", note: "Etablerat byggföretag sedan 1998" },
    { label: "BKR-behörig", note: "Våtrumsbehörig enligt PER:s branschregler" },
    { label: "AAA-rating", note: "Högsta kreditvärdighet enligt Soliditet/D&B" },
  ],

  // Stats — verbatim where known
  employees: 6,
  projectsCount: TODO_PROFILE,
  responseTime: "24h",

  // Audience routes
  contractType: TODO_PROFILE,
} as const;

export const SERVICES = [
  {
    slug: "badrumsrenovering",
    label: "Badrumsrenovering",
    short: "Badrum",
    blurb:
      "BKR-behörig våtrumsrenovering — från små WC-ombyggnader till totalrenoverade familjebadrum.",
  },
  {
    slug: "koksrenovering",
    label: "Köksrenovering",
    short: "Kök",
    blurb:
      "IKEA-stommar i kombination med fronter från lokala leverantörer — anpassade kök till smartare pris.",
  },
  {
    slug: "totalrenovering",
    label: "Totalrenovering",
    short: "Totalrenovering",
    blurb:
      "Hela nedervåningar, tillbyggnader, källare och uterum — vi tar ansvar för helheten.",
  },
  {
    slug: "stambyte",
    label: "Stambyte",
    short: "Stambyte",
    blurb:
      "Stambyten i BRF och fastigheter med tydlig tidplan och samordning med boende.",
  },
  {
    slug: "fastighetsservice",
    label: "Fastighetsservice",
    short: "Fastighetsservice",
    blurb:
      "Löpande service, underhåll och akutåtgärder — fullutrustade servicebilar som ständigt rullar.",
  },
  {
    slug: "kontorsanpassning",
    label: "Kontorsanpassning",
    short: "Kontor",
    blurb:
      "Ombyggnad och anpassning av kontorslokaler — referenser från Opus, Rörbolaget och Stavdal.",
  },
  {
    slug: "tillbyggnad",
    label: "Tillbyggnad",
    short: "Tillbyggnad",
    blurb:
      "Altan, uterum, garage och takkupor — i samordning med befintlig villa.",
  },
  {
    slug: "snickeri",
    label: "Snickeri & golv",
    short: "Snickeri",
    blurb:
      "Fönster- och dörrbyten, golvläggning, nivellgolv, inredning och mindre snickeriarbeten.",
  },
] as const;

export const AUDIENCES = [
  {
    slug: "privatpersoner",
    label: "Privatpersoner",
    pronoun: "du",
    summary:
      "Villaägare och BRF-medlemmar som ska renovera badrum, kök eller hela hemmet.",
    cta: "Boka kostnadsfritt hembesök",
  },
  {
    slug: "brf",
    label: "Bostadsrättsföreningar",
    pronoun: "ni",
    summary:
      "Stambyten, fasader och våtrum i föreningens fastighet — med tidplan och kvalitetsdokumentation.",
    cta: "Begär offert som styrelse",
    references: ["Brf Målet i Vällingby", "Brf Planeten 234 Stockholm"],
  },
  {
    slug: "fastighetsagare",
    label: "Fastighetsägare",
    pronoun: "ni",
    summary:
      "Ramavtal, löpande service och underhåll. Servicebilar som rullar i hela Storstockholm.",
    cta: "Bli en fastighetspartner",
    references: ["Brostaden", "Klövern", "Tage Liljedals Fastigheter"],
  },
  {
    slug: "foretag",
    label: "Företag & kontor",
    pronoun: "ni",
    summary:
      "Kontorsanpassning och mindre lokalombyggnader — utförda så att verksamheten kan fortsätta.",
    cta: "Offert för kontorsanpassning",
    references: ["Opus (f.d. Bilprovningen)", "Rörbolaget", "Stavdal"],
  },
] as const;

export const AREAS = [
  // High priority — bevisade projekt
  { name: "Järfälla", slug: "jarfalla" },
  { name: "Vällingby", slug: "vallingby" },
  { name: "Solna", slug: "solna" },
  { name: "Sundbyberg", slug: "sundbyberg" },
  { name: "Kälvesta", slug: "kalvesta" },
  // Medium — närliggande
  { name: "Bromma", slug: "bromma" },
  { name: "Spånga", slug: "spanga" },
  { name: "Kista", slug: "kista" },
  { name: "Sollentuna", slug: "sollentuna" },
  { name: "Åkersberga", slug: "akersberga" },
  { name: "Stockholm city", slug: "stockholm" },
] as const;

export const CERTIFICATIONS = [
  {
    name: "BKR-behörig",
    short: "BKR",
    desc:
      "Behörig för utförande av tätskikt i våtrum enligt PER:s branschregler. Behörighetsbevis utfärdat av Byggkeramikrådet.",
    img: "/badges/bkr-vatrum.png",
    width: 100,
    height: 101,
  },
  {
    name: "ID06",
    short: "ID06",
    desc: "Anslutet till ID06 — kompetensregistrering och säker arbetsplats.",
    img: "/badges/id06.png",
    width: 100,
    height: 132,
  },
  {
    name: "Byggföretagen",
    short: "Byggföretagen",
    desc: "Medlem i Byggföretagen — branschorganisationen för seriösa byggföretag.",
    img: "/badges/byggforetagen.png",
    width: 120,
    height: 110,
  },
  {
    name: "Stockholms Byggmästareförening",
    short: "Byggmästareföreningen",
    desc: "Medlem i Stockholms Byggmästareförening.",
    img: "/badges/byggmastareforeningen.png",
    width: 100,
    height: 127,
  },
  {
    name: "Småföretagarna (SFR)",
    short: "SFR",
    desc: "Medlem i Småföretagarnas Riksförbund.",
    img: "/badges/sfr.jpg",
    width: 130,
    height: 65,
  },
] as const;

export const NAV = {
  primary: [
    { label: "Tjänster", href: "/tjanster" },
    { label: "Projekt", href: "/projekt" },
    { label: "Process", href: "/process" },
    { label: "Om oss", href: "/om-oss" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  audiencesShort: [
    { label: "Privatpersoner", href: "/for-privatpersoner" },
    { label: "BRF", href: "/for-brf" },
    { label: "Fastighetsägare", href: "/for-fastighetsagare" },
    { label: "Företag", href: "/for-foretag" },
  ],
} as const;
