import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, CERTIFICATIONS } from "@/lib/brand";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { TrustStat } from "@/components/TrustStat";

export const metadata: Metadata = {
  title: "Om Västerorts Bygg — byggföretag i Järfälla sedan 1998",
  description:
    "Västerorts Bygg har 28 års drift och 35 års branscherfarenhet. BKR-behöriga, AAA-ratade och baserade i Järfälla. Möt Daniel och teamet bakom byggfirman.",
};

const STATS = [
  { number: `${BRAND.yearsInBusiness}`, label: "år i branschen" },
  { number: `${BRAND.industryYears}`, label: "branscherfarenhet (VD)" },
  { number: `${BRAND.employees}`, label: "anställda" },
  { number: "AAA", label: "kreditrating" },
];

export default function OmOssPage() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title={`${BRAND.shortName} — ett byggföretag som tar ansvar`}
        intro="Vi är ett byggföretag i Järfälla med verksamhet sedan 2005 och företaget grundat 1998. Daniel Eie Fredriksson leder ett team på sex som renoverar hem och fastigheter i hela Storstockholm."
        crumbs={[{ label: "Start", href: "/" }, { label: "Om oss" }]}
      />

      <section className="py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Det här gör vi</p>
            <h2 className="mt-4 font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
              Om- och tillbyggnad, service och underhåll — i hela Storstockholm
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-700">
              <p>
                Västerorts Bygg utför om- och tillbyggnader, service och
                underhåll av bostäder, fastigheter och kontor — till
                fastighetsägare, bostadsrättsföreningar och villaägare. Vi
                arbetar över hela Storstockholm och har fullutrustade
                servicebilar som ständigt rullar.
              </p>
              <p>
                Vi är måna om att ha ett nära samarbete med våra kunder. Med
                erfarenhet och kunskap hjälper vi till med tips och förslag
                och lotsar kunden genom hela byggprocessen — från första
                bedömning till slutbesiktning.
              </p>
              <p>
                Företaget har bedrivits sedan 2005 och totalt har vi 35 års
                erfarenhet i byggbranschen.
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-10 self-start">
            {STATS.map((s) => (
              <div key={s.label}>
                <TrustStat number={s.number} label={s.label} />
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-stone-100 py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Kvalitetspolicy</p>
            <h2 className="mt-4 font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
              Vår kvalitetspolicy
            </h2>
            <p className="mt-4 text-[14px] text-stone-500">— från vasterortsbygg.se, ordagrant</p>
          </div>
          <blockquote className="border-l-2 border-sand-400 pl-8">
            <p className="font-serif text-[22px] leading-relaxed text-slate-900 md:text-[26px]">
              &ldquo;Att utföra ett arbete som är komplett och felfritt till
              en rimlig kostnad samt göra varje beställare till en referens.
              Detta uppnår vi genom god kunskap, erfarenhet och noggrannhet.
              Vi arbetar alltid med de senaste verktyg och material från de
              marknadsledande leverantörerna.&rdquo;
            </p>
            <footer className="mt-8 text-[15px] leading-relaxed text-slate-500">
              <div className="font-medium text-slate-700">Tre kvalitetslöften</div>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Vi följer överenskommen tidplan.</li>
                <li>Arbetet blir korrekt utfört.</li>
                <li>Du som kund blir nöjd.</li>
              </ul>
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Teamet</p>
          <h2 className="mt-4 font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
            Daniel och de andra
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.3fr]">
            <div className="rounded-lg border border-stone-200 bg-white p-7">
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">VD & kontaktperson</div>
              <h3 className="mt-3 font-serif text-[22px] leading-tight text-slate-900">{BRAND.ceo}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                35 års erfarenhet i byggbranschen. Daniel är din kontaktperson
                från första mötet till slutbesiktningen.
              </p>
              <p className="mt-4 text-[15px]">
                <a href={`tel:${BRAND.phoneTel}`} className="tnum font-medium text-slate-800 underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2">
                  {BRAND.phone}
                </a>
                <span className="text-stone-400">  ·  </span>
                <a href={`mailto:${BRAND.email}`} className="font-medium text-slate-800 underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2">
                  {BRAND.email}
                </a>
              </p>
            </div>
            <div className="rounded-lg border border-dashed border-stone-300 p-7">
              {/* TODO_CONTENT: lägg in personalbilder + korta intro per snickare (verifiera namn och tillstånd med Daniel). */}
              <h3 className="font-serif text-[22px] leading-tight text-slate-900">Snickarteamet</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
                Vi är sex personer i teamet. Personalbilder och korta intro
                läggs upp så fort vi har tillstånd från alla.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                Alla i teamet är ID06-registrerade och tätskiktsarbete utförs
                av BKR-behörig personal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-stone-100 py-20 md:py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Behörigheter</p>
          <h2 className="mt-4 max-w-[24ch] font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
            Det formella förtroendet på plats
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c.short} className="flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-6">
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

      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
              Hör av dig.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-slate-500">
              Det enklaste sättet att komma vidare är ett kostnadsfritt möte
              — vi tar med oss erfarenheten, ni berättar om projektet.
            </p>
          </div>
          <CtaButton href="/kontakt" variant="primary" size="lg">Kontakta oss</CtaButton>
        </Container>
      </section>
    </>
  );
}
