export const SITE = {
  name: "IN999",
  fullName: "IN999 Game Hub",
  domain: "in999.in.net",
  url: "https://in999.in.net",
  title: "IN999 Game Hub | Guides for Login, App, Download & Gift Codes",
  description:
    "Independent IN999 Game guide hub covering login steps, app download, gift codes, bonuses and registration walkthroughs — written for players, not affiliated with any operator.",
  tagline: "Your Independent IN999 Guide & Resource Hub",
} as const;

// Temporary registration/login destination until the in999.in.net wallet platform goes live.
export const REGISTER_URL = "https://www.jaiclub15.com/#/register?invitationCode=34881915294";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "IN999 Guide", href: "/in999-game" },
  { label: "Login", href: "/login" },
  { label: "Download", href: "/download-app" },
  { label: "FAQ", href: "/faq" },
] as const;

export const FOOTER_PAGES = [
  { label: "Games", href: "/games" },
  { label: "Gift Code", href: "/gift-code" },
  { label: "Promotions", href: "/promotions" },
  { label: "VIP Club", href: "/vip-club" },
  { label: "Referral Program", href: "/referral-program" },
  { label: "APK Download", href: "/apk-download" },
] as const;

export const GUIDE_PAGES = [
  { label: "How to Play", href: "/how-to-play" },
  { label: "Deposit & Withdrawal", href: "/deposit-withdrawal" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
] as const;

// Long-form independent guide pages targeting IN999-related search queries.
export const IN999_GUIDES = [
  { label: "IN999 Game", href: "/in999-game" },
  { label: "IN999 Login", href: "/in999-login" },
  { label: "IN999 App", href: "/in999-app" },
  { label: "IN999 Download", href: "/in999-download" },
  { label: "IN999 Gift Code", href: "/in999-gift-code" },
  { label: "IN999 Registration", href: "/in999-registration" },
  { label: "IN999 Bonus", href: "/in999-bonus" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/contact" },
  { label: "Telegram", href: "https://t.me/", external: true },
] as const;

// Sister sites in the same network — disclosed, reciprocal partner links (not a paid link scheme).
export const PARTNER_SITES = [
  { label: "Sikkim Game", href: "https://sikkimgame.co.in" },
  { label: "Diuwin", href: "https://diuwin.in.net" },
] as const;
