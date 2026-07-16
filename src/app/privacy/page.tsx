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
  title: `Privacy Policy | ${SITE.fullName}`,
  description:
    "How this independent IN999 guide site handles visitor data — cookies, analytics, contact form submissions, and outbound links to the IN999 platform.",
  path: "/privacy",
});

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "cookies-analytics", label: "Cookies & Analytics" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "outbound-links", label: "Third-Party & Outbound Links" },
  { id: "data-retention", label: "Data Retention" },
  { id: "your-choices", label: "Your Choices & Rights" },
  { id: "childrens-privacy", label: "Children's Privacy (18+)" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle={`How ${SITE.fullName} collects, uses, and safeguards information from visitors to this independent guide site.`}
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="Overview">
              <p>
                {SITE.fullName} is an independent, unofficial informational website that publishes
                guides, walkthroughs, and general commentary about the IN999 gaming platform. We are
                not IN999, we do not operate the IN999 platform, and we do not hold user funds,
                process real-money wagers, or store gambling account credentials of any kind. This
                Privacy Policy explains what data this website itself collects when you visit it — it
                does not describe, and cannot speak for, the privacy practices of IN999 or any other
                gaming operator you may reach by following a link from this site.
              </p>
              <p>
                By using this website, you agree to the practices described below. If you do not agree,
                please discontinue use of the site.
              </p>
            </Section>

            <Section id="information-we-collect" title="Information We Collect">
              <p>
                Because this site is a content and guide hub rather than a gaming platform, the amount
                of personal information we collect is deliberately minimal:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <span className="font-semibold text-mist">Automatically collected data</span> — when
                  you browse this site, our hosting and analytics tools may log standard technical
                  details such as approximate location (derived from IP address), browser type, device
                  type, referring page, and pages visited. This is aggregate, non-identifying usage
                  data used to understand how the site is performing.
                </li>
                <li>
                  <span className="font-semibold text-mist">Information you submit voluntarily</span>{" "}
                  — if you use our{" "}
                  <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                    contact page
                  </Link>{" "}
                  or email us directly, we receive whatever you choose to include, such as your name,
                  email address, and the content of your message.
                </li>
                <li>
                  <span className="font-semibold text-mist">Cookie data</span> — small text files placed
                  by the site or third-party tools, described further below.
                </li>
              </ul>
              <p>
                We do not ask visitors for, and this site has no mechanism to collect, banking details,
                gambling account passwords, government ID numbers, or any credentials associated with an
                IN999 account. If you are ever asked for such information on this domain, please treat
                it as suspicious and contact us immediately.
              </p>
            </Section>

            <Section id="cookies-analytics" title="Cookies & Analytics">
              <p>
                Like most websites, we may use cookies and similar local-storage technologies to keep
                the site functioning smoothly and to understand how visitors use it. These can include:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Essential cookies that support basic site functionality and security.</li>
                <li>
                  Analytics cookies (for example, from a web analytics provider) that help us see which
                  pages are popular and how visitors navigate the site, reported only in aggregate.
                </li>
                <li>
                  Preference cookies that remember simple settings, such as a previously dismissed
                  banner.
                </li>
              </ul>
              <p>
                You can control or disable cookies through your browser settings at any time. Blocking
                cookies may affect some non-essential site features but will not prevent you from
                reading our guides.
              </p>
            </Section>

            <Section id="how-we-use-information" title="How We Use Information">
              <p>We use the limited data described above to:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Operate, maintain, and improve the accuracy and usability of our guides.</li>
                <li>Understand aggregate traffic patterns so we can prioritize which topics to cover.</li>
                <li>Respond to questions or corrections submitted through our contact form or email.</li>
                <li>Detect and prevent abuse, spam, or security issues affecting the site.</li>
              </ul>
              <p>
                We do not sell personal information to third parties. Where this site includes
                affiliate or referral links to the IN999 platform (disclosed in our{" "}
                <Link href="/terms" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  Terms &amp; Conditions
                </Link>
                ), clicking such a link may allow the destination platform to know you arrived from
                this site, which is standard for any referral link on the web. We do not share your
                contact-form submissions, email address, or any personal details with IN999 or any
                other operator.
              </p>
            </Section>

            <Section id="outbound-links" title="Third-Party & Outbound Links Disclaimer">
              <p>
                This site contains links to the IN999 platform and, in some cases, to other third-party
                websites or apps. Once you click through and leave {SITE.fullName}, your interaction is
                governed entirely by that destination&apos;s own privacy policy, terms of service, and
                data practices — not by this policy. We encourage you to review the privacy policy of
                any external site before creating an account, making a deposit, or entering personal or
                payment information there.
              </p>
              <p>
                We have no control over, and accept no responsibility for, how third-party platforms
                collect, store, or use the data you provide directly to them. This is a standard
                disclaimer applicable to any independent review or guide site that links out to the
                services it writes about.
              </p>
            </Section>

            <Section id="data-retention" title="Data Retention">
              <p>
                Aggregate analytics data is generally retained only as long as necessary to understand
                usage trends and is periodically purged or anonymized by our analytics provider
                according to its own retention schedule. Messages submitted through our contact form or
                by email are kept only as long as needed to address your inquiry and for a reasonable
                period afterward in case of follow-up, after which they are deleted or archived
                securely.
              </p>
            </Section>

            <Section id="your-choices" title="Your Choices & Rights">
              <p>
                You can choose not to submit any personal information to us at all — browsing this site
                does not require an account, registration, or login. If you have previously contacted
                us and would like your message or email address deleted from our records, you can
                request this at any time through our{" "}
                <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  contact page
                </Link>
                , and we will act on reasonable requests promptly.
              </p>
              <p>
                Please remember that any account you register directly with IN999 or another gaming
                platform is separate from this website. Requests to access, correct, or delete data held
                by an operator — such as your gambling account details, deposit history, or KYC
                documents — must be directed to that operator&apos;s own support channels, not to us, as
                we simply have no access to that data.
              </p>
            </Section>

            <Section id="childrens-privacy" title="Children's Privacy (18+)">
              <p>
                This website discusses real-money gaming and is intended strictly for adults aged 18 and
                over. We do not knowingly collect personal information from anyone under 18. If you
                believe a minor has submitted information to us through the contact form, please let us
                know so we can remove it. For a fuller discussion of age restrictions and playing
                safely, see our{" "}
                <Link
                  href="/responsible-gaming"
                  className="text-gold underline underline-offset-2 hover:text-gold/80"
                >
                  responsible gaming page
                </Link>
                .
              </p>
            </Section>

            <Section id="changes" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in the tools we
                use, the way the site operates, or for legal and clarity reasons. Any updates will be
                posted on this page with a revised effective date. We encourage returning visitors to
                check back periodically, particularly if you have previously contacted us or subscribed
                to any updates.
              </p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p>
                If you have questions about this Privacy Policy, want to request removal of information
                you previously submitted, or have found something on the site you believe needs
                correcting, please reach out through our{" "}
                <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  Contact page
                </Link>
                . Questions about an actual IN999 account, deposit, or withdrawal should go directly to
                the platform&apos;s own support channels, not to us, since we do not have access to
                individual player accounts.
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
