"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-graphite-950 text-white">
      {/* Фон */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop"
          alt="Строителен обект на жилищна сграда по време на изпълнение"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/85 to-graphite-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/30" />
      </div>

      <Container className="relative z-10 py-28 pt-36">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Етикет */}
          <div className="inline-flex items-center gap-3 border-l-[3px] border-accent bg-white/[0.06] py-2 pl-4 pr-5 backdrop-blur-sm">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Строителна компания
            </span>
            <span className="h-4 w-px bg-white/25" />
            <span className="text-sm font-bold text-accent-soft">
              от {company.founded} г.
            </span>
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold uppercase leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Строим качествено.
            <br />
            <span className="text-accent-soft">Завършваме навреме.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            Изпълняваме жилищни и промишлени обекти от груб строеж до ключ — с
            прозрачен бюджет, ясни срокове и контрол на качеството на всеки етап.
          </p>

          <div className="mt-10 flex flex-col flex-wrap items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/#kontakti" size="lg">
              Поискай оферта
              <ArrowRight className="size-5" aria-hidden />
            </Button>
            <Button href="/#portfolio" size="lg" variant="outlineLight">
              Разгледай проектите
            </Button>

            <a
              href={`tel:${company.phoneHref}`}
              className="group flex items-center gap-3 sm:ml-2"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-white/25 text-accent-soft transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <Phone className="size-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-xs uppercase tracking-wide text-white/55">
                  Обадете се сега
                </span>
                <span className="block font-semibold text-white">
                  {company.phone}
                </span>
              </span>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
