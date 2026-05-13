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

      <section className="py-20 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <article className="rounded-lg border border-stone-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-1 text-sand-500" aria-hidden />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Telefon</div>
                  <a href={`tel:${BRAND.phoneTel}`} className="mt-2 inline-block font-serif text-[26px] leading-none text-slate-900 tnum underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2">
                    {BRAND.phone}
                  </a>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                    Direktnummer till {BRAND.ceo}.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-stone-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 text-sand-500" aria-hidden />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">E-post</div>
                  <a href={`mailto:${BRAND.email}`} className="mt-2 inline-block font-serif text-[22px] leading-none text-slate-900 break-all underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2">
                    {BRAND.email}
                  </a>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                    Bifoga gärna planritning, bilder eller mått om du har det.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-stone-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-sand-500" aria-hidden />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Besök & post</div>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                    {BRAND.fullName}
                    <br />
                    {BRAND.address}
                    <br />
                    {BRAND.postalCode} {BRAND.city}
                  </p>
                  <p className="mt-3 text-[13px] text-stone-500 tnum">
                    Org.nr {BRAND.orgNr} · F-skatt
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-dashed border-stone-300 p-6">
              {/* TODO_PROFILE: bekräfta öppettider med Daniel och fyll i. */}
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Öppettider</div>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                Öppettider läggs upp så fort de är bekräftade. Ring oss eller
                maila — vi återkommer alltid samma eller nästa arbetsdag.
              </p>
            </article>
          </div>

          <div>
            <LeadForm title="Skicka en offertförfrågan" />
          </div>
        </Container>
      </section>

      <section className="bg-stone-100 py-20 md:py-24">
        <Container>
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">Hitta hit</p>
          <h2 className="mt-4 font-serif text-[28px] leading-tight text-slate-900 md:text-[32px]">
            Spjutvägen 5A, Järfälla
          </h2>
          <div className="mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-stone-200 bg-white grid place-items-center text-[14px] text-stone-500">
            {/* TODO_CONTENT: bädda in Google Maps iframe centrerad på Spjutvägen 5A, Järfälla. */}
            Karta bäddas in innan launch
          </div>
        </Container>
      </section>
    </>
  );
}
