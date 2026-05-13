import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-800 text-stone-50 hover:bg-slate-700",
  secondary:
    "bg-transparent text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-stone-50",
  tertiary:
    "text-slate-800 underline underline-offset-4 decoration-1 hover:decoration-sand-400 hover:decoration-2",
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
type AsLink = Common & { href: string; type?: never; onClick?: never };
type AsButton = Common & { href?: undefined; type?: "button" | "submit"; onClick?: () => void };

export function CtaButton(props: AsLink | AsButton) {
  const { children, variant = "primary", size = "md", className = "" } = props;
  // Tertiary doesn't need height/padding from size — it's a text link
  const sizeClass = variant === "tertiary" ? "" : sizes[size];
  const classes = `${base} ${variants[variant]} ${sizeClass} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
