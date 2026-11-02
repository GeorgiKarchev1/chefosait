import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { company } from "@/lib/data";
import { homeCopy } from "@/lib/notes";

export function Contact() {
  return (
    <section id="kontakti" className="bg-graphite-900 py-16 text-white lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{homeCopy.actions[1]}</h2>
          <div className="flex min-w-0 flex-col items-start gap-1 border-l-2 border-accent pl-6 sm:pl-8">
            <a
              href={`tel:${company.phoneHref}`}
              aria-label={`Обадете се на ${company.phone}`}
              className="inline-flex min-h-14 items-center gap-3 whitespace-nowrap py-3 font-display text-[clamp(1.25rem,5vw,2rem)] font-semibold transition-colors hover:text-accent-soft"
            >
              <Phone className="size-5 shrink-0 text-accent-soft" aria-hidden />
              {company.phone}
            </a>
            <a
              href={`tel:${company.additionalPhoneHref}`}
              aria-label={`Обадете се на ${company.additionalPhone}`}
              className="inline-flex min-h-14 items-center gap-3 whitespace-nowrap py-3 font-display text-[clamp(1.25rem,5vw,2rem)] font-semibold transition-colors hover:text-accent-soft"
            >
              <Phone className="size-5 shrink-0 text-accent-soft" aria-hidden />
              {company.additionalPhone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex min-h-11 max-w-full items-center gap-3 py-2 text-sm text-white/80 transition-colors hover:text-accent-soft sm:text-base"
            >
              <Mail className="size-5 shrink-0 text-accent-soft" aria-hidden />
              <span className="min-w-0 break-all">{company.email}</span>
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram: ${company.instagramHandle} (отваря се в нов раздел)`}
              className="inline-flex min-h-11 items-center gap-3 py-2 text-sm text-white/80 transition-colors hover:text-accent-soft sm:text-base"
            >
              <InstagramIcon className="size-5 shrink-0 text-accent-soft" />
              {company.instagramHandle}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
