import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-display font-semibold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Плътен оранжев с тъмен текст — индустриален вид, не SaaS
        primary:
          "bg-accent text-graphite-950 shadow-[0_2px_0_0_var(--color-accent-strong-dark)] hover:bg-accent-soft hover:shadow-[0_4px_0_0_var(--color-accent-strong-dark)] hover:-translate-y-0.5 focus-visible:ring-offset-white",
        dark: "bg-graphite-900 text-white hover:bg-graphite-800 focus-visible:ring-offset-white",
        outline:
          "border-2 border-graphite-900 text-graphite-900 hover:bg-graphite-900 hover:text-white focus-visible:ring-offset-white",
        outlineLight:
          "border-2 border-white/40 text-white hover:border-white hover:bg-white hover:text-graphite-950 focus-visible:ring-offset-graphite-900",
        ghost: "text-graphite-900 hover:text-accent",
      },
      size: {
        md: "h-12 px-6 text-[0.8rem]",
        lg: "h-14 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant, size, className, children } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, href, ...rest } = props;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props;
  void _v;
  void _s;
  void _c;
  void _ch;
  void _h;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export { buttonVariants };
