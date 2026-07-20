import type { ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HomeFaqItem = {
  question: string;
  answer: ReactNode;
};

const HOME_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: "What is IN999?",
    answer: (
      <>
        IN999 is an online gaming platform built around short, timer-based prediction rounds —
        WinGo, K3, 5D and TRX — alongside the crash-style Aviator game, cricket and sports
        markets, and a casino section with slots and live tables. Our{" "}
        <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 game guide
        </Link>{" "}
        breaks down every category in plain language.
      </>
    ),
  },
  {
    question: "Is IN999 safe to use?",
    answer: (
      <>
        No online gaming platform can be guaranteed 100% risk-free, and results in games like
        WinGo and K3 are down to chance, not skill. What we can tell you is that account
        registration and the wallet flow use standard encrypted connections. Read the details
        in our{" "}
        <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 login guide
        </Link>{" "}
        before you sign up.
      </>
    ),
  },
  {
    question: "Is IN999 legal to play in India?",
    answer: (
      <>
        Gaming and betting laws vary by Indian state, and real-money prediction games sit in a
        legal grey area in several of them. We don&apos;t give legal advice — check the current
        rules where you live before you deposit anything, and see our{" "}
        <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
          responsible gaming page
        </Link>{" "}
        for the risk side of the equation.
      </>
    ),
  },
  {
    question: "How do I register on IN999?",
    answer: (
      <>
        Tap Register, enter a mobile number, verify it with an OTP, and set a password —
        the whole process usually takes under a minute. Our{" "}
        <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
          registration walkthrough
        </Link>{" "}
        covers each screen in order, including what to do if the OTP doesn&apos;t arrive.
      </>
    ),
  },
  {
    question: "How do I log in to my IN999 account?",
    answer: (
      <>
        Enter your registered mobile number and password on the sign-in screen. If your session
        won&apos;t connect or you&apos;re getting an error, our{" "}
        <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 login guide
        </Link>{" "}
        walks through the common causes and fixes.
      </>
    ),
  },
  {
    question: "I forgot my IN999 password — what now?",
    answer: (
      <>
        Use the &quot;forgot password&quot; link on the sign-in screen to reset it through your
        verified mobile number. The step-by-step recovery flow is covered in our{" "}
        <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
          login guide
        </Link>
        .
      </>
    ),
  },
  {
    question: "Is there an official IN999 app?",
    answer: (
      <>
        Yes, IN999 offers an Android APK. Before installing anything, check our{" "}
        <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 app overview
        </Link>{" "}
        and{" "}
        <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
          download guide
        </Link>{" "}
        so you know what permissions it asks for and how to verify the file.
      </>
    ),
  },
  {
    question: "How do I download the IN999 APK?",
    answer: (
      <>
        The APK is distributed as a direct download rather than through the Play Store. Our{" "}
        <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 download guide
        </Link>{" "}
        and{" "}
        <Link href="/apk-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
          APK download page
        </Link>{" "}
        cover the installation steps and the Android permissions you&apos;ll be asked to allow.
      </>
    ),
  },
  {
    question: "Is the IN999 APK safe to install on Android?",
    answer: (
      <>
        Sideloaded APKs carry more risk than Play Store apps by default, since Android
        won&apos;t vet them the same way. Only install from a source you trust, review the
        permissions it requests, and read our{" "}
        <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
          download guide
        </Link>{" "}
        before you tap install.
      </>
    ),
  },
  {
    question: "What is IN999 WinGo?",
    answer: (
      <>
        WinGo is IN999&apos;s colour-and-number prediction game — you forecast which colour or
        digit a short timer will land on, and rounds resolve in about a minute. It&apos;s the
        most-searched mode in the catalogue; see our{" "}
        <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
          games guide
        </Link>{" "}
        for a full rules breakdown.
      </>
    ),
  },
  {
    question: "What is IN999 Aviator?",
    answer: (
      <>
        Aviator is a crash-style multiplier game — a plane climbs and the payout multiplier
        rises with it, and you choose when to cash out before it &quot;flies away.&quot; It&apos;s
        fast and high-variance; our{" "}
        <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
          games guide
        </Link>{" "}
        explains how the round actually resolves.
      </>
    ),
  },
  {
    question: "What is IN999 K3 lottery?",
    answer: (
      <>
        K3 is a three-dice prediction format — instead of colours, you&apos;re reading
        combinations and totals. Our{" "}
        <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 game guide
        </Link>{" "}
        covers K3 alongside every other mode in the lobby.
      </>
    ),
  },
  {
    question: "What is IN999 5D lottery?",
    answer: (
      <>
        5D is a five-digit number format where each position resolves independently between 0
        and 9, giving experienced players more patterns to track than WinGo. See our{" "}
        <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
          games guide
        </Link>{" "}
        for how bets on 5D are structured.
      </>
    ),
  },
  {
    question: "What is IN999 TRX?",
    answer: (
      <>
        TRX-style rounds source their result from a public, blockchain-referenced value instead
        of a purely internal number generator, which appeals to players who want an outcome they
        can independently check. Full details are in our{" "}
        <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 game guide
        </Link>
        .
      </>
    ),
  },
  {
    question: "Does IN999 offer cricket and sports betting?",
    answer: (
      <>
        Yes — alongside the prediction games, IN999 runs pre-match and live markets across
        cricket, football and other sports. These behave more like a traditional sportsbook than
        a timed round; see our{" "}
        <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
          games guide
        </Link>{" "}
        for how the two formats differ.
      </>
    ),
  },
  {
    question: "Does IN999 have casino games?",
    answer: (
      <>
        Yes, the casino section covers slot-style titles and live-dealer tables alongside the
        prediction games. Rules vary title by title, so it&apos;s worth reading the category
        breakdown in our{" "}
        <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
          games guide
        </Link>{" "}
        before you stake anything on a new one.
      </>
    ),
  },
  {
    question: "Are the welcome bonus and gift codes worth claiming?",
    answer: (
      <>
        They can be, but every bonus comes with wagering requirements and an expiry window —
        read the terms before you opt in. We keep our{" "}
        <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
          bonus guide
        </Link>{" "}
        and{" "}
        <Link href="/in999-gift-code" className="text-gold underline underline-offset-2 hover:text-gold/80">
          gift code guide
        </Link>{" "}
        updated with what each offer actually requires.
      </>
    ),
  },
  {
    question: "How does the IN999 first deposit bonus work?",
    answer: (
      <>
        First-deposit bonuses are typically tiered — the bonus percentage and cap scale with how
        much you deposit the first time, and the credit usually carries a wagering requirement
        before it&apos;s withdrawable. Our{" "}
        <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 bonus guide
        </Link>{" "}
        explains the current tiers and terms.
      </>
    ),
  },
  {
    question: "How do I redeem an IN999 gift code?",
    answer: (
      <>
        Gift codes are entered on a dedicated redemption screen and credit a bonus amount to
        your wallet once accepted. Our{" "}
        <Link href="/in999-gift-code" className="text-gold underline underline-offset-2 hover:text-gold/80">
          gift code guide
        </Link>{" "}
        shows where to find active codes and how redemption works step by step.
      </>
    ),
  },
  {
    question: "What is the IN999 attendance bonus?",
    answer: (
      <>
        It&apos;s a daily check-in reward — the longer your consecutive login streak, the higher
        the reward tier, usually capping out around a week before resetting. Current promotions,
        including attendance rewards, are tracked on our{" "}
        <Link href="/promotions" className="text-gold underline underline-offset-2 hover:text-gold/80">
          promotions page
        </Link>
        .
      </>
    ),
  },
  {
    question: "How does the IN999 referral program work?",
    answer: (
      <>
        Inviting friends through your referral link can earn you a commission based on their
        deposits and activity, usually within a set window after they sign up. Our{" "}
        <Link href="/referral-program" className="text-gold underline underline-offset-2 hover:text-gold/80">
          referral program guide
        </Link>{" "}
        explains the tiers and how commission is calculated.
      </>
    ),
  },
  {
    question: "What is the IN999 VIP club?",
    answer: (
      <>
        The VIP club is a loyalty tier system — as your play volume grows, you climb tiers that
        can unlock extra perks like faster withdrawal review or bigger bonus caps. See our{" "}
        <Link href="/vip-club" className="text-gold underline underline-offset-2 hover:text-gold/80">
          VIP club guide
        </Link>{" "}
        for how tiers are typically structured.
      </>
    ),
  },
  {
    question: "What payment methods does IN999 support?",
    answer: (
      <>
        Commonly supported methods include UPI, direct bank transfer, and e-wallets, though exact
        availability depends on your region. Our{" "}
        <Link href="/deposit-withdrawal" className="text-gold underline underline-offset-2 hover:text-gold/80">
          deposit &amp; withdrawal guide
        </Link>{" "}
        covers the process end to end.
      </>
    ),
  },
  {
    question: "How long do IN999 withdrawals usually take?",
    answer: (
      <>
        Most requests we&apos;ve observed are processed within minutes once approved, though
        timing can vary with your payment method and any pending verification. Our{" "}
        <Link href="/deposit-withdrawal" className="text-gold underline underline-offset-2 hover:text-gold/80">
          deposit &amp; withdrawal guide
        </Link>{" "}
        has more on what can slow a request down.
      </>
    ),
  },
  {
    question: "Is there a minimum deposit on IN999?",
    answer: (
      <>
        Yes, platforms in this category typically enforce both a minimum and a maximum on
        deposits, and these figures can change over time. Check the amount field on the deposit
        screen for the current numbers, and see our{" "}
        <Link href="/deposit-withdrawal" className="text-gold underline underline-offset-2 hover:text-gold/80">
          deposit &amp; withdrawal guide
        </Link>{" "}
        for the general flow.
      </>
    ),
  },
  {
    question: "How do I contact IN999 customer support?",
    answer: (
      <>
        The in-app or in-site support channel is generally fastest since it can pull up your
        account context automatically. If you&apos;d rather reach us about this guide site
        specifically, our{" "}
        <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
          contact page
        </Link>{" "}
        has the details.
      </>
    ),
  },
  {
    question: "What should I do if IN999 login isn't working?",
    answer: (
      <>
        Double-check your mobile number and password first, then try the forgot-password reset
        if that fails — a new device or network can also trigger an extra verification step.
        Our{" "}
        <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 login guide
        </Link>{" "}
        covers each failure case in order.
      </>
    ),
  },
  {
    question: "Is this site the official IN999 platform?",
    answer:
      "No. This is an independent, unofficial guide hub written for players. We are not IN999's operator and have no control over the platform, its odds, or its payment processing — we simply document how things work and link out to the platform where relevant.",
  },
  {
    question: "Should I set limits before I start playing?",
    answer: (
      <>
        Yes. These are real-money games with no guaranteed outcomes, so it&apos;s worth deciding
        a deposit limit and a stop-loss point before you begin, and stepping away if play stops
        feeling fun. Our{" "}
        <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
          responsible gaming page
        </Link>{" "}
        has more on setting limits. Only wager what you can comfortably afford to lose.
      </>
    ),
  },
  {
    question: "Where do I start if I'm brand new to IN999?",
    answer: (
      <>
        Read the{" "}
        <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
          IN999 game guide
        </Link>{" "}
        first, then the{" "}
        <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
          registration walkthrough
        </Link>{" "}
        and{" "}
        <Link href="/how-to-play" className="text-gold underline underline-offset-2 hover:text-gold/80">
          how-to-play guide
        </Link>{" "}
        before funding an account — in that order, you&apos;ll understand what you&apos;re
        looking at before any money is involved.
      </>
    ),
  },
];

