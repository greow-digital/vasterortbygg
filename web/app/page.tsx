import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
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
import { TrustStat } from "@/components/TrustStat";

const PROCESS = [
  {
    title: "Kostnadsfritt möte",
    body:
      "Vi träffas hemma hos dig eller på plats hos er. Bedömning på plats, materialförslag och en känsla för upplägget.",
  },
  {
    title: "Offert & tidplan",
    body:
      "Detaljerad offert med fast pris och tidplan. ROT-avdraget dras direkt på fakturan där det är aktuellt.",
  },
  {
    title: "Genomförande",
    body:
      "Eget snickarteam, namngiven kontaktperson genom hela projektet och återkommande avstämningar — inga gissningar.",
  },
  {
    title: "Slutbesiktning",
    body:
      "Gemensam genomgång. Vid våtrumsarbete får du kvalitetsdokumentet enligt BKR (bilaga A).",
  },
];

export default function HomePage() {
  return (
    <>
      {/* === HERO (asymmetric 7/5, no overlay) === */}
      <section className="bg-stone-50">
        <Container className="pt-16 pb-20 md:pt-24 md:pb-24">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">
                Byggfirma i Järfälla · sedan 1998
              </p>
              <h1 className="mt-6 max-w-[18ch] font-serif text-[40px] leading-[1.05] text-slate-900 md:text-[52px] lg:text-[60px]">
                Renoveringar som håller — i 28 år och framåt.
              </h1>
              <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-slate-500 md:text-[18px]">
                BKR-behörig badrumsrenovering, kök, totalrenovering och
                stambyte i hela Storstockholm. Återkommande kunder är det
                bästa vi vet — och det vi mäter oss mot.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaButton href="/offert" variant="primary" size="lg">
                  {BRAND.primaryCta}
                </CtaButton>
                <CtaButton href={`tel:${BRAND.phoneTel}`} variant="secondary" size="lg">
                  Ring {BRAND.phone}
                </CtaButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200">
                <Image
                  src="/hero.png"
                  alt="Badrumsrenovering med ribbad kalksten, valnötskommod och svartram-dusch"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Trust band */}
          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-stone-200 pt-10 md:grid-cols-4">
            <TrustStat number="28" label="år i branschen" />
            <TrustStat number="BKR" label="behörig våtrum" />
            <TrustStat number="AAA" label="kreditrating" />
            <TrustStat number="ID06" label="anslutet företag" />
          </div>
        </Container>
      </section>

      {/* === SERVICES GRID === */}
      <section className="py-24 md:py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Tjänster</p>
          <h2 className="mt-4 max-w-[20ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            Det vi tar ansvar för — från enskilda WC till stambyte i BRF.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/tjanster/${s.slug}`}
                className="group rounded-lg border border-stone-200 bg-white p-6 transition-colors duration-200 hover:border-slate-800"
              >
                <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Tjänst</div>
                <h3 className="mt-3 font-serif text-[22px] leading-tight text-slate-900">{s.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-slate-800">
                  Läs mer <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* === FEATURED CASE === */}
      <section className="bg-stone-100 py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Senaste projekt</p>
          <h2 className="mt-4 max-w-[20ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            Bilderna gör jobbet — vi har bara handen i ramen.
          </h2>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-200">
                <Image
                  src="/projekt/badrum-1.jpg"
                  alt="Badrum i Kälvesta med kalkstensgolv, ekkommod från Inrbathroom och svartram-dusch"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Kälvesta</div>
              <h3 className="mt-3 font-serif text-[26px] leading-tight text-slate-900 md:text-[30px]">Badrumsrenovering</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-500">
                Klinker Retro It på golv, ljusa kaklade väggar, målade
                accentytor och inredning i ek från Inrbathroom. Hörnbrunn från
                Unidrain med custom-tile.
              </p>
              <div className="mt-7">
                <Link
                  href="/projekt"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-800 underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2"
                >
                  Se fler projekt <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* === PROCESS === */}
      <section className="py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Så jobbar vi</p>
          <h2 className="mt-4 max-w-[24ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            En tydlig process — från första kontakten till slutbesiktning.
          </h2>

          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="border-t border-stone-200 pt-6">
                <div className="font-serif text-[44px] leading-none text-sand-500 tnum">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-[22px] leading-tight text-slate-900">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Link href="/process" className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-800 underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2">
              Läs hela vår process <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* === AUDIENCES === */}
      <section className="bg-stone-100 py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Kundtyper</p>
          <h2 className="mt-4 max-w-[24ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            Olika kunder, olika köpresor — välj ditt spår.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {AUDIENCES.map((a) => (
              <Link
                key={a.slug}
                href={`/for-${a.slug}`}
                className="group rounded-lg border border-stone-200 bg-white p-7 transition-colors duration-200 hover:border-slate-800"
              >
                <h3 className="font-serif text-[22px] leading-tight text-slate-900">{a.label}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{a.summary}</p>
                {"references" in a && a.references && (
                  <p className="mt-4 text-[12px] text-stone-500">
                    Referenser: {a.references.join(" · ")}
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-slate-800">
                  {a.cta} <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* === CERTIFICATIONS === */}
      <section className="py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Behörigheter</p>
          <h2 className="mt-4 max-w-[24ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            Förtroendet på plats — verifierat och löpande.
          </h2>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <li
                key={c.short}
                className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-6"
              >
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-sm bg-stone-50 p-2">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-[18px] leading-tight text-slate-900">{c.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* === SOCIAL PROOF (no synthetic content) === */}
      <section className="bg-stone-100 py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Trygghet</p>
          <h2 className="mt-4 max-w-[20ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            Återkommande kunder är det bästa vi vet.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-slate-500">
            Vi har inte hundratals publika omdömen — istället har vi kunder
            som kommer tillbaka och referensuppdrag hos namngivna
            fastighetsägare, BRF:er och företag.
          </p>

          {/* TODO_CONTENT: koppla in Google-omdömen + B2B-citat (Brostaden, Klövern, BRF Målet)
              först när vi har skriftligt tillstånd. */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Företagskunder</div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                Opus (f.d. Bilprovningen) · Rörbolaget · Stavdal
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Fastighetsägare</div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                Brostaden · Klövern · Tage Liljedals Fastigheter
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Bostadsrättsföreningar</div>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                Brf Målet i Vällingby · Brf Planeten 234 Stockholm
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* === AREAS === */}
      <section className="py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Områden</p>
          <h2 className="mt-4 max-w-[24ch] font-serif text-[32px] leading-tight text-slate-900 md:text-[40px]">
            Vi arbetar i hela Storstockholm.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-slate-500">
            Från basen i Järfälla rullar våra servicebilar dagligen ut i hela
            regionen. Ett urval av orter där vi har pågående eller nyligen
            avslutade projekt:
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/omraden/${a.slug}`}
                  className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-[14px] text-slate-800 hover:border-slate-800"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* === LEAD FORM CTA === */}
      <section className="bg-slate-800 py-24 text-stone-50">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.14em] uppercase text-sand-300 font-medium">Berätta om ditt projekt</p>
              <h2 className="mt-4 max-w-[20ch] font-serif text-[32px] leading-tight text-stone-50 md:text-[44px]">
                Vi börjar alltid med ett kostnadsfritt möte.
              </h2>
              <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-stone-300">
                Vi lyssnar, ger en första bedömning och återkommer med offert
                och tidplan. Ring direkt eller skicka en förfrågan.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-stone-200">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} aria-hidden className="mt-0.5 text-sand-400" />
                  Bedömning på plats, inga förbindelser
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} aria-hidden className="mt-0.5 text-sand-400" />
                  Fast pris i offerten, ROT direkt på fakturan
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} aria-hidden className="mt-0.5 text-sand-400" />
                  Namngiven kontaktperson hela vägen
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6">
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
