import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { POPULAR_GAMES } from "@/lib/data";

export function PopularGames() {
  return (
    <section id="games" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Games"
          title="Popular Games"
          subtitle="Six ways to play, all built for speed and fairness."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {POPULAR_GAMES.map((game) => {
            const Icon = game.icon;
            return (
              <Card key={game.name} className="flex flex-col items-center gap-3 p-6 text-center">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold text-mist">{game.name}</span>
                <span className="text-xs text-mist-dim">{game.description}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
