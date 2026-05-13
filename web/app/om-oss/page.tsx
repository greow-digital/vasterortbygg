import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, CERTIFICATIONS } from "@/lib/brand";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Om Västerorts Bygg — byggföretag i Järfälla sedan 1998",
  description:
    "Västerorts Bygg har 28 års drift och 35 års branscherfarenhet. BKR-behöriga, AAA-ratade och baserade i Järfälla. Möt Daniel och teamet bakom byggfirman.",
};

const STATS = [
  { label: "År i branschen", value: `${BRAND.yearsInBusiness} år` },
  { label: "Branscherfarenhet (VD)", value: `${BRAND.industryYears} år` },
  { label: "Anställda", value: `${BRAND.employees}` },
  { label: "Kreditrating", value: "AAA" },
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

      <section className="py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Det här gör vi</h2>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-[color:var(--color-dark)]/85">
              <p>
                Västerorts Bygg utför om- och tillbyggnader, service och underhåll
                av bostäder, fastigheter och kontor — till fastighetsägare,
                bostadsrättsföreningar och villaägare. Vi arbetar över hela
                Storstockholm och har fullutrustade servicebilar som ständigt
                rullar.
              </p>
              <p>
                Vi är måna om att ha ett nära samarbete med våra kunder. Med
                erfarenhet och kunskap hjälper vi till med tips och förslag och
                lotsar kunden genom hela byggprocessen — från första bedömning
                till slutbesiktning.
              </p>
              <p>
                Företaget har bedrivits sedan 2005 och totalt har vi 35 års
                erfarenhet i byggbranschen.
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-5 self-start">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-[10px] bg-[color:var(--color-bg-light)] p-5">
                <dt className="text-sm text-[color:var(--color-dark)]/70">{s.label}</dt>
                <dd className="mt-1 font-display text-3xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-[color:var(--color-bg-light)] py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Vår kvalitetspolicy</h2>
            <p className="mt-3 text-sm text-[color:var(--color-dark)]/70">— från vasterortsbygg.se, ordagrant</p>
          </div>
          <blockquote className="rounded-[10px] bg-white p-6 text-[17px] leading-relaxed text-[color:var(--color-dark)]/90 md:text-lg">
            <p className="italic">
              &ldquo;Att utföra ett arbete som är komplett och felfritt till en
              rimlig kostnad samt göra varje beställare till en referens. Detta
              uppnår vi genom god kunskap, erfarenhet och noggrannhet. Vi
              arbetar alltid med de senaste verktyg och material från de
              marknadsledande leverantörerna.&rdquo;
            </p>
            <footer className="mt-5 text-sm text-[color:var(--color-dark)]/70">
              Tre kvalitetslöften:
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Vi följer överenskommen tidplan.</li>
                <li>Arbetet blir korrekt utfört.</li>
                <li>Du som kund blir nöjd.</li>
              </ul>
            </footer>
          </blockquote>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Daniel och teamet</h2>
          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1.3fr]">
            <div className="rounded-[10px] bg-[color:var(--color-bg-light)] p-6">
              <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
                VD & kontaktperson
              </div>
              <div className="mt-2 font-display text-2xl font-bold">{BRAND.ceo}</div>
              <p className="mt-3 text-sm text-[color:var(--color-dark)]/80">
                35 års erfarenhet i byggbranschen. Daniel är din kontaktperson
                från första mötet till slutbesiktningen.
              </p>
              <p className="mt-3 text-sm">
                <a href={`tel:${BRAND.phoneTel}`} className="font-semibold text-[color:var(--color-primary)]">
                  {BRAND.phone}
                </a>
                {" · "}
                <a href={`mailto:${BRAND.email}`} className="font-semibold text-[color:var(--color-primary)]">
                  {BRAND.email}
                </a>
              </p>
            </div>
            <div className="rounded-[10px] border border-dashed border-[color:var(--color-border)] p-6 text-sm text-[color:var(--color-dark)]/70">
              {/* TODO_CONTENT: lägg in personalbilder + korta intro per snickare
                  (verifiera namn och tillstånd med Daniel innan publicering). */}
              <h3 className="font-display text-lg font-semibold text-[color:var(--color-dark)]">Teamet</h3>
              <p className="mt-2">
                Vi är sex personer i teamet. Personalbilder och korta intro
                läggs upp så fort vi har tillstånd från alla.
              </p>
              <p className="mt-3">
                Alla i teamet är ID06-registrerade och tätskiktsarbete utförs
                av BKR-behörig personal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-bg-light)] py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Behörigheter & medlemskap</h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            Det formella förtroendet på plats. Detaljerad genomgång finns på{" "}
            <a href="/garantier" className="text-[color:var(--color-primary)] underline underline-offset-4">
              /garantier
            </a>.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c.short} className="flex items-start gap-4 rounded-[10px] bg-white p-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded bg-[color:var(--color-bg-light)] p-2">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
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
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Hitta oss</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.3fr]">
            <div className="rounded-[10px] bg-[color:var(--color-bg-light)] p-6 text-sm">
              <div className="font-display text-lg font-semibold">{BRAND.fullName}</div>
              <p className="mt-2 text-[color:var(--color-dark)]/85">
                {BRAND.address}
                <br />
                {BRAND.postalCode} {BRAND.city}
              </p>
              <p className="mt-3 text-[color:var(--color-dark)]/85">
                Org.nr {BRAND.orgNr} · F-skatt
              </p>
              <p className="mt-3">
                <a href={`tel:${BRAND.phoneTel}`} className="font-semibold text-[color:var(--color-primary)]">
                  {BRAND.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BRAND.email}`} className="font-semibold text-[color:var(--color-primary)]">
                  {BRAND.email}
                </a>
              </p>
            </div>
            <div className="aspect-[4/3] rounded-[10px] bg-[color:var(--color-bg-light)] grid place-items-center text-sm text-[color:var(--color-dark)]/50">
              {/* TODO_CONTENT: bädda in Google Maps iframe centrerad på Spjutvägen 5A, Järfälla. */}
              Karta bäddas in innan launch
            </div>
          </div>
          <div className="mt-8">
            <CtaButton href="/kontakt" variant="primary" size="lg">Kontakta oss</CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
