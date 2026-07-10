import { Wallet, ArrowDownToLine, ArrowUpFromLine, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IN999 Deposit & Withdrawal Guide | Wallet, Methods & Timelines",
  description:
    "IN999 deposit & withdrawal guide — supported payment methods, minimum amounts, processing times, and tips to avoid delayed withdrawals.",
  path: "/deposit-withdrawal",
});

const DEPOSIT_STEPS = [
  "Open your IN999 wallet and tap Recharge.",
  "Choose a payment method and enter the amount you want to add.",
  "Complete the payment through your bank app or UPI app.",
  "Your balance updates automatically once the payment is confirmed.",
];

const WITHDRAW_STEPS = [
  "Open your IN999 wallet and tap Withdraw.",
  "Enter the amount and select your linked bank account or UPI ID.",
  "Confirm the request — most withdrawals are reviewed and released within minutes.",
  "Track the status of your request from the wallet history at any time.",
];

export default function DepositWithdrawalPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Guide"
          title="IN999 Deposit & Withdrawal Guide"
          subtitle="How the IN999 wallet works, from your first deposit to your first withdrawal."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1000px]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="flex flex-col gap-4 p-8">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <ArrowDownToLine className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-semibold text-mist">Depositing Funds</h2>
                <ol className="flex flex-col gap-2">
                  {DEPOSIT_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-mist-dim">
                      <span className="mt-0.5 shrink-0 text-xs font-bold text-gold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Card>

              <Card className="flex flex-col gap-4 p-8">
                <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                  <ArrowUpFromLine className="h-6 w-6" />
                </span>
                <h2 className="text-xl font-semibold text-mist">Withdrawing Winnings</h2>
                <ol className="flex flex-col gap-2">
                  {WITHDRAW_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-mist-dim">
                      <span className="mt-0.5 shrink-0 text-xs font-bold text-gold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Card>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Card className="flex items-start gap-4 p-6">
                <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Wallet className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-mist">One Wallet</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                    Deposits, winnings, and bonuses all sit in a single IN999 wallet balance.
                  </p>
                </div>
              </Card>
              <Card className="flex items-start gap-4 p-6">
                <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-mist">Processing Time</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                    Most deposits reflect instantly; withdrawals are typically released within minutes, 24x7.
                  </p>
                </div>
              </Card>
              <Card className="flex items-start gap-4 p-6">
                <span className="gold-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <ArrowUpFromLine className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-mist">Avoiding Delays</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                    Make sure your linked bank/UPI details match your registered name to avoid failed withdrawals.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
