"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { BRAND, SERVICES } from "@/lib/brand";
import { CtaButton } from "./CtaButton";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  area?: string;
  startWindow?: string;
  message?: string;
};

const START_WINDOWS = [
  "Så snart som möjligt",
  "Inom 1–3 månader",
  "Inom 3–6 månader",
  "Senare i år",
  "Vet ej",
];

export function LeadForm({ title = "Begär kostnadsfri offert" }: { title?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // TODO_WEBHOOK: replace with Google Sheets webhook or chosen lead destination.
    console.info("[LeadForm] submit", data);
    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-white p-7 text-slate-900 border border-stone-200">
        <h3 className="font-serif text-2xl">Tack!</h3>
        <p className="mt-3 text-[15px] text-slate-500">
          Vi återkommer inom kort för att boka in ett kostnadsfritt möte och
          gå igenom ditt projekt.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full px-4 py-3 bg-white border border-stone-300 rounded-md text-[15px] text-slate-900 placeholder:text-stone-500 focus:outline-none focus:border-slate-800 focus:ring-2 focus:ring-sand-400/40 transition-colors duration-200";
  const labelClass = "block text-[13px] font-medium text-slate-700 mb-2";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg bg-white p-7 text-slate-900 border border-stone-200"
    >
      <h3 className="font-serif text-2xl">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">
        Vi återkommer inom <span className="tnum">{BRAND.responseTime}</span>.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label className={labelClass} htmlFor="lf-name">Namn</label>
          <input
            id="lf-name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            {...register("name", { required: "Ange ditt namn" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="mt-2 text-[13px] text-[color:var(--danger,#A0413A)]">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="lf-phone">Telefon</label>
            <input
              id="lf-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              className={`${fieldClass} tnum`}
              {...register("phone", {
                required: "Ange telefonnummer",
                minLength: { value: 6, message: "För kort nummer" },
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <p className="mt-2 text-[13px] text-[color:var(--danger,#A0413A)]">{errors.phone.message}</p>}
          </div>
          <div>
            <label className={labelClass} htmlFor="lf-email">E-post</label>
            <input
              id="lf-email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              {...register("email", {
                required: "Ange e-post",
                pattern: { value: /.+@.+\..+/, message: "Ange en giltig e-post" },
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="mt-2 text-[13px] text-[color:var(--danger,#A0413A)]">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="lf-projecttype">Typ av projekt</label>
          <select
            id="lf-projecttype"
            className={fieldClass}
            defaultValue=""
            {...register("projectType", { required: "Välj typ av projekt" })}
            aria-invalid={errors.projectType ? "true" : "false"}
          >
            <option value="" disabled>Välj typ av projekt…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.label}>{s.label}</option>
            ))}
            <option value="Annat">Annat</option>
          </select>
          {errors.projectType && <p className="mt-2 text-[13px] text-[color:var(--danger,#A0413A)]">{errors.projectType.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass} htmlFor="lf-area">Plats / kommun <span className="font-normal text-stone-500">(valfritt)</span></label>
            <input id="lf-area" type="text" className={fieldClass} {...register("area")} />
          </div>
          <div>
            <label className={labelClass} htmlFor="lf-start">Önskad starttid</label>
            <select id="lf-start" className={fieldClass} defaultValue="" {...register("startWindow")}>
              <option value="" disabled>Välj…</option>
              {START_WINDOWS.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="lf-message">Berätta kort om projektet <span className="font-normal text-stone-500">(valfritt)</span></label>
          <textarea
            id="lf-message"
            rows={3}
            className={fieldClass}
            {...register("message")}
          />
        </div>

        <CtaButton type="submit" variant="primary" size="lg" className="w-full">
          {isSubmitting ? "Skickar…" : BRAND.primaryCta}
        </CtaButton>

        <p className="text-center text-sm text-slate-500">
          Eller ring oss:{" "}
          <a href={`tel:${BRAND.phoneTel}`} className="tnum font-medium text-slate-800 hover:underline hover:decoration-sand-400 hover:decoration-2 underline-offset-4">
            {BRAND.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
