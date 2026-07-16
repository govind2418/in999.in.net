import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { POPULAR_GAMES } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 Games Explained: WinGo, K3, 5D, TRX, Sports & Casino",
  description:
    "An independent walkthrough of every game category on IN999 — how WinGo, K3, 5D, TRX, Sports and Casino work, how rounds resolve, and how a beginner should choose.",
  path: "/games",
});

const TOC = [
  { id: "overview", label: "The Games Catalogue at a Glance" },
  { id: "categories", label: "Category-by-Category Breakdown" },
  { id: "rounds", label: "How a Round Actually Resolves" },
  { id: "choosing", label: "Choosing a Game as a Beginner" },
  { id: "bankroll", label: "Session & Bankroll Habits" },
  { id: "responsible", label: "A Note on Responsible Play" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const GAME_DETAILS: Record<string, string> = {
  WinGo: "The round most new visitors search for by name. Every cycle you're shown a countdown, and before it hits zero you pick a colour (green, red, or the rarer violet) or a specific number from 0-9. When the timer ends, the result is revealed and payouts are calculated instantly. Colour bets are the lowest-variance way to play WinGo; number bets pay far more but land less often, which is the trade-off every WinGo player is weighing each round.",
  K3: "Three dice, one outcome. Instead of a colour wheel, K3 asks you to predict totals, specific combinations, or whether the sum will land big/small and odd/even. Because there are more possible dice combinations than WinGo colours, K3 rewards players who enjoy tracking patterns across several rounds rather than reacting to a single spin.",
  "5D": "A five-position number format — think of it as five independent digit slots that each resolve between 0 and 9. You can bet on a single position, a combination across positions, or broader sum/parity outcomes. 5D has the steepest learning curve of the prediction games simply because there are more variables to track at once, so it tends to suit players who've already spent time with WinGo or K3.",
  TRX: "TRX-style rounds source their result from a public, blockchain-referenced value rather than an in-house randomiser alone, which is why players who care about being able to independently sanity-check a result gravitate toward this mode. Gameplay mechanics (colour and number predictions, short timers) look similar to WinGo, but the appeal is the verifiable outcome source.",
  Sports: "A different shape of product entirely — instead of a repeating timed round, Sports markets track real fixtures (cricket, football and other live events) and let you back outcomes like match winner, totals, or in-play moments while the game is actually happening. There's no fixed round length, so the pacing and the skills involved (reading a live match) are closer to traditional sports betting than to WinGo-style prediction.",
  Casino: "The catch-all category for slot-style titles and live-dealer tables. If prediction rounds feel repetitive, Casino games are the usual change of pace — spin-based slots with no time pressure, or live tables where you're playing against a dealer feed rather than a timer. Rules vary title by title, so it's worth reading a game's own instructions before staking anything.",
};

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Games" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Games: A Category-by-Category Guide"
          subtitle="What each game mode actually is, how rounds resolve, and how to pick one if you're just getting started."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="The Games Catalogue at a Glance">
              <p>
                This page is an independent explainer, not marketing copy from any operator — we are not
                affiliated with IN999 or any gaming platform. Our aim is simply to describe, in plain and
                original language, what sits inside the games lobby so you can decide what to try before
                you ever fund an account.
              </p>
              <p>
                The catalogue splits naturally into two families. The first is short, timed prediction
                rounds — WinGo, K3, 5D and TRX — where a betting window opens, closes, and resolves within
                a minute or two. The second is longer-form formats — Sports and Casino — that behave more
                like a traditional sportsbook or casino floor, with results tied to real fixtures or
                spin-based mechanics instead of a repeating clock. Knowing which family a mode belongs to
                is the fastest way to work out whether it fits how you like to play.
              </p>
              <p>
                For a deeper, single-mode-focused walkthrough with strategy notes, our{" "}
                <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  full IN999 game guide
                </Link>{" "}
                goes further than this catalogue overview — this page is meant to be the starting map.
              </p>
            </Section>

            <Section id="categories" title="Category-by-Category Breakdown">
              <p>
                Here&apos;s what each category actually involves, written from a player&apos;s perspective:
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {POPULAR_GAMES.map((game) => {
                  const Icon = game.icon;
                  return (
                    <Card key={game.name} className="flex flex-col items-start gap-3 p-6">
                      <span className="gold-btn flex h-11 w-11 items-center justify-center rounded-2xl">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-base font-semibold text-mist">{game.name}</h3>
                      <p className="text-sm leading-relaxed text-mist-dim">
                        {GAME_DETAILS[game.name] ?? game.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </Section>

            <Section id="rounds" title="How a Round Actually Resolves">
              <p>
                Every prediction-style round follows the same basic lifecycle regardless of which mode
                you&apos;re in: a betting window opens, you commit to a colour, number, or combination
                before the countdown hits zero, the window locks, and a result is revealed within seconds.
                Your payout multiplier depends on how narrow your prediction was — a broad colour or
                big/small call typically pays close to double your stake, while an exact-number call pays
                far more precisely because the odds of it landing are proportionally lower.
              </p>
              <p>
                Because each cycle is short, it&apos;s easy to play dozens of rounds in a single sitting
                without noticing the time pass. That speed is part of the appeal for a lot of players, but
                it&apos;s also exactly why session limits matter — see the bankroll and responsible-play
                sections below before you dive in.
              </p>
            </Section>

            <Section id="choosing" title="Choosing a Game as a Beginner">
              <p>
                If you&apos;re opening the lobby for the first time, don&apos;t try to learn all six
                categories in one sitting. WinGo is the usual entry point simply because colour predictions
                are the easiest concept to grasp — you&apos;re picking one of a small number of outcomes,
                and the round length gives you fast feedback on whether your read was right.
              </p>
              <p>
                Once WinGo&apos;s pacing feels familiar, K3 and 5D are natural next steps if you enjoy
                pattern-tracking, while TRX suits players who specifically want a verifiable result source.
                Sports and Casino sit apart from the prediction group entirely — try them once you know
                whether you prefer following a live match or a spin-based table over a repeating timer.
                Before placing your first real bet anywhere, make sure your account is fully set up; our{" "}
                <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  registration walkthrough
                </Link>{" "}
                and{" "}
                <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  login guide
                </Link>{" "}
                cover account creation and sign-in end to end.
              </p>
            </Section>

            <Section id="bankroll" title="Session & Bankroll Habits">
              <p>
                None of these formats can be predicted with certainty — that&apos;s inherent to a
                randomised or live-market round. What separates players who enjoy the games long-term from
                players who burn out fast usually isn&apos;t a betting system, it&apos;s session discipline:
                a fixed budget decided before you open the lobby, a hard stop-loss you actually honour, and
                a habit of treating a winning streak as a cue to bank profit rather than raise stakes.
              </p>
              <p>
                A simple rule many experienced players use: decide your stop-loss and stop-win amount
                before the first round, and log out the moment you hit either number, win or lose. It
                sounds almost too basic to matter, but it&apos;s consistently the habit that keeps play
                enjoyable rather than stressful.
              </p>
            </Section>

            <Section id="responsible" title="A Note on Responsible Play">
              <p>
                Every category described on this page carries real financial risk — prediction rounds,
                sports markets, and casino titles are entertainment products, not income strategies. Only
                stake money you can comfortably afford to lose, avoid the platform entirely if you are
                under 18, and step away if playing stops feeling fun or starts feeling compulsive. Our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming page
                </Link>{" "}
                goes into more depth on limits, self-exclusion, and where to find support if you need it.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Which IN999 game category is best for total beginners?</h3>
                  <p>
                    WinGo is the most commonly recommended starting point. Colour predictions are simple to
                    understand, rounds resolve quickly, and broad colour bets carry lower variance than
                    exact-number bets in K3 or 5D.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I need a separate account for each game category?</h3>
                  <p>
                    No — all six categories typically sit in one shared lobby under a single account and
                    wallet, so you can move between WinGo, K3, 5D, TRX, Sports and Casino without a
                    separate sign-up for each.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Are the prediction rounds fixed-length, or do they vary?</h3>
                  <p>
                    Most prediction formats use a consistent countdown for that mode (WinGo&apos;s window,
                    for example, is famously short), while Sports and Casino don&apos;t follow a fixed
                    timer at all since they track live fixtures or spin-based mechanics instead.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I try a game mode before committing real funds?</h3>
                  <p>
                    Most prediction and casino formats involve real-money stakes, and there is no
                    meaningful way to evaluate them without funding an account — budget a small, affordable
                    amount for your first sessions rather than treating it as a free trial.
                  </p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/download-app">
                Download &amp; Play
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
