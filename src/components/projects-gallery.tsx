"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

export function ProjectsGallery({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = Array.from(new Set(projects.map((p) => p.category)));
    return ["Всички", ...set];
  }, [projects]);

  const [active, setActive] = useState("Всички");

  const filtered =
    active === "Всички"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Филтър по категория">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "border px-5 py-2.5 text-sm font-semibold transition-colors",
              active === cat
                ? "border-graphite-900 bg-graphite-900 text-white"
                : "border-graphite-200 text-graphite-600 hover:border-graphite-900 hover:text-graphite-900"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className={project.span && active === "Всички" ? "sm:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
