import { Gift, RefreshCcw, Users, CalendarCheck, Sparkles, ClipboardList } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 Promotions",
  description:
    "An independent breakdown of how IN999 promotions typically work — welcome offers, recurring and seasonal promotions, wagering terms, and how to track what's currently active.",
  path: "/promotions",
});

const TOC = [
  { id: "overview", label: "Promotion Types Overview" },
  { id: "welcome-offers", label: "Welcome Offers" },
  { id: "recurring", label: "Recurring & Daily Promotions" },
  { id: "seasonal", label: "Seasonal & Event Promotions" },
  { id: "tracking", label: "How to Track Active Promotions" },
  { id: "terms", label: "Reading Terms & Wagering Conditions" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const PROMOTIONS = [
  { title: "Welcome Bonus", description: "A one-time offer aimed at new accounts, usually tied to a first deposit.", icon: Gift },
  { title: "Daily Login Rewards", description: "Small recurring credits for logging in or playing on consecutive days.", icon: CalendarCheck },
  { title: "Reload Bonus", description: "Extra credit added on top of a top-up, typically as a percentage of the deposit.", icon: RefreshCcw },
  { title: "Referral Payouts", description: "A share of a friend's activity when they join using your referral link.", icon: Users },
];

export default function PromotionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Promotions" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Promotions: A Practical Overview"
          subtitle="What the different promotion types generally mean, how to keep track of what's live, and how to read the terms before you rely on one."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="Promotion Types Overview">
              <p>
                Platforms in this space tend to run a mix of promotion styles that fall into a handful of
                recognisable categories: one-time welcome offers for new accounts, recurring rewards for
                everyday activity, and seasonal campaigns tied to events or calendar dates. This page is
                an independent explainer of how those categories generally work — it does not list live
                offer amounts, since promotions change frequently and outdated figures would be more
                misleading than helpful. Instead, the goal is to help you recognise what type of
                promotion you are looking at and what questions to ask before opting in.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PROMOTIONS.map((promo) => {
                  const Icon = promo.icon;
                  return (
                    <Card key={promo.title} className="flex items-start gap-4 p-6">
                      <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-mist">{promo.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist-dim">{promo.description}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <p>
                For a longer, figure-free breakdown of bonus mechanics and how they interact with
                wagering requirements, see our{" "}
                <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  dedicated IN999 bonus guide
                </Link>
                .
              </p>
            </Section>

            <Section id="welcome-offers" title="Welcome Offers">
              <p>
                Welcome offers are the promotion most new players encounter first. They are typically
                structured around an initial deposit — either a flat bonus credit or a percentage match
                up to a stated cap — and are usually available once per account, tied to identity
                verification rather than just an email address. Because they are the first promotion most
                people see, welcome offers also tend to attract the most scrutiny, and for good reason:
                the headline number is only half the picture. The other half is the wagering condition
                attached to it, which determines how much play is required before any bonus-derived
                winnings can actually be withdrawn.
              </p>
              <p>
                A sensible habit before claiming any welcome offer is to read the wagering multiplier and
                the list of eligible games first, then decide whether the offer genuinely fits how you
                plan to play — not the other way around.
              </p>
            </Section>

            <Section id="recurring" title="Recurring & Daily Promotions">
              <p>
                Recurring promotions reward consistency rather than deposit size. Daily login rewards,
                streak bonuses, and small reload incentives fall into this category. They are usually
                modest in value individually, but they add up for players who are active most days, and
                they tend to carry lighter wagering conditions than a large welcome offer because the
                amounts involved are smaller.
              </p>
              <p>
                The main thing to watch with recurring promotions is expiry — unclaimed daily rewards
                often reset rather than roll over, so a missed day can mean a missed reward rather than a
                delayed one.
              </p>
            </Section>

            <Section id="seasonal" title="Seasonal & Event Promotions">
              <p>
                Seasonal promotions are tied to specific dates — festivals, holidays, platform
                anniversaries, or major sporting events — and tend to be time-boxed with a clear start and
                end date. They often come with their own separate terms rather than inheriting the
                standard promotion rules, which makes it especially important to read the specific terms
                for that campaign rather than assuming they match a welcome offer or daily reward you have
                seen before.
              </p>
              <p>
                Because seasonal promotions are temporary by design, the safest approach is to treat any
                claim of a seasonal offer being &quot;permanent&quot; or &quot;always available&quot; with
                scepticism — genuine seasonal promotions are, by definition, not always on.
              </p>
            </Section>

            <Section id="tracking" title="How to Track Active Promotions">
              <p>
                Because promotion line-ups shift over time, the most reliable way to know what is
                currently live is to check the source directly rather than relying on a third-party page
                (including this one) for exact figures. In practice that means:
              </p>
              <div className="card flex items-start gap-4 p-6">
                <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <ClipboardList className="h-5 w-5" />
                </span>
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-mist-dim">
                  <li>Checking the in-app promotions or offers tab directly, since it reflects what is live right now.</li>
                  <li>Reading any official announcement channel rather than a screenshot passed along secondhand.</li>
                  <li>Noting the exact start and end dates listed for time-boxed campaigns before you plan around them.</li>
                  <li>Re-checking terms periodically, since wagering conditions and eligibility rules can change between campaigns even when the promotion name stays the same.</li>
                </ul>
              </div>
            </Section>

            <Section id="terms" title="Reading Terms & Wagering Conditions">
              <p>
                The single most valuable habit for anyone using promotions regularly is reading the terms
                before opting in, not after. A few things worth checking every time: the wagering
                multiplier (how many times the bonus, or bonus plus deposit, must be played through before
                withdrawal), which games count toward that wagering requirement (some categories are often
                excluded or weighted differently), the maximum withdrawal cap tied to a bonus, and the
                expiry window for unused bonus funds.
              </p>
              <p>
                None of this is unusual — wagering requirements are a standard part of how bonus
                promotions are funded across the industry — but skipping the terms is the most common
                reason players feel blindsided later. Two minutes of reading up front avoids most of that
                friction.
              </p>
              <p>
                It also helps to think about wagering requirements in concrete terms rather than
                abstract ones. A multiplier of, say, several times the bonus amount means calculating the
                actual total you would need to play through before that bonus becomes withdrawable —
                and comparing that figure honestly against how much you actually intend to play. A
                bonus that requires far more turnover than you would naturally generate is not really a
                bonus you can use; it is a number that looks appealing but is unlikely to convert into
                real withdrawable value for your specific playing pattern.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I claim more than one promotion at the same time?</h3>
                  <p>It depends on the specific terms of each promotion — some are stackable, others explicitly exclude combining with another active offer. Always check the individual terms rather than assuming.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do bonus credits expire?</h3>
                  <p>Most promotional credit comes with an expiry window, whether that is a wagering deadline or a flat validity period. Unused bonus funds typically lapse once that window closes.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Where can I see exactly which promotions are live right now?</h3>
                  <p>Check the in-app or account-level promotions tab directly — that reflects the current, accurate list, whereas any third-party page (including guides like this one) may lag behind real-time changes.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is chasing every promotion a good strategy?</h3>
                  <p>Not necessarily. A promotion is only worth claiming if its terms fit how you actually intend to play — claiming offers purely because they exist can lead to wagering more than you planned.</p>
                </div>
              </div>
            </Section>

            <div className="mx-auto mt-2 flex max-w-md items-start gap-3 rounded-2xl border border-gold/20 bg-gold/5 p-4 text-xs text-mist-dim">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                Promotions are entertainment incentives, not guaranteed income. See our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming page
                </Link>{" "}
                for guidance on setting limits.
              </span>
            </div>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
