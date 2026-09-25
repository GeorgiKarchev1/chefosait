"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  y?: number;
};

// Фина reveal анимация при влизане във viewport. Уважава prefers-reduced-motion.
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = 18,
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("reveal", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
