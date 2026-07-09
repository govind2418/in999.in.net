import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WHY_CHOOSE } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Why IN999" title="Why Choose IN999" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.name} className="flex flex-col items-start gap-4 p-6">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-mist">{feature.name}</h3>
                <p className="text-sm leading-relaxed text-mist-dim">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
