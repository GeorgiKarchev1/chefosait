import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

// Без форми — контактът е директно по телефона.
export function Contact() {
  return (
    <section id="kontakti" className="bg-graphite-900 py-16 text-white lg:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow text-accent-soft">Контакти</span>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Готови ли сте да започнем вашия проект?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
              Обадете се и ще обсъдим обекта директно — без формуляри и чакане.
              Уговаряме оглед и подготвяме оферта.
            </p>

            <div className="mt-12 space-y-6">
              <ContactRow icon={<Mail className="size-5" />} label="Имейл">
                <a href={`mailto:${company.email}`} className="hover:text-accent-soft">
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="size-5" />} label="Адрес">
                {company.address}
              </ContactRow>
              <ContactRow icon={<Clock className="size-5" />} label="Работно време">
                {company.workingHours}
              </ContactRow>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t-[3px] border-accent bg-graphite-950 p-8 sm:p-12">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
              <Phone className="size-7" aria-hidden />
            </span>
            <p className="mt-7 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Обадете се сега
            </p>
            <a
              href={`tel:${company.phoneHref}`}
              className="mt-3 block whitespace-nowrap font-display text-[clamp(1.55rem,6.6vw,3rem)] font-bold leading-tight tracking-tight text-white transition-colors hover:text-accent-soft"
            >
              {company.phone}
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-white/60">
              Отговаряме в работно време, а при пропуснато обаждане се свързваме
              с вас до края на работния ден.
            </p>
            <a
              href={`tel:${company.phoneHref}`}
              className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full gap-3 sm:w-auto sm:self-start")}
            >
              <Phone className="size-5 shrink-0" aria-hidden />
              Позвъни сега
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center border border-white/15 text-accent-soft">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/65">{label}</p>
        <p className="mt-1 text-lg font-medium text-white">{children}</p>
      </div>
    </div>
  );
}
