import { Send, Mail, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: `Contact Us | ${SITE.fullName}`,
  description:
    "Reach the editorial team behind this independent IN999 guide site — content corrections, general questions, and where to go for account, deposit, or withdrawal support.",
  path: "/contact",
});

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "channels", label: "How to Reach Us" },
  { id: "before-you-write", label: "Before You Reach Out" },
  { id: "what-we-can-help", label: "What We Can Help With" },
  { id: "what-to-ask-platform", label: "What to Ask the Platform Instead" },
  { id: "response-times", label: "Response Times" },
  { id: "faq", label: "Contact FAQ" },
];

const CHANNELS = [
  {
    title: "Email",
    description: "Best for content corrections, feedback, and general questions about this site.",
    icon: Mail,
    action: "support@in999.in.net",
    href: "mailto:support@in999.in.net",
  },
  {
    title: "Telegram",
    description: "A quicker way to message us for general, non-account-specific questions.",
    icon: Send,
    action: "Open Telegram",
    href: "https://t.me/",
  },
  {
    title: "Availability",
    description: "We aim to check messages regularly, though this is an independent guide site, not a 24x7 call center.",
    icon: Clock,
    action: null,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Contact" }]} />
        <PageHero
          eyebrow="Contact"
          title="Get in Touch"
          subtitle={`Reach the team behind ${SITE.fullName} — an independent IN999 guide site, not the platform itself.`}
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="Overview">
              <p>
                {SITE.fullName} is an independent, unofficial website that publishes guides and
                explainers about the IN999 platform. We are not IN999&apos;s official support team, and we
                cannot access, view, or modify anyone&apos;s gaming account, balance, or transaction
                history. This page explains the best way to reach us, what kinds of questions we can
                realistically help with, and where to go instead for anything tied to an actual IN999
                account.
              </p>
              <p>
                We built this page to save you time. Contacting the wrong team for an account-specific
                issue usually means waiting for a reply, only to be told to contact the platform
                directly anyway. Read through the sections below so your message lands with the right
                people the first time, whether that is us or the platform itself.
              </p>
            </Section>

            <Section id="channels" title="How to Reach Us">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <Card key={channel.title} className="flex flex-col items-start gap-4 p-8">
                      <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-lg font-semibold text-mist">{channel.title}</h3>
                      <p className="text-sm leading-relaxed text-mist-dim">{channel.description}</p>
                      {channel.href && (
                        <Button variant="outline" href={channel.href} className="mt-2 text-xs">
                          {channel.action}
                        </Button>
                      )}
                    </Card>
                  );
                })}
              </div>
            </Section>

            <Section id="before-you-write" title="Before You Reach Out">
              <p>
                A quick check before you send a message can often save you a round trip:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  If your question is about how something works in general — how registration, login,
                  or a deposit typically flows — it is worth first checking whether one of our existing
                  guides already covers it, since we link the most relevant ones throughout this page.
                </li>
                <li>
                  If your question is about your specific account, balance, a pending withdrawal, or a
                  bonus that has not been credited, that always needs to go to the platform&apos;s own
                  support team — we genuinely have no way to look any of that up.
                </li>
                <li>
                  If you are reporting an error on this site, including the exact page URL and a short
                  description of what looks wrong helps us fix it much faster.
                </li>
              </ul>
            </Section>

            <Section id="what-we-can-help" title="What We Can Help With">
              <p>
                Because this is an editorial and guide site rather than the platform itself, we are best
                placed to help with:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Pointing out an error, outdated screenshot, or unclear step in one of our guides.</li>
                <li>Suggesting a topic or game mode you would like us to cover in more depth.</li>
                <li>
                  General questions about how the site works, our{" "}
                  <Link href="/privacy" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    Privacy Policy
                  </Link>
                  , or our{" "}
                  <Link href="/terms" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    Terms &amp; Conditions
                  </Link>
                  .
                </li>
                <li>Reporting a broken link, technical bug, or suspicious page impersonating this site.</li>
                <li>
                  Requests related to data you previously submitted through this contact form, as
                  described in our{" "}
                  <Link href="/privacy" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    Privacy Policy
                  </Link>
                  .
                </li>
              </ul>
            </Section>

            <Section id="what-to-ask-platform" title="What to Ask the Platform Instead">
              <p>
                Anything involving your actual IN999 account needs to go directly to the platform&apos;s own
                support team, not to us, since we have no access to individual accounts, balances, or
                transaction records. This includes:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Trouble signing in, resetting a password, or recovering account access — see our{" "}
                  <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    IN999 login guide
                  </Link>{" "}
                  for the general process, then contact the platform directly for account-specific help.
                </li>
                <li>
                  Deposits, withdrawals, delayed payouts, or payment method issues — our{" "}
                  <Link
                    href="/deposit-withdrawal"
                    className="text-gold underline underline-offset-2 hover:text-gold/80"
                  >
                    deposit &amp; withdrawal guide
                  </Link>{" "}
                  explains how the process generally works, but only the platform can act on a specific
                  transaction.
                </li>
                <li>Bonus, gift code, or promotion crediting disputes tied to your specific account.</li>
                <li>KYC verification, identity document uploads, or account suspension appeals.</li>
              </ul>
              <p>
                If you are experiencing difficulty controlling your gaming activity, please see our{" "}
                <Link
                  href="/responsible-gaming"
                  className="text-gold underline underline-offset-2 hover:text-gold/80"
                >
                  responsible gaming page
                </Link>{" "}
                for support resources — this is a topic we take seriously even though we are not the
                operator.
              </p>
            </Section>

            <Section id="response-times" title="Response Times">
              <p>
                We generally aim to review and respond to email and Telegram messages within a few
                business days. Response times can vary depending on volume, and because this is an
                independent content site rather than a staffed call center, we do not offer live-chat or
                guaranteed same-day replies. For anything time-sensitive involving money — a stuck
                withdrawal, for example — contacting the platform&apos;s own support channel directly will
                always be faster than routing the request through us.
              </p>
              <p>
                Messages that clearly belong to the platform (account-specific balance or payment
                disputes) may simply receive a short reply redirecting you to the correct support
                channel, since we are not able to take action on them ourselves. Messages about content
                corrections, feedback, or general questions about the site tend to get a more detailed
                reply, since those are squarely within what we can actually help with.
              </p>
            </Section>

            <Section id="faq" title="Contact FAQ">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">
                    Can you look up my IN999 account balance or transaction history?
                  </h3>
                  <p>
                    No. We have no login access to the IN999 platform or any individual player account.
                    Only the platform&apos;s own support team can view or act on account-specific details.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">
                    I found incorrect information in one of your guides — how do I report it?
                  </h3>
                  <p>
                    Please email us with the page URL and a short description of what looks outdated or
                    incorrect. We review corrections regularly and appreciate the feedback.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">
                    Are you affiliated with IN999?
                  </h3>
                  <p>
                    No. {SITE.fullName} is an independent, unofficial guide site. Some links on this site
                    may be affiliate or referral links, disclosed in our{" "}
                    <Link href="/terms" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      Terms &amp; Conditions
                    </Link>
                    , but that does not make us the operator or its official support channel.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">
                    Do you offer phone support?
                  </h3>
                  <p>
                    No — email and Telegram are the channels we monitor. We do not maintain a phone
                    support line.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">
                    Can you help me recover a suspended or locked account?
                  </h3>
                  <p>
                    No. Account suspensions, lockouts, and identity-verification appeals are handled
                    entirely by the platform&apos;s own support and compliance team. We can point you to
                    our general{" "}
                    <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                      login guide
                    </Link>{" "}
                    for common troubleshooting steps, but we cannot intervene in a specific case.
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
