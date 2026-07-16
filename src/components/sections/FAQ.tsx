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
    question: "How long do withdrawals usually take?",
    answer:
      "Most requests we've observed are processed within minutes once approved, though timing can vary with your payment method and any pending verification. Treat published speeds as typical, not guaranteed.",
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
    question: "Is this site the official IN999 platform?",
    answer:
      "No. This is an independent, unofficial guide hub written for players. We are not IN999's operator and have no control over the platform, its odds, or its payment processing — we simply document how things work and link out to the platform where relevant.",
  },
  {
    question: "Should I set limits before I start playing?",
    answer:
      "Yes. These are real-money games with no guaranteed outcomes, so it's worth deciding a deposit limit and a stop-loss point before you begin, and stepping away if play stops feeling fun. Only wager what you can comfortably afford to lose.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Support"
          title="Frequently Asked Questions"
          subtitle="Straight answers to the questions we hear most before people get started."
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
