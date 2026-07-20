import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { POPULAR_GAMES } from "@/lib/data";

const GAME_NOTES: Record<string, string> = {
  WinGo: "Pick a colour or number each round; results land in about a minute.",
  Aviator: "Cash out before the multiplier crashes — a fast, high-variance round.",
  K3: "Roll-based dice game with several bet types and payout tiers.",
  "5D": "Predict multi-digit outcomes across five number positions.",
  TRX: "Round results are tied to blockchain data for extra transparency.",
  Sports: "Pre-match and live odds across cricket, football and more.",
  Casino: "Slots and live-dealer tables alongside the prediction games.",
};

export function PopularGames() {
  return (
    <section id="games" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Games"
          title="Popular Games"
          subtitle="Six formats, all built for quick rounds — read the rules before you stake real money. Outcomes in every format below are down to chance, not strategy, so treat these as entertainment rather than income."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {POPULAR_GAMES.map((game) => {
            const Icon = game.icon;
            return (
              <Card key={game.name} className="flex flex-col items-center gap-3 p-6 text-center">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold text-mist">{game.name}</span>
                <span className="text-xs text-mist-dim">
                  {GAME_NOTES[game.name] ?? game.description}
                </span>
              </Card>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-mist-dim">
          Every format above is covered in more depth in our{" "}
          <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
            IN999 game guide
          </Link>
          , including how each round is settled and what the odds actually look like — worth a
          read before you commit any deposit.
        </p>
      </div>
    </section>
  );
}
