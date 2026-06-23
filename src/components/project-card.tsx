import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  priority = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/proekti/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden bg-graphite-900",
        className
      )}
    >
      <div className={cn("relative", project.span ? "aspect-[16/10]" : "aspect-[4/5]")}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          sizes={project.span ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent opacity-90" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-accent-soft">
          <span>{project.category}</span>
          <span className="text-white/40">·</span>
          <span className="text-white/70">{project.year}</span>
        </div>
        <h3 className="mt-2 text-2xl font-semibold text-white lg:text-[1.75rem]">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-accent-soft" aria-hidden />
            {project.location}
          </span>
          <span>{project.area}</span>
        </div>
      </div>

      <span className="absolute right-6 top-6 flex size-11 items-center justify-center bg-white/0 text-white opacity-0 transition-all duration-300 group-hover:bg-accent group-hover:opacity-100 lg:right-8 lg:top-8">
        <ArrowUpRight className="size-5" aria-hidden />
      </span>
    </Link>
  );
}
