import { Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WelcomeBonus() {
  return (
    <section id="bonus" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="card shadow-soft relative mx-auto max-w-[1400px] px-6 py-16 text-center sm:px-12 sm:py-20">
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="gold-btn flex h-16 w-16 items-center justify-center rounded-2xl">
            <Gift className="h-8 w-8" strokeWidth={2} />
          </span>

          <span className="gold-text text-xs font-semibold uppercase tracking-[0.3em]">
            Welcome Bonus
          </span>

          <h2 className="text-3xl font-bold text-mist sm:text-4xl md:text-5xl">
            Claim Your <span className="gold-text">Gold Bonus</span> Today
          </h2>
          <p className="text-base text-mist-dim sm:text-lg">
            New players unlock an instant welcome bonus plus daily gift codes
            and VIP rewards.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="gold">Register</Button>
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
