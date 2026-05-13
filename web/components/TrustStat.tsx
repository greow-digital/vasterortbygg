export function TrustStat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-serif text-[40px] leading-none text-slate-900 tnum md:text-[44px]">
        {number}
      </div>
      <div className="mt-2 text-[13px] text-slate-500">{label}</div>
      <div className="mt-3 h-px w-8 bg-sand-400" aria-hidden />
    </div>
  );
}
