import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WHY_CHOOSE } from "@/lib/data";

const FEATURE_NOTES: Record<string, string> = {
  "Fast Withdrawals": "Requests are typically reviewed and paid out within minutes of approval.",
  "Secure Platform": "Wallet balances and login sessions run through encrypted connections.",
  "24x7 Support": "In-app chat and a help desk are staffed around the clock for account issues.",
  "Daily Rewards": "Signing in regularly can unlock small check-in bonuses and streak rewards.",
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Why IN999"
          title="What Players Notice First"
          subtitle="A quick summary of the platform basics, based on what we've documented across our guides. None of this is a promise of results — treat it as a starting point, not a guarantee."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.name} className="flex flex-col items-start gap-4 p-6">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-mist">{feature.name}</h3>
                <p className="text-sm leading-relaxed text-mist-dim">
                  {FEATURE_NOTES[feature.name] ?? feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
