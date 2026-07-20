import { Crown, TrendingUp, Gauge, ShieldCheck } from "lucide-react";
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
  title: "IN999 VIP Club",
  description:
    "An independent look at how VIP or loyalty tier systems typically work on platforms like IN999 — how tiers are earned, what higher tiers usually offer, and realistic expectations.",
  path: "/vip-club",
});

const TOC = [
  { id: "overview", label: "What a VIP Tier System Involves" },
  { id: "how-earned", label: "How Tiers Are Typically Earned" },
  { id: "benefits", label: "Benefits at Higher Tiers" },
  { id: "expectations", label: "Realistic Expectations" },
  { id: "tracking", label: "Tracking Your Own Tier" },
  { id: "responsible", label: "A Note on Chasing Tier Status" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const TIERS = [
  { name: "Entry Tier", requirement: "Account created & verified", perk: "Baseline access to standard promotions and support." },
  { name: "Mid Tier", requirement: "Sustained account activity", perk: "Often faster withdrawal processing and small activity-based rewards." },
  { name: "Upper Tier", requirement: "Higher cumulative activity", perk: "Priority support channels and larger periodic rewards." },
  { name: "Top Tier", requirement: "Long-term high activity", perk: "Dedicated account contact and invitation-only extras, where offered." },
];

export default function VipClubPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "VIP Club" }]} path="/vip-club" />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 VIP Club: How Tier Systems Generally Work"
          subtitle="A grounded look at loyalty tiers — how they're usually earned, what they tend to offer, and why a VIP program isn't automatically the right goal for every player."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="What a VIP Tier System Involves">
              <p>
                A VIP or loyalty club is a tiered structure that platforms use to recognise players based
                on how much they play over time, offering progressively better perks — faster support,
                small activity rewards, or account-level extras — as a player moves up the ladder. This
                page is an independent explainer of how these systems generally work in this category of
                platform; it is not an official description of any specific current tier list, since
                thresholds and perks are set and adjusted by the operator and can change without notice.
              </p>
              <p>
                The illustrative tier structure below is meant to show the shape of a typical system, not
                to represent exact, currently-active thresholds:
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {TIERS.map((tier) => (
                  <Card key={tier.name} className="flex flex-col items-start gap-3 p-6">
                    <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                      <Crown className="h-6 w-6" />
                    </span>
                    <h3 className="text-base font-semibold text-mist">{tier.name}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-mist-dim">{tier.requirement}</p>
                    <p className="text-sm leading-relaxed text-mist-dim">{tier.perk}</p>
                  </Card>
                ))}
              </div>
            </Section>

            <Section id="how-earned" title="How Tiers Are Typically Earned">
              <p>
                Most tier systems in this space use cumulative activity, rather than a single deposit, as
                the qualifying measure — meaning your tier reflects how much you have played over a
                period of time, not how much money currently sits in your wallet. Some programs reset or
                recalculate periodically, so a tier reached last month is not always guaranteed to carry
                forward indefinitely without continued activity.
              </p>
              <p>
                A common design choice behind these systems is to base progress on turnover (the total
                amount wagered across rounds) rather than net deposits or net losses. That distinction
                matters: a player who wins and loses the same funds repeatedly across many rounds can
                accumulate meaningful turnover without their wallet balance changing much at all, while a
                player who deposits a large amount but plays only a handful of rounds may generate very
                little qualifying turnover by comparison. Understanding which measure a program actually
                uses helps explain why two players with similar deposit histories can end up at very
                different tiers.
              </p>
              <p>
                Because the exact formula (turnover thresholds, time windows, qualifying game types) is
                set by the operator and can vary, the only fully reliable way to know where you stand is
                to check your own account&apos;s VIP or loyalty section directly, rather than assuming a
                generic threshold applies to your account. It is also worth noting that not every game
                category necessarily contributes equally toward tier progress — some formats may be
                weighted lower than others, which is another detail best confirmed in your own account
                rather than assumed from a general description like this one.
              </p>
            </Section>

            <Section id="benefits" title="Benefits Commonly Offered at Higher Tiers">
              <p>
                Higher tiers in this type of program typically bundle a mix of the following, though the
                specific combination varies by platform:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="card flex items-start gap-3 p-5">
                  <Gauge className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-mist-dim">Faster withdrawal processing, since higher-tier accounts are often queued with priority.</p>
                </div>
                <div className="card flex items-start gap-3 p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-mist-dim">Dedicated or priority support contact, reducing wait times for account queries.</p>
                </div>
                <div className="card flex items-start gap-3 p-5">
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-mist-dim">Periodic bonus credits or rewards scaled to tier level, on top of standard promotions.</p>
                </div>
                <div className="card flex items-start gap-3 p-5">
                  <Crown className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-mist-dim">Invitation-only extras at the very top tier, such as event access or personalised gifts, where offered.</p>
                </div>
              </div>
              <p>
                These perks generally exist alongside, not instead of, standard promotions — see our{" "}
                <Link href="/promotions" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  promotions overview
                </Link>{" "}
                and{" "}
                <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  bonus guide
                </Link>{" "}
                for how the two typically interact.
              </p>
            </Section>

            <Section id="expectations" title="Realistic Expectations">
              <p>
                It is worth being upfront about something loyalty programs rarely advertise clearly: a
                VIP tier system rewards volume of play, and reaching a meaningfully higher tier usually
                requires a level of activity that is not realistic — or advisable — for every player. A
                faster withdrawal queue or a slightly better support line is a genuine convenience, but it
                is not worth restructuring your spending or session habits around. Not every VIP program
                suits every player, and that is a perfectly reasonable conclusion to reach after looking
                at the actual thresholds involved.
              </p>
              <p>
                It also helps to weigh the perks against what they actually save you. A priority
                withdrawal queue might shave time off a payout that would have cleared anyway; a
                dedicated support contact is convenient but rarely changes the outcome of a routine query.
                For a casual or occasional player, the practical value of climbing several tiers is often
                smaller than the marketing framing suggests, once you account for the activity it would
                take to get there.
              </p>
              <p>
                A useful mental check: if you would be playing the same amount regardless of tier status,
                VIP perks are a pleasant bonus. If you find yourself playing more specifically to reach or
                keep a tier, that is worth pausing on.
              </p>
            </Section>

            <Section id="tracking" title="How to Track Your Own Tier or Status">
              <p>
                The account dashboard or wallet section is the authoritative source for your current tier,
                usually showing your present level, the activity threshold for the next tier, and any
                tier-specific perks already unlocked. Because tier criteria can be adjusted by the
                operator, it is worth checking this section periodically rather than assuming it matches
                whatever a public tier list once said.
              </p>
              <p>
                If your account shows a progress indicator toward the next tier, treat it as
                informational rather than a target to hit on a deadline. Progress bars are effective at
                encouraging continued activity precisely because they create a sense of near-completion —
                recognising that design intention can help you view your own progress more objectively,
                rather than feeling obligated to close the gap immediately.
              </p>
            </Section>

            <Section id="responsible" title="A Note on Chasing Tier Status">
              <p>
                Because tier progress is tied to activity, there is a real risk of treating tier-chasing as
                a goal in itself rather than a byproduct of play you were going to do anyway. If you
                notice yourself extending sessions, increasing stakes, or delaying a planned stop
                specifically to reach a tier threshold, that is a signal worth taking seriously. Our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming page
                </Link>{" "}
                covers setting session and deposit limits that can help keep play — and any resulting tier
                progress — in proportion.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do VIP tiers cost money to join?</h3>
                  <p>No — tier systems of this kind are typically earned through account activity over time rather than purchased outright, though thresholds and mechanics are set by the operator and can vary.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can my VIP tier go down?</h3>
                  <p>Some programs recalculate tiers periodically based on recent activity, meaning a tier reached previously is not always permanent. Check your account&apos;s VIP section for the specific rules that apply.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Are VIP perks worth chasing?</h3>
                  <p>That depends entirely on your own play habits. If the activity required to reach a tier matches what you would do anyway, the perks are a welcome bonus. If reaching a tier would require playing beyond your normal budget or time, it is generally not worth it.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Where do I check my current tier?</h3>
                  <p>Your account dashboard or wallet section is the most reliable place — it reflects your real, current status rather than a generic public description.</p>
                </div>
              </div>
            </Section>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
