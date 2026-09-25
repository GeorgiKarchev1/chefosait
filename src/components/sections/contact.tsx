import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { company } from "@/lib/data";
import { homeCopy } from "@/lib/notes";

export function Contact() {
  return (
    <section id="kontakti" className="bg-graphite-900 py-16 text-white lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">{homeCopy.actions[1]}</h2>
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <a
              href={`tel:${company.phoneHref}`}
              aria-label={`Обадете се на ${company.phone}`}
              className="inline-flex min-h-14 items-center gap-3 whitespace-nowrap py-3 font-display text-[clamp(1.25rem,5vw,2rem)] font-semibold transition-colors hover:text-accent-soft"
            >
              <Phone className="size-5 shrink-0 text-accent-soft" aria-hidden />
              {company.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