// Plain-text answers for schema.org structured data — kept short, not a duplicate of the
// richer in-page copy above, since search engines just need a factual summary per question.
const FAQ_SCHEMA_TEXT: Record<string, string> = {
  "What is IN999?":
    "IN999 is an online gaming platform with timer-based prediction rounds (WinGo, K3, 5D, TRX), the Aviator crash game, cricket and sports markets, and a casino section.",
  "Is IN999 safe to use?":
    "No platform is 100% risk-free, but registration and wallet flows on IN999 use standard encrypted connections. Results in prediction games are down to chance, not skill.",
  "Is IN999 legal to play in India?":
    "Gaming and betting laws vary by Indian state. Check current local rules before depositing; this site does not provide legal advice.",
  "How do I register on IN999?":
    "Tap Register, enter a mobile number, verify with an OTP, and set a password. The process usually takes under a minute.",
  "How do I log in to my IN999 account?":
    "Enter your registered mobile number and password on the sign-in screen. A new device or network can trigger extra verification.",
  "I forgot my IN999 password — what now?":
    "Use the forgot-password option on the sign-in screen to reset your password via your verified mobile number.",
  "Is there an official IN999 app?":
    "Yes, IN999 offers an Android APK distributed as a direct download rather than through the Play Store.",
  "How do I download the IN999 APK?":
    "Download the APK directly from the platform and install it, allowing the Android permissions it requests.",
  "Is the IN999 APK safe to install on Android?":
    "Sideloaded APKs carry more risk than Play Store apps. Only install from a trusted source and review requested permissions first.",
  "What is IN999 WinGo?":
    "WinGo is IN999's colour-and-number prediction game — forecast which colour or digit a short timer lands on; rounds resolve in about a minute.",
  "What is IN999 Aviator?":
    "Aviator is a crash-style multiplier game where a rising payout multiplier can be cashed out any time before the round ends.",
  "What is IN999 K3 lottery?":
    "K3 is a three-dice prediction format where players bet on combinations and totals rather than a colour.",
  "What is IN999 5D lottery?":
    "5D is a five-digit number prediction format where each digit position resolves independently between 0 and 9.",
  "What is IN999 TRX?":
    "TRX-style rounds derive their result from a public, blockchain-referenced value instead of a purely internal generator.",
  "Does IN999 offer cricket and sports betting?":
    "Yes, IN999 runs pre-match and live betting markets across cricket, football and other sports alongside its prediction games.",
  "Does IN999 have casino games?":
    "Yes, IN999 has a casino section with slot-style titles and live-dealer tables alongside the prediction games.",
  "Are the welcome bonus and gift codes worth claiming?":
    "They can be, but every bonus carries wagering requirements and an expiry window, so read the terms before opting in.",
  "How does the IN999 first deposit bonus work?":
    "First-deposit bonuses are typically tiered, with the bonus percentage and cap scaling by deposit size, and usually carry a wagering requirement.",
  "How do I redeem an IN999 gift code?":
    "Enter the code on the dedicated gift/redemption screen to credit the bonus amount to your wallet.",
  "What is the IN999 attendance bonus?":
    "It's a daily check-in reward where longer consecutive login streaks unlock higher reward tiers, typically over a 7-day cycle.",
  "How does the IN999 referral program work?":
    "Inviting friends via a referral link can earn commission based on their deposits and activity within a set window after signup.",
  "What is the IN999 VIP club?":
    "The VIP club is a loyalty tier system where higher play volume unlocks extra perks like faster withdrawal review.",
  "What payment methods does IN999 support?":
    "Commonly supported methods include UPI, direct bank transfer, and e-wallets, though availability depends on region.",
  "How long do IN999 withdrawals usually take?":
    "Most approved withdrawal requests are processed within minutes, though timing can vary with payment method and verification.",
  "Is there a minimum deposit on IN999?":
    "Yes, platforms in this category typically enforce a minimum and maximum deposit amount, which can change over time.",
  "How do I contact IN999 customer support?":
    "Use the in-app or in-site support channel for the fastest response, since it can pull up your account context automatically.",
  "What should I do if IN999 login isn't working?":
    "Check your mobile number and password, then use the forgot-password reset if needed. New devices can trigger extra verification.",
  "Is this site the official IN999 platform?":
    "No, this is an independent, unofficial guide hub written for players and not affiliated with IN999's operator.",
  "Should I set limits before I start playing?":
    "Yes — decide a deposit limit and stop-loss point before playing, and only wager money you can comfortably afford to lose.",
  "Where do I start if I'm brand new to IN999?":
    "Start with the IN999 game guide, then the registration walkthrough and how-to-play guide, before funding an account.",
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: FAQ_SCHEMA_TEXT[item.question] ?? item.question,
    },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Support"
          title="Frequently Asked Questions"
          subtitle="30 straight answers to the IN999 questions we hear most before people get started."
        />

        <div className="mt-12 flex flex-col gap-4">
          {HOME_FAQ_ITEMS.map((item) => (
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
