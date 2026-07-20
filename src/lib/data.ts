import {
  Zap,
  ShieldCheck,
  Headphones,
  Gift,
  Dice5,
  Boxes,
  Grid3x3,
  TrendingUp,
  Trophy,
  Sparkles,
  Plane,
  CalendarDays,
  Gamepad2,
  BadgePercent,
  type LucideIcon,
} from "lucide-react";

export type GameCategory = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const POPULAR_GAMES: GameCategory[] = [
  { name: "WinGo", description: "Colour prediction, fast rounds", icon: Dice5 },
  { name: "Aviator", description: "Crash-style multiplier round", icon: Plane },
  { name: "K3", description: "Classic dice strategy game", icon: Boxes },
  { name: "5D", description: "Multi-digit number predictions", icon: Grid3x3 },
  { name: "TRX", description: "Blockchain powered fairness", icon: TrendingUp },
  { name: "Sports", description: "Live sports betting markets", icon: Trophy },
  { name: "Casino", description: "Slots, live tables & more", icon: Sparkles },
];

export type Feature = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_CHOOSE: Feature[] = [
  { name: "Fast Withdrawals", description: "Cash out your winnings in minutes, anytime.", icon: Zap },
  { name: "Secure Platform", description: "Bank-grade encryption on every transaction.", icon: ShieldCheck },
  { name: "24x7 Support", description: "Real help, whenever you need it.", icon: Headphones },
  { name: "Daily Rewards", description: "Log in daily to unlock bonus rewards.", icon: Gift },
];

export type UpdateItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const LATEST_UPDATES: UpdateItem[] = [
  { title: "New Events", description: "Fresh tournaments and leaderboard challenges every week.", icon: CalendarDays },
  { title: "New Games", description: "Latest game releases added to the platform regularly.", icon: Gamepad2 },
  { title: "Offers", description: "Limited-time bonuses and cashback offers.", icon: BadgePercent },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is IN999 safe and secure to play on?",
    answer:
      "Yes. IN999 uses bank-grade encryption, secure wallet infrastructure, and verified payment gateways to keep every transaction protected.",
  },
  {
    question: "How fast are withdrawals processed?",
    answer:
      "Most withdrawal requests are processed instantly and reflect in your account within minutes, 24x7.",
  },
  {
    question: "How do I register on IN999?",
    answer:
      "Tap the Register button, enter your mobile number, verify with OTP, and your account is ready in under a minute.",
  },
  {
    question: "Can I download the IN999 app?",
    answer:
      "Yes, IN999 is available as a fast, lightweight APK for Android via the Download App section.",
  },
  {
    question: "Do you offer bonuses and gift codes?",
    answer:
      "Yes. New players receive a welcome bonus, and daily gift codes unlock additional rewards through the Promotions page.",
  },
];
