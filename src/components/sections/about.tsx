import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutCopy } from "@/lib/notes";

export function About() {
  return (
    <section id="za-nas" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={aboutCopy.title} title={aboutCopy.headline} />
            <div className="mt-7 space-y-5 leading-relaxed text-graphite-600">
              {aboutCopy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <Reveal className="relative" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 border-l-[3px] border-accent bg-paper p-6 sm:p-10 lg:mt-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h3 className="eyebrow">{aboutCopy.principleTitle}</h3>
            <p className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-graphite-900">
              {aboutCopy.principle}
            </p>
          </div>
          <p className="self-center leading-relaxed text-graphite-600">{aboutCopy.closing}</p>
        </div>
      </Container>
    </section>
  );
}
