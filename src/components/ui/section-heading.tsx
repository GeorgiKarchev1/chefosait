import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={cn(
          "mt-3 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl",
          light ? "text-white" : "text-graphite-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 leading-relaxed",
            light ? "text-white/70" : "text-graphite-600"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
