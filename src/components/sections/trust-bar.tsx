import { Container } from "@/components/ui/container";
import { stats } from "@/lib/data";

// Слаба, типографска лента с показатели — без икони, рамки и картонени панели.
export function TrustBar() {
  return (
    <section className="relative z-20 bg-graphite-950 lg:-mt-16">
      <Container>
        <div className="gold-rule h-px w-full" aria-hidden />
        <div className="grid grid-cols-2 gap-px bg-white/[0.09] lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-graphite-950 px-3 py-9 text-center lg:py-12"
            >
              <p className="font-display text-[2rem] font-extrabold leading-none tracking-tight text-accent sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
              </p>
              <p className="mx-auto mt-3 max-w-[10rem] text-[0.7rem] uppercase leading-snug tracking-[0.14em] text-white/45 lg:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
