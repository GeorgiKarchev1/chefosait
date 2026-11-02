import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${company.geo.lat},${company.geo.lng}`;

export function MapBanner() {
  return (
    <div className="relative mt-16 border-t-2 border-accent lg:mt-20">
      <iframe
        src={company.mapEmbed}
        title={`Карта: ${company.name}, ${company.address}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="block h-[360px] w-full border-0 sm:h-[440px] lg:h-[540px]"
      />

      {/* На телефон картата е отгоре, а картата с данни — под нея, за да не я закрива.
          От lg нагоре картата с данни плава върху картата вляво. */}
      <div className="lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:items-end lg:pb-10">
        <Container className="w-full">
          <div className="pointer-events-auto py-10 lg:max-w-md lg:bg-graphite-950 lg:px-8 lg:py-8 lg:border lg:border-accent/40 lg:shadow-2xl lg:shadow-black/40">
            <span className="eyebrow">Намерете ни</span>
            <p className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{company.name}</p>
            <p className="mt-3 flex items-start gap-3 text-white/75">
              <MapPin className="mt-0.5 size-5 shrink-0 text-accent-soft" aria-hidden />
              {company.address}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Упътвания до нас в Google Maps (отваря се в нов раздел)"
                className={cn(buttonVariants({ size: "lg" }), "px-6 text-base sm:flex-1 lg:flex-none normal-case tracking-normal")}
              >
                <Navigation className="size-5 shrink-0" aria-hidden />
                Упътвания
              </a>
              <a
                href={company.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Профилът ни в Google Maps (отваря се в нов раздел)"
                className={cn(buttonVariants({ variant: "outlineLight", size: "lg" }), "px-6 text-base sm:flex-1 lg:flex-none normal-case tracking-normal")}
              >
                Профил в Google
                <ArrowUpRight className="size-5 shrink-0" aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
