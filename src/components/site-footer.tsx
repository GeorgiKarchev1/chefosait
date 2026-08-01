import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company, navLinks, service } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="bg-graphite-950 text-white">
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark={false} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Специалисти по груб строеж за жилищни и промишлени обекти. Работим
              по проект, с прецизен контрол и в срок.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={company.social.facebook} label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href={company.social.instagram} label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href={company.social.linkedin} label="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
            </div>
          </div>

          <FooterCol title="Навигация">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block py-1 text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={service.title}>
            {service.points.map((p) => (
              <li key={p.title}>
                <Link
                  href="/#uslugi"
                  className="inline-block py-1 text-white/60 transition-colors hover:text-white"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </FooterCol>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              Контакти
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span className="text-white/70">{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <a href={`tel:${company.phoneHref}`} className="text-white/70 hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${company.email}`} className="text-white/70 hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span className="text-white/70">{company.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. Всички права запазени.
          </p>
          <p>ДДС № {company.vat}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
        {title}
      </p>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-white"
    >
      {children}
    </a>
  );
}
