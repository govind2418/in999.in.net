import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { FAQ_ITEMS } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 FAQ",
  description:
    "Answers to common questions about IN999 accounts, login, deposits and withdrawals, game fairness, bonuses, and support — grouped by topic.",
  path: "/faq",
});

type QA = { question: string; answer: string | ReactNode };

const ACCOUNT_LOGIN: QA[] = [
  {
    question: "How do I create an IN999 account?",
    answer:
      "Tap Register, enter a working mobile number, verify it with an OTP, then set a password. The whole process typically takes under a minute once you have your phone nearby.",
  },
  {
    question: "I forgot my password — what now?",
    answer: (
      <>
        Use the &quot;forgot password&quot; option on the login screen to reset it via your
        verified mobile number. See our{" "}
        <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
          login guide
        </Link>{" "}
        for the full recovery flow.
      </>
    ),
  },
  {
    question: "Can I have more than one account?",
    answer:
      "No. Multiple accounts per person are generally against platform terms and can trigger verification holds on both accounts, including on withdrawals. Stick to a single registered account.",
  },
  {
    question: "Why was my login flagged for verification?",
    answer:
      "Logging in from a new device, a different network, or after a long period of inactivity can trigger an extra verification step. This is a routine security measure, not a sign your account has been compromised.",
  },
  {
    question: "Can I change my registered mobile number?",
    answer:
      "Most platforms allow this through account settings or support, but expect an identity check first since your mobile number is usually tied to both login and withdrawal verification. Update it as soon as you change numbers to avoid losing access later.",
  },
];

const DEPOSITS_WITHDRAWALS: QA[] = [
  {
    question: "What payment methods can I use to deposit?",
    answer: (
      <>
        Commonly supported methods include UPI, direct bank transfer, and e-wallets, though exact
        availability depends on your region. Our{" "}
        <Link href="/deposit-withdrawal" className="text-gold underline underline-offset-2 hover:text-gold/80">
          deposit &amp; withdrawal guide
        </Link>{" "}
        covers the process step by step.
      </>
    ),
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Most withdrawal requests clear an initial review and are released within minutes to a few hours during normal conditions, though first-time or larger withdrawals can take longer if extra verification is required.",
  },
  {
    question: "Why is my withdrawal on hold?",
    answer:
      "Holds are usually routine — commonly identity verification, a name mismatch between your registered profile and the withdrawal destination, or a first-withdrawal review. Contacting support with your request ID is the fastest way to clear it.",
  },
  {
    question: "Is there a minimum deposit or withdrawal amount?",
    answer:
      "Yes, platforms typically enforce both a minimum and maximum on deposits and withdrawals, and these can change over time. Check the amount field on the relevant screen for the current figures rather than relying on a fixed number.",
  },
  {
    question: "What should I do if a deposit doesn't show up?",
    answer:
      "First confirm through your bank or UPI app that the payment actually went through. If it did and your wallet still hasn't updated after a reasonable wait, contact support with the transaction reference rather than sending a second payment.",
  },
  {
    question: "Can I withdraw to a different bank account than the one I deposited from?",
    answer:
      "Generally no — withdrawal destinations usually need to match the identity on your registered profile, regardless of which account you originally deposited from. Using a consistent, correctly named account avoids unnecessary review delays.",
  },
];

const GAMES_FAIRNESS: QA[] = [
  {
    question: "How is a WinGo or K3 result decided?",
    answer: (
      <>
        Each round runs on a fixed timer; once the betting window closes, a result is generated
        and displayed automatically. See our{" "}
        <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
          game guide
        </Link>{" "}
        for a mode-by-mode breakdown of how outcomes are determined.
      </>
    ),
  },
  {
    question: "What does TRX's blockchain-based fairness mean?",
    answer:
      "TRX-style rounds derive their result from a public TRON blockchain hash rather than a purely internal number generator, which means the outcome can, in principle, be independently checked against public blockchain data.",
  },
  {
    question: "Why do exact-number bets pay more than colour bets?",
    answer:
      "Payout size is tied to probability — a single exact number is far less likely to land than a broad colour or range, so it carries a higher multiplier to reflect that lower likelihood.",
  },
  {
    question: "Can I practise without risking money?",
    answer:
      "Prediction and casino-style formats are real-money products; there generally isn't a meaningful free-play mode. Start with a small stake you're comfortable losing while you learn how a mode behaves.",
  },
  {
    question: "Is the outcome of each round predetermined?",
    answer:
      "Prediction rounds are designed to resolve independently each time, using either an internal random process or, for TRX-style rounds, a public blockchain hash. No legitimate strategy can guarantee a specific outcome in advance.",
  },
  {
    question: "Are casino slot and live-table games different from prediction rounds?",
    answer:
      "Yes — slots and live-dealer tables follow their own published rules and return-to-player figures rather than the timed betting-window structure used by WinGo, K3, 5D and TRX. Treat each format on its own terms rather than assuming shared mechanics.",
  },
];

