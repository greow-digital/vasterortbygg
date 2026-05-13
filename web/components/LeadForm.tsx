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
      <div className="rounded-[10px] bg-white p-6 text-[color:var(--color-dark)] shadow-lg shadow-black/10">
        <h3 className="font-display text-xl font-semibold">Tack!</h3>
        <p className="mt-2 text-sm text-[color:var(--color-dark)]/80">
          Vi återkommer inom kort för att boka in ett kostnadsfritt möte och
          gå igenom ditt projekt.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-1 w-full rounded-[5px] border border-[color:var(--color-border)] bg-[color:var(--color-bg-light)] px-3 py-2.5 text-[15px] outline-none focus:border-[color:var(--color-primary)]";
  const labelClass =
    "block text-sm font-semibold text-[color:var(--color-primary)]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[10px] bg-white p-6 text-[color:var(--color-dark)] shadow-lg shadow-black/10"
    >
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[color:var(--color-dark)]/70">
        Vi återkommer inom {BRAND.responseTime}.
      </p>

      <div className="mt-4 space-y-4">
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
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass} htmlFor="lf-phone">Telefon</label>
            <input
              id="lf-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              className={fieldClass}
              {...register("phone", {
                required: "Ange telefonnummer",
                minLength: { value: 6, message: "För kort nummer" },
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
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
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
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
          {errors.projectType && <p className="mt-1 text-xs text-red-600">{errors.projectType.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass} htmlFor="lf-area">Plats / kommun <span className="font-normal text-[color:var(--color-dark)]/60">(valfritt)</span></label>
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
          <label className={labelClass} htmlFor="lf-message">Berätta kort om projektet <span className="font-normal text-[color:var(--color-dark)]/60">(valfritt)</span></label>
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

        <p className="text-center text-sm text-[color:var(--color-dark)]/70">
          Eller ring oss:{" "}
          <a href={`tel:${BRAND.phoneTel}`} className="font-semibold text-[color:var(--color-primary)]">
            {BRAND.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
