import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryGrid } from "@/components/gallery-grid";
import { gallery } from "@/lib/data";

export function Gallery() {
  if (gallery.length === 0) return null;

  return (
    <section id="galeriya" className="bg-paper py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Галерия"
          title="От нашите обекти"
          description="Изкопни работи, канализация и бетонови площадки — снимки директно от терена."
        />
        <GalleryGrid items={gallery} />
      </Container>
    </section>
  );
}
