import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="proces" className="bg-paper py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Процес на работа"
          title="От идея до готов обект"
          description="Ясен и предвидим път за всеки проект. Знаете какво следва на всеки етап."
        />

        <ol className="mt-16 grid gap-y-12 md:grid-cols-5 md:gap-x-6">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={i * 0.08}
              className="relative md:pr-6"
            >
              <span className="font-display text-6xl font-bold text-graphite-100">
                {step.number}
              </span>
              <span className="absolute left-0 top-4 h-px w-12 bg-accent md:top-9" />

              <h3 className="mt-4 text-xl font-semibold text-graphite-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite-600">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
