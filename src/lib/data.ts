import { homeCopy, introductionCopy, servicesCopy, aboutCopy, whyUsCopy, processCopy } from "@/lib/notes";

export const company = {
  name: introductionCopy.title,
  tagline: homeCopy.headline,
  phone: "+359 897 606 676",
  phoneHref: "+359897606676",
};

export const service = {
  title: servicesCopy.title,
  description: servicesCopy.description,
  points: servicesCopy.items,
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  area: string;
  client: string;
  duration: string;
  cover: string;
  gallery: string[];
  summary: string;
  description: string[];
  scope: string[];
  span?: boolean; // по-голяма клетка в галерията
};

// No project descriptions were supplied in Notes. Do not publish sample projects.
export const projects: Project[] = [];

export type Testimonial = { quote: string; author: string; role: string };
export const testimonials: Testimonial[] = [];

export const navLinks = [
  { href: "/#za-nas", label: aboutCopy.title },
  { href: "/#uslugi", label: servicesCopy.title },
  { href: "/#zashto-nie", label: whyUsCopy.title },
  { href: "/#proces", label: processCopy.title },
];
