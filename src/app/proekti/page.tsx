import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProjectsGallery } from "@/components/projects-gallery";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Проекти",
  description:
    "Реализирани проекти в жилищното и промишленото строителство — жилищни сгради, халета, офиси и реконструкции.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-graphite-950 pb-16 pt-36 text-white lg:pb-24 lg:pt-44">
        <Container>
          <span className="eyebrow text-accent-soft">Портфолио</span>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Реализирани проекти
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Подбрани обекти, изпълнени от нашия екип в цялата страна — от
            жилищни комплекси до промишлени бази. Всеки проект е предаден в срок
            и в договорения бюджет.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <ProjectsGallery projects={projects} />
        </Container>
      </section>
    </>
  );
}
