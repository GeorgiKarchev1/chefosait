import Image from "next/image";
import { company } from "@/lib/data";
import { cn } from "@/lib/utils";

// Логото на компанията. Върху тъмен фон (нескролнат hero, футър) се показва
// в бял монохромен вариант, за да остане четимо.
export function Logo({
  dark = true,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/sdm-logo.png"
      alt={company.name}
      width={378}
      height={348}
      preload
      className={cn(
        "h-14 w-auto transition-[filter] duration-300 sm:h-16 lg:h-[4.5rem]",
        dark ? "" : "brightness-0 invert",
        className
      )}
    />
  );
}
