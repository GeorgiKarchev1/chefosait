"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
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
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label={`${company.name} — начало`}
          onClick={() => setOpen(false)}
        >
          <Logo dark={scrolled || open} />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Основна навигация">
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

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent",
              scrolled ? "text-graphite-900" : "text-white"
            )}
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
          <Button href="/#kontakti" size="md">
            Поискай оферта
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "lg:hidden",
            scrolled || open ? "text-graphite-900" : "text-white"
          )}
          aria-label={open ? "Затвори менюто" : "Отвори менюто"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
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
                className="flex items-center gap-2 py-4 text-lg font-semibold text-graphite-900"
              >
                <Phone className="size-5 text-accent" aria-hidden />
                {company.phone}
              </a>
              <Button
                href="/#kontakti"
                size="lg"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Поискай оферта
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
