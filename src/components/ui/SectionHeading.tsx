type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      {eyebrow && (
        <span className="gold-text mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-mist sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-mist-dim sm:text-lg">{subtitle}</p>}
    </div>
  );
}
