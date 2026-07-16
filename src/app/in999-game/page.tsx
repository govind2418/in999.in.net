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
import { Dice5, Boxes, Grid3x3, TrendingUp, Trophy, Sparkles } from "lucide-react";

const ACCENT = "#e2534d";

export const metadata = pageMetadata({
  title: "IN999 Game Guide 2026: WinGo, K3, 5D & TRX Colour Prediction Explained",
  description:
    "A plain-language, independent guide to every IN999 Game mode — WinGo colour prediction, K3 dice, 5D numbers, TRX and more — with rules, strategy tips and safety notes.",
  path: "/in999-game",
});

const TOC = [
  { id: "overview", label: "What Is the IN999 Game" },
  { id: "categories", label: "Game Categories Explained" },
  { id: "how-it-works", label: "How Rounds Work" },
  { id: "getting-started", label: "Getting Started" },
  { id: "strategy", label: "Beginner Strategy Notes" },
  { id: "choosing-mode", label: "Choosing Your First Game Mode" },
  { id: "safety", label: "Safety & Fair Play" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const GAME_MODES = [
  { name: "WinGo", icon: Dice5, blurb: "A colour-and-number prediction round where players forecast which colour or digit a short timer will land on. Rounds are quick — usually under a minute — which is why it's the most-searched IN999 game mode." },
  { name: "K3", icon: Boxes, blurb: "A three-dice prediction format. Instead of colours, you're reading combinations and totals, which makes it feel closer to a classic dice table than a colour wheel." },
  { name: "5D", icon: Grid3x3, blurb: "A five-digit number format for players who prefer working with number patterns across multiple positions rather than a single colour outcome." },
  { name: "TRX", icon: TrendingUp, blurb: "A round style that references blockchain-style hash outcomes for its results, appealing to players who want a transparent, independently verifiable result source." },
  { name: "Sports", icon: Trophy, blurb: "Traditional sports-market style betting sits alongside the prediction games for players who prefer following live fixtures instead of timed rounds." },
  { name: "Casino", icon: Sparkles, blurb: "Slot-style and live-table formats round out the catalogue for players who want a break from prediction-based rounds." },
];

export default function In999GamePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 Game" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Game: The Complete Player's Guide"
          subtitle="Everything a new or returning player wants to know about the IN999 game catalogue, explained in plain language."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="What Is the IN999 Game">
              <p>
                &quot;IN999 game&quot; is the umbrella term players use for the mix of short-round prediction
                formats and casino-style titles available through the IN999 platform. This page is an
                independent explainer — it is not the operator&apos;s own marketing copy, and we are not
                affiliated with IN999 or any gaming operator. Our goal is simply to describe, in our own
                words, how the game catalogue is structured so a first-time visitor can understand what
                they are looking at before they commit any money.
              </p>
              <p>
                Broadly, the catalogue splits into two families: fast prediction rounds (WinGo, K3, 5D,
                TRX) that resolve in under a few minutes, and longer-form formats (Sports, Casino) that
                behave more like traditional betting or casino products. Understanding which family a
                mode belongs to is the fastest way to decide whether it suits your playing style.
              </p>
            </Section>

            <Section id="categories" title="Game Categories Explained">
              <p>
                Here is a category-by-category breakdown, written from a player&apos;s perspective rather
                than a marketing one:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {GAME_MODES.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <div key={mode.name} className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                      <span
                        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: `${ACCENT}22`, color: ACCENT }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-mist">{mode.name}</h3>
                      <p className="text-xs leading-relaxed text-mist-dim">{mode.blurb}</p>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section id="how-it-works" title="How Rounds Work">
              <p>
                Prediction-format rounds on the IN999 game catalogue follow a repeating cycle: a betting
                window opens, players choose an outcome (a colour, number, or combination depending on the
                mode), the window closes, and a result is revealed shortly after. Payout multipliers vary
                by how specific your prediction was — a single-number call typically pays more than a
                broad colour call, because the odds of it landing are lower.
              </p>
              <p>
                Because rounds are short, it is easy to play many of them back to back. That speed is part
                of the appeal, but it is also the main reason we recommend setting a time and deposit
                limit before you start — see our safety notes below.
              </p>
            </Section>

            <Section id="getting-started" title="Getting Started">
              <p>
                If you are new to the platform, the usual path is: create an account, verify your mobile
                number, add funds, then pick a game mode from the lobby. We cover each of these steps in
                more depth on dedicated pages so this guide can stay focused on the games themselves:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    IN999 registration walkthrough
                  </Link>{" "}
                  — account creation and verification.
                </li>
                <li>
                  <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    IN999 login guide
                  </Link>{" "}
                  — signing in and recovering access.
                </li>
                <li>
                  <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    IN999 app overview
                  </Link>{" "}
                  — playing from a mobile app instead of a browser.
                </li>
              </ul>
            </Section>

            <Section id="strategy" title="Beginner Strategy Notes">
              <p>
                None of the prediction formats can be solved with certainty — that is the nature of a
                randomised round. What experienced players do instead is manage their session, not the
                outcome: they set a fixed budget per session, avoid chasing losses by doubling bets after
                a loss, and treat broad predictions (colour, range) as lower-variance choices compared to
                exact-number calls, which pay more but land far less often.
              </p>
              <p>
                A simple habit that helps: decide your stop-loss and stop-win amount before you open a
                game, and log out once you hit either one. It sounds basic, but it is the single most
                effective discipline players report.
              </p>
              <p>
                It also helps to track your sessions the same way you would track any spending — a quick
                note of the date, the mode you played, how long you played, and where you ended up. Over a
                few weeks that log tells you far more about your actual results than any single lucky or
                unlucky round ever will, and it makes it much easier to notice if a session is running
                longer than you intended.
              </p>
            </Section>

            <Section id="choosing-mode" title="Choosing Your First Game Mode">
              <p>
                If you are deciding where to start, it usually comes down to how much variance you are
                comfortable with. WinGo&apos;s colour calls are the lowest-friction entry point: the rules
                take a minute to learn, rounds are quick, and broad colour predictions are easier to reason
                about than multi-digit combinations. K3 and 5D reward players who enjoy tracking number
                patterns and are willing to accept longer odds for a bigger payout on an exact call. TRX
                appeals to players who specifically want a result source they can independently verify
                round to round. Sports and Casino sit apart from the timed-round formats entirely and suit
                players who would rather follow a live match or a familiar slot/table format than a
                countdown timer.
              </p>
              <p>
                There is no wrong starting point — the more useful question is whether the pace and payout
                structure of a given mode actually matches how you like to play, rather than which mode
                looks most popular at any given moment.
              </p>
            </Section>

            <Section id="safety" title="Safety & Fair Play">
              <p>
                Prediction and casino-style games are entertainment products with real financial risk.
                Play only with money you can afford to lose, avoid the platform entirely if you are under
                18, and stop if gaming stops feeling fun. For a longer discussion of limits, self-exclusion
                and support resources, see our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming page
                </Link>
                .
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is the IN999 game catalogue free to try?</h3>
                  <p>Most prediction and casino formats involve real-money stakes; there is no meaningful way to evaluate them without funding an account, so budget accordingly before you start.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Which IN999 game mode is easiest for beginners?</h3>
                  <p>WinGo is the most commonly recommended starting point because its colour-based predictions are simple to understand, and broad colour bets carry lower variance than exact-number bets in 5D or K3.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I switch between game modes on one account?</h3>
                  <p>Yes — all modes typically sit in one shared lobby under a single account and wallet, so you can move between WinGo, K3, 5D, TRX, Sports and Casino without separate sign-ups.</p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/in999-download">
                See the IN999 Download Guide
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
