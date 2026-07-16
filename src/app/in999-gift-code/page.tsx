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
import { Gift, Radio, ListOrdered, ShieldAlert, HelpCircle } from "lucide-react";

const ACCENT = "#e879c9";

export const metadata = pageMetadata({
  title: "IN999 Gift Code",
  description:
    "An independent explainer on how IN999 gift codes generally work, where they tend to be shared, how redemption works, and how to avoid fake code scams.",
  path: "/in999-gift-code",
});

const TOC = [
  { id: "what-is-it", label: "What an IN999 Gift Code Is" },
  { id: "how-it-works", label: "How Redeem Codes Typically Work" },
  { id: "where-shared", label: "Where Codes Are Usually Shared" },
  { id: "redemption-steps", label: "Step-by-Step Redemption Process" },
  { id: "why-fails", label: "Common Reasons a Code Fails" },
  { id: "scams", label: "Spotting Fake Gift Code Scams" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const SHARE_CHANNELS = [
  {
    name: "In-App Notices",
    blurb:
      "The most reliable channel is usually inside the platform itself — a notice board, inbox message, or banner that appears after you log in, since it comes directly from the account you already control.",
  },
  {
    name: "Official Social Accounts",
    blurb:
      "Operators sometimes post short-lived codes on their verified social channels around events or milestones. Always check that an account is genuinely the official one before trusting anything it posts.",
  },
  {
    name: "Community & Affiliate Pages",
    blurb:
      "Independent guide sites and player communities (like this one) may mention that codes exist and explain how they work, but a trustworthy independent page should not hand you a list of currently active codes to \"claim\" — codes rotate fast and stale lists are a common scam vector.",
  },
  {
    name: "Customer Support Replies",
    blurb:
      "Occasionally a code is issued individually through support as a goodwill gesture or compensation. These are tied to your account and are not meant to be shared or resold.",
  },
];

export default function In999GiftCodePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 Gift Code" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Gift Code: How Redeem Codes Actually Work"
          subtitle="A plain-language explainer on gift codes, where they're distributed, how to redeem them, and how to avoid fake-code scams."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="what-is-it" title="What an IN999 Gift Code Is">
              <p>
                A &quot;gift code&quot; (sometimes called a redeem code or promo code) is a short string of
                letters and numbers that a platform issues so players can unlock a small reward — extra
                playing balance, a bonus voucher, or occasionally a cosmetic perk — without a separate
                deposit. This page is an independent explainer, not the operator&apos;s own promotional
                material. We are not affiliated with IN999, and we deliberately don&apos;t publish lists of
                supposedly &quot;active&quot; codes, because codes on any platform like this rotate
                constantly and a static list on a third-party page is almost always out of date the moment
                it&apos;s published.
              </p>
              <p>
                Instead, this guide focuses on something more durable: understanding the mechanics of how
                gift codes are generated, distributed, and redeemed, so you can recognise a legitimate one
                and confidently avoid the fake versions that circulate around any popular gaming platform.
                For a broader look at the platform this guide covers, start from our{" "}
                <Link href="/" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 guide homepage
                </Link>
                .
              </p>
              <span
                className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: `${ACCENT}22`, color: ACCENT }}
              >
                <Gift className="h-4 w-4" />
              </span>
            </Section>

            <Section id="how-it-works" title="How Redeem Codes Typically Work">
              <p>
                Under the hood, a gift code is just a key that unlocks a pre-configured reward record on
                the operator&apos;s server. When you enter the code correctly, the system checks three
                things: whether the code exists, whether it has already been used up (codes usually have a
                limited number of total redemptions or are single-use per account), and whether it has
                expired. If all three checks pass, the reward is credited to your account balance or bonus
                wallet, sometimes instantly and sometimes after a short manual review.
              </p>
              <p>
                Most codes are tied to a specific campaign — a launch event, a festival, a milestone in
                user numbers — which is why they tend to have a short shelf life measured in days rather
                than months. That short window is normal and by design; it is not, by itself, a sign of
                anything suspicious.
              </p>
            </Section>

            <Section id="where-shared" title="Where Codes Are Usually Shared">
              <p>
                Legitimate codes generally surface through a small number of predictable channels. Here is
                how to think about each one:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SHARE_CHANNELS.map((channel) => (
                  <div key={channel.name} className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                    <span
                      className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{ background: `${ACCENT}22`, color: ACCENT }}
                    >
                      <Radio className="h-4 w-4" />
                    </span>
                    <h3 className="mb-1 text-sm font-semibold text-mist">{channel.name}</h3>
                    <p className="text-xs leading-relaxed text-mist-dim">{channel.blurb}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                If you&apos;re also looking into ongoing promotional structures rather than one-off codes,
                our{" "}
                <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 bonus guide
                </Link>{" "}
                covers welcome offers, daily rewards, and referral bonuses in more depth.
              </p>
            </Section>

            <Section id="redemption-steps" title="Step-by-Step Redemption Process">
              <p>
                While the exact screen layout can change between app updates, the general redemption flow
                for this type of platform tends to follow the same pattern:
              </p>
              <ol className="list-inside list-decimal space-y-2">
                <li>
                  Log in to your account first — most redeem functions require you to already be signed in
                  so the reward can be attached to the correct wallet. See our{" "}
                  <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    IN999 login guide
                  </Link>{" "}
                  if you need a refresher on accessing your account.
                </li>
                <li>Navigate to the wallet, promotions, or account section where a &quot;redeem code&quot; or &quot;gift code&quot; field is usually located.</li>
                <li>Type or paste the code exactly as given — codes are typically case-sensitive and don&apos;t tolerate extra spaces.</li>
                <li>Submit the code and wait for the confirmation message, which usually appears within seconds.</li>
                <li>Check your balance or bonus wallet to confirm the reward has landed, and note any wagering conditions attached to it before you try to withdraw it.</li>
              </ol>
              <div className="mt-4 flex justify-center">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: `${ACCENT}22`, color: ACCENT }}
                >
                  <ListOrdered className="h-4 w-4" />
                </span>
              </div>
            </Section>

            <Section id="why-fails" title="Common Reasons a Code Fails">
              <p>
                A failed redemption is usually mundane rather than sinister. The most frequent causes are:
                the code has already reached its total redemption limit, the campaign window has closed,
                the code was typed with a stray space or the wrong capitalisation, the code was
                region-specific or account-tier-specific and your account doesn&apos;t qualify, or the code
                was already used once on that account (many campaigns are one-redemption-per-user by
                design). If a code fails repeatedly after you&apos;ve double-checked the text, the most
                likely explanation is simply that it expired before you tried it.
              </p>
            </Section>

            <Section id="scams" title="Spotting Fake Gift Code Scams">
              <p className="flex items-start gap-2">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${ACCENT}22`, color: ACCENT }}
                >
                  <ShieldAlert className="h-3.5 w-3.5" />
                </span>
                <span>
                  Wherever real gift codes exist, fake ones follow. This is the section worth reading most
                  carefully.
                </span>
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>
                  <strong className="text-mist">Codes sold for money.</strong> A legitimate promotional
                  code is never something you need to pay a third party to obtain. If someone is selling
                  &quot;guaranteed&quot; codes, that alone is a red flag.
                </li>
                <li>
                  <strong className="text-mist">Links that ask for your password first.</strong> A genuine
                  redemption only ever needs the code itself, entered inside the real app or site you
                  already log into — never a login form on a random third-party page.
                </li>
                <li>
                  <strong className="text-mist">&quot;Claim before it expires in 5 minutes&quot; pressure tactics.</strong>{" "}
                  Manufactured urgency is a classic phishing tool designed to stop you from thinking
                  critically or verifying the source.
                </li>
                <li>
                  <strong className="text-mist">Requests for upfront payment to &quot;unlock&quot; a reward.</strong>{" "}
                  A real gift code credits your account directly; it should never require you to deposit
                  first to release a code-based reward.
                </li>
                <li>
                  <strong className="text-mist">Screenshots claiming huge payouts from a single code.</strong>{" "}
                  These are commonly staged to lure people into scam channels or lookalike apps.
                </li>
              </ul>
              <p className="mt-3">
                The safest habit is to only ever enter a code inside the official app or site you already
                trust, and to treat any code offered through a stranger&apos;s message, comment, or
                unofficial group as unverified until proven otherwise.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Where can I find currently active IN999 gift codes?
                  </h3>
                  <p>
                    We intentionally don&apos;t publish a running list here, since codes rotate quickly and
                    a stale list on a third-party page can mislead readers. Check the in-app notice board
                    or the platform&apos;s official verified social channels for whatever is currently
                    running.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do gift codes expire?</h3>
                  <p>
                    Yes, almost all of them. Codes are usually tied to a specific campaign window, so a
                    code that worked last week may simply no longer be valid, regardless of how it&apos;s
                    typed.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I use one gift code on multiple accounts?</h3>
                  <p>
                    Generally no — most codes are designed as single-use per account or per device to
                    prevent abuse, so attempting to reuse one on a second account typically returns an
                    &quot;already redeemed&quot; error.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is it safe to search for gift codes on social media?</h3>
                  <p>
                    Browsing is fine, but only trust codes attached to a verified official account, and
                    never enter your password on a page that isn&apos;t the platform itself. When in doubt,
                    skip it — a missed short-lived code isn&apos;t worth the risk of a phishing attempt.
                  </p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/in999-bonus">
                See the IN999 Bonus Guide
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
