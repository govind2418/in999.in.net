import Link from "next/link";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";

export function WelcomeBonus() {
  return (
    <section id="bonus" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="card shadow-soft relative mx-auto max-w-[1400px] px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="gold-btn flex h-16 w-16 items-center justify-center rounded-2xl">
            <Gift className="h-8 w-8" strokeWidth={2} />
          </span>

          <span className="gold-text text-xs font-semibold uppercase tracking-[0.3em]">
            Bonuses &amp; Offers
          </span>

          <h2 className="text-3xl font-bold text-mist sm:text-4xl md:text-5xl">
            What the <span className="gold-text">IN999 Welcome Bonus</span> Covers
          </h2>
          <p className="text-base text-mist-dim sm:text-lg">
            New accounts typically qualify for a first-deposit bonus, and the platform runs
            gift codes from time to time. Bonus terms, wagering requirements and expiry
            windows vary by promotion, so it&apos;s worth reading the fine print before you
            opt in — our{" "}
            <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
              IN999 bonus guide
            </Link>{" "}
            explains current offers, and our{" "}
            <Link href="/in999-gift-code" className="text-gold underline underline-offset-2 hover:text-gold/80">
              gift code guide
            </Link>{" "}
            shows how redemption works step by step.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="gold" href={REGISTER_URL}>Register</Button>
            <Button variant="outline" href="/gift-code">
              Claim Bonus
            </Button>
            <Button variant="ghost" href="/download-app">
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
