import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { BRAND, NAV, SERVICES, CERTIFICATIONS } from "@/lib/brand";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-[color:var(--color-dark)] text-white/90">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Image
            src="/logo.png"
            alt={BRAND.shortName}
            width={300}
            height={94}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm text-white/70">
            {BRAND.fullName}
            <br />
            {BRAND.address}
            <br />
            {BRAND.postalCode} {BRAND.city}
          </p>
          <p className="mt-3 text-sm text-white/70">
            <a href={`mailto:${BRAND.email}`} className="hover:text-white">
              {BRAND.email}
            </a>
            <br />
            <a href={`tel:${BRAND.phoneTel}`} className="hover:text-white">
              {BRAND.phone}
            </a>
          </p>
          <p className="mt-3 text-xs text-white/50">
            Org.nr: {BRAND.orgNr} · F-skatt
          </p>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            @{BRAND.instagramHandle} <ExternalLink size={14} aria-hidden />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Tjänster
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/tjanster/${s.slug}`} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            För
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {NAV.audiencesShort.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className="hover:text-white">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Företaget
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/om-oss" className="hover:text-white">Om {BRAND.shortName}</Link></li>
            <li><Link href="/process" className="hover:text-white">Vår process</Link></li>
            <li><Link href="/garantier" className="hover:text-white">Behörigheter & garantier</Link></li>
            <li><Link href="/projekt" className="hover:text-white">Projekt</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-5 py-6 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {CERTIFICATIONS.map((c) => (
              <span key={c.short} title={c.desc} className="inline-flex items-center gap-2 rounded bg-white/95 px-2 py-1">
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
          <span className="text-xs text-white/60">© {year} {BRAND.fullName}</span>
        </Container>
      </div>
    </footer>
  );
}
