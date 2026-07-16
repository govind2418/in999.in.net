import { Dice5, Boxes, Grid3x3, TrendingUp, Trophy, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "How to Play IN999",
  description:
    "An independent, plain-language walkthrough of how to play IN999 — from account setup to placing your first prediction, reading results, and avoiding beginner mistakes.",
  path: "/how-to-play",
});

const TOC = [
  { id: "overview", label: "Getting Started Overview" },
  { id: "account-setup", label: "Account Setup Recap" },
  { id: "game-rounds", label: "Understanding Game Rounds" },
  { id: "first-bet", label: "Placing Your First Prediction" },
  { id: "results-payouts", label: "Reading Results & Payouts" },
  { id: "mistakes", label: "Beginner Mistakes to Avoid" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const GUIDES = [
  {
    name: "WinGo",
    icon: Dice5,
    summary: "Predict the colour or number of the next result.",
    steps: [
      "Pick a time period — 30 seconds, 1 minute, 3 minutes or 5 minutes.",
      "Choose a colour (Green, Red or Violet) or a specific number from 0–9.",
      "Set your bet amount and confirm before the round timer ends.",
      "When the round closes, the result is revealed and matching bets are paid out automatically.",
    ],
  },
  {
    name: "K3",
    icon: Boxes,
    summary: "A dice-based strategy game using three dice per round.",
    steps: [
      "Choose a round length and place a bet on the total, a specific combination, or big/small.",
      "Three dice are rolled at the end of the round.",
      "Bets that match the total, combination, or big/small outcome are paid according to the odds shown before you bet.",
    ],
  },
  {
    name: "5D",
    icon: Grid3x3,
    summary: "Predict a 5-digit result across five independent positions.",
    steps: [
      "Select a round and choose numbers for one or more of the five digit positions.",
      "You can bet on exact digits, sums, or big/small for each position.",
      "Results are drawn for all five positions at once, and winning positions are paid per your selections.",
    ],
  },
  {
    name: "TRX",
    icon: TrendingUp,
    summary: "Results are derived from public blockchain data for verifiable fairness.",
    steps: [
      "Choose a round length, then bet on colour, number, or size, similar to WinGo.",
      "The round result is generated from a public TRON blockchain hash, so anyone can verify it independently.",
      "Matching bets are settled automatically once the blockchain-derived result is confirmed.",
    ],
  },
  {
    name: "Sports",
    icon: Trophy,
    summary: "Live and pre-match betting markets across major sports.",
    steps: [
      "Browse upcoming or live matches from the Sports section.",
      "Pick a market — match winner, handicap, over/under, and more.",
      "Add your selection to the bet slip, enter a stake, and confirm.",
    ],
  },
  {
    name: "Casino",
    icon: Sparkles,
    summary: "Slots and live-dealer tables for classic casino play.",
    steps: [
      "Open the Casino section and choose a slot or live table.",
      "Set your stake using the in-game controls.",
      "Spin or play a round — results follow each game's published RTP and rules.",
    ],
  },
];

export default function HowToPlayPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "How to Play" }]} />
        <PageHero
          eyebrow="Beginner Guide"
          title="How to Play IN999: A Step-by-Step Guide"
          subtitle="An independent walkthrough covering everything a first-time player needs, from account setup to your first prediction."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="Getting Started Overview">
              <p>
                Learning how to play on IN999 is less about memorising complicated rules and more
                about understanding a simple cycle: fund your wallet, pick a game mode, place a
                prediction before the round closes, and check the result once the timer runs out.
                This guide breaks that cycle into clear stages so a brand-new visitor can go from
                &quot;never opened the app&quot; to &quot;placed my first round with confidence&quot;
                without guessing at anything.
              </p>
              <p>
                We&apos;ve written this page as an independent explainer, not as promotional copy
                from the platform itself. Where a step involves real money, we say so plainly, and
                where a decision is genuinely a matter of personal preference (which game mode to
                try first, how much to stake) we explain the trade-offs rather than pushing you
                toward one choice.
              </p>
            </Section>

            <Section id="account-setup" title="Account Setup Recap">
              <p>
                Before you can place a single prediction, you need a verified account and a funded
                wallet. We cover the full sign-up flow — including mobile verification and the
                fields you&apos;ll be asked to fill in — on our dedicated{" "}
                <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 registration walkthrough
                </Link>
                , so we won&apos;t repeat every screen here. The short version: registration takes
                a few minutes, requires a working mobile number for OTP verification, and asks you
                to set a password you&apos;ll use every time you log back in.
              </p>
              <p>
                Once your account exists, the next gate is funding. You can&apos;t meaningfully
                test any game mode without adding money to your wallet first, so it&apos;s worth
                reading our{" "}
                <Link href="/deposit-withdrawal" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  deposit &amp; withdrawal guide
                </Link>{" "}
                before you commit to a deposit amount — it explains typical processing times and
                the small details (matching bank names, correct UPI IDs) that prevent failed
                transactions.
              </p>
            </Section>

            <Section id="game-rounds" title="Understanding Game Rounds">
              <p>
                Every prediction-format game on IN999 — WinGo, K3, 5D and TRX — runs on the same
                underlying structure even though the details differ: a betting window opens for a
                fixed duration, players submit predictions during that window, the window closes,
                and a result is generated and displayed. What changes between modes is what you&apos;re
                predicting and how the result is produced. Below is a quick reference for each mode
                so you know what you&apos;re looking at before you open it.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {GUIDES.map((guide) => {
                  const Icon = guide.icon;
                  return (
                    <Card key={guide.name} className="flex flex-col gap-3 p-6">
                      <div className="flex items-center gap-3">
                        <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-mist">{guide.name}</h3>
                          <p className="text-xs text-mist-dim">{guide.summary}</p>
                        </div>
                      </div>
                      <ol className="flex flex-col gap-1.5">
                        {guide.steps.map((step, i) => (
                          <li key={step} className="flex items-start gap-2 text-xs leading-relaxed text-mist-dim">
                            <span className="mt-0.5 shrink-0 font-bold text-gold">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </Card>
                  );
                })}
              </div>
            </Section>

            <Section id="first-bet" title="Placing Your First Prediction">
              <p>
                For a first attempt, most players find it easiest to start with WinGo because the
                choice set is small and easy to reason about: a colour (Green, Red or Violet) or a
                single digit from 0–9. Open the WinGo lobby, choose a round length — shorter rounds
                mean faster feedback, longer rounds give you more time to think — and pick your
                betting window.
              </p>
              <p>
                Enter a stake you are fully comfortable losing, since every round is a real-money
                outcome, not a simulation. Confirm your selection before the countdown reaches
                zero; predictions submitted after the window closes are not accepted. From there,
                the round plays out automatically and you don&apos;t need to do anything else until
                the result appears.
              </p>
              <p>
                A useful habit for your very first session: place one small prediction, wait for the
                result, and read the wallet history entry it creates before placing a second one.
                That single pass through the cycle — bet, wait, result, ledger entry — teaches you
                more about how the platform behaves than reading any guide can.
              </p>
            </Section>

            <Section id="results-payouts" title="Reading Results & Payouts">
              <p>
                When a round closes, the outcome is displayed in the game window and simultaneously
                recorded in your wallet history. If your prediction matches, the payout is credited
                automatically — there is no manual claim step. Payout size depends on how specific
                your prediction was: broad calls (a colour, a big/small range) pay less per win but
                land more often, while narrow calls (an exact number, an exact combination) pay
                significantly more but land far less frequently.
              </p>
              <p>
                It&apos;s worth checking the odds or multiplier shown next to each bet type before
                you confirm a stake, since these numbers tell you exactly what a win is worth ahead
                of time — nothing about payouts is hidden until after the round settles. If a result
                ever looks unexpected, your wallet transaction history is the authoritative record;
                cross-check it there before assuming anything went wrong.
              </p>
            </Section>

            <Section id="mistakes" title="Beginner Mistakes to Avoid">
              <p>
                A handful of avoidable mistakes account for most of the frustration new players
                report. First, jumping straight into narrow, high-multiplier predictions (exact
                numbers or combinations) before understanding how rarely they land — start broad
                and work your way toward specific calls once you&apos;re comfortable. Second,
                chasing a loss by doubling the next stake; this feels intuitive but compounds risk
                quickly and has no basis in how randomised rounds work.
              </p>
              <p>
                Third, playing many rounds back-to-back without a plan for when to stop. Because
                rounds resolve quickly, it&apos;s easy to lose track of both time and total spend.
                Decide a session budget and a stop time before you start, not while you&apos;re
                mid-session. Fourth, ignoring the platform&apos;s minimum age requirement or playing
                with money earmarked for essentials — neither is worth the risk. Our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming guide
                </Link>{" "}
                covers all of this in more depth, including how to set limits before you feel like
                you need them.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I need experience to start playing?</h3>
                  <p>No. WinGo&apos;s colour and number predictions are simple enough for a complete beginner to understand within a couple of rounds; other modes reward reading a few extra rules first.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">How long does a single round take?</h3>
                  <p>It depends on the round length you choose — commonly 30 seconds, 1 minute, 3 minutes or 5 minutes for prediction formats, with Sports and Casino games running on their own independent timing.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I change my prediction after confirming?</h3>
                  <p>No. Once a bet is confirmed for the current round, it is locked in until the round settles. You can, however, place a fresh bet on the next round.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Where can I get more answers?</h3>
                  <p>
                    Our{" "}
                    <Link href="/faq" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      full FAQ page
                    </Link>{" "}
                    covers account, wallet and support questions that go beyond gameplay mechanics.
                  </p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href={REGISTER_URL}>
                Register &amp; Start Playing
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
