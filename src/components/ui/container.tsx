import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("container-px mx-auto w-full max-w-[1320px]", className)}>
      {children}
    </Tag>
  );
}