const BONUSES_CODES: QA[] = [
  {
    question: "Do new players get a welcome bonus?",
    answer:
      "Many platforms in this category offer a welcome bonus or first-deposit incentive for new accounts. Terms, eligibility, and wagering requirements vary and change frequently, so always read the current offer details before opting in.",
  },
  {
    question: "How do gift codes work?",
    answer:
      "Gift codes are typically short alphanumeric strings redeemed from a dedicated promotions or rewards screen, crediting a bonus amount or free spins to your wallet once applied successfully.",
  },
  {
    question: "Can I withdraw a bonus immediately?",
    answer:
      "Usually not right away. Bonus credits commonly carry a wagering requirement — a minimum amount you must bet before the bonus (or winnings from it) becomes withdrawable. Check the specific bonus terms before assuming it behaves like a cash deposit.",
  },
  {
    question: "Do bonuses or gift codes expire?",
    answer:
      "Many do, typically within a set window from when they're credited or redeemed. Note the expiry shown at redemption and try to meet any wagering requirement within that window rather than letting the offer lapse unused.",
  },
  {
    question: "Where do new gift codes get announced?",
    answer:
      "Platforms typically publish active codes through their promotions section, official social channels, or app notifications. Treat any code shared outside those official channels with caution, since third-party \"codes\" are a common lure in phishing attempts.",
  },
];

const SUPPORT: QA[] = [
  {
    question: "How do I contact support?",
    answer:
      "Use the in-app or in-site support channel, which is generally the fastest route since it can pull up your account context automatically. Have your registered mobile number and any relevant transaction ID ready.",
  },
  {
    question: "What should I do if I suspect unauthorised account access?",
    answer:
      "Change your password immediately using the forgot-password flow, then contact support to flag the account for review. Never share your OTP or password with anyone, including someone claiming to be support staff.",
  },
  {
    question: "Where can I get help if gaming feels like it's becoming a problem?",
    answer: (
      <>
        See our{" "}
        <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
          responsible gaming page
        </Link>{" "}
        for guidance on limits, warning signs, and support options.
      </>
    ),
  },
  {
    question: "What information should I have ready before contacting support?",
    answer:
      "Your registered mobile number, the approximate time an issue occurred, and any relevant transaction or request ID. Having these ready upfront usually cuts resolution time down significantly compared to a vague description alone.",
  },
];

const GROUPS: { id: string; title: string; items: QA[] }[] = [
  { id: "account-login", title: "Account & Login", items: ACCOUNT_LOGIN },
  { id: "deposits-withdrawals", title: "Deposits & Withdrawals", items: DEPOSITS_WITHDRAWALS },
  { id: "games-fair-play", title: "Games & Fair Play", items: GAMES_FAIRNESS },
  { id: "bonuses-codes", title: "Bonuses & Gift Codes", items: BONUSES_CODES },
  { id: "support", title: "Support", items: SUPPORT },
];

const TOC = [
  ...GROUPS.map((g) => ({ id: g.id, label: g.title })),
  { id: "more-answers", label: "More Quick Answers" },
];

const flattenAnswer = (answer: QA["answer"]): string =>
  typeof answer === "string" ? answer : "";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ...GROUPS.flatMap((g) => g.items).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: flattenAnswer(item.answer) || item.question },
    })),
    ...FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ],
};

function FAQList({ items }: { items: QA[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <details key={item.question} className="card group overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
            <span className="text-base font-semibold text-mist sm:text-lg">{item.question}</span>
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
  );
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "FAQ" }]} />
        <PageHero
          eyebrow="Support"
          title="Frequently Asked Questions"
          subtitle="Independent answers to the questions players ask most, grouped by topic so you can jump straight to what you need."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-mist-dim sm:text-base">
              This page collects the questions we&apos;re asked most often, written independently
              and in plain language rather than copied from any operator&apos;s own help centre.
              It&apos;s organised into five topic groups — account and login, deposits and
              withdrawals, games and fair play, bonuses and gift codes, and support — so you can
              jump straight to the section that matches what you&apos;re trying to figure out
              instead of scrolling through everything at once.
            </p>
            <TableOfContents items={TOC} />

            {GROUPS.map((group) => (
              <Section key={group.id} id={group.id} title={group.title}>
                <FAQList items={group.items} />
              </Section>
            ))}

            <Section id="more-answers" title="More Quick Answers">
              <p>
                A handful of additional questions that come up regularly but don&apos;t fit neatly
                into a single topic group above — kept short and to the point below. As with
                everything else on this page, these are independent answers written for general
                orientation rather than official platform documentation, so always confirm specifics
                against your own account and the current terms shown inside the app or site.
              </p>
              <FAQList
                items={FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer }))}
              />
            </Section>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
