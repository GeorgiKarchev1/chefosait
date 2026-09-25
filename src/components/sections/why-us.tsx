import { HardHat, Ruler, CalendarCheck, Handshake, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyUsCopy } from "@/lib/notes";

const icons = [Globe, HardHat, Ruler, CalendarCheck, Handshake];

export function WhyUs() {
  return (
    <section id="zashto-nie" className="bg-graphite-950 py-20 text-white lg:py-28">
      <Container>
        <SectionHeading eyebrow={whyUsCopy.title} title={whyUsCopy.headline} light />
        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsCopy.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} as="article" className="bg-graphite-950 p-7 lg:p-8">
                <Icon className="size-7 text-accent-soft" aria-hidden />
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{item.description}</p>
              </Reveal>
            );
          })}
          <Reveal as="article" className="bg-accent-pale p-7 text-graphite-950 lg:p-8">
            <Globe className="size-7 text-accent-dark" aria-hidden />
            <h3 className="mt-5 text-xl font-semibold">{whyUsCopy.closingTitle}</h3>
            <p className="mt-3 leading-relaxed text-graphite-700">{whyUsCopy.closing}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
