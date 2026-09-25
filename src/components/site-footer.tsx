import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";
import { company, navLinks } from "@/lib/data";
import { homeCopy, servicesCopy } from "@/lib/notes";

export function SiteFooter() {
  return (
    <footer className="bg-graphite-950 text-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr] lg:gap-16">
          <div>
            <Link href="/" aria-label={company.name}><Logo dark={false} /></Link>
            <p className="mt-6 max-w-xs leading-relaxed text-white/65">{homeCopy.headline}</p>
            <a
              href={`tel:${company.phoneHref}`}
              aria-label={`Обадете се на ${company.phone}`}
              className="mt-5 inline-flex min-h-11 items-center gap-3 whitespace-nowrap text-lg font-semibold text-accent-soft transition-colors hover:text-white"
            >
              <Phone className="size-5 shrink-0" aria-hidden />
              {company.phone}
            </a>
          </div>
          <nav aria-label="Навигация в края на страницата" className="flex flex-col items-start gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/70 transition-colors hover:text-accent-soft">
                {link.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="font-display font-semibold text-accent-soft">{servicesCopy.title}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {servicesCopy.items.map((item) => (
                <li key={item.title}>
                  <Link href="/#uslugi" className="transition-colors hover:text-white">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-7 text-sm text-white/60">© {new Date().getFullYear()} {company.name}</p>
      </Container>
    </footer>
  );
}
