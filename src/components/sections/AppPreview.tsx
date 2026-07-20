import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PreviewShot = {
  src: string;
  alt: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

const PREVIEW_SHOTS: PreviewShot[] = [
  {
    src: "/images/in999-download-app-banner.webp",
    alt: "IN999 download app banner with the popular game lobby",
    title: "Explore the IN999 Platform",
    description:
      "The IN999 platform is designed to give players quick access to login, registration, APK download, bonus offers, gift codes, promotions, and the most popular games including WinGo, Aviator, K3, 5D, TRX, Sports, and Casino. This section showcases the platform interface, helping you understand its features, navigation, and available services before creating an account or making your first deposit.",
    linkLabel: "Read the IN999 download guide",
    href: "/in999-download",
  },
  {
    src: "/images/in999-attendance-bonus-banner.webp",
    alt: "IN999 attendance bonus banner above the lottery game grid",
    title: "Daily Rewards & Game Center",
    description:
      "The IN999 Game platform combines daily attendance rewards with quick access to its most popular prediction games, including WinGo, K3, and 5D. Players can view active promotions, explore featured game modes, and manage their account from one central interface while using the official platform for a secure experience.",
    linkLabel: "See the full games breakdown",
    href: "/games",
  },
  {
    src: "/images/in999-first-gift-terms.webp",
    alt: "IN999 first gift bonus terms and conditions screen",
    title: "First Gift Bonus Terms",
    description:
      "This screen spells out the fine print behind the new-member gift: a 30% compensation on your first deposit, capped at ₹100, tied to a fixed start date. It's a good example of why we keep saying to read bonus terms before opting in — the headline number and the actual capped payout are rarely the same figure.",
    linkLabel: "Read the IN999 bonus guide",
    href: "/in999-bonus",
  },
  {
    src: "/images/in999-gift-code-redeem.webp",
    alt: "IN999 gift code redemption screen",
    title: "Redeeming an IN999 Gift Code",
    description:
      "Gift codes are entered on this single-field screen — paste the code, tap Receive, and (if valid) the reward lands in your wallet. A History list below tracks past redemptions, though a fresh account naturally shows no data here yet. It's a simple flow, but codes shared outside IN999's own channels are the classic phishing lure, so only trust codes from the platform itself.",
    linkLabel: "Read the gift code guide",
    href: "/in999-gift-code",
  },
  {
    src: "/images/in999-attendance-bonus-tiers.webp",
    alt: "IN999 seven-day attendance bonus reward tiers",
    title: "7-Day Attendance Bonus Ladder",
    description:
      "Consecutive daily logins climb a reward ladder here, starting around ₹5 on day one and stepping up to ₹3,000 by day six, with a ₹7,000 milestone gift at day seven. Miss a day and the streak resets to zero, which is the mechanic worth understanding before you count on it as a reliable income source rather than what it is — a retention incentive.",
    linkLabel: "See current promotions",
    href: "/promotions",
  },
  {
    src: "/images/in999-first-deposit-bonus-tiers.webp",
    alt: "IN999 first deposit bonus reward tiers",
    title: "First Deposit Bonus Tiers",
    description:
      "IN999's first-deposit bonus scales with how much you fund on your very first transaction — from a ₹108 bonus on a ₹1,000 deposit up to ₹8,888 on a ₹240,000 deposit. Each tier is one-time only and shown here with its own progress bar, so you can see exactly how much more you'd need to deposit to unlock the next bracket.",
    linkLabel: "Read the IN999 bonus guide",
    href: "/in999-bonus",
  },
  {
    src: "/images/in999-wingo-bet-slip.webp",
    alt: "IN999 WinGo bet placement screen showing stake and quantity",
    title: "Placing a WinGo Bet",
    description:
      "This is the confirmation slip that appears once you tap a colour or number in WinGo — here, a \"Big\" prediction. You choose a stake amount, a quantity multiplier (which repeats the same bet across several rounds at once), and confirm you've read the pre-sale rules before the total is charged to your wallet. It's worth reading that quantity field carefully; multiplying a bet by X50 or X100 multiplies your risk just as fast.",
    linkLabel: "Read the full IN999 game guide",
    href: "/in999-game",
  },
  {
    src: "/images/in999-extra-deposit-bonus.webp",
    alt: "IN999 extra first deposit bonus tiers popup",
    title: "Extra First Deposit Bonus Popup",
    description:
      "A second, smaller first-deposit incentive that IN999 surfaces as a pop-up on the home screen, with its own separate tiers running from ₹400 up to ₹2,000 deposits. Promotions like this can overlap with the main bonus offer, so it's worth checking the Activity page directly rather than assuming every banner represents a distinct, stackable reward.",
    linkLabel: "Compare current bonus offers",
    href: "/in999-bonus",
  },
  {
    src: "/images/in999-app-download-page.webp",
    alt: "IN999 app download page with install options",
    title: "The App Download Page",
    description:
      "Once you've decided to install the Android app, IN999 routes you to this page with two options — a \"Quick installation\" shortcut and a \"Complete Installation\" full download. Since this is a sideloaded APK rather than a Play Store listing, it's worth understanding what each button actually triggers before you tap either one.",
    linkLabel: "Read the APK download guide",
    href: "/in999-download",
  },
  {
    src: "/images/in999-login-screen.webp",
    alt: "IN999 login screen with phone number and password fields",
    title: "IN999 Login Screen",
    description:
      "A standard mobile-number-and-password sign-in, with a toggle for email login and a fixed +91 country code, reflecting the platform's India-focused audience. \"Remember password\" and Forgot-password links sit below the main Log In button, alongside a direct route to Customer Service if you get stuck.",
    linkLabel: "Read the IN999 login guide",
    href: "/in999-login",
  },
  {
    src: "/images/in999-register-screen.webp",
    alt: "IN999 registration screen with phone number and invite code fields",
    title: "IN999 Registration Screen",
    description:
      "New accounts are created with a phone number, a password (set and confirmed), and an optional invite code field — leaving it blank simply skips the referral link. You'll also need to accept the Privacy Agreement before the Register button becomes usable, so it's worth actually opening that link once before you tap through it.",
    linkLabel: "Read the registration walkthrough",
    href: "/in999-registration",
  },
  {
    src: "/images/in999-password-reset-screen.webp",
    alt: "IN999 password reset screen",
    title: "Password Reset Screen",
    description:
      "If you're locked out, this screen resets your password using your registered phone number, a new password (set twice), and an SMS verification code you request via the Send button. Because your phone number is the recovery key for the whole account, losing access to that number is the scenario most worth planning for in advance.",
    linkLabel: "Read the login guide",
    href: "/in999-login",
  },
  {
    src: "/images/in999-self-service-support.webp",
    alt: "IN999 self-service customer support center menu",
    title: "Self-Service Support Center",
    description:
      "Beyond live chat, IN999 offers a self-service menu covering the issues that come up most: deposits that haven't arrived, withdrawal problems, IFSC code corrections, and rebinding a bank account, UPI ID or USDT address after a change. Working through the relevant self-service flow first is usually faster than waiting in a support queue for something the menu already handles.",
    linkLabel: "Visit our contact page",
    href: "/contact",
  },
];

export function AppPreview() {
  return (
    <section id="preview" className="relative scroll-mt-28 px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeading
          eyebrow="What It Looks Like"
          title="IN999, Screen by Screen"
          subtitle="Real screens from the IN999 app, shown full and unedited, each explained in our own words with a link to the guide that goes deeper."
        />

        <div className="mt-16 flex flex-col gap-8 lg:gap-6">
          {PREVIEW_SHOTS.map((shot, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <div
                key={shot.src}
                className="card grid items-center gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:p-12"
              >
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <span className="gold-text mb-4 block text-center text-xs font-semibold uppercase tracking-[0.3em] lg:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative mx-auto aspect-[1290/2796] w-full max-w-[240px] overflow-hidden rounded-2xl border border-gold/15 bg-navy-950 shadow-soft sm:max-w-[260px]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 70vw, 280px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="gold-text mb-2 hidden text-xs font-semibold uppercase tracking-[0.3em] lg:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-mist sm:text-2xl">{shot.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-dim sm:text-base lg:max-w-none">
                    {shot.description}
                  </p>
                  <Link
                    href={shot.href}
                    className="mt-5 inline-block text-sm font-semibold text-gold underline underline-offset-2 hover:text-gold/80"
                  >
                    {shot.linkLabel} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
