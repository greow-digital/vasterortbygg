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
    <section className="bg-[color:var(--color-dark)] text-white">
      <Container className="py-12 md:py-16">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Brödsmulor" className="mb-5 flex flex-wrap items-center gap-1 text-sm text-white/70">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="inline-flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={14} aria-hidden className="text-white/40" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-lg text-white/85">{intro}</p>
        )}
      </Container>
    </section>
  );
}
