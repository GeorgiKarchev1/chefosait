import { Container } from "@/components/ui/container";
import { MobileReadMore } from "@/components/ui/mobile-disclosure";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeCopy, introductionCopy } from "@/lib/notes";

export function Introduction() {
  return (
    <section id="sdm-konstrukt" className="bg-paper py-20 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow={introductionCopy.title} title={introductionCopy.headline} />
          <MobileReadMore
            paragraphs={[...homeCopy.paragraphs, ...introductionCopy.paragraphs]}
            className="leading-relaxed text-graphite-600"
          />
        </div>
      </Container>
    </section>
  );
}
