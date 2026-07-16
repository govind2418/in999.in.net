import { Share2, UserPlus, Wallet, Megaphone, HeartHandshake } from "lucide-react";
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
  title: "IN999 Referral Program",
  description:
    "An independent guide to how referral programs generally work — sharing your link, what referrers and referees typically receive, and how to share responsibly without spamming or pressuring people.",
  path: "/referral-program",
});

const TOC = [
  { id: "overview", label: "How Referral Programs Generally Work" },
  { id: "sharing", label: "Sharing Your Code or Link" },
  { id: "what-each-gets", label: "What Referrers & Referees Typically Get" },
  { id: "transparency", label: "A Transparency Note" },
  { id: "responsible-sharing", label: "Tips for Sharing Responsibly" },
  { id: "tracking", label: "Tracking Your Referrals" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const STEPS = [
  { title: "Get Your Link", description: "A unique referral code or link is usually generated automatically in your account's wallet or profile section.", icon: Share2 },
  { title: "Share It", description: "Friends sign up using your link or enter your code manually during their own registration.", icon: UserPlus },
  { title: "Both Sides Benefit", description: "Once the referee meets any stated activity condition, a reward is typically credited to the referrer's wallet, and often to the new player as well.", icon: Wallet },
];

export default function ReferralProgramPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Referral Program" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Referral Program: How Invite Rewards Work"
          subtitle="A straightforward explainer on how referral sharing generally works, what each side typically receives, and how to invite people without being pushy about it."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="How Referral Programs Generally Work">
              <p>
                A referral program is a structure that rewards existing players for introducing new
                players to a platform, using a unique tracking code or link tied to the referrer&apos;s
                account. This page describes the general mechanics of how these programs typically
                function in this category of platform — it is an independent explainer, not an official
                statement of current referral terms, since exact reward structures are set by the
                operator and can change.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <Card key={step.title} className="flex flex-col items-start gap-3 p-6">
                      <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-base font-semibold text-mist">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-mist-dim">{step.description}</p>
                    </Card>
                  );
                })}
              </div>
            </Section>

            <Section id="sharing" title="Sharing Your Code or Link">
              <p>
                Your referral code or link is usually found in your account&apos;s wallet, profile, or a
                dedicated &quot;invite&quot; section, and is generated automatically once you have an
                active account — there is typically nothing extra to set up. From there, sharing works
                like any other link: you send it directly to someone, or post it somewhere people who
                might genuinely be interested will see it.
              </p>
              <p>
                For newcomers wondering what they are actually signing up for when they follow a referral
                link, our{" "}
                <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  registration walkthrough
                </Link>{" "}
                covers the account creation steps in detail, and is a useful thing to point new referees
                toward alongside your link.
              </p>
            </Section>

            <Section id="what-each-gets" title="What Referrers & Referees Typically Get">
              <p>
                Referral structures usually reward both sides, though the specific amounts and conditions
                vary by platform and by campaign. The referrer — the person sharing the link — typically
                earns a commission tied to the referee&apos;s subsequent activity, such as a percentage of
                early deposits or turnover, sometimes paid as an ongoing share rather than a single
                one-time credit. The referee — the new player — often receives their own welcome
                incentive for signing up through a referral link, on top of whatever standard welcome
                offer is already available to new accounts. Neither side is guaranteed a fixed amount
                without reading the specific terms attached to the program at the time.
              </p>
              <p>
                Some programs pay the referrer a one-time flat credit once the referee completes a
                qualifying action, such as verifying their account or making a first deposit above a
                stated minimum. Others use an ongoing revenue-share style structure, where the referrer
                continues to earn a small percentage of the referee&apos;s activity over an extended
                period rather than a single payment. It is worth reading which structure applies before
                assuming a referral will behave a particular way, since the two models create very
                different expectations about timing and total payout.
              </p>
              <p>
                For more on how welcome-style incentives generally work, see our{" "}
                <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 bonus guide
                </Link>
                , which covers wagering conditions that can apply to referral-linked credits just as they
                do to other bonus types.
              </p>
            </Section>

            <Section id="transparency" title="A Transparency Note">
              <p>
                It is worth being direct about this: referral commissions are a normal, disclosed part of
                how many online platforms grow, not something to be evasive about. If you share a
                referral link with someone, the honest approach is to say plainly that you receive a
                benefit if they sign up through it. Most people are entirely fine with that once it is
                stated upfront — what erodes trust is presenting a referral link as a neutral
                recommendation when it is not. Being upfront about the incentive costs you nothing and
                keeps the relationship honest.
              </p>
            </Section>

            <Section id="responsible-sharing" title="Tips for Sharing Responsibly">
              <p>
                A referral program works best when it is shared with people who would plausibly be
                interested anyway, not blasted indiscriminately. A few practical guidelines:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="card flex items-start gap-3 p-5">
                  <Megaphone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-mist-dim">Share in relevant spaces — with people who already play similar games — rather than mass-posting your link in unrelated groups or forums.</p>
                </div>
                <div className="card flex items-start gap-3 p-5">
                  <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-mist-dim">Never pressure someone who says no or seems hesitant — a referral is an invitation, not a sales pitch that needs to close.</p>
                </div>
              </div>
              <p>
                It is also worth remembering that gaming platforms carry real financial risk, so inviting
                someone who cannot comfortably afford to play, or who has previously mentioned struggling
                to control their spending, is not something a referral reward is worth doing.
              </p>
              <p>
                A useful test before sending a link is to ask whether you would still recommend the
                platform to this specific person if there were no referral reward attached at all. If the
                answer is yes, sharing is a reasonable, low-pressure thing to do. If the honest answer is
                that the reward is the main reason you are reaching out to that particular person, it is
                worth reconsidering whether that invitation is really in their interest.
              </p>
            </Section>

            <Section id="tracking" title="Tracking Your Referrals">
              <p>
                Most referral programs include a dashboard showing how many people signed up through your
                link, which of them are active, and what commission has accrued or been paid out. Checking
                this periodically is the most reliable way to confirm your referrals are being tracked
                correctly — if a friend says they used your link but it is not reflected after a
                reasonable time, that is worth following up on directly with account support rather than
                assuming it will resolve itself.
              </p>
              <p>
                It also helps to keep a simple personal record — who you invited, roughly when, and
                through which channel — especially if you share your link in more than one place. That
                way, if a referral does not appear correctly, you have enough detail on hand to describe
                the situation clearly to support rather than relying on memory alone.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I need to pay anything to get a referral link?</h3>
                  <p>No — referral links are generated automatically for existing accounts at no cost. Any request for payment to &quot;unlock&quot; a referral link is not how these programs work.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is there a limit to how many people I can refer?</h3>
                  <p>Most programs do not cap the number of referrals, though individual reward terms can change over time, so it is worth checking your account&apos;s referral section for the current conditions rather than assuming past terms still apply.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I have to disclose that I earn a commission when I share my link?</h3>
                  <p>You are not typically required to, but being upfront about it is good practice and keeps the invitation honest — referral commissions are a normal, disclosed part of many platforms, not something to hide.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">What if my referral isn&apos;t showing up in my dashboard?</h3>
                  <p>Confirm the friend actually registered using your specific link or code rather than searching for the platform separately, then check with account support if the referral still isn&apos;t reflected after a reasonable wait.</p>
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
