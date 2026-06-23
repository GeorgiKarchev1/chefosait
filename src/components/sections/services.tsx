import Link from "next/link";
import {
  Home,
  Factory,
  Wrench,
  HardHat,
  PaintRoller,
  PencilRuler,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

const icons: Record<string, typeof Home> = {
  zhilishtno: Home,
  promishleno: Factory,
  remonti: Wrench,
  "grub-stroezh": HardHat,
  dovurshitelni: PaintRoller,
  proektirane: PencilRuler,
};

export function Services() {
  return (
    <section id="uslugi" className="bg-paper py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Услуги"
          title="Какво изпълняваме"
          description="Покриваме целия строителен цикъл — от груб строеж до ключ."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.slug] ?? Home;
            return (
              <Reveal
                key={service.slug}
                as="article"
                delay={(i % 3) * 0.06}
                className="group flex items-start gap-4 border border-graphite-100 bg-white p-5 transition-colors duration-200 hover:border-accent"
              >
                <span className="relative flex size-12 shrink-0 items-center justify-center bg-graphite-900 text-accent transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-6 after:bg-accent after:transition-all group-hover:bg-accent group-hover:text-graphite-950 group-hover:after:w-full">
                  <Icon className="size-6" strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-graphite-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite-600">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <Link
            href="/#kontakti"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-strong-dark"
          >
            Поискай оферта за вашия проект
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
