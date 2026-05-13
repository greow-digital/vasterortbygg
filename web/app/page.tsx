import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, ShieldCheck, Hammer } from "lucide-react";
import {
  BRAND,
  SERVICES,
  AUDIENCES,
  AREAS,
  CERTIFICATIONS,
} from "@/lib/brand";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { LeadForm } from "@/components/LeadForm";

const PROCESS = [
  {
    title: "Kostnadsfritt möte",
    body:
      "Vi träffas hemma hos dig eller på plats hos er. Du får en första bedömning, tips på materialval och en känsla för upplägget.",
  },
  {
    title: "Offert & tidplan",
    body:
      "Du får en detaljerad offert med fast pris och tidplan. ROT-avdraget dras direkt på fakturan där det är aktuellt.",
  },
  {
    title: "Avtal",
    body:
      "Vi tecknar avtal enligt AB-standard eller Konsumenttjänstlagen. Ingen otydlighet om vad som ingår.",
  },
  {
    title: "Genomförande",
    body:
      "Vårt team utför arbetet med namngiven kontaktperson genom hela projektet. Återkommande avstämningar — inga gissningar.",
  },
  {
    title: "Slutbesiktning",
    body:
      "Vi går igenom resultatet tillsammans. Vid våtrumsarbete får du kvalitetsdokumentet enligt BKR (bilaga A).",
  },
];

