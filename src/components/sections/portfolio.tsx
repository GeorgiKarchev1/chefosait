import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Портфолио"
            title="Избрани проекти"
            description="Реализирани обекти в жилищното и промишленото строителство. Всеки проект — изпълнен изцяло и предаден в срок."
            className="max-w-2xl"
          />
          <Reveal delay={0.1}>
            <Button href="/proekti" variant="outline">
              Всички проекти
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={(i % 3) * 0.06}
              className={project.span ? "sm:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
