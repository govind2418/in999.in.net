import type { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx("scroll-mt-28 py-8", className)}>
      <h2 className="mb-4 text-2xl font-bold text-mist sm:text-3xl">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-mist-dim sm:text-base">
        {children}
      </div>
    </section>
  );
}
