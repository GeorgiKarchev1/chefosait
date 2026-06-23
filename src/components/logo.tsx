import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

// Семпъл текстов знак с геометричен монограм — без илюстрации и градиенти.
export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-9 items-center justify-center font-display text-lg font-bold",
          dark ? "bg-graphite-900 text-white" : "bg-white text-graphite-900"
        )}
        aria-hidden
      >
        С
        <span className="ml-[1px] inline-block h-4 w-[3px] bg-accent" />
      </span>
      <span
        className={cn(
          "font-display text-xl font-bold uppercase tracking-tight",
          dark ? "text-graphite-900" : "text-white"
        )}
      >
        {company.name}
      </span>
    </span>
  );
}
