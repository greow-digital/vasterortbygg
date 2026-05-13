"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BRAND, NAV } from "@/lib/brand";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-stone-50/95 backdrop-blur border-b border-stone-200"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${headerBg}`}>
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="inline-flex items-center" aria-label={BRAND.shortName}>
          <Image
            src="/logo.png"
            alt={BRAND.shortName}
            width={300}
            height={94}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Huvudmeny">
          {NAV.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-slate-700 hover:text-slate-900 underline decoration-transparent decoration-1 underline-offset-[6px] hover:decoration-sand-400 hover:decoration-2 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="hidden items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 md:inline-flex"
          >
            <Phone size={16} aria-hidden />
            <span className="tnum">{BRAND.phone}</span>
          </a>
          <CtaButton href="/offert" variant="primary" size="md" className="hidden sm:inline-flex">
            {BRAND.primaryCta}
          </CtaButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-stone-300 text-slate-800 lg:hidden"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-stone-200 bg-stone-50 lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {NAV.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-stone-200" />
            <div className="text-[11px] tracking-[0.14em] uppercase text-stone-500">För</div>
            {NAV.audiencesShort.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-stone-200" />
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="inline-flex items-center gap-2 text-base font-medium text-slate-800"
            >
              <Phone size={18} aria-hidden />
              <span className="tnum">{BRAND.phone}</span>
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
