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
import { LogIn, Smartphone, KeyRound, ShieldAlert, ShieldCheck, HelpCircle } from "lucide-react";

const ACCENT = "#4a9eff";

export const metadata = pageMetadata({
  title: "IN999 Login",
  description:
    "Independent walkthrough of the IN999 login process — signing in with your mobile number, OTP verification, password recovery, and fixes for the most common login errors.",
  path: "/in999-login",
});

const TOC = [
  { id: "overview", label: "What \"IN999 Login\" Means" },
  { id: "steps", label: "Step-by-Step Login Process" },
  { id: "otp", label: "Logging In via Mobile Number + OTP" },
  { id: "forgot-password", label: "Forgot Your Password?" },
  { id: "errors", label: "Common Login Errors & Fixes" },
  { id: "security", label: "Login Security Tips" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const LOGIN_STEPS = [
  { name: "Open the sign-in page", icon: LogIn, blurb: "Head to the platform's login screen, either through your browser or the app you already have installed. Bookmark the correct address so you never rely on a search result to find it." },
  { name: "Enter your mobile number", icon: Smartphone, blurb: "Type in the mobile number you registered with, exactly as it was entered during sign-up — including the country code if the field asks for one." },
  { name: "Provide your password or OTP", icon: KeyRound, blurb: "Depending on how your account is set up, you'll either enter your saved password or request a one-time passcode sent by SMS." },
  { name: "Confirm and enter the lobby", icon: ShieldCheck, blurb: "Once verified, you're dropped into the main lobby where the game catalogue, wallet balance and promotions sit behind your session." },
];

export default function In999LoginPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 Login" }]} path="/in999-login" />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Login: The Complete Sign-In Guide"
          subtitle="A plain-language walkthrough of signing in, verifying with OTP, and recovering access if something goes wrong."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title='What "IN999 Login" Means'>
              <p>
                Players searching for &quot;IN999 login&quot; are usually looking for one of two things: the
                correct sign-in page, or help getting past an error that&apos;s blocking their session. This
                page is an independent guide written from a player&apos;s point of view — it is not the
                operator&apos;s own support documentation, and we are not affiliated with IN999 or any
                gaming platform. Our aim is to explain the sign-in flow clearly so you know what to expect
                before you type in your details.
              </p>
              <p>
                If you don&apos;t have an account yet, sign-in won&apos;t apply to you — head to our{" "}
                <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 registration walkthrough
                </Link>{" "}
                first, then come back here once your account exists.
              </p>
            </Section>

            <Section id="steps" title="Step-by-Step Login Process">
              <p>
                The core login flow is short by design — most players are back in the lobby within a
                minute. Here is the sequence broken into individual steps:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {LOGIN_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.name} className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                      <span
                        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: `${ACCENT}22`, color: ACCENT }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-mist">
                        {index + 1}. {step.name}
                      </h3>
                      <p className="text-xs leading-relaxed text-mist-dim">{step.blurb}</p>
                    </div>
                  );
                })}
              </div>
              <p>
                If you installed the mobile app rather than using a browser, the same four steps apply —
                the layout is just condensed for a smaller screen. See our{" "}
                <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 app overview
                </Link>{" "}
                if you haven&apos;t set that up yet.
              </p>
            </Section>

            <Section id="otp" title="Logging In via Mobile Number + OTP">
              <p>
                Many players prefer OTP (one-time passcode) sign-in over a saved password, since it
                removes the need to remember or store credentials. To use it, select the &quot;login with
                OTP&quot; or &quot;SMS code&quot; option on the sign-in screen instead of the password field,
                enter your registered mobile number, and wait for a text message containing a short numeric
                code — typically four to six digits.
              </p>
              <p>
                Enter that code into the verification box before it expires. OTPs are usually time-limited
                to somewhere between two and five minutes for security reasons, so keep your phone within
                reach before you request one. If the code arrives late or not at all, most sign-in screens
                offer a &quot;resend code&quot; button after a short cooldown rather than making you restart
                the whole process.
              </p>
            </Section>

            <Section id="forgot-password" title="Forgot Your Password?">
              <p>
                If you set up a password login and can&apos;t remember it, look for a &quot;Forgot
                Password&quot; or &quot;Reset Password&quot; link directly under the sign-in fields. The
                usual recovery flow works like this:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Select the forgot-password link and enter your registered mobile number.</li>
                <li>Confirm the OTP sent to that number to prove account ownership.</li>
                <li>Choose a new password that meets the platform&apos;s minimum requirements.</li>
                <li>Log back in with the new password to confirm the reset worked.</li>
              </ul>
              <p>
                If the mobile number tied to your account is no longer active — a lost SIM, for example —
                password reset via OTP won&apos;t work, since the code has nowhere to go. In that situation
                your only real option is contacting account support directly and being ready to prove
                account ownership through whatever details you originally registered with.
              </p>
            </Section>

            <Section id="errors" title="Common Login Errors & Fixes">
              <div className="space-y-4">
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">OTP not received</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    Double-check the number you entered matches your registered number exactly, confirm you
                    have signal, and wait for the cooldown timer before requesting a resend. Some networks
                    delay SMS delivery by a minute or two during peak hours — give it a moment before
                    assuming something is broken.
                  </p>
                </div>
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">Account temporarily locked</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    Repeated failed login attempts often trigger a short, automatic lockout as a security
                    measure. Stop retrying immediately and wait out the cooldown window rather than
                    hammering the login button, which can extend the lock in some systems.
                  </p>
                </div>
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">Wrong or outdated number linked</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    If you changed phone numbers after registering, OTP-based login will fail because codes
                    go to the old number. This has to be fixed through account support, since self-service
                    number changes usually require re-verifying identity first.
                  </p>
                </div>
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldAlert className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">Page won&apos;t load or times out</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    Slow or unstable mobile data is the most common cause. Try switching between Wi-Fi and
                    mobile data, clear your browser cache, or use the app instead of a browser tab if the
                    problem persists across networks.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="security" title="Login Security Tips">
              <p>
                A handful of habits go a long way toward keeping your account yours. Never share an OTP
                with anyone, even someone claiming to be support staff — legitimate support will never ask
                for your one-time code. Avoid saving your password in a shared or public browser, and log
                out fully when you finish a session on a device you don&apos;t control.
              </p>
              <p>
                It&apos;s also worth using a password that isn&apos;t reused from another account. If your
                email or another platform is ever compromised, a unique password stops that breach from
                spreading into your gaming account too. For a broader look at staying in control of your
                play, see our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming page
                </Link>
                .
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Can I log in without an OTP every time?
                  </h3>
                  <p>
                    Yes, if you set a password during registration, you can sign in with your mobile number
                    and password directly. OTP is typically an alternative method, not a mandatory step on
                    every login, though some platforms may re-verify periodically for security.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Can I log in on two devices at once?
                  </h3>
                  <p>
                    Most prediction-game platforms allow sign-in on multiple devices, but check your
                    account&apos;s active-session settings if you notice unexpected logouts — that usually
                    means a session limit has been reached elsewhere.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    What if I never received my registration OTP in the first place?
                  </h3>
                  <p>
                    That&apos;s a registration issue rather than a login one — our{" "}
                    <Link href="/in999-registration" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      registration guide
                    </Link>{" "}
                    covers verification troubleshooting in detail.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Is it safe to save my login details in my browser?
                  </h3>
                  <p>
                    Only on a private device you control. On a shared or public computer, always log out
                    manually and avoid letting the browser remember your credentials.
                  </p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/">
                Back to the IN999 Guide Homepage
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
