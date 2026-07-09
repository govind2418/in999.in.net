import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { LATEST_UPDATES } from "@/lib/data";

export function LatestUpdates() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="What's New" title="Latest Updates" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {LATEST_UPDATES.map((update) => {
            const Icon = update.icon;
            return (
              <Card key={update.title} className="flex flex-col items-start gap-4 p-6">
                <span className="gold-btn flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-mist">{update.title}</h3>
                <p className="text-sm leading-relaxed text-mist-dim">{update.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
