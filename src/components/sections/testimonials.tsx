import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Отзиви"
          title="Какво казват възложителите"
          description="Дългосрочните отношения с инвеститорите ни са най-добрата препоръка."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              as="article"
              delay={i * 0.08}
              className="flex flex-col border border-graphite-100 bg-paper p-8 lg:p-10"
            >
              <span
                className="font-display text-6xl leading-none text-accent"
                aria-hidden
              >
                „
              </span>
              <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-graphite-800">
                {t.quote}
              </blockquote>
              <footer className="mt-8 border-t border-graphite-100 pt-6">
                <p className="font-semibold text-graphite-900">{t.author}</p>
                <p className="mt-0.5 text-sm text-graphite-500">{t.role}</p>
              </footer>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
