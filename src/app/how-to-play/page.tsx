import { Dice5, Boxes, Grid3x3, TrendingUp, Trophy, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IN999 How to Play Guide | WinGo, K3, 5D & TRX Rules Explained",
  description:
    "IN999 how to play guide — step-by-step rules for WinGo, K3, 5D, TRX, Sports and Casino, plus tips on reading results and placing your first round.",
  path: "/how-to-play",
});

const GUIDES = [
  {
    name: "WinGo",
    icon: Dice5,
    summary: "Predict the colour or number of the next result.",
    steps: [
      "Pick a time period — 30 seconds, 1 minute, 3 minutes or 5 minutes.",
      "Choose a colour (Green, Red or Violet) or a specific number from 0–9.",
      "Set your bet amount and confirm before the round timer ends.",
      "When the round closes, the result is revealed and matching bets are paid out automatically.",
    ],
  },
  {
    name: "K3",
    icon: Boxes,
    summary: "A dice-based strategy game using three dice per round.",
    steps: [
      "Choose a round length and place a bet on the total, a specific combination, or big/small.",
      "Three dice are rolled at the end of the round.",
      "Bets that match the total, combination, or big/small outcome are paid according to the odds shown before you bet.",
    ],
  },
  {
    name: "5D",
    icon: Grid3x3,
    summary: "Predict a 5-digit result across five independent positions.",
    steps: [
      "Select a round and choose numbers for one or more of the five digit positions.",
      "You can bet on exact digits, sums, or big/small for each position.",
      "Results are drawn for all five positions at once, and winning positions are paid per your selections.",
    ],
  },
  {
    name: "TRX",
    icon: TrendingUp,
    summary: "Results are derived from public blockchain data for verifiable fairness.",
    steps: [
      "Choose a round length, then bet on colour, number, or size, similar to WinGo.",
      "The round result is generated from a public TRON blockchain hash, so anyone can verify it independently.",
      "Matching bets are settled automatically once the blockchain-derived result is confirmed.",
    ],
  },
  {
    name: "Sports",
    icon: Trophy,
    summary: "Live and pre-match betting markets across major sports.",
    steps: [
      "Browse upcoming or live matches from the Sports section.",
      "Pick a market — match winner, handicap, over/under, and more.",
      "Add your selection to the bet slip, enter a stake, and confirm.",
    ],
  },
  {
    name: "Casino",
    icon: Sparkles,
    summary: "Slots and live-dealer tables for classic casino play.",
    steps: [
      "Open the Casino section and choose a slot or live table.",
      "Set your stake using the in-game controls.",
      "Spin or play a round — results follow each game's published RTP and rules.",
    ],
  },
];

export default function HowToPlayPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Guide"
          title="IN999 How to Play Guide"
          subtitle="Simple, step-by-step rules for every IN999 Game category."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {GUIDES.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Card key={guide.name} className="flex flex-col gap-4 p-8">
                    <div className="flex items-center gap-4">
                      <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h2 className="text-lg font-semibold text-mist">{guide.name}</h2>
                        <p className="text-sm text-mist-dim">{guide.summary}</p>
                      </div>
                    </div>
                    <ol className="flex flex-col gap-2">
                      {guide.steps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-mist-dim">
                          <span className="mt-0.5 shrink-0 text-xs font-bold text-gold">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </Card>
                );
              })}
            </div>

            <div className="mt-14 flex justify-center">
              <Button variant="gold" href={REGISTER_URL}>
                Register &amp; Start Playing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
