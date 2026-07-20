import Link from "next/link";
import { UserPlus, LogIn, Wallet, Crown, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AccountTopic = {
  title: string;
  icon: typeof UserPlus;
  summary: string;
  href: string;
  linkLabel: string;
};

const ACCOUNT_TOPICS: AccountTopic[] = [
  {
    title: "Registering an IN999 Account",
    icon: UserPlus,
    summary:
      "Create an account with a mobile number, an OTP verification, and a password — the whole flow usually takes under a minute. An invite code field is optional and can be left blank if you weren't referred by anyone.",
    href: "/in999-registration",
    linkLabel: "Full registration walkthrough",
  },
  {
    title: "Logging In & Password Recovery",
    icon: LogIn,
    summary:
      "Sign in with your registered mobile number and password. If you're locked out, the forgot-password flow resets it via an SMS code sent to that same number — which is why keeping your registered number up to date matters.",
    href: "/in999-login",
    linkLabel: "Full login guide",
  },
  {
    title: "Deposits, Withdrawals & Payment Methods",
    icon: Wallet,
    summary:
      "Funds move through a single in-app wallet via UPI, bank transfer, or crypto options like USDT, depending on what's available in your region. Withdrawals typically clear within minutes once approved, though first-time or larger requests can take longer for verification.",
    href: "/deposit-withdrawal",
    linkLabel: "Full deposit & withdrawal guide",
  },
  {
    title: "IN999 VIP Club",
    icon: Crown,
    summary:
      "Play volume builds toward VIP tiers that unlock perks like a higher rebate rate and bigger level-up rewards. Tiers are evaluated periodically, and maintaining a level usually requires hitting an ongoing activity threshold, not just reaching it once.",
    href: "/vip-club",
    linkLabel: "Full VIP club guide",
  },
  {
    title: "Referral & Partner Program",
    icon: Users,
    summary:
      "Inviting friends through your referral link can earn a commission on their deposits and activity, structured across multiple subordinate levels. Commission is typically calculated daily and credited to your wallet automatically once the calculation completes.",
    href: "/referral-program",
    linkLabel: "Full referral program guide",
  },
];

export function AccountGuide() {
  return (
    <section id="account" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          eyebrow="Account & Wallet"
          title="Managing Your IN999 Account"
          subtitle="A quick summary of everything from sign-up to VIP tiers — each card links to the full independent guide for the step-by-step version."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ACCOUNT_TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <div key={topic.title} className="card flex flex-col gap-4 p-6 sm:p-7">
                <span className="gold-btn flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-mist">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-mist-dim">{topic.summary}</p>
                <Link
                  href={topic.href}
                  className="mt-auto text-sm font-semibold text-gold underline underline-offset-2 hover:text-gold/80"
                >
                  {topic.linkLabel} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
