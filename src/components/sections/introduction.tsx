import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy, introductionCopy } from "@/lib/notes";

export function Introduction() {
  return (
    <section id="sdm-konstrukt" className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow={introductionCopy.title} title={introductionCopy.headline} />
          <div className="space-y-5 leading-relaxed text-graphite-600">
            {[...homeCopy.paragraphs, ...introductionCopy.paragraphs].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
