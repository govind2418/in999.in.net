import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { POPULAR_GAMES } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Games | ${SITE.fullName}`,
  description:
    "Explore all IN999 games — WinGo, K3, 5D, TRX, Sports betting and Casino. Fast rounds, fair outcomes, instant payouts.",
  alternates: { canonical: "/games" },
};

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Games"
          title="All Games on IN999"
          subtitle="Six game categories built for speed, fairness, and simplicity."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POPULAR_GAMES.map((game) => {
                const Icon = game.icon;
                return (
                  <Card key={game.name} className="flex flex-col items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-xl font-semibold text-mist">{game.name}</h2>
                    <p className="text-sm leading-relaxed text-mist-dim">{game.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="mt-14 flex justify-center">
              <Button variant="gold" href="/download-app">
                Download &amp; Play
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
