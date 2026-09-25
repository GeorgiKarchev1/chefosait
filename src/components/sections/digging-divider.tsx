"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Excavator } from "@/components/excavator";
import { homeCopy, introductionCopy } from "@/lib/notes";
import { cn } from "@/lib/utils";

// Характерна разделителна лента с анимиран багер, който копае на „земята".
export function DiggingDivider() {
  return (
    <section className="relative overflow-hidden bg-graphite-900">
      {/* Фоновият надпис остава центриран и се побира в ширината на екрана. */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(1.5rem,10vw,12rem)] font-extrabold uppercase leading-none tracking-tight text-white/[0.045] lg:top-6"
      >
        {introductionCopy.title}
      </span>

      <Container className="relative grid items-end gap-6 pt-14 lg:grid-cols-2 lg:pt-16">
        <div className="pb-10 lg:pb-16">
          <h2 className="text-balance font-display text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
            {introductionCopy.closing}
          </h2>
          <Link
            href="/#kontakti"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-7 w-full gap-3 normal-case sm:w-auto"
            )}
          >
            {homeCopy.actions[0]}
            <ArrowUpRight className="size-4 shrink-0" aria-hidden />
          </Link>
        </div>

        {/* Багерът — влиза отляво при скрол и копае */}
        <motion.div
          className="reveal relative z-10 self-end"
          initial={{ opacity: 0, x: -90 }}
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