export default function HomePage() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative isolate overflow-hidden bg-[color:var(--color-dark)] text-white">
        <Image
          src="/projekt/badrum-1.jpg"
          alt="Badrumsrenovering — kalkstensgolv, ekkommod och svartram-dusch"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/30"
        />

        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Byggfirma i Järfälla — sedan {BRAND.founded}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-[60px]">
              Renovera badrum, kök eller hela hemmet — med ett företag som tar
              ansvar.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Västerorts Bygg har renoverat hem och fastigheter i Storstockholm
              i 28 år. Vi är BKR-behöriga, AAA-ratade och kända för relationen
              — våra kunder kommer tillbaka.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
              {BRAND.usps.map((u) => (
                <li key={u.label} className="inline-flex items-center gap-2">
                  <Award size={18} className="text-[color:var(--color-primary)]" aria-hidden />
                  <span className="font-medium">{u.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/offert" variant="primary" size="lg">
                {BRAND.primaryCta}
              </CtaButton>
              <CtaButton href={`tel:${BRAND.phoneTel}`} variant="secondary" size="lg">
                Ring {BRAND.phone}
              </CtaButton>
            </div>
          </div>

          <div className="md:justify-self-end md:w-full md:max-w-md">
            <LeadForm />
          </div>
        </Container>
      </section>

      {/* === TRUST BAR === */}
      <section className="border-y border-[color:var(--color-border)]/40 bg-[color:var(--color-bg-light)]">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm text-[color:var(--color-dark)]/80">
          <span className="inline-flex items-center gap-2"><ShieldCheck size={16} aria-hidden /> BKR-behörig våtrum</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck size={16} aria-hidden /> ID06</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck size={16} aria-hidden /> AAA i kreditvärdighet</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck size={16} aria-hidden /> F-skatt</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck size={16} aria-hidden /> ROT-avdrag direkt på fakturan</span>
        </Container>
      </section>

      {/* === SERVICES GRID === */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-[40px]">
            Det vi gör
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            Badrum och kök är våra signaturprodukter, men vi tar ansvar för
            helheten — från enskilda WC-ombyggnader till stambyten och
            kontorsanpassningar.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/tjanster/${s.slug}`}
                className="group rounded-[10px] border border-[color:var(--color-border)]/50 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-bg-light)] text-[color:var(--color-primary)]">
                  <Hammer size={18} aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.label}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-dark)]/80">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-primary)]">
                  Läs mer <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* === PROJECTS PLACEHOLDER — only real Instagram projects, no synthetic content === */}
      <section className="bg-[color:var(--color-bg-light)] py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-[40px]">Aktuella projekt</h2>
              <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
                Bilder och case från badrum, kök och totalrenoveringar runtom i
                Storstockholm. Bildbanken kommer från vårt Instagram-arkiv.
              </p>
            </div>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[color:var(--color-primary)] hover:underline underline-offset-4"
            >
              Följ @{BRAND.instagramHandle} →
            </a>
          </div>
          {/* TODO_CONTENT: importera resterande case från Instagram (Sundbyberg-kök, Solna-lägenhet, BRF-projekt, etc.). */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="overflow-hidden rounded-[10px] bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/projekt/badrum-1.jpg"
                  alt="Badrumsrenovering med kalkstensgolv, ekkommod från inrbathroom och svartram-dusch"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold">Badrumsrenovering</div>
                <div className="mt-1 text-xs text-[color:var(--color-dark)]/60">
                  Kalksten · ekkommod · custom-tile hörnbrunn från Unidrain
                </div>
              </div>
            </article>
            {["Köksrenovering, Sundbyberg", "Lägenhetsbadrum, Solna", "Totalrenovering, villa", "WC-ombyggnad", "BRF-stambyte"].map((label) => (
              <article key={label} className="overflow-hidden rounded-[10px] bg-white shadow-sm">
                <div className="aspect-[4/3] grid place-items-center bg-[color:var(--color-dark)]/5 text-sm text-[color:var(--color-dark)]/40">
                  Projektbild kommer
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="mt-1 text-xs text-[color:var(--color-dark)]/60">Case läggs upp innan launch</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="/projekt" variant="ghost">
              Se alla projekt <ArrowRight size={16} aria-hidden />
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* === PROCESS === */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-[40px]">Så jobbar vi</h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            En tydlig process från första kontakten till slutbesiktning — med
            en namngiven kontaktperson hela vägen.
          </p>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-[10px] border border-[color:var(--color-border)]/50 bg-white p-5"
              >
                <div className="font-display text-3xl font-bold text-[color:var(--color-primary)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-dark)]/80">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <CtaButton href="/process" variant="ghost">
              Läs mer om vår process <ArrowRight size={16} aria-hidden />
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* === AUDIENCES === */}
      <section className="bg-[color:var(--color-bg-light)] py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-[40px]">
            Vi jobbar med fyra olika kundtyper
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            Olika kunder har olika frågor och olika köpresor. Välj ditt spår så
            visar vi det som är relevant.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {AUDIENCES.map((a) => (
              <Link
                key={a.slug}
                href={`/for-${a.slug}`}
                className="group rounded-[10px] bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-display text-xl font-semibold">{a.label}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-dark)]/80">{a.summary}</p>
                {"references" in a && a.references && (
                  <p className="mt-3 text-xs text-[color:var(--color-dark)]/60">
                    Referenser: {a.references.join(" · ")}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-primary)]">
                  {a.cta} <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* === CERTIFICATIONS === */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-[40px]">
            Behörigheter & medlemskap
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            Det formella förtroendet på plats — så du vet vem du anlitar.
          </p>

          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <li
                key={c.short}
                className="flex items-start gap-4 rounded-[10px] border border-[color:var(--color-border)]/50 bg-white p-5"
              >
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded bg-[color:var(--color-bg-light)] p-2">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={64}
                    height={64}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-dark)]/80">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButton href="/garantier" variant="ghost">
              Läs mer om våra behörigheter & garantier <ArrowRight size={16} aria-hidden />
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* === REVIEWS / SOCIAL PROOF — no synthetic content (research.md confirmed 0 publika omdömen) === */}
      <section className="bg-[color:var(--color-bg-light)] py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-[40px]">
            Återkommande kunder är det bästa vi vet
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            Vi har inte hundratals publika omdömen — istället har vi kunder som
            kommer tillbaka, och referensuppdrag hos namngivna fastighetsägare,
            bostadsrättsföreningar och företag.
          </p>

          {/* TODO_CONTENT: kopplar in Google-omdömen + B2B-citat (Brostaden, Klövern, BRF Målet)
              först när vi har skriftligt tillstånd från kunden. SEO.md §5: aldrig syntetiska citat. */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[10px] bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
                Företagskunder
              </div>
              <p className="mt-3 text-sm text-[color:var(--color-dark)]/85">
                Opus (f.d. Bilprovningen) · Rörbolaget · Stavdal
              </p>
            </div>
            <div className="rounded-[10px] bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
                Fastighetsägare
              </div>
              <p className="mt-3 text-sm text-[color:var(--color-dark)]/85">
                Brostaden · Klövern · Tage Liljedals Fastigheter
              </p>
            </div>
            <div className="rounded-[10px] bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
                Bostadsrättsföreningar
              </div>
              <p className="mt-3 text-sm text-[color:var(--color-dark)]/85">
                Brf Målet i Vällingby · Brf Planeten 234 Stockholm
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* === AREAS === */}
      <section className="py-16 md:py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold md:text-[40px]">
            Vi arbetar i hela Storstockholm
          </h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            Från basen i Järfälla rullar våra servicebilar dagligen ut i hela
            regionen. Här är några av orterna där vi har pågående eller nyligen
            avslutade projekt.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/omraden/${a.slug}`}
                  className="inline-flex rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--color-dark)] hover:border-[color:var(--color-dark)] hover:text-[color:var(--color-primary)]"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[color:var(--color-dark)]/70">
            Hittar du inte din ort? Hör av dig — vi täcker hela {BRAND.region}.
          </p>
        </Container>
      </section>

      {/* === FINAL CTA === */}
      <section className="bg-[color:var(--color-dark)] py-16 text-white md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-[40px]">
              Berätta om ditt projekt
            </h2>
            <p className="mt-3 max-w-2xl text-[17px] text-white/85">
              Boka ett kostnadsfritt möte. Vi lyssnar, ger en första bedömning
              och återkommer med offert och tidplan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/offert" variant="primary" size="lg">
              {BRAND.primaryCta}
            </CtaButton>
            <CtaButton href={`tel:${BRAND.phoneTel}`} variant="secondary" size="lg">
              Ring {BRAND.phone}
            </CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
