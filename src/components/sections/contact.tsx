"use client";

import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Демонстрационна обработка — без бекенд. Заменя се с реален endpoint.
    setSent(true);
  }

  return (
    <section id="kontakti" className="bg-graphite-900 py-16 text-white lg:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow text-accent-soft">Контакти</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Готови ли сте да започнем вашия проект?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
              Изпратете запитване с няколко детайла за обекта. Ще се свържем с вас
              в рамките на работния ден за оглед и оферта.
            </p>

            <div className="mt-12 space-y-6">
              <ContactRow icon={<Phone className="size-5" />} label="Телефон">
                <a href={`tel:${company.phoneHref}`} className="hover:text-accent-soft">
                  {company.phone}
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="size-5" />} label="Имейл">
                <a href={`mailto:${company.email}`} className="hover:text-accent-soft">
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="size-5" />} label="Адрес">
                {company.address}
              </ContactRow>
            </div>
          </div>

          <div className="bg-white p-8 text-graphite-900 sm:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
              >
                <span className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-8" aria-hidden />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">Благодарим ви!</h3>
                <p className="mt-2 max-w-xs text-graphite-600">
                  Запитването е получено. Ще се свържем с вас възможно най-скоро.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Име" required />
                  <Field id="phone" label="Телефон" type="tel" required />
                </div>
                <Field id="email" label="Имейл" type="email" required />
                <Field id="subject" label="Тип проект" />
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                    Съобщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none border border-graphite-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="Опишете накратко обекта, локацията и обхвата"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center gap-2 bg-accent-strong px-8 text-base font-semibold text-white transition-colors hover:bg-accent-strong-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Изпрати запитване
                  <ArrowRight className="size-5" aria-hidden />
                </button>
                <p className="text-xs leading-relaxed text-graphite-500">
                  С изпращането се съгласявате с обработката на данните ви за целите
                  на запитването.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center border border-white/15 text-accent-soft">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/65">{label}</p>
        <p className="mt-1 text-lg font-medium text-white">{children}</p>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={cn(
          "h-12 w-full border border-graphite-200 bg-white px-4 text-sm outline-none transition-colors focus:border-accent"
        )}
      />
    </div>
  );
}
