import { homeCopy, introductionCopy, servicesCopy, aboutCopy, whyUsCopy, processCopy } from "@/lib/notes";

export const company = {
  name: introductionCopy.title,
  tagline: homeCopy.headline,
  phone: "+359 897 606 676",
  phoneHref: "+359897606676",
  additionalPhone: "0876 727 261",
  additionalPhoneHref: "+359876727261",
  email: "sdm.construct26@gmail.com",
  instagram: "https://www.instagram.com/sdm.construct26/",
  instagramHandle: "@sdm.construct26",
  googleMaps: "https://share.google/kB8yGcwX7Kq2nJcmb",
  address: "ул. 6-та, 4201 Бенковски",
  geo: { lat: 42.2105084, lng: 24.6557034 },
  // Търсене по име + адрес, за да вгради картата пина на самия бизнес профил.
  mapEmbed:
    "https://www.google.com/maps?q=SDM+Construct,+%D1%83%D0%BB.+6-%D1%82%D0%B0,+4201+%D0%91%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8&hl=bg&z=15&output=embed",
};

export type GalleryItem =
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "video"; src: string; poster: string; alt: string; width: number; height: number };

export const gallery: GalleryItem[] = [
  { type: "image", src: "/snimka2.jpg", alt: "Два мини багера правят изкоп до промишлена сграда", width: 1200, height: 1600 },
  { type: "image", src: "/snimka4.jpg", alt: "Мини багери и дъмпер на строителен обект в жилищен квартал", width: 1600, height: 739 },
  { type: "image", src: "/snimka3.jpg", alt: "Траншея с положена канализационна тръба", width: 1200, height: 1600 },
  { type: "video", src: "/video1.mp4", poster: "/video1-poster.jpg", alt: "Видео: изкопни работи с мини багери", width: 480, height: 272 },
  { type: "image", src: "/snimka5.jpg", alt: "Излята бетонна площадка до сграда", width: 1600, height: 900 },
  { type: "image", src: "/snimka6.jpg", alt: "Камион и мини багер при изкопни работи пред сграда", width: 1200, height: 1600 },
  { type: "image", src: "/snimka7.jpg", alt: "Подравняване на терена с мини багер", width: 1600, height: 1200 },
];

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
  { href: "/#galeriya", label: "Галерия" },
];
