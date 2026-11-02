import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Logo } from "@/components/logo";
import { company, navLinks } from "@/lib/data";
import { homeCopy, servicesCopy } from "@/lib/notes";

export function SiteFooter() {
  return (
    <footer className="bg-graphite-950 text-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <Link href="/" aria-label={company.name}><Logo dark={false} /></Link>
            <p className="mt-6 max-w-xs leading-relaxed text-white/65">{homeCopy.headline}</p>
            <div className="mt-5 flex flex-col items-start gap-1">
              <a
                href={`tel:${company.phoneHref}`}
                aria-label={`Обадете се на ${company.phone}`}
                className="inline-flex min-h-11 items-center gap-3 whitespace-nowrap text-lg font-semibold text-accent-soft transition-colors hover:text-white"
              >
                <Phone className="size-5 shrink-0" aria-hidden />
                {company.phone}
              </a>
              <a
                href={`tel:${company.additionalPhoneHref}`}
                aria-label={`Обадете се на ${company.additionalPhone}`}
                className="inline-flex min-h-11 items-center gap-3 whitespace-nowrap text-lg font-semibold text-accent-soft transition-colors hover:text-white"
              >
                <Phone className="size-5 shrink-0" aria-hidden />
                {company.additionalPhone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex min-h-11 max-w-full items-center gap-3 py-2 text-sm text-white/70 transition-colors hover:text-accent-soft"
              >
                <Mail className="size-5 shrink-0 text-accent-soft" aria-hidden />
                <span className="min-w-0 break-all">{company.email}</span>
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram: ${company.instagramHandle} (отваря се в нов раздел)`}
                className="inline-flex min-h-11 items-center gap-3 py-2 text-sm text-white/70 transition-colors hover:text-accent-soft"
              >
                <InstagramIcon className="size-5 shrink-0 text-accent-soft" />
                {company.instagramHandle}
              </a>
              <a
                href={company.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Вижте ни в Google Maps (отваря се в нов раздел)"
                className="inline-flex min-h-11 items-center gap-3 py-2 text-sm text-white/70 transition-colors hover:text-accent-soft"
              >
                <MapPin className="size-5 shrink-0 text-accent-soft" aria-hidden />
                Google Maps · отзиви
              </a>
            </div>
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
