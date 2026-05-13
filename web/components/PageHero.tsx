import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="bg-stone-50 border-b border-stone-200">
      <Container className="pt-20 pb-16 md:pt-24 md:pb-20">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Brödsmulor" className="mb-6 flex flex-wrap items-center gap-1 text-[13px] text-stone-500">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="inline-flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-slate-900 underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-sand-400 hover:decoration-2">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-slate-700">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={14} aria-hidden className="text-stone-400" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-[11px] tracking-[0.14em] uppercase text-stone-500 font-medium">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-[18ch] font-serif text-[32px] leading-[1.1] text-slate-900 md:text-[44px] lg:text-[48px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-slate-500 md:text-[18px]">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
