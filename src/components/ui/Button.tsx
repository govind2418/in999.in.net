import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant = "gold" | "ghost" | "outline";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  gold: "gold-btn shadow-soft hover:brightness-105",
  ghost: "card text-mist hover:border-gold/40",
  outline: "border border-gold/40 text-gold hover:bg-gold/10",
};

export function Button({ variant = "gold", href, icon, className, children, ...props }: ButtonProps) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {icon}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon}
      {children}
    </button>
  );
}
