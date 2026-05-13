import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[5px] font-medium transition-colors focus:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-hover)]",
  secondary:
    "bg-white text-[color:var(--color-dark)] border border-[color:var(--color-border)] hover:border-[color:var(--color-dark)]",
  ghost:
    "text-[color:var(--color-primary)] hover:underline underline-offset-4",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsLink = Common & {
  href: string;
  type?: never;
  onClick?: never;
};

type AsButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function CtaButton(props: AsLink | AsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
