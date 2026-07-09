import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Support"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before you get started."
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="card group overflow-hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="text-base font-semibold text-mist sm:text-lg">
                  {item.question}
                </span>
                <span className="gold-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-open:rotate-45">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-mist-dim sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
