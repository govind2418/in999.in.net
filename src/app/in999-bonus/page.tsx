import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Sparkles, Gift, CalendarClock, Users, FileText, AlertTriangle, HelpCircle } from "lucide-react";

const ACCENT = "#fb923c";

export const metadata = pageMetadata({
  title: "IN999 Bonus",
  description:
    "An independent breakdown of how IN999-style bonuses usually work — welcome offers, daily login rewards, referral bonuses — and the terms worth checking first.",
  path: "/in999-bonus",
});

const TOC = [
  { id: "types", label: "Types of Bonuses You'll See" },
  { id: "welcome", label: "Welcome Bonus Explained" },
  { id: "recurring", label: "Daily & Recurring Rewards" },
  { id: "referral", label: "Referral Program Bonuses" },
  { id: "fine-print", label: "Reading the Fine Print" },
  { id: "red-flags", label: "Red Flags in Bonus Offers" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const BONUS_TYPES = [
  {
    name: "Welcome / First-Deposit Bonus",
    icon: Gift,
    blurb: "A one-time match or top-up applied to a new account's first deposit, usually the largest single bonus a platform offers and the one with the tightest wagering conditions attached.",
  },
  {
    name: "Daily Login Rewards",
    icon: CalendarClock,
    blurb: "Small, repeating credits for simply opening the app or completing a light action each day — designed to build a habit rather than move large amounts of money.",
  },
  {
    name: "Referral Bonuses",
    icon: Users,
    blurb: "A reward paid when someone you refer signs up and meets a qualifying activity threshold, typically shared between the referrer and the new player.",
  },
  {
    name: "Reload & Redeposit Bonuses",
    icon: Sparkles,
    blurb: "Smaller repeat-deposit bonuses aimed at existing players, often tied to a specific day of the week or a limited-time campaign rather than being always-on.",
  },
];

export default function In999BonusPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 Bonus" }]} path="/in999-bonus" />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Bonus: Understanding Offers & Their Fine Print"
          subtitle="A plain-language breakdown of the bonus types you'll typically encounter, and the terms worth checking before you rely on them."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="types" title="Types of Bonuses You'll Commonly See">
              <p>
                Prediction and casino-style platforms in this space tend to reuse the same handful of
                bonus structures, just relabelled between operators. This page is an independent
                explainer written from a player&apos;s perspective — we are not IN999 or any operator, and
                we are not publishing live promotional rates, since those change frequently and any
                specific figures listed on a third-party page would go stale almost immediately. Instead,
                here is how the common bonus categories are structured and what to actually check before
                you count on one. If you&apos;re new to the site, our{" "}
                <Link href="/" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 guide homepage
                </Link>{" "}
                is a good starting point for the rest of our independent coverage.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {BONUS_TYPES.map((bonus) => {
                  const Icon = bonus.icon;
                  return (
                    <div key={bonus.name} className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                      <span
                        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: `${ACCENT}22`, color: ACCENT }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-mist">{bonus.name}</h3>
                      <p className="text-xs leading-relaxed text-mist-dim">{bonus.blurb}</p>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section id="welcome" title="Welcome Bonus Explained">
              <p>
                A welcome bonus is almost always structured as a percentage match on a new account&apos;s
                first deposit, sometimes capped at a maximum amount. For example, a platform might match a
                portion of your first deposit up to a stated ceiling, credited as bonus balance rather than
                withdrawable cash. That distinction matters: bonus balance usually has to be played through
                a set number of times — the wagering requirement — before any of it (or winnings derived
                from it) can be withdrawn.
              </p>
              <p>
                Before claiming a welcome offer, it&apos;s worth finishing your account setup properly
                first. Our{" "}
                <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 login guide
                </Link>{" "}
                covers signing in and recovering access if you run into trouble after registration.
              </p>
            </Section>

            <Section id="recurring" title="Daily & Recurring Rewards">
              <p>
                Beyond the one-time welcome offer, most platforms in this category run some form of daily
                or weekly reward loop — a small credit for logging in on consecutive days, a streak bonus
                that grows the longer you keep the habit going, or a scheduled reload bonus on a specific
                day of the week. These are usually modest individually, but they add up for players who
                check in regularly. They also tend to carry their own, often smaller, wagering conditions,
                so it&apos;s worth reading each one&apos;s terms rather than assuming they all work the
                same way as the welcome bonus.
              </p>
            </Section>

            <Section id="referral" title="Referral Program Bonuses">
              <p>
                Referral bonuses reward you for bringing in new players, typically once the referred
                account completes a qualifying action such as verifying their number, making a first
                deposit, or reaching a minimum play threshold. Some programs pay a flat one-time amount per
                referral; others pay an ongoing small share of the referred player&apos;s activity. We
                cover the mechanics of this in more detail on our dedicated{" "}
                <Link href="/referral-program" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  referral program page
                </Link>
                , including how tracking links usually work and what to watch for before you invite
                friends.
              </p>
            </Section>

            <Section id="fine-print" title="Reading the Fine Print — Wagering Requirements & Expiry">
              <p className="flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${ACCENT}22`, color: ACCENT }}
                >
                  <FileText className="h-3.5 w-3.5" />
                </span>
                <span>
                  This is the section most players skip, and the one most likely to cause a locked balance
                  later.
                </span>
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong className="text-mist">Wagering requirement (turnover multiplier).</strong> Most
                  bonus balance can&apos;t be withdrawn until it&apos;s been wagered a set number of times
                  — check the exact multiplier, and whether it applies to the bonus amount alone or the
                  bonus plus your deposit combined.
                </li>
                <li>
                  <strong className="text-mist">Eligible games.</strong> Not every game mode necessarily
                  contributes equally toward clearing a wagering requirement; some titles may be excluded
                  or count at a reduced rate.
                </li>
                <li>
                  <strong className="text-mist">Expiry window.</strong> Bonus balance and any related
                  winnings usually expire after a set number of days if the wagering requirement isn&apos;t
                  met in time.
                </li>
                <li>
                  <strong className="text-mist">Maximum withdrawal cap.</strong> Some bonus-derived winnings
                  are capped at a maximum payout regardless of how much you technically won using the
                  bonus.
                </li>
                <li>
                  <strong className="text-mist">One bonus at a time.</strong> Many platforms don&apos;t
                  allow multiple active bonuses to stack, so claiming a new one may forfeit an unfinished
                  one.
                </li>
              </ul>
            </Section>

            <Section id="red-flags" title="Red Flags in 'Too Good' Bonus Offers">
              <p className="flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${ACCENT}22`, color: ACCENT }}
                >
                  <AlertTriangle className="h-3.5 w-3.5" />
                </span>
                <span>
                  Bonus offers are also a favourite disguise for scams, since players are already expecting
                  to be given something for free.
                </span>
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  Any offer promising a bonus far above what&apos;s typical (several hundred percent
                  matches, guaranteed win amounts) is worth treating with suspicion — legitimate bonuses
                  are competitive but bounded.
                </li>
                <li>
                  A page or message asking you to pay an &quot;activation fee&quot; or &quot;processing
                  fee&quot; before a bonus is released is not how real bonus systems work.
                </li>
                <li>
                  Offers pushed through unsolicited messages with urgent countdown timers are a common
                  phishing pattern — verify through the official app or site rather than clicking through.
                </li>
                <li>
                  If a bonus&apos;s terms are vague, missing, or refuse to state a wagering requirement at
                  all, that opacity is itself a warning sign. Genuine terms are written down and specific,
                  even if they&apos;re not always convenient.
                </li>
              </ul>
              <p className="mt-3">
                For related guidance on avoiding fake promotional links entirely, see our{" "}
                <Link href="/in999-gift-code" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 gift code guide
                </Link>
                , which covers the same scam patterns in the context of redeem codes specifically.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    What&apos;s the current IN999 welcome bonus percentage?
                  </h3>
                  <p>
                    We don&apos;t quote a fixed figure here because welcome offers change over time and
                    between campaigns. Check the promotions section inside the official app for whatever
                    is currently running, and read the attached terms before depositing.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I withdraw a bonus immediately after claiming it?</h3>
                  <p>
                    Almost never directly — bonus balance nearly always carries a wagering requirement that
                    must be cleared first. Read the specific terms attached to whichever bonus you claim.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do daily login rewards expire if I miss a day?</h3>
                  <p>
                    Streak-based rewards typically reset if you break the streak, though the base daily
                    reward (if any) usually just resumes the next time you log in. The exact rule depends
                    on the specific campaign in place at the time.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is it safe to claim bonuses from links shared by other players?</h3>
                  <p>
                    Only if the link points to the official app or site and doesn&apos;t ask you to pay a
                    fee or enter credentials on an unfamiliar page. When in doubt, navigate to the
                    promotions section manually rather than clicking a shared link.
                  </p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/in999-gift-code">
                See the IN999 Gift Code Guide
              </Button>
            </div>
            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
