import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { BRAND, NAV, SERVICES, CERTIFICATIONS } from "@/lib/brand";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-slate-800 text-stone-50">
      <Container className="grid gap-10 pt-20 pb-12 md:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt={BRAND.shortName}
            width={300}
            height={94}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-6 text-sm text-stone-300 leading-relaxed">
            {BRAND.fullName}
            <br />
            {BRAND.address}
            <br />
            {BRAND.postalCode} {BRAND.city}
          </p>
          <p className="mt-4 text-sm text-stone-300">
            <a href={`mailto:${BRAND.email}`} className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">
              {BRAND.email}
            </a>
            <br />
            <a href={`tel:${BRAND.phoneTel}`} className="tnum hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">
              {BRAND.phone}
            </a>
          </p>
          <p className="mt-4 text-xs text-stone-400 tnum">
            Org.nr {BRAND.orgNr} · F-skatt
          </p>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-stone-300 hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4"
          >
            @{BRAND.instagramHandle} <ExternalLink size={14} aria-hidden />
          </a>
        </div>

        <div>
          <h3 className="text-[11px] tracking-[0.14em] uppercase text-stone-400 font-medium">Tjänster</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-300">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/tjanster/${s.slug}`} className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] tracking-[0.14em] uppercase text-stone-400 font-medium">För</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-300">
            {NAV.audiencesShort.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] tracking-[0.14em] uppercase text-stone-400 font-medium">Företaget</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-300">
            <li><Link href="/om-oss" className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">Om {BRAND.shortName}</Link></li>
            <li><Link href="/process" className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">Vår process</Link></li>
            <li><Link href="/garantier" className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">Behörigheter & garantier</Link></li>
            <li><Link href="/projekt" className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">Projekt</Link></li>
            <li><Link href="/kontakt" className="hover:text-stone-50 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">Kontakt</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-5 py-6 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {CERTIFICATIONS.map((c) => (
              <span key={c.short} title={c.desc} className="inline-flex items-center rounded-sm bg-stone-50 px-2 py-1">
                <Image
                  src={c.img}
                  alt={c.name}
                  width={c.width}
                  height={c.height}
                  className="h-10 w-auto object-contain"
                />
              </span>
            ))}
          </div>
          <span className="text-xs text-stone-400">© {year} {BRAND.fullName}</span>
        </Container>
      </div>
    </footer>
  );
}
