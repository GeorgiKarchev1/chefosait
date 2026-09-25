import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicesCopy } from "@/lib/notes";

export function Services() {
  return (
    <section id="uslugi" className="bg-paper py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow={servicesCopy.title} title={servicesCopy.headline} description={servicesCopy.description} />
        <div className="mt-12 grid gap-x-12 md:grid-cols-2 lg:gap-x-20">
          {servicesCopy.items.map((item, index) => (
            <Reveal key={item.title} as="article" className="flex gap-5 border-t border-graphite-200 py-7">
              <span className="pt-1 font-display text-sm font-semibold tabular-nums text-accent-dark" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-graphite-900">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-graphite-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
