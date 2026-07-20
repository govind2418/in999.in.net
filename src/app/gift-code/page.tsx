import { Ticket, Copy, Gift } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 Gift Codes",
  description:
    "An independent guide explaining what IN999 gift codes are, how redemption generally works, where codes are shared, common failure reasons, and how to avoid gift-code scams.",
  path: "/gift-code",
});

const TOC = [
  { id: "overview", label: "What Is a Gift Code" },
  { id: "where-shared", label: "Where Codes Are Shared" },
  { id: "how-to-redeem", label: "Step-by-Step Redemption" },
  { id: "why-codes-fail", label: "Common Failure Reasons" },
  { id: "scam-awareness", label: "Scam Awareness" },
  { id: "good-habits", label: "Good Habits for Code Hunters" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const STEPS = [
  "Open your account wallet or the dedicated gift code entry field, usually found in the app menu or account dashboard.",
  "Type or paste the code exactly as it was shared — codes are typically case-sensitive, so capital letters and digits matter.",
  "Submit the code and wait for an on-screen confirmation before navigating away, since some redemptions take a few seconds to process.",
  "Check your wallet balance or bonus tab to confirm the credit actually landed before you consider the code used.",
];

const FAILURE_REASONS = [
  {
    title: "The code already expired",
    detail:
      "Most gift codes are time-limited, often valid for a window measured in hours rather than days. A code that worked for someone else yesterday may simply be dead by the time you try it.",
  },
  {
    title: "The redemption limit was reached",
    detail:
      "Codes are frequently capped — either to one redemption per account, or to a fixed total number of redemptions platform-wide. Once that cap is hit, the code stops working for everyone else, regardless of the expiry date.",
  },
  {
    title: "A typo in the code itself",
    detail:
      "Because codes mix letters and numbers, it is easy to misread an uppercase O for a zero, or a lowercase L for a capital I. Copy-pasting from the original source is safer than retyping from memory or a screenshot.",
  },
  {
    title: "Account eligibility restrictions",
    detail:
      "Some codes are restricted to new accounts, first-time depositors, or accounts in good standing. An account that does not meet the stated eligibility criteria may see the code rejected even though the code itself is still technically active.",
  },
];

export default function GiftCodePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Gift Code" }]} path="/gift-code" />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Gift Code: How Redemption Really Works"
          subtitle="A plain-language explainer on gift codes, where they surface, how to redeem them, and how to avoid getting scammed by fake code sellers."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="What Is a Gift Code">
              <p>
                A gift code, sometimes called a promo code or redeem code, is a short alphanumeric
                string that credits a small bonus amount to an account when entered correctly. Think of
                it as a digital coupon: it does not cost anything to redeem, it is not tied to a specific
                deposit, and it is usually distributed for free through official or community channels
                rather than sold. This page is an independent explainer written from a player&apos;s
                perspective — it is not issued or endorsed by IN999, and we do not control which codes
                are active at any given time.
              </p>
              <p>
                For a deeper, longer-form walkthrough that covers code formats, seasonal campaigns and
                how codes fit into the wider bonus ecosystem, see our companion piece,{" "}
                <Link href="/in999-gift-code" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  the full IN999 gift code guide
                </Link>
                . This page focuses specifically on the redemption mechanics and the safety side of
                things.
              </p>
            </Section>

            <Section id="where-shared" title="Where Codes Are Typically Shared">
              <p>
                Gift codes generally surface through a handful of predictable channels rather than
                appearing at random. Official app notifications and in-account announcements are usually
                the most reliable source, since they come directly from the platform rather than a
                third party. Community channels — Telegram groups, Discord servers, or social media
                pages run by fans of the game — are the second most common source, though the reliability
                of these varies a lot depending on who runs them.
              </p>
              <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                  <Gift className="h-6 w-6" />
                </span>
                <p className="text-sm leading-relaxed text-mist-dim">
                  A simple rule of thumb: the closer a source is to the platform itself (official app,
                  official social accounts), the more trustworthy it is. The further removed a source is
                  (a random forwarded message, an unfamiliar website promising exclusive codes), the more
                  scepticism it deserves.
                </p>
              </Card>
              <p>
                It also helps to compare a code against{" "}
                <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  our broader bonus guide
                </Link>{" "}
                before redeeming — if a code&apos;s claimed value looks wildly out of line with typical
                bonus sizes, that mismatch alone is a reason to slow down.
              </p>
            </Section>

            <Section id="how-to-redeem" title="Step-by-Step Redemption">
              <p>
                The redemption flow is short and consistent across most platforms that offer gift codes.
                Here is the general sequence:
              </p>
              <ol className="flex flex-col gap-4">
                {STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="gold-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-mist-dim">{step}</p>
                  </li>
                ))}
              </ol>
              <Card className="mt-2 flex items-center gap-4 p-6">
                <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Ticket className="h-5 w-5" />
                </span>
                <p className="text-sm text-mist-dim">
                  Codes are typically single-use per account and time-limited — redeem as soon as you
                  receive one rather than saving it for later.
                </p>
              </Card>
            </Section>

            <Section id="why-codes-fail" title="Common Failure Reasons">
              <p>
                A code failing to redeem is usually not a technical glitch — it is almost always one of a
                few predictable causes:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FAILURE_REASONS.map((reason) => (
                  <div key={reason.title} className="card p-5">
                    <h3 className="mb-1 text-sm font-semibold text-mist">{reason.title}</h3>
                    <p className="text-xs leading-relaxed text-mist-dim">{reason.detail}</p>
                  </div>
                ))}
              </div>
              <p>
                If a code fails, the most productive next step is usually to double-check the source
                timestamp — a code posted several hours ago has a meaningfully lower chance of still
                being valid than one posted minutes ago.
              </p>
            </Section>

            <Section id="scam-awareness" title="Scam Awareness">
              <p>
                Because gift codes are, by definition, free, anyone asking you to pay money, share your
                account password, or hand over your card details in exchange for a code is running a
                scam. Legitimate codes never require a fee to unlock, and no genuine code distributor
                needs your login credentials to give you one — you enter the code yourself, inside your
                own account.
              </p>
              <p>
                A few patterns worth watching for: websites that promise a large &quot;guaranteed&quot;
                code but only reveal it after you complete a survey, download an unrelated app, or enter
                personal details; messages claiming to be from &quot;official support&quot; asking you to
                confirm your password to &quot;verify&quot; a code; and sellers on marketplaces or social
                media offering to sell you a code for cash. None of these are how genuine gift code
                distribution works, and engaging with them puts your account and your money at risk.
              </p>
              <p>
                If something feels off — an unfamiliar link, urgent pressure to act immediately, or a
                request for information a code redemption would never actually need — the safest move is
                to walk away and look for the same code through an official channel instead.
              </p>
            </Section>

            <Section id="good-habits" title="Good Habits for Code Hunters">
              <p>
                Players who consistently catch valid codes tend to follow a few simple habits: they
                follow one or two trusted, official-adjacent sources rather than a dozen random ones;
                they redeem immediately instead of bookmarking a code for later; and they treat any code
                that seems too generous compared to normal promotions as a red flag rather than a stroke
                of luck. Building these habits protects both your time and your account security.
              </p>
              <p>
                It also helps to keep expectations calibrated. Gift codes are, by design, a small,
                occasional bonus rather than a meaningful income source — treating them that way keeps you
                from overvaluing any single code, and keeps you from being an easy target for anyone
                promising an unrealistically large one. If a claimed reward feels disproportionate to the
                small, casual nature of typical gift codes, that gap between expectation and reality is
                usually the clearest signal something is off.
              </p>
              <p>
                Finally, keep your account details separate from your code-hunting activity entirely.
                Redeeming a code should never require you to leave your account, log into a third-party
                site with your platform password, or install anything outside the official app. If a
                source asks for any of that, the safest response is to stop and redeem elsewhere.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do gift codes cost anything to redeem?</h3>
                  <p>No. A genuine gift code is free to enter and free to use. Any request for payment in exchange for a code is a scam.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Why did my code say &quot;invalid&quot; even though I copied it correctly?</h3>
                  <p>Most likely the code expired or reached its redemption limit before you tried it. Gift codes are usually short-lived and capped, so timing matters more than accuracy alone.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I use more than one gift code at a time?</h3>
                  <p>Generally yes, as long as each individual code is still valid and unused on your account — there is typically no platform-wide limit on how many different codes you redeem, only per-code limits.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is it safe to share a gift code I found with friends?</h3>
                  <p>Usually yes, as long as the code itself came from a legitimate source and you are not asking friends for money or personal information in return — sharing a free code costs nothing and carries no risk to either side.</p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="outline" href="https://t.me/" icon={<Copy className="h-4 w-4" />}>
                Browse Community Code Channels
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
