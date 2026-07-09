import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "card transition-colors duration-200 hover:border-gold/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
