import { Wallet, ArrowDownToLine, ArrowUpFromLine, Clock, ShieldAlert, HelpCircle } from "lucide-react";
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
  title: "IN999 Deposit & Withdrawal",
  description:
    "An independent guide to IN999 deposits and withdrawals — common payment methods, step-by-step instructions, processing times, and how to avoid failed transactions.",
  path: "/deposit-withdrawal",
});

const TOC = [
  { id: "methods", label: "Supported Deposit Methods" },
  { id: "adding-funds", label: "How to Add Funds" },
  { id: "withdrawals", label: "How Withdrawals Work" },
  { id: "timelines", label: "Processing Time Expectations" },
  { id: "limits", label: "Minimum & Maximum Considerations" },
  { id: "issues", label: "Common Issues & What to Do" },
  { id: "safety", label: "Safety Tips" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const DEPOSIT_STEPS = [
  "Open your wallet from the account menu and select the deposit or recharge option.",
  "Choose an available payment method and enter the amount you want to add.",
  "Complete the payment through your banking app, UPI app, or e-wallet as prompted.",
  "Your balance updates automatically once the payment gateway confirms the transaction.",
];

const WITHDRAW_STEPS = [
  "Open your wallet and select the withdraw option.",
  "Enter the amount and choose the destination — usually a linked bank account or UPI ID.",
  "Confirm the request; it then moves into a review queue before funds are released.",
  "Track the status from your wallet history until the transfer shows as completed.",
];

export default function DepositWithdrawalPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Deposit & Withdrawal" }]} />
        <PageHero
          eyebrow="Wallet Guide"
          title="IN999 Deposit & Withdrawal Guide"
          subtitle="An independent explainer of how funding and cashing out typically work, written for players who want to know what to expect."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="methods" title="Supported Deposit Methods">
              <p>
                Platforms in this space generally offer a mix of payment rails rather than a single
                fixed option, and the exact list available to you can vary by region and by what
                your bank or wallet provider supports at any given time. The categories you should
                expect to see are broadly similar across most colour-prediction and casino-style
                platforms:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li><strong className="text-mist">UPI transfers</strong> — a common choice in markets where UPI is widely adopted, usually the fastest option to confirm.</li>
                <li><strong className="text-mist">Direct bank transfer</strong> — depositing from a linked bank account, which may take slightly longer to reflect than UPI.</li>
                <li><strong className="text-mist">E-wallets</strong> — third-party wallet apps that some platforms support as an additional funding channel.</li>
              </ul>
              <p>
                Because available methods change over time and by region, always confirm what&apos;s
                currently offered inside your own wallet screen rather than relying on any fixed list
                — including this one — as a permanent guarantee.
              </p>
              <p>
                When more than one method is available, choosing the fastest one you already trust
                is usually the sensible default. UPI tends to win on speed for smaller, everyday
                top-ups since it confirms almost immediately, while a bank transfer can be a steadier
                choice for larger amounts you&apos;d rather route through your main account. Whichever
                method you pick, keep a mental note of which one you used — it makes support requests
                far faster to resolve if you ever need to reference a specific transaction.
              </p>
            </Section>

            <Section id="adding-funds" title="How to Add Funds">
              <Card className="flex flex-col gap-4 p-8">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <ArrowDownToLine className="h-6 w-6" />
                </span>
                <ol className="flex flex-col gap-2">
                  {DEPOSIT_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-mist-dim">
                      <span className="mt-0.5 shrink-0 text-xs font-bold text-gold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Card>
              <p>
                A good habit before your first deposit: double-check the amount field and the payment
                method screen match what you intended before you leave your banking app. Most deposit
                problems trace back to a mismatched amount or an interrupted payment session rather
                than a platform-side error.
              </p>
            </Section>

            <Section id="withdrawals" title="How Withdrawals Work">
              <Card className="flex flex-col gap-4 p-8">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <ArrowUpFromLine className="h-6 w-6" />
                </span>
                <ol className="flex flex-col gap-2">
                  {WITHDRAW_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-mist-dim">
                      <span className="mt-0.5 shrink-0 text-xs font-bold text-gold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Card>
              <p>
                Withdrawals are typically reviewed before release — this is standard across
                real-money gaming platforms as a fraud and compliance check, not a sign that
                anything has gone wrong with your account. The destination account or UPI ID should
                match the identity details on your registered profile; mismatched names are one of
                the most common reasons a withdrawal gets held for extra review.
              </p>
            </Section>

            <Section id="timelines" title="Processing Time Expectations">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="flex items-start gap-4 p-6">
                  <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Wallet className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-mist">Deposits</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                      Most deposits reflect within a few minutes once the payment gateway confirms
                      the transaction; UPI transfers are usually the quickest to settle.
                    </p>
                  </div>
                </Card>
                <Card className="flex items-start gap-4 p-6">
                  <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-mist">Withdrawals</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                      Withdrawals generally clear review faster during normal hours; expect them to
                      take longer during high-traffic periods or if extra verification is triggered.
                    </p>
                  </div>
                </Card>
              </div>
              <p>
                Treat any specific time promise you see elsewhere as an estimate rather than a
                guarantee — actual timing depends on your bank, the payment method, and whatever
                review queue a given withdrawal falls into.
              </p>
            </Section>

            <Section id="limits" title="Minimum & Maximum Considerations">
              <p>
                Deposit and withdrawal amounts are usually bound by both a platform-set minimum and
                maximum, and separately by whatever limits your own bank or UPI provider enforces.
                Rather than assuming a fixed number, check the amount field on the deposit or
                withdraw screen each time — platforms adjust these thresholds periodically, and your
                bank&apos;s own daily transfer cap can be the more restrictive limit in practice.
              </p>
              <p>
                If a transaction is rejected for being below a minimum or above a maximum, the
                wallet interface will usually tell you directly rather than leaving you to guess —
                read that message before retrying with a different amount.
              </p>
              <p>
                It also helps to think about maximums from a budgeting angle, not just a technical
                one. Even if a platform would allow a much larger single deposit, that doesn&apos;t
                mean it&apos;s the right amount for you to add in one go. Pairing the platform&apos;s
                limits with your own personal spending limit — decided in advance, not in the moment
                — keeps the numbers on screen from becoming the numbers that decide your session.
              </p>
            </Section>

            <Section id="issues" title="Common Issues & What to Do">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">Failed or stuck transactions:</strong> if a
                    deposit doesn&apos;t reflect after a reasonable wait, check your bank app or UPI
                    app first to confirm whether the money actually left your account. If it did but
                    your wallet balance hasn&apos;t updated, contact support with the transaction
                    reference number rather than retrying the payment immediately.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">KYC or verification holds:</strong> withdrawals can
                    be paused for identity verification, particularly on larger amounts or first
                    withdrawals. This is a routine compliance step on most regulated-style payment
                    flows — have a clear photo ID ready if requested so the review can move quickly.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">Name mismatches:</strong> a withdrawal destination
                    that doesn&apos;t match your registered name is one of the most common causes of
                    delay or rejection. Always withdraw to an account held in your own name.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="safety" title="Safety Tips">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p>
                  Never share your OTP, password, or full card details with anyone claiming to be
                  support staff — legitimate support will never ask for them. Use official channels
                  only, double-check the URL you&apos;re transacting on, and avoid saving payment
                  credentials on shared or public devices. If you&apos;re unsure whether a message
                  or link is genuine, log in directly through your usual bookmark instead of
                  clicking through an unsolicited link.
                </p>
              </div>
              <p>
                It also helps to keep your funding decisions tied to your{" "}
                <Link href="/responsible-gaming" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  responsible gaming
                </Link>{" "}
                limits — decide a deposit ceiling in advance rather than topping up mid-session to
                chase a loss.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Why hasn&apos;t my deposit reflected yet?</h3>
                  <p>Most deposits settle within minutes. If it&apos;s been longer, check whether the payment actually left your bank or UPI app before contacting support with your transaction reference.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is there a fee on withdrawals?</h3>
                  <p>Fee policies vary by platform and can change over time — check the withdrawal screen itself, which typically shows any applicable fee before you confirm.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I need to log in again before withdrawing?</h3>
                  <p>
                    You&apos;ll generally need an active, verified session. See our{" "}
                    <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      login guide
                    </Link>{" "}
                    if you&apos;re having trouble accessing your account.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">What if my withdrawal is on hold?</h3>
                  <p>
                    Holds are usually tied to routine verification. Have identity documents ready if
                    requested, and check our{" "}
                    <Link href="/faq" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      general FAQ
                    </Link>{" "}
                    for more account-related answers.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I cancel a deposit or withdrawal once submitted?</h3>
                  <p>Once a payment has been sent from your bank or UPI app, it generally can&apos;t be cancelled from the wallet side. A withdrawal request that hasn&apos;t yet been released may sometimes be cancelled from your wallet history — check there first, or contact support quickly if you need to stop one in progress.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">What details should I double-check before withdrawing?</h3>
                  <p>Confirm the destination account number or UPI ID is correct and registered in your own name, and that the amount matches what you intended to withdraw. These two checks prevent the vast majority of avoidable delays.</p>
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
