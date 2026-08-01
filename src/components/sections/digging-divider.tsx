"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Excavator } from "@/components/excavator";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

// Характерна разделителна лента с анимиран багер, който копае на „земята".
export function DiggingDivider() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-graphite-900">
      {/* фонов надпис-текстура — мащабира се с ширината на екрана */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-4 select-none whitespace-nowrap pr-4 font-display text-[clamp(3.25rem,15vw,12rem)] font-extrabold uppercase leading-none tracking-tight text-white/[0.045] lg:top-6"
      >
        Строим
      </span>

      <Container className="relative grid items-end gap-6 pt-14 lg:grid-cols-2 lg:pt-16">
        <div className="pb-10 lg:pb-16">
          <span className="eyebrow text-accent-soft">Започваме изкопа</span>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold uppercase leading-[1.05] text-white sm:text-4xl">
            От първата копка
            <br className="hidden sm:block" /> до готовия обект
          </h2>
          <p className="mt-4 max-w-md text-white/65">
            Поемаме целия процес на терен — техника, екип и контрол на качеството
            на всеки етап.
          </p>
          <a
            href={`tel:${company.phoneHref}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-7 w-full gap-3 sm:w-auto"
            )}
          >
            <Phone className="size-[1.15rem] shrink-0" aria-hidden />
            <span className="whitespace-nowrap text-[0.95rem] tracking-normal tabular-nums">
              {company.phone}
            </span>
          </a>
        </div>

        {/* Багерът — влиза отляво при скрол и копае */}
        <motion.div
          className="relative z-10 self-end"
          initial={reduce ? { opacity: 0 } : { opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Excavator className="mx-auto h-auto w-[270px] sm:w-[330px] lg:ml-auto lg:mr-0 lg:w-[380px]" />
        </motion.div>
      </Container>

      {/* „Земя" — предупредителна лента */}
      <div className="hazard-stripe h-5 w-full" aria-hidden />
    </section>
  );
}
