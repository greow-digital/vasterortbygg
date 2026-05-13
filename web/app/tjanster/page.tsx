import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";
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
        intro="Vi är ett byggföretag som tar helhetsansvar — från en enskild WC-ombyggnad till stambyte i en BRF. Badrum och kök är våra signaturprodukter, men vi koordinerar gärna underentreprenörer för el och VVS i samma projekt."
        crumbs={[{ label: "Start", href: "/" }, { label: "Tjänster" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Huvudtjänster</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
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

      <section className="bg-[color:var(--color-bg-light)] py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Övrigt vi gör</h2>
          <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
            I samband med större projekt — eller som fristående uppdrag —
            utför vi även:
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {EXTRA_SERVICES.map((s) => (
              <li key={s} className="rounded-[10px] bg-white px-4 py-3 text-sm text-[color:var(--color-dark)]/85">
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Osäker på vad ditt projekt behöver?
            </h2>
            <p className="mt-3 max-w-2xl text-[17px] text-[color:var(--color-dark)]/85">
              Ring oss eller skicka en förfrågan — vi gör en första bedömning
              utan kostnad och återkommer med offert och tidplan.
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
