import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, certificates } from "@/lib/data";

export function About() {
  return (
    <section id="za-nas" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="За нас"
              title="Строителна компания, на която можете да разчитате"
            />
            <div className="mt-5 space-y-4 leading-relaxed text-graphite-600">
              <p>
                {company.legalName} работи на българския пазар от {company.founded}{" "}
                година. Специализирани сме в груб строеж — фундаменти, кофраж,
                армировка и зидария за жилищни сгради и промишлени халета, с
                прецизен геодезически контрол на всяко ниво.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {certificates.map((cert) => (
                <li key={cert} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-accent/10 text-accent">
                    <Check className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-graphite-700">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="relative" delay={0.1}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
                alt="Технически ръководители на строителен обект"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-px left-0 max-w-[16rem] bg-graphite-900 p-7 text-white">
              <p className="font-display text-5xl font-bold leading-none text-accent-soft">
                {2026 - company.founded}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/75">
                години изпълнени проекти на територията на цялата страна
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
