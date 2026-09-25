import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/data";
import { homeCopy } from "@/lib/notes";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="nachalo" className="relative flex min-h-svh items-center overflow-hidden bg-graphite-950 text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/90 via-graphite-950/80 to-graphite-950" />
      </div>
      <Container className="relative z-10 pb-14 pt-28 sm:pb-20 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight">
            {homeCopy.headline}
          </h1>
          <div className="gold-rule mx-auto mt-8 h-[3px] w-28" aria-hidden />
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg font-medium leading-relaxed text-accent-soft sm:text-xl">
            {homeCopy.lead}
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${company.phoneHref}`}
              aria-label={`Обадете се на ${company.phone}`}
              className={cn(buttonVariants({ size: "lg" }), "text-base normal-case tracking-normal")}
            >
              <Phone className="size-5 shrink-0" aria-hidden />
              {company.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
