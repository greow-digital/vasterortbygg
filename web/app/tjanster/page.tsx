import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/brand";
import { Container } from "@/components/Container";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tjänster — Badrum, kök, totalrenovering & stambyte",
  description:
    "Västerorts Bygg utför badrum, kök, totalrenovering, stambyte, fastighetsservice och kontorsanpassning i hela Storstockholm. BKR-behöriga och AAA-ratade.",
};

const EXTRA_SERVICES = [
  "Tvättstugerenoveringar",
  "Fasadrenoveringar",
  "Källarrenoveringar",
  "Uterum, altaner och staket",
  "Fönster- och dörrbyten",
  "Golvläggning och nivellgolv",
  "Inredning och mindre snickeriarbeten",
];

export default function TjansterPage() {
  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title="Det vi gör — och tar fullt ansvar för"
        intro="Vi är ett byggföretag som tar helhetsansvar — från en enskild WC-ombyggnad till stambyte i en BRF. Badrum och kök är våra signaturprodukter, och vi koordinerar gärna underentreprenörer för el och VVS i samma projekt."
        crumbs={[{ label: "Start", href: "/" }, { label: "Tjänster" }]}
      />

      <section className="py-20 md:py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Huvudtjänster</p>
          <h2 className="mt-4 font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
            Åtta tjänster — samma process
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
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

      <section className="bg-stone-100 py-20 md:py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Övrigt vi gör</p>
          <h2 className="mt-4 font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
            I samband med större projekt — eller fristående
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {EXTRA_SERVICES.map((s) => (
              <li key={s} className="rounded-md border border-stone-200 bg-white px-5 py-4 text-[15px] text-slate-700">
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
              Osäker på vad ditt projekt behöver?
            </h2>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-slate-500">
              Ring oss eller skicka en förfrågan — vi gör en första bedömning
              utan kostnad och återkommer med offert och tidplan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/offert" variant="primary" size="lg">{BRAND.primaryCta}</CtaButton>
            <CtaButton href={`tel:${BRAND.phoneTel}`} variant="secondary" size="lg">Ring {BRAND.phone}</CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
