"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

const LINE_ONE = "Строим качествено.";
const LINE_TWO = "Завършваме навреме.";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  // Дума по дума изпод маска — само transform/opacity, без layout работа.
  const headline: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: 0.1 } },
  };

  const word: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { y: "115%" },
        show: { y: "0%", transition: { duration: 0.8, ease: EASE } },
      };

  // Думите се появяват ~0.1s + 6 думи × 0.055s + 0.8s ≈ 1.2s
  const after = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

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
        {/* Симетрично затъмняване — съдържанието е центрирано */}
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/90 via-graphite-950/70 to-graphite-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(17,17,17,0.6)_78%)]" />
      </div>

      <Container className="relative z-10 py-28 pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            variants={headline}
            initial="hidden"
            animate="show"
            className="text-balance text-[2.6rem] font-extrabold uppercase leading-[1] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4rem]"
          >
            <Line text={LINE_ONE} variants={word} />
            <Line text={LINE_TWO} variants={word} className="text-accent-soft" />
          </motion.h1>

          {!reduce && (
            <motion.div
              aria-hidden
              className="gold-rule mx-auto mt-8 h-[3px] w-28 origin-center"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
            />
          )}

          <motion.p
            {...after(1.05)}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            Изпълняваме груб строеж на жилищни и промишлени обекти — фундаменти,
            кофраж, армировка и зидария, с прозрачен бюджет и ясни срокове.
          </motion.p>

          <motion.div
            {...after(1.2)}
            className="mt-10 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:justify-center"
          >
            <a
              href={`tel:${company.phoneHref}`}
              className={cn(buttonVariants({ size: "lg" }), "gap-3")}
            >
              <Phone className="size-[1.15rem] shrink-0" aria-hidden />
              <span className="hidden sm:inline">Обади се</span>
              <span
                aria-hidden
                className="hidden h-4 w-px bg-graphite-950/25 sm:block"
              />
              <span className="text-[0.95rem] tracking-normal tabular-nums">
                {company.phone}
              </span>
            </a>
            <Button href="/#portfolio" size="lg" variant="outlineLight">
              Разгледай проектите
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Ред от заглавието: всяка дума е в собствена маска и изплува отдолу.
function Line({
  text,
  variants,
  className,
}: {
  text: string;
  variants: Variants;
  className?: string;
}) {
  return (
    <span className={cn("block", className)}>
      {text.split(" ").map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="-mb-[0.14em] mr-[0.24em] inline-block overflow-hidden pb-[0.14em] align-bottom last:mr-0"
        >
          <motion.span variants={variants} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
