"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { BRAND, NAV } from "@/lib/brand";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)]/40 bg-white/95 backdrop-blur">
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
              className="text-[15px] font-medium text-[color:var(--color-dark)] hover:text-[color:var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="hidden items-center gap-2 text-sm font-semibold text-[color:var(--color-dark)] hover:text-[color:var(--color-primary)] md:inline-flex"
          >
            <Phone size={16} aria-hidden />
            <span>{BRAND.phone}</span>
          </a>
          <CtaButton href="/offert" variant="primary" size="md" className="hidden sm:inline-flex">
            {BRAND.primaryCta}
          </CtaButton>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--color-border)] lg:hidden"
            aria-label={open ? "Stäng meny" : "Öppna meny"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[color:var(--color-border)]/40 bg-white lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {NAV.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[color:var(--color-dark)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-[color:var(--color-border)]/40" />
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-dark)]/60">
              För
            </div>
            {NAV.audiencesShort.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[color:var(--color-dark)]/85"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-[color:var(--color-border)]/40" />
            <a
              href={`tel:${BRAND.phoneTel}`}
              className="inline-flex items-center gap-2 text-base font-semibold text-[color:var(--color-primary)]"
            >
              <Phone size={18} aria-hidden />
              {BRAND.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
