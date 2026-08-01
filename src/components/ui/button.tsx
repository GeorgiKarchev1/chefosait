import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-display font-bold uppercase tracking-[0.04em] transition-[background-color,color,border-color,box-shadow,filter] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Метално злато с тъмен текст — светло отгоре, наситено отдолу
        primary:
          "gold-surface text-graphite-950 focus-visible:ring-offset-white",
        dark: "bg-graphite-900 text-white hover:bg-accent hover:text-graphite-950 focus-visible:ring-offset-white",
        outline:
          "border border-graphite-300 text-graphite-900 hover:border-accent hover:bg-accent hover:text-graphite-950 focus-visible:ring-offset-white",
        outlineLight:
          "border border-accent/45 text-white hover:border-accent hover:bg-accent hover:text-graphite-950 focus-visible:ring-offset-graphite-900",
        ghost: "text-graphite-900 hover:text-accent",
      },
      size: {
        md: "h-11 px-6 text-[0.75rem]",
        lg: "h-14 px-8 text-[0.82rem]",
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
