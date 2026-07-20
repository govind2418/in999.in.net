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
import { UserPlus, Smartphone, Lock, ClipboardList, AlertTriangle, HelpCircle } from "lucide-react";

const ACCENT = "#a78bfa";

export const metadata = pageMetadata({
  title: "IN999 Registration",
  description:
    "Independent step-by-step guide to IN999 registration — creating an account, mobile OTP verification, setting a secure password, and fixing common sign-up errors.",
  path: "/in999-registration",
});

const TOC = [
  { id: "before-you-register", label: "Before You Register" },
  { id: "steps", label: "Step-by-Step Registration Walkthrough" },
  { id: "otp", label: "Mobile Number & OTP Verification" },
  { id: "password", label: "Setting a Secure Password" },
  { id: "details", label: "What Details You'll Likely Need" },
  { id: "errors", label: "Common Registration Errors & Fixes" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const REG_STEPS = [
  { name: "Find the sign-up page", icon: UserPlus, blurb: "Look for a \"Register\" or \"Sign Up\" button, usually placed next to the login option on the homepage or app entry screen." },
  { name: "Enter your mobile number", icon: Smartphone, blurb: "This becomes your primary account identifier, so use a number you actively control and expect to keep for the long term." },
  { name: "Verify with OTP", icon: ClipboardList, blurb: "A one-time passcode arrives by SMS. Enter it before the timer runs out to confirm the number really belongs to you." },
  { name: "Set your password", icon: Lock, blurb: "Choose a password that meets the minimum length and complexity requirements, then store it somewhere safe." },
];

export default function In999RegistrationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 Registration" }]} path="/in999-registration" />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Registration: The Complete Account Setup Guide"
          subtitle="A clear, step-by-step walkthrough of creating and verifying an IN999 account, plus fixes for the errors new users hit most often."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="before-you-register" title="Before You Register">
              <p>
                Before you create an account anywhere in this space, a few basics matter more than the
                sign-up form itself. This page is an independent guide — it is not the operator&apos;s own
                onboarding material, and we are not affiliated with IN999 or any gaming platform. We&apos;re
                simply explaining, in our own words, what the registration process typically looks like so
                you can go in prepared.
              </p>
              <p>
                Most importantly: prediction and casino-style games are age-restricted and involve real
                financial risk. You should be 18 or older (or the legal age in your jurisdiction, if higher)
                before registering, and you should confirm that this type of platform is actually permitted
                where you live. If you&apos;re unsure whether this kind of gaming is right for you, read our{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming page
                </Link>{" "}
                before you go any further.
              </p>
            </Section>

            <Section id="steps" title="Step-by-Step Registration Walkthrough">
              <p>
                Registration is designed to be fast, usually taking under two minutes once you have your
                phone nearby. Here&apos;s the typical sequence:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {REG_STEPS.map((step, index) => {
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
                Once these four steps are complete, your account is active and you&apos;re dropped straight
                into the lobby. If you&apos;ve done this before and just need to get back in, our{" "}
                <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 login guide
                </Link>{" "}
                covers the sign-in flow instead.
              </p>
            </Section>

            <Section id="otp" title="Mobile Number & OTP Verification">
              <p>
                OTP verification exists to confirm that the mobile number you registered with is genuinely
                yours, and it also becomes the backbone of account recovery later on. After entering your
                number, you&apos;ll receive an SMS containing a short numeric code — type it into the
                verification field before the timer expires, typically within two to five minutes.
              </p>
              <p>
                A few practical notes: use a number you expect to keep long-term rather than a temporary
                or work SIM, make sure your phone can receive SMS (some VOIP-only numbers can&apos;t), and
                don&apos;t share the code with anyone else, including people who claim to be able to
                &quot;verify&quot; your account for you. Genuine verification only ever happens through the
                official sign-up flow itself.
              </p>
            </Section>

            <Section id="password" title="Setting a Secure Password">
              <p>
                Most registration forms require a minimum password length along with a mix of letters and
                numbers, and some also expect a special character. Beyond meeting the minimum bar, treat
                this password the way you would a banking password rather than a throwaway forum login,
                since your account holds a real wallet balance.
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Use a password you haven&apos;t reused on another site or app.</li>
                <li>Avoid anything tied to obvious personal details, like a birthday or phone number.</li>
                <li>Store it in a password manager rather than a plain-text note if possible.</li>
                <li>Change it immediately if you ever suspect it may have been seen by someone else.</li>
              </ul>
            </Section>

            <Section id="details" title="What Details You'll Likely Need">
              <p>
                Registration forms in this category tend to ask for a small, consistent set of information:
                a working mobile number, a password, and sometimes an optional invite or referral code from
                an existing player. Some platforms also request basic profile details later on, such as a
                display name or a linked payment method, but these are typically collected only once you
                move toward depositing funds rather than at the sign-up stage itself.
              </p>
              <p>
                Keep the details consistent with what you can prove later. If a platform ever asks for
                identity verification for withdrawals, the name and number on file need to match, so avoid
                using someone else&apos;s number or invented details just to speed through the form.
              </p>
            </Section>

            <Section id="errors" title="Common Registration Errors & Fixes">
              <div className="space-y-4">
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">&quot;Number already registered&quot;</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    This usually means an account already exists for that number, sometimes from a previous
                    attempt you may not remember completing. Try the login flow with that number instead,
                    or use the forgot-password route to recover it.
                  </p>
                </div>
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">OTP never arrives</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    Confirm the number was typed correctly, including any required country code, and check
                    that your carrier isn&apos;t blocking automated SMS. Wait for the resend cooldown rather
                    than repeatedly requesting new codes, which can sometimes trigger a temporary block.
                  </p>
                </div>
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">Password rejected as &quot;too weak&quot;</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    Check the specific requirements shown under the field — most forms require a minimum
                    length plus a mix of letters and numbers. Adding one uppercase letter and a number
                    usually clears this validation if a simple password was rejected.
                  </p>
                </div>
                <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" style={{ color: ACCENT }} />
                    <h3 className="text-sm font-semibold text-mist">Invite or referral code not accepted</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-dim">
                    Referral codes are often case-sensitive and can expire. Double-check the exact code with
                    whoever shared it, and remember that registration itself doesn&apos;t require one — you
                    can normally skip this field and still complete sign-up.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Is registration free?
                  </h3>
                  <p>
                    Yes, creating an account itself doesn&apos;t cost anything. You only need to add funds
                    once you decide to actually play, and that step is entirely separate from sign-up.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Can I register more than one account?
                  </h3>
                  <p>
                    Most platforms in this category restrict each person to a single account tied to one
                    verified mobile number, and multiple accounts can lead to restrictions on bonuses or
                    withdrawals. Stick to one account registered in your own name.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    Do I get a bonus for signing up?
                  </h3>
                  <p>
                    Many platforms offer some form of welcome bonus after registration, though terms vary
                    widely. See our{" "}
                    <Link href="/in999-bonus" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      IN999 bonus guide
                    </Link>{" "}
                    for a breakdown of how these typically work and what conditions usually apply.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-mist">
                    <HelpCircle className="h-4 w-4" style={{ color: ACCENT }} />
                    What if I registered with the wrong number?
                  </h3>
                  <p>
                    Changing the primary registered number after the fact usually requires contacting
                    account support and re-verifying your identity, since it&apos;s the main security anchor
                    for your account. It&apos;s worth double-checking the number carefully before you submit
                    the sign-up form.
                  </p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/in999-login">
                Already Registered? See the Login Guide
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
