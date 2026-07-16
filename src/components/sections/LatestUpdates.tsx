import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { LATEST_UPDATES } from "@/lib/data";

const UPDATE_NOTES: Record<string, string> = {
  "New Events": "We track new tournaments and leaderboard challenges as the platform adds them.",
  "New Games": "Game releases and format changes get added to our guides soon after they go live.",
  Offers: "Time-limited bonuses and cashback runs are noted here when we can confirm them.",
};

export function LatestUpdates() {
  return (
    <section id="updates" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="What's New"
          title="Latest Updates"
          subtitle="Notes on recent changes to the platform, as we spot and verify them. We update this list periodically rather than in real time, so always double-check anything time-sensitive on the platform itself."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {LATEST_UPDATES.map((update) => {
            const Icon = update.icon;
            return (
              <Card key={update.title} className="flex flex-col items-start gap-4 p-6">
                <span className="gold-btn flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-mist">{update.title}</h3>
                <p className="text-sm leading-relaxed text-mist-dim">
                  {UPDATE_NOTES[update.title] ?? update.description}
                </p>
              </Card>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-mist-dim">
          Updates move faster than this page does, so treat it as a rough log rather than a
          live feed. For the current bonus terms, check the{" "}
          <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
            IN999 bonus guide
          </Link>{" "}
          directly before assuming an offer is still active.
        </p>
      </div>
    </section>
  );
}
