import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Maximize, Calendar, Building2, Clock } from "lucide-react";
import { projects } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const facts = [
    { icon: MapPin, label: "Локация", value: project.location },
    { icon: Maximize, label: "Площ", value: project.area },
    { icon: Calendar, label: "Година", value: String(project.year) },
    { icon: Building2, label: "Възложител", value: project.client },
    { icon: Clock, label: "Срок", value: project.duration },
  ];

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-graphite-950 text-white">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/55 to-graphite-950/35" />
        <Container className="relative z-10 pb-16 pt-32">
          <Link
            href="/proekti"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Всички проекти
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent-soft">
            {project.category}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">{project.summary}</p>
        </Container>
      </section>

      {/* Facts */}
      <section className="border-b border-graphite-100 bg-white">
        <Container>
          <dl className="grid grid-cols-2 gap-y-8 py-12 md:grid-cols-5 md:gap-x-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-graphite-400">
                  <fact.icon className="size-4 text-accent" aria-hidden />
                  {fact.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold text-graphite-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Description + scope */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
            <div>
              <span className="eyebrow">За проекта</span>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-graphite-700">
                {project.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:border-l lg:border-graphite-100 lg:pl-12">
              <span className="eyebrow">Обхват на работата</span>
              <ul className="mt-6 space-y-4">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-graphite-100 pb-4 text-graphite-800"
                  >
                    <span className="size-1.5 shrink-0 bg-accent" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-paper py-20 lg:py-28">
        <Container>
          <span className="eyebrow">Галерия</span>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={(i % 2) * 0.08}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — снимка ${i + 1}`}
                    fill
                    sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-graphite-900 py-16 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Имате подобен проект?
            </h2>
            <p className="mt-2 text-white/65">
              Свържете се с нас за оглед и индивидуална оферта.
            </p>
          </div>
          <Button href="/#kontakti" size="lg">
            Поискай оферта
            <ArrowRight className="size-5" aria-hidden />
          </Button>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <h2 className="text-3xl font-semibold text-graphite-900 sm:text-4xl">
            Други проекти
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
