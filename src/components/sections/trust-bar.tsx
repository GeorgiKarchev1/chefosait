import { Award, Building2, HardHat, ThumbsUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { stats } from "@/lib/data";

const icons = [Award, Building2, HardHat, ThumbsUp];

// Препокриваща се лента с показатели — „излиза" върху долния край на hero-а.
export function TrustBar() {
  return (
    <div className="relative z-20 -mt-24 lg:-mt-28">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_1.15fr]">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div
                key={stat.label}
                className="group relative flex items-center gap-5 border-t-[3px] border-accent bg-graphite-900 p-7 transition-colors duration-300 hover:bg-graphite-800 lg:p-8"
              >
                <Icon
                  className="size-9 shrink-0 text-accent-soft transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-display text-3xl font-bold leading-none text-white lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm leading-tight text-white/60">
                    {stat.label}
                  </p>
                </div>
                {/* тънък разделител между панелите */}
                <span className="absolute inset-y-5 right-0 hidden w-px bg-white/10 lg:block" />
              </div>
            );
          })}

          {/* Оранжев CTA панел */}
          <Link
            href="/#kontakti"
            className="group flex items-center justify-between gap-4 border-t-[3px] border-accent-soft bg-accent-strong p-7 text-white transition-colors duration-300 hover:bg-accent-strong-dark sm:col-span-2 lg:col-span-1 lg:p-8"
          >
            <span>
              <span className="block font-display text-xl font-bold uppercase leading-tight">
                Безплатна
                <br className="hidden lg:block" /> оферта
              </span>
              <span className="mt-1 block text-sm text-white">
                Отговор до 24 часа
              </span>
            </span>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-5" aria-hidden />
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
