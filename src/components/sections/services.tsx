import Image from "next/image";
import { HardHat, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { company, service } from "@/lib/data";

// Единствената услуга — представена като самостоятелен, „витринен" блок.
export function Services() {
  return (
    <section id="uslugi" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      {/* Меко златно сияние горе вдясно */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-accent/[0.07] blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Визуал със златна рамка */}
          <Reveal className="relative order-last lg:order-first">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-full w-full border-2 border-accent/45 lg:-left-6 lg:-top-6"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[5/4]">
              <Image
                src={service.image}
                alt="Груб строеж — кофраж и армировка на строителен обект"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/55 via-transparent to-transparent" />
            </div>

            {/* Плаваща златна плочка */}
            <div className="absolute -bottom-6 right-4 flex items-center gap-4 bg-accent px-6 py-5 text-graphite-950 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] sm:right-8">
              <HardHat className="size-8 shrink-0" strokeWidth={1.5} aria-hidden />
              <span className="leading-tight">
                <span className="block font-display text-2xl font-extrabold">
                  120+
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                  завършени обекта
                </span>
              </span>
            </div>
          </Reveal>

          {/* Съдържание */}
          <div>
            <Reveal>
              <span className="eyebrow">Какво изпълняваме</span>
              <h2 className="mt-4 text-balance font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-graphite-900 sm:text-5xl">
                {service.title}
              </h2>
              <div className="gold-rule mt-6 h-[3px] w-24" aria-hidden />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-graphite-600">
                {service.description}
              </p>
            </Reveal>

            <ul className="mt-10 border-t border-graphite-200">
              {service.points.map((point, i) => (
                <Reveal
                  as="li"
                  key={point.title}
                  delay={0.08 * (i + 1)}
                  className="group flex gap-6 border-b border-graphite-200 py-6"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-graphite-900">
                      {point.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-graphite-600">
                      {point.description}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3}>
              <a
                href={`tel:${company.phoneHref}`}
                className="group mt-8 inline-flex items-center gap-3 text-base font-semibold text-graphite-900 transition-colors hover:text-accent-dark"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent text-graphite-950 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-graphite-500">
                    Обади се за оферта
                  </span>
                  <span className="block font-display text-lg font-bold">
                    {company.phone}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
