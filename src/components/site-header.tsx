"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-graphite-100 bg-white/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between sm:h-24 lg:h-28">
        <Link
          href="/"
          aria-label={`${company.name} — начало`}
          onClick={() => setOpen(false)}
        >
          <Logo dark={scrolled || open} />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Основна навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-accent",
                scrolled ? "text-graphite-700" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-4">
          <a
            href={`tel:${company.phoneHref}`}
            aria-label={`Обадете се на ${company.phone}`}
            className={cn(buttonVariants({ size: "md" }), "px-2 text-xs normal-case tracking-normal sm:px-4 sm:text-sm")}
          >
            <Phone className="hidden size-4 shrink-0 sm:block" aria-hidden />
            <span>{company.phone}</span>
          </a>

          <button
            type="button"
            className={cn(
              "flex size-11 items-center justify-center lg:hidden",
              scrolled || open ? "text-graphite-900" : "text-white"
            )}
            aria-label={open ? "Затвори менюто" : "Отвори менюто"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-graphite-100 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-graphite-100 py-4 text-lg font-semibold text-graphite-900"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${company.phoneHref}`}
                aria-label={`Обадете се на ${company.phone}`}
                className={cn(buttonVariants({ size: "lg" }), "mt-4 w-full gap-3 normal-case")}
                onClick={() => setOpen(false)}
              >
                <Phone className="size-5 shrink-0" aria-hidden />
                <span className="tracking-normal">{company.phone}</span>
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
