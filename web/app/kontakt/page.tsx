import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Container } from "@/components/Container";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kontakta oss — byggfirma i Järfälla & Storstockholm",
  description: `Ring ${BRAND.phone}, maila ${BRAND.email} eller skicka en offertförfrågan. Vi finns på ${BRAND.address}, ${BRAND.city} och arbetar i hela Storstockholm.`,
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Berätta om ditt projekt"
        intro="Ring, maila eller skicka en förfrågan så återkommer vi inom 24 timmar. Vi börjar alltid med ett kostnadsfritt möte för att förstå projektet."
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[10px] bg-[color:var(--color-bg-light)] p-6">
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 text-[color:var(--color-primary)]" aria-hidden />
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">Telefon</div>
                  <a href={`tel:${BRAND.phoneTel}`} className="mt-1 inline-block font-display text-2xl font-bold text-[color:var(--color-primary)]">
                    {BRAND.phone}
                  </a>
                  <p className="mt-1 text-sm text-[color:var(--color-dark)]/70">
                    Direktnummer till {BRAND.ceo}.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] bg-[color:var(--color-bg-light)] p-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 text-[color:var(--color-primary)]" aria-hidden />
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">E-post</div>
                  <a href={`mailto:${BRAND.email}`} className="mt-1 inline-block font-display text-xl font-bold text-[color:var(--color-primary)] break-all">
                    {BRAND.email}
                  </a>
                  <p className="mt-1 text-sm text-[color:var(--color-dark)]/70">
                    Bifoga gärna planritning, bilder eller mått om du har det.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] bg-[color:var(--color-bg-light)] p-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-[color:var(--color-primary)]" aria-hidden />
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">Besök & post</div>
                  <p className="mt-1 text-[color:var(--color-dark)]/90">
                    {BRAND.fullName}
                    <br />
                    {BRAND.address}
                    <br />
                    {BRAND.postalCode} {BRAND.city}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--color-dark)]/70">
                    Org.nr {BRAND.orgNr} · F-skatt
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-dashed border-[color:var(--color-border)] p-6 text-sm text-[color:var(--color-dark)]/70">
              {/* TODO_PROFILE: bekräfta öppettider med Daniel och fyll i. */}
              <div className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">Öppettider</div>
              <p className="mt-2">
                Öppettider läggs upp så fort de är bekräftade. Ring oss eller
                maila — vi återkommer alltid samma eller nästa arbetsdag.
              </p>
            </div>
          </div>

          <div>
            <LeadForm title="Skicka en offertförfrågan" />
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-bg-light)] py-14 md:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">Hitta hit</h2>
          <div className="mt-6 aspect-[16/9] overflow-hidden rounded-[10px] bg-white grid place-items-center text-sm text-[color:var(--color-dark)]/50">
            {/* TODO_CONTENT: bädda in Google Maps iframe centrerad på Spjutvägen 5A, Järfälla. */}
            Karta bäddas in innan launch
          </div>
        </Container>
      </section>
    </>
  );
}
