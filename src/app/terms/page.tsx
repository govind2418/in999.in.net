import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 Terms & Conditions",
  description:
    "The terms governing use of this independent IN999 guide website, including our content disclaimer, age requirement, and outbound-link policy.",
  path: "/terms",
});

const TOC = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "nature-of-site", label: "Nature of This Site" },
  { id: "age-requirement", label: "Age Requirement" },
  { id: "accuracy-disclaimer", label: "Accuracy of Information" },
  { id: "outbound-links", label: "Outbound Links Disclaimer" },
  { id: "affiliate-disclosure", label: "Affiliate Disclosure" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "contact", label: "Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Terms & Conditions" }]} path="/terms" />
        <PageHero
          eyebrow="Legal"
          title="Terms & Conditions"
          subtitle={`The rules that govern your use of ${SITE.fullName}, an independent informational guide about the IN999 platform.`}
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="acceptance" title="Acceptance of Terms">
              <p>
                By accessing or using {SITE.fullName}, you agree to be bound by these Terms &amp;
                Conditions. If you do not agree with any part of these terms, please stop using the
                site. We may revise these terms periodically, and continued use of the site after
                changes are posted constitutes acceptance of the updated terms.
              </p>
            </Section>

            <Section id="nature-of-site" title="Nature of This Site">
              <p>
                {SITE.fullName} is an independent, unofficial guide and resource hub built to help
                players understand the IN999 platform — its login process, app download, game
                catalogue, promotions, and related topics. We are not IN999, we are not its official
                operator, and we have no affiliation, partnership, or contractual relationship with
                whoever owns or operates the IN999 platform unless explicitly stated otherwise.
              </p>
              <p>
                This site does not run any games, accept deposits or withdrawals, hold player balances,
                or process real-money wagers. Every step of actual gameplay, account registration, and
                payment happens on the IN999 platform itself, entirely outside of our control. We simply
                write about it, from a third-party reviewer&apos;s perspective, based on publicly
                available information and our own research.
              </p>
            </Section>

            <Section id="age-requirement" title="Age Requirement">
              <p>
                This website discusses real-money online gaming and is intended solely for adults aged
                18 or older (or the legal age of majority in your jurisdiction, if higher). By using this
                site, you represent that you meet this age requirement. If you are under 18, please leave
                this site immediately. Age verification for any actual gambling account is handled
                entirely by the IN999 platform, not by us.
              </p>
            </Section>

            <Section id="accuracy-disclaimer" title="Accuracy of Information Disclaimer">
              <p>
                We make a genuine effort to keep our guides accurate, current, and useful, but online
                gaming platforms frequently change their interfaces, promotions, fees, and policies
                without notice. Information on this site — including screenshots, described steps,
                bonus terms, or game rules — may become outdated between the time we publish it and the
                time you read it.
              </p>
              <p>
                Nothing on this site should be treated as a guarantee of any outcome, payout, bonus
                eligibility, or platform behavior. Always verify current details directly on the IN999
                platform before making a financial decision, and treat our content as a starting-point
                explainer rather than an authoritative source of live terms.
              </p>
            </Section>

            <Section id="outbound-links" title="Outbound Links Disclaimer">
              <p>
                This site contains links that take you to the IN999 platform or to other third-party
                destinations. Once you leave {SITE.fullName}, you are subject entirely to that
                destination&apos;s own terms of service, privacy policy, and rules — not ours. We do not
                control, endorse every detail of, or take responsibility for the content, security, or
                conduct of any external site or app you reach through a link on this page.
              </p>
              <p>
                You should independently review the terms of any platform before registering an account
                or depositing funds there. See our{" "}
                <Link href="/privacy" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  Privacy Policy
                </Link>{" "}
                for how outbound links relate to your data.
              </p>
            </Section>

            <Section id="affiliate-disclosure" title="Affiliate Disclosure">
              <p>
                Some links on this site, including registration or download links pointing to the IN999
                platform, may be affiliate or referral links. This means we may receive a commission or
                referral benefit if you sign up or take certain actions after clicking through — at no
                additional cost to you. This arrangement does not influence the substance of our guides;
                our goal is to describe the platform accurately regardless of any referral relationship.
                Where our footer lists partner or sister sites, those are disclosed reciprocal
                relationships within the same content network, not paid placements.
              </p>
            </Section>

            <Section id="intellectual-property" title="Intellectual Property">
              <p>
                All written content on {SITE.fullName} — including guides, explanations, page layouts,
                and original graphics — is our own original work, written independently for this site
                and not copied from IN999&apos;s own materials or any other publisher. You may share links
                to our pages, but you may not republish, scrape, or reproduce substantial portions of our
                content elsewhere without permission.
              </p>
              <p>
                Any trademarks, logos, or platform names referenced on this site, including &quot;IN999,&quot;
                belong to their respective owners and are used here only for identification and
                descriptive purposes as part of independent commentary — this does not imply endorsement
                by, or affiliation with, the trademark holder.
              </p>
            </Section>

            <Section id="limitation-of-liability" title="Limitation of Liability">
              <p>
                {SITE.fullName} is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without
                warranties of any kind, express or implied. We are not liable for any financial loss,
                account issue, missed bonus, or other damage arising from your use of the IN999 platform
                or any other third-party service, even where our guide pointed you toward it. Gambling
                carries inherent financial risk, and any decision to deposit funds or place wagers is
                made entirely at your own discretion and risk.
              </p>
              <p>
                To the fullest extent permitted by law, {SITE.fullName} and its operators disclaim
                liability for indirect, incidental, or consequential damages connected to your use of
                this website or reliance on its content. If gaming is affecting you negatively, please
                review our{" "}
                <Link
                  href="/responsible-gaming"
                  className="text-gold underline underline-offset-2 hover:text-gold/80"
                >
                  responsible gaming page
                </Link>{" "}
                for support resources.
              </p>
            </Section>

            <Section id="changes" title="Changes to These Terms">
              <p>
                We may update these Terms &amp; Conditions periodically to reflect changes to the site,
                the way we operate, or applicable legal considerations. Updates take effect as soon as
                they are posted on this page. We recommend checking back occasionally, especially before
                relying on outbound links or affiliate disclosures described here.
              </p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p>
                Questions about these terms, requests for corrections, or general feedback about this
                site can be sent through our{" "}
                <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  Contact page
                </Link>
                . For anything related to an actual IN999 account — deposits, withdrawals, bonuses, or
                login issues — please contact the platform&apos;s own support team directly, since we have
                no visibility into individual player accounts.
              </p>
            </Section>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
