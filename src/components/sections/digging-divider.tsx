"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Excavator } from "@/components/excavator";

// Характерна разделителна лента с анимиран багер, който копае на „земята".
export function DiggingDivider() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-graphite-900">
      {/* фонов надпис-текстура */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 top-2 select-none font-display text-[7rem] font-bold uppercase leading-none tracking-tight text-white/[0.03] sm:text-[10rem] lg:text-[13rem]"
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
          <Link
            href="/#kontakti"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent-soft"
          >
            Стартирай проект
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
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
