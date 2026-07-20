import { LogIn, UserPlus, KeyRound, ShieldCheck, Smartphone, RefreshCcw } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 Sign In",
  description:
    "An independent, step-by-step IN999 login guide — what you need beforehand, OTP verification, password recovery, common errors, and security tips for returning players.",
  path: "/login",
});

const TOC = [
  { id: "before-you-start", label: "Before You Start" },
  { id: "steps", label: "Step-by-Step Login" },
  { id: "otp", label: "OTP & Mobile Verification" },
  { id: "recovery", label: "Forgot Password? Recovery Steps" },
  { id: "troubleshooting", label: "Troubleshooting Common Errors" },
  { id: "security", label: "Security Tips for Your Account" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const STEPS = [
  {
    title: "Open the Sign-In Screen",
    description: "Tap the Login / Register button to reach the current sign-in page for your account.",
    icon: LogIn,
  },
  {
    title: "New Here? Register First",
    description: "First-time visitors need to create an account with a mobile number and password before a login screen will recognise them.",
    icon: UserPlus,
  },
  {
    title: "Enter Your Credentials",
    description: "Returning players type in their registered mobile number and password exactly as set during registration.",
    icon: KeyRound,
  },
  {
    title: "Confirm With OTP if Prompted",
    description: "Some sessions ask for a one-time code sent to your registered number before granting access.",
    icon: Smartphone,
  },
];

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Login" }]} path="/login" />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Login: Complete Sign-In Walkthrough"
          subtitle="Everything a player needs to sign in smoothly, verify their number, and recover access if something goes wrong."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <div className="mx-auto mb-4 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button variant="gold" href={REGISTER_URL} icon={<LogIn className="h-4 w-4" />}>
                  Login / Register
                </Button>
                <Button variant="outline" href="/faq">
                  Login Help &amp; FAQ
                </Button>
              </div>
            </div>

            <Section id="before-you-start" title="Before You Start">
              <p>
                This is an independent walkthrough written from a player&apos;s perspective — we are not
                {" "}{SITE.name}&apos;s operator, and this page is not official account-support
                documentation. Its purpose is to explain, in plain language, what the sign-in process
                generally looks like and how to solve the most common snags along the way.
              </p>
              <p>
                Before you attempt to log in, make sure you actually have an account. If you&apos;ve never
                registered before, sign-in will fail no matter how carefully you type — you&apos;ll need to
                create an account first. Our{" "}
                <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  registration walkthrough
                </Link>{" "}
                covers that from scratch, and our longer{" "}
                <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 login guide
                </Link>{" "}
                digs deeper into edge cases if this page doesn&apos;t resolve your issue. You&apos;ll also
                want your registered mobile number on hand, since it doubles as both your username and the
                destination for OTP codes.
              </p>
              <p>
                It also helps to know which device and browser you&apos;ll be using before you start.
                Signing in from a brand-new phone or a browser you haven&apos;t used before is one of the
                most common triggers for an extra verification step, so don&apos;t be surprised if a login
                that used to be a single tap suddenly asks for an OTP again — that&apos;s the system
                recognising an unfamiliar device, not a sign that anything is broken.
              </p>
              <p>
                Finally, keep your details consistent. If you registered with one mobile number, always log
                in with that exact number — small differences like a missing digit or an accidental leading
                zero are enough to make the system treat the attempt as an unrecognised account, even
                though the mistake feels trivial from your side.
              </p>
            </Section>

            <Section id="steps" title="Step-by-Step Login">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <Card key={step.title} className="flex items-start gap-4 p-6">
                      <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-mist">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-mist-dim">{step.description}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <p>
                Once your credentials are accepted, you&apos;re dropped straight into your wallet and the
                games lobby — no separate sign-in is needed per game category.
              </p>
            </Section>

            <Section id="otp" title="OTP & Mobile Verification">
              <p>
                Many sessions add a one-time password (OTP) step on top of your regular password,
                especially on a new device or after a long gap since your last login. The code arrives by
                SMS to the mobile number tied to your account, is time-limited, and typically expires
                within a few minutes — request a fresh one if you don&apos;t enter it in time rather than
                trying an expired code repeatedly.
              </p>
              <p>
                If you&apos;ve changed your phone number since registering, OTP verification will fail
                because the code goes to a number you no longer control. In that situation you&apos;ll
                usually need to reach support directly to update the number on file before you can log in
                again.
              </p>
            </Section>

            <Section id="recovery" title="Forgot Password? Recovery Steps">
              <p>
                A forgotten password is the single most common reason players get locked out. The usual
                recovery path is: select the &quot;Forgot Password&quot; or account-recovery link on the
                sign-in screen, enter your registered mobile number, confirm the OTP sent to that number,
                and then set a new password. Choose something you haven&apos;t reused elsewhere, and write
                it down somewhere secure rather than relying on memory alone.
              </p>
              <p>
                If recovery keeps failing even with the correct number, double-check you&apos;re not
                accidentally trying to recover a duplicate or old account created with a different number —
                that mismatch is a frequent, easy-to-miss cause of recovery loops.
              </p>
            </Section>

            <Section id="troubleshooting" title="Troubleshooting Common Errors">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <RefreshCcw className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">&quot;Invalid credentials&quot;</strong> — almost always a
                    typo in the mobile number or password, or an accidental extra space. Retype both fields
                    from scratch rather than trusting autofill.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCcw className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">OTP never arrives</strong> — check for SMS delivery
                    delays or a poor signal, confirm the number on file is current, and avoid requesting
                    multiple codes in quick succession since that can trigger a temporary cooldown.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCcw className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">Page won&apos;t load or times out</strong> — confirm
                    you&apos;re using a stable connection and the current, correct web address rather than
                    an old bookmark, since access links can change over time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCcw className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">Account appears locked</strong> — usually a security
                    measure after several failed attempts. Wait for the cooldown period to pass or use
                    password recovery instead of repeatedly retrying the same password.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="security" title="Security Tips for Your Account">
              <div className="flex items-start gap-4">
                <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="space-y-3">
                  <p>
                    Never share your password or an OTP code with anyone, including messages or calls
                    claiming to be from support staff — legitimate support will never ask you to read out a
                    one-time code. Use a password you don&apos;t reuse on other sites, and log out of shared
                    or public devices after every session.
                  </p>
                  <p>
                    If you ever suspect unauthorised access to your wallet, change your password
                    immediately through recovery and contact support to review recent activity before
                    continuing to play.
                  </p>
                  <p>
                    A few extra habits are worth building in permanently: avoid logging in over public
                    Wi-Fi where you can&apos;t vouch for the network, double-check the web address matches
                    the one you normally use before entering credentials, and treat any unsolicited link
                    claiming to be a &quot;faster login&quot; or a &quot;bonus verification&quot; step with
                    suspicion — those are common phishing tactics aimed at exactly this kind of account.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">What do I need before I can log in?</h3>
                  <p>A completed registration, your registered mobile number, your password, and access to that number for OTP codes if prompted.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I log in on multiple devices?</h3>
                  <p>Generally yes — the account and wallet are tied to your credentials rather than a single device, though signing in on a new device may trigger extra OTP verification for security.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">What if I no longer have access to my registered number?</h3>
                  <p>Standard recovery relies on OTP to that number, so losing access to it usually means contacting support directly to verify your identity and update your details another way.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is it safe to save my password in the browser?</h3>
                  <p>It&apos;s convenient but only advisable on a private device you control — avoid saving credentials on shared or public computers.</p>
                </div>
              </div>
            </Section>

            <div className="mt-4">
              <p className="text-sm leading-relaxed text-mist-dim">
                Still stuck after working through the steps above? Reach out through our{" "}
                <a href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  support page
                </a>{" "}
                for help recovering account access, or check the{" "}
                <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  registration guide
                </Link>{" "}
                if you suspect the account was never fully created.
              </p>
            </div>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
