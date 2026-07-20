import Link from "next/link";
import { SITE } from "@/lib/constants";

export function AboutIn999() {
  return (
    <section id="about" className="relative scroll-mt-28 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <span className="gold-text mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em]">
            About Us
          </span>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">What is {SITE.name}?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-mist-dim sm:text-base">
            {SITE.fullName} explains the {SITE.name} platform in independent, easy-to-follow
            guides — from the first time you sign in to the moment you request a withdrawal.
            The {SITE.name} game lobby centres on quick, timer-based rounds like WinGo and the
            crash-style Aviator, alongside K3, 5D and TRX prediction formats, cricket and sports
            markets, and a casino section with slots and live tables. Every category runs
            through one shared wallet, and new accounts are usually offered a first-deposit
            bonus plus a daily attendance bonus for logging in on consecutive days. We
            don&apos;t operate {SITE.name}; we simply document how it works so you can decide
            for yourself whether it&apos;s worth your time.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-mist">Game Formats</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              {SITE.name} centres on short, fast-paced rounds — colour-prediction titles like
              WinGo alongside K3, 5D and TRX, the crash-style Aviator multiplier game, plus
              cricket-led sports markets and a casino section with slots and live tables.
              Rounds finish in under a minute, which keeps things quick but also means losses
              can add up just as fast. Read our full{" "}
              <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
                IN999 game guide
              </Link>{" "}
              for a rules breakdown before you stake anything.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mist">Getting Signed In</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              Most players can register and reach their dashboard in a couple of minutes using
              just a mobile number and password. Our step-by-step{" "}
              <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                IN999 login walkthrough
              </Link>{" "}
              covers OTP verification, password resets, and what to try if your session won&apos;t
              connect.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mist">Wallet &amp; Bonuses</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              Deposits and withdrawals run through an in-app wallet, and new accounts are
              usually offered a first-deposit bonus alongside occasional gift codes. Terms,
              wagering conditions and expiry dates vary, so check our{" "}
              <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                IN999 bonus guide
              </Link>{" "}
              before you opt into anything.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mist">Referrals &amp; VIP</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              Inviting friends can unlock a commission on their activity, and returning players
              can climb VIP tiers for extra perks. Our{" "}
              <Link href="/referral-program" className="text-gold underline underline-offset-2 hover:text-gold/80">
                referral program guide
              </Link>{" "}
              and{" "}
              <Link href="/vip-club" className="text-gold underline underline-offset-2 hover:text-gold/80">
                VIP club guide
              </Link>{" "}
              explain how each tier and commission tier actually works.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm leading-relaxed text-mist-dim">
          Ready to look closer? Read our{" "}
          <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
            registration walkthrough
          </Link>
          , see whether the{" "}
          <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
            IN999 app
          </Link>{" "}
          is worth installing on your phone, or jump straight to the{" "}
          <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
            APK download guide
          </Link>{" "}
          if you already know what you&apos;re after. For anything else, our{" "}
          <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
            contact page
          </Link>{" "}
          has ways to reach us directly.
        </p>
      </div>
    </section>
  );
}
