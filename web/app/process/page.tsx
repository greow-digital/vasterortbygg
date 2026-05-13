import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Vår process — från första kontakt till slutbesiktning",
  description:
    "Så jobbar vi: kostnadsfritt möte, offert, avtal enligt AB/KTjL, genomförande med namngiven kontaktperson, slutbesiktning och BKR-kvalitetsdokument vid våtrum.",
};

const STEPS = [
  {
    title: "Kostnadsfritt möte",
    body:
      "Vi träffas hemma hos dig eller på plats hos er. Vi tittar på utrymmet, lyssnar på vad ni vill göra och ger en första bedömning av tidplan och budgetspann. Inga förbindelser.",
    out: ["Bedömning på plats", "Materialförslag", "Tidplan i grova drag"],
  },
  {
    title: "Offert & tidplan",
    body:
      "Vi tar fram en detaljerad offert med vad som ingår, materialval och tidplan. Där ROT-avdrag är aktuellt dras det direkt på fakturan.",
    out: ["Specificerad offert", "Tydlig tidplan", "ROT på fakturan"],
  },
  {
    title: "Avtal",
    body:
      "Avtal tecknas enligt branschens standardavtal — AB-avtal för entreprenader och Konsumenttjänstlagen (KTjL) mot privatkund. Inga otydligheter om vad som ingår.",
    out: ["AB / KTjL enligt projekttyp", "Skriftligt avtal", "Försäkringsbevis"],
  },
  {
    title: "Genomförande",
    body:
      "Vårt eget snickarteam utför arbetet. Du får en namngiven kontaktperson genom hela projektet och regelbundna avstämningar — inga gissningar om var ni är i tidplanen.",
    out: ["Namngiven kontaktperson", "Återkommande avstämningar", "ID06-registrering på plats"],
  },
  {
    title: "Slutbesiktning",
    body:
      "Vi går igenom resultatet tillsammans. Vid våtrum får du kvalitetsdokumentet enligt BKR:s branschregler (bilaga A) — ett intyg på att tätskiktet är utfört enligt PER:s regler.",
    out: ["Gemensam genomgång", "BKR-kvalitetsdokument vid våtrum", "Eventuella anmärkningar åtgärdas"],
  },
  {
    title: "Garantibesiktning",
    body:
      "Vi följer upp efter en överenskommen tid för att stämma av att allt fungerar som det ska. Reklamationsrätten gäller i 3 år enligt KTjL och 10 år för dolda fel.",
    out: ["Uppföljning enligt avtal", "Reklamationsrätt enligt lag", "Eventuella justeringar"],
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Vår process"
        title="Så jobbar vi — från första kontakten till slutbesiktning"
        intro="En tydlig process där du alltid vet var vi är i projektet och vad nästa steg är. Samma upplägg oavsett om det är ett badrum, en BRF-renovering eller en kontorsanpassning."
        crumbs={[{ label: "Start", href: "/" }, { label: "Process" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <ol className="space-y-10">
            {STEPS.map((s, i) => (
              <li key={s.title} className="grid gap-6 md:grid-cols-[120px_1fr]">
                <div className="font-display text-5xl font-bold text-[color:var(--color-primary)] md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-dark)]/85">
                    {s.body}
                  </p>
                  <ul className="mt-4 grid gap-2 md:grid-cols-3">
                    {s.out.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-[color:var(--color-dark)]/85">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[color:var(--color-primary)]" aria-hidden />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[color:var(--color-dark)] py-14 text-white md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Klar med planeringen? Vi börjar med ett möte.
            </h2>
            <p className="mt-3 max-w-2xl text-[17px] text-white/85">
              Kostnadsfritt och utan förbindelser — du får en bedömning och en
              känsla för upplägget innan vi går vidare.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/offert" variant="primary" size="lg">{BRAND.primaryCta}</CtaButton>
            <CtaButton href={`tel:${BRAND.phoneTel}`} variant="secondary" size="lg">
              Ring {BRAND.phone}
            </CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
