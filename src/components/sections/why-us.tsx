import Image from "next/image";
import {
  Clock,
  ShieldCheck,
  Users,
  Wallet,
  Hammer,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { advantages } from "@/lib/data";

const icons = [Clock, ShieldCheck, Users, Wallet, Hammer, UserCheck];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-graphite-950 py-16 text-white lg:py-20">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1590725140246-20acdee442be?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-graphite-950/85 to-graphite-950" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Защо да изберете нас"
          title="Шест причини за доверие"
          description="Работим така, че да получите предвидим резултат — без изненади в бюджета и срока."
          light
        />

        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={item.title}
                as="article"
                delay={(i % 3) * 0.08}
                className="bg-graphite-950 p-6 lg:p-7"
              >
                <Icon className="size-7 text-accent-soft" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
