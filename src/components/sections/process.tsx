import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MobileDisclosure } from "@/components/ui/mobile-disclosure";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { company } from "@/lib/data";
import { homeCopy, processCopy } from "@/lib/notes";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="proces" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow={processCopy.title} title={processCopy.headline} />
        <ol className="mt-12 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {processCopy.steps.map((step) => (
            <Reveal key={step.title} as="li" className="border-t border-graphite-200 py-8">
              <MobileDisclosure
                title={step.title}
                titleClassName="text-xl font-semibold leading-snug text-graphite-900"
                between={<div className="mt-5 h-0.5 w-10 bg-accent" aria-hidden />}
              >
                <p className="mt-5 leading-relaxed text-graphite-600">{step.description}</p>
              </MobileDisclosure>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-5 border-t border-graphite-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-2xl font-semibold text-graphite-900">{homeCopy.actions[0]}</h3>
          <a
            href={`tel:${company.phoneHref}`}
            aria-label={`Поискайте оферта на ${company.phone}`}
            className={cn(buttonVariants({ size: "lg" }), "text-base normal-case tracking-normal")}
          >
            <Phone className="size-5 shrink-0" aria-hidden />
            {company.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
