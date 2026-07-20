import { ShieldCheck, Clock, Wallet, PhoneCall, AlertTriangle, Users, LifeBuoy } from "lucide-react";
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
  title: "IN999 Responsible Gaming",
  description:
    "IN999 responsible gaming guidance — why limits matter, how to recognise warning signs of problem gambling, self-exclusion options, and where to find support. 18+ only.",
  path: "/responsible-gaming",
});

const TOC = [
  { id: "why-it-matters", label: "Why Responsible Play Matters" },
  { id: "principles", label: "Core Principles" },
  { id: "limits", label: "Setting Deposit & Time Limits" },
  { id: "warning-signs", label: "Recognising Warning Signs" },
  { id: "self-exclusion", label: "Self-Exclusion Options" },
  { id: "help", label: "Where to Find Help" },
  { id: "parents", label: "A Note for Parents & Guardians" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const PRINCIPLES = [
  {
    title: "18+ Only",
    description: "IN999 and platforms like it are intended strictly for adults aged 18 and above. Do not play if you are underage, and do not let a minor access your account.",
    icon: ShieldCheck,
  },
  {
    title: "Set a Time Limit",
    description: "Decide how long you'll play before you start, and stop when that time is up — regardless of how a session is going.",
    icon: Clock,
  },
  {
    title: "Set a Spending Limit",
    description: "Only play with money you can afford to lose entirely, and never chase losses with bigger bets or extra deposits.",
    icon: Wallet,
  },
  {
    title: "Take Breaks",
    description: "Step away regularly, including after both wins and losses. Gaming should stay entertainment — if it stops feeling that way, pause and reassess.",
    icon: PhoneCall,
  },
];

export default function ResponsibleGamingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Responsible Gaming" }]} path="/responsible-gaming" />
        <PageHero
          eyebrow="Play Safely — 18+"
          title="IN999 Responsible Gaming"
          subtitle="Independent guidance to help you keep gaming fun, controlled, and within your means — and to recognise when it's time to stop."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="why-it-matters" title="Why Responsible Play Matters">
              <p>
                Colour-prediction and casino-style games are built around fast, repeatable rounds,
                which is exactly what makes them entertaining — and exactly why they deserve
                deliberate limits. Short round times mean it&apos;s easy to lose track of both
                elapsed time and total spend, especially across a long session. Treating every
                stake as money you have genuinely accepted losing, before you place it, is the
                single most protective habit a player can build.
              </p>
              <p>
                This page is written from an independent, player-safety perspective. It is not a
                substitute for professional advice, and nothing here should be read as encouragement
                to gamble. If gaming ever stops feeling like entertainment, that is a signal worth
                taking seriously, not ignoring.
              </p>
            </Section>

            <Section id="principles" title="Core Principles">
              <p>
                These four ideas underpin almost every piece of responsible-gaming guidance you&apos;ll
                find anywhere, and they hold up regardless of which specific platform or game format
                you&apos;re playing. None of them require giving anything up — they&apos;re about
                deciding the boundaries of your play in advance, while you&apos;re thinking clearly,
                rather than in the middle of a session when it&apos;s harder to be objective.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PRINCIPLES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="flex items-start gap-4 p-8">
                      <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-mist">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist-dim">{item.description}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </Section>

            <Section id="limits" title="Setting Deposit & Time Limits">
              <p>
                The most effective limits are the ones set before a session starts, not adjusted
                mid-session. Decide on a maximum amount you&apos;re willing to deposit in a given
                day or week, and treat that number as fixed — not a starting point to renegotiate
                after a loss. Our{" "}
                <Link href="/deposit-withdrawal" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  deposit &amp; withdrawal guide
                </Link>{" "}
                walks through how funding works in practice, which makes it easier to plan a limit
                you can actually stick to.
              </p>
              <p>
                Time limits work the same way. Set an alarm or use your phone&apos;s screen-time
                tools if a platform doesn&apos;t offer a built-in session timer, and commit to
                logging out when it goes off. Many players find it useful to write both limits down
                somewhere outside the app itself, so the decision isn&apos;t something a losing
                streak can quietly talk them out of.
              </p>
            </Section>

            <Section id="warning-signs" title="Recognising Warning Signs">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p>
                  Problem gambling rarely announces itself all at once — it tends to show up as a
                  pattern of small decisions. Watch for: spending noticeably more than you planned
                  on a regular basis, borrowing money or using funds set aside for essentials to
                  keep playing, hiding the amount or frequency of your play from family or friends,
                  feeling irritable or anxious when you can&apos;t access the platform, and playing
                  specifically to try to win back previous losses rather than for enjoyment.
                </p>
              </div>
              <p>
                Any one of these on its own isn&apos;t necessarily cause for alarm, but if several
                sound familiar, or if you notice them getting worse rather than better, it&apos;s a
                clear signal to step back and consider some of the support options below.
              </p>
            </Section>

            <Section id="self-exclusion" title="Self-Exclusion Options">
              <p>
                Many gaming platforms offer some form of account-level control for players who want
                to limit or pause their own access — this can include temporary cool-off periods,
                deposit caps set inside account settings, or a longer-term self-exclusion request
                handled through support. If you don&apos;t see these options directly in your
                account settings, contact support and ask specifically about deposit limits, session
                limits, or self-exclusion — framing the request clearly usually gets it actioned
                faster.
              </p>
              <p>
                Self-exclusion is not a sign of failure; it&apos;s a deliberate, responsible use of
                the tools available to you. If a platform-level pause doesn&apos;t feel like enough
                on its own, pairing it with a family member or friend who can help you stay
                accountable tends to be more effective than relying on willpower alone.
              </p>
              <p>
                It&apos;s also worth remembering that a break doesn&apos;t have to be permanent to be
                useful. A short, deliberate pause — a week, a month — is often enough to reset your
                relationship with a fast-paced game and reassess whether the amount of time or money
                you were spending still feels right. You can always revisit the decision later with a
                clearer head than you had mid-session.
              </p>
            </Section>

            <Section id="help" title="Where to Find Help">
              <div className="flex items-start gap-3">
                <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p>
                  If your gaming is starting to feel like a problem, you don&apos;t have to work it
                  out alone. Start with people you trust — a friend or family member you can be
                  honest with about how much time or money you&apos;re spending. Beyond that, most
                  countries have independent, professional problem-gambling support services and
                  helplines; a quick search for &quot;problem gambling helpline&quot; along with
                  your country or region will surface the official, verified service closest to you.
                  We intentionally don&apos;t list specific phone numbers or organisation names here,
                  since the right service depends on where you live and we&apos;d rather point you
                  toward verified, current information than risk giving you an outdated contact.
                </p>
              </div>
              <p>
                You can also reach out to platform support to discuss account limits or a break from
                play — that conversation stays between you and the platform, and asking doesn&apos;t
                require you to explain more than you&apos;re comfortable sharing.
              </p>
            </Section>

            <Section id="parents" title="A Note for Parents & Guardians">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p>
                  Real-money prediction and casino-style platforms are strictly for adults. If
                  children or teenagers share a household device, phone, or app store account with
                  you, it&apos;s worth using device-level parental controls, app-store age
                  restrictions, and screen-locked payment methods to keep this kind of platform out
                  of reach. Avoid saving passwords in a browser on a shared device, and never leave
                  an account logged in on a device a minor can access unsupervised.
                </p>
              </div>
              <p>
                It&apos;s also worth having an honest, age-appropriate conversation with older
                teenagers about why these age limits exist, rather than relying on technical controls
                alone. Curiosity about an app a parent uses is normal, and a short explanation of why
                real-money games are adults-only tends to be more effective long-term than restriction
                alone. If you manage a shared family device, consider a separate profile or app-store
                account for younger household members so age-gated apps never appear in their view in
                the first place.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">What&apos;s the minimum age to play?</h3>
                  <p>18. This applies regardless of local age of majority for other activities — real-money prediction and casino games are adults-only.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I set my own deposit limit?</h3>
                  <p>Most platforms offer some form of deposit or session limit inside account settings, or via a direct request to support if it isn&apos;t self-service. Check your account settings first.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is it normal to lose money playing these games?</h3>
                  <p>Yes — every prediction and casino-style game carries genuine financial risk by design. Only ever play with money you can fully afford to lose, and treat any win as a bonus rather than an expectation.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Where can I learn more about gameplay itself?</h3>
                  <p>
                    See our{" "}
                    <Link href="/in999-game" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      IN999 game guide
                    </Link>{" "}
                    for how the different modes work, or our broader{" "}
                    <Link href="/faq" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      FAQ page
                    </Link>{" "}
                    for account and wallet questions.
                  </p>
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
