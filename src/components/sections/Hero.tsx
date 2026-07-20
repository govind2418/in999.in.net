import Image from "next/image";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          {/* Left content */}
          <div className="relative z-10 flex flex-col items-start gap-6">
            <span className="card inline-flex max-w-full items-center gap-2 rounded-full px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-gold sm:text-[11px] sm:tracking-[0.25em]">
              {SITE.tagline}
            </span>

            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-mist sm:text-4xl lg:text-5xl">
              <span className="gold-text">IN999 Game</span> – Login, APK Download, Gift Codes
              &amp; Complete Guide
            </h1>

            <p className="max-w-md text-base leading-relaxed text-mist-dim sm:text-lg">
              IN999 Game is your complete resource for login, registration, APK
              download, bonus offers, gift codes, WinGo, Aviator, K3, 5D, TRX,
              promotions, screenshots, FAQs, and account support. Find the
              latest platform updates, step-by-step information, and
              everything you need in one place before getting started. If you
              choose to play, do so responsibly and only with money you can
              afford to lose.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="gold" href={REGISTER_URL}>Visit IN999</Button>
              <Button variant="outline" href="/login" icon={<LogIn className="h-4 w-4" />}>
                Login Guide
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center">
            <div className="animate-float relative h-[320px] w-full max-w-[560px] sm:h-[420px] lg:h-[560px]">
              <Image
                src="/images/in999-hero.webp"
                alt="IN999 game lobby — WinGo, Aviator, K3, 5D and TRX prediction rounds"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 48vw"
                className="object-contain shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
