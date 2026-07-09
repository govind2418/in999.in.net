type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative px-5 pt-32 pb-12 sm:px-8 sm:pt-36 sm:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="gold-text mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em]">
          {eyebrow}
        </span>
        <h1 className="text-3xl font-bold text-mist sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base text-mist-dim sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
