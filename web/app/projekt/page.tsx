import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projekt — Badrum, kök och totalrenoveringar i Storstockholm",
  description:
    "Ett urval av våra renoveringsprojekt i Järfälla, Solna, Sundbyberg, Kälvesta och övriga Storstockholm. Badrum, kök, totalrenoveringar och BRF-uppdrag.",
};

const REAL = [
  {
    img: "/projekt/badrum-1.jpg",
    title: "Badrumsrenovering",
    location: "Kälvesta",
    details:
      "Kalksten i fallande längder, ekkommod från inrbathroom, svartram-dusch med hörnbrunn från Unidrain och custom-tile.",
  },
];

const COMING = [
  { title: "Köksrenovering", location: "Sundbyberg", note: "IKEA-stommar + fronter från Järfälla Kök" },
  { title: "Lägenhetsbadrum", location: "Solna", note: "Färgaccent bakom kommod, ekdetaljer" },
  { title: "Totalrenovering, villa", location: "Storstockholm", note: "Återkommande kund — kök + badrum + gästrum + WiC + förråd" },
  { title: "WC-ombyggnad", location: "Storstockholm", note: "Vit 15×15 kakel, kalkstensgolv, Unidrain hörnbrunn" },
  { title: "BRF-stambyte", location: "Storstockholm", note: "Samordning med boende, BKR-kvalitetsdokument" },
  { title: "Kontorsanpassning", location: "Storstockholm", note: "Referensuppdrag B2B" },
];

export default function ProjektPage() {
  return (
    <>
      <PageHero
        eyebrow="Projekt"
        title="Verkliga renoveringar i Storstockholm"
        intro="Ett urval projekt från Järfälla, Solna, Sundbyberg och Kälvesta. Bildbanken växer löpande från vårt Instagram-arkiv — följ @vasterortsbygg för fler."
        crumbs={[{ label: "Start", href: "/" }, { label: "Projekt" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Senaste case</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REAL.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-[10px] bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.img}
                    alt={`${p.title} i ${p.location} — ${p.details}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
                    {p.location}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-dark)]/80">{p.details}</p>
                </div>
              </article>
            ))}
            {/* TODO_CONTENT: lyft in resterande case från Instagram-arkivet
                (bilder + kort beskrivning), och bygg sedan dedikerade /projekt/[slug]-sidor. */}
            {COMING.map((p) => (
              <article key={`${p.title}-${p.location}`} className="overflow-hidden rounded-[10px] bg-white shadow-sm">
                <div className="aspect-[4/3] grid place-items-center bg-[color:var(--color-dark)]/5 text-sm text-[color:var(--color-dark)]/40">
                  Projektbild kommer
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
                    {p.location}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-dark)]/80">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-bg-light)] py-14 md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Vill du veta mer om ett specifikt projekt?
            </h2>
            <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
              Hör av dig så berättar vi om materialval, leverantörer och tidplan —
              och kan dela referenskontakter där det är aktuellt.
            </p>
          </div>
          <CtaButton href="/kontakt" variant="primary" size="lg">Kontakta oss</CtaButton>
        </Container>
      </section>
    </>
  );
}
