import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  /** Reading width (~1080px) for text-heavy pages. Default 1240px. */
  narrow?: boolean;
}) {
  const max = narrow ? "max-w-[1080px]" : "max-w-[1240px]";
  return (
    <div className={`mx-auto w-full ${max} px-5 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
