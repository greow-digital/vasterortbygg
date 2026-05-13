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
      "Kalksten i fallande längder, ekkommod från Inrbathroom, svartram-dusch med hörnbrunn från Unidrain och custom-tile.",
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

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REAL.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-lg border border-stone-200 bg-white">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={p.img}
                    alt={`${p.title} i ${p.location} — ${p.details}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">{p.location}</div>
                  <h2 className="mt-2 font-serif text-[22px] leading-tight text-slate-900">{p.title}</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{p.details}</p>
                </div>
              </article>
            ))}
            {/* TODO_CONTENT: lyft in resterande case från Instagram-arkivet och bygg /projekt/[slug]-sidor. */}
            {COMING.map((p) => (
              <article key={`${p.title}-${p.location}`} className="overflow-hidden rounded-lg border border-stone-200 bg-white">
                <div className="aspect-[4/5] grid place-items-center bg-stone-100 text-[14px] text-stone-500">
                  Projektbild kommer
                </div>
                <div className="p-6">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">{p.location}</div>
                  <h2 className="mt-2 font-serif text-[22px] leading-tight text-slate-900">{p.title}</h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-100 py-20 md:py-24">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
              Vill du veta mer om ett specifikt projekt?
            </h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-slate-500">
              Hör av dig så berättar vi om materialval, leverantörer och tidplan
              — och kan dela referenskontakter där det är aktuellt.
            </p>
          </div>
          <CtaButton href="/kontakt" variant="primary" size="lg">Kontakta oss</CtaButton>
        </Container>
      </section>
    </>
  );
}
