import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const base = "https://sdmconstruct.bg";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/proekti`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/proekti/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
