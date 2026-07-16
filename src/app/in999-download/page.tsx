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
import {
  Smartphone,
  Globe,
  Monitor,
  ShieldAlert,
  FileCheck2,
  ListChecks,
} from "lucide-react";

const ACCENT = "#2dd4bf";

export const metadata = pageMetadata({
  title: "IN999 Download",
  description:
    "An independent walkthrough of every way to access IN999 — Android APK sideloading, mobile browser play, and PC access — with safety checks at each step.",
  path: "/in999-download",
});

const TOC = [
  { id: "overview", label: "Download Options Overview" },
  { id: "apk-steps", label: "Downloading the Android APK" },
  { id: "unknown-apps", label: "Enabling Install Unknown Apps" },
  { id: "browser-play", label: "Playing via Mobile Browser" },
  { id: "pc-access", label: "Accessing IN999 from a PC" },
  { id: "verify-file", label: "Verifying a Safe File" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const OPTIONS = [
  {
    name: "Android APK",
    icon: Smartphone,
    blurb:
      "A downloadable install package for Android phones and tablets. Fastest access once installed, but requires enabling a one-time device security setting first.",
  },
  {
    name: "Mobile Browser",
    icon: Globe,
    blurb:
      "No install at all — open the site in Chrome, Safari or any mobile browser and play the same catalogue through a responsive web layout.",
  },
  {
    name: "PC or Laptop",
    icon: Monitor,
    blurb:
      "Access the same account from a desktop browser on Windows, macOS or Linux; useful for a larger screen or if you prefer a keyboard and mouse.",
  },
];

export default function In999DownloadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 Download" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 Download: APK, Browser & PC Access Explained"
          subtitle="Every practical way to reach the IN999 platform, walked through step by step, with the safety checks each method deserves."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="Download Options Overview">
              <p>
                &quot;Downloading IN999&quot; can mean three different things depending on your device, and
                this page is an independent walkthrough of all three — we are not the operator and this is
                not an official distribution channel, just a plain-language explainer of the paths available
                and the precautions worth taking with each one. If you want a broader look at what the
                installed app actually offers once you have it, see our{" "}
                <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 app features overview
                </Link>{" "}
                — this page focuses purely on getting access, not on comparing features.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {OPTIONS.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div key={option.name} className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                      <span
                        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: `${ACCENT}22`, color: ACCENT }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-mist">{option.name}</h3>
                      <p className="text-xs leading-relaxed text-mist-dim">{option.blurb}</p>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section id="apk-steps" title="Downloading the Android APK Step-by-Step">
              <p>
                An APK is simply Android&apos;s install package format — the same kind of file every app on
                your phone was built from before it reached a store listing. Sideloading one (installing it
                outside the Play Store) is a normal, supported Android feature, but it does put the burden of
                verifying the source on you. A typical download sequence looks like this:
              </p>
              <ol className="list-inside list-decimal space-y-2">
                <li>Open your device&apos;s browser and navigate directly to the source page rather than tapping a link sent by someone else.</li>
                <li>Locate the download button or link for the Android package and confirm the listed file size looks reasonable (typically tens of megabytes for a platform like this, not a few kilobytes).</li>
                <li>Tap download and wait for the file to finish — avoid opening it mid-download, which can produce a corrupted install.</li>
                <li>Once downloaded, open the file from your notifications shade or Downloads folder to begin installation.</li>
                <li>If your device blocks the install, you&apos;ll be prompted to allow it — see the next section before you tap through that prompt.</li>
              </ol>
            </Section>

            <Section id="unknown-apps" title={'Enabling "Install Unknown Apps" Safely'}>
              <p>
                Modern Android blocks installs from outside the Play Store by default, as a security
                measure. To proceed you&apos;ll need to grant the specific browser or file manager you used
                permission to install unknown apps. This is normally found under{" "}
                <span className="text-mist">Settings → Apps → Special app access → Install unknown apps</span>,
                where you select the app (e.g. your browser) and toggle it on.
              </p>
              <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: `${ACCENT}22`, color: ACCENT }}
                  >
                    <ShieldAlert className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-mist">Keep this scoped and temporary</h3>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-mist-dim">
                  <li>Only enable the toggle for the one app you&apos;re using to install (usually your browser), not system-wide.</li>
                  <li>Turn the permission back off once the install finishes, if your device allows it — this limits the window during which any app could sideload something without your knowledge.</li>
                  <li>Never grant this permission from a prompt that appeared unexpectedly in an ad or pop-up; only from a page you intentionally visited.</li>
                </ul>
              </div>
            </Section>

            <Section id="browser-play" title="Playing via Mobile Browser Instead">
              <p>
                If you&apos;d rather skip installation entirely, the mobile-browser route requires none of
                the steps above. Open Chrome, Safari, Firefox or any modern mobile browser, navigate to the
                platform, and log in as usual — the layout adapts to your screen size and every game mode is
                reachable the same way it would be through the app. This is generally the lowest-friction
                and lowest-risk option, since there&apos;s no package to source or verify and no device
                setting to change. The trade-off is no push notifications and a slightly heavier page load on
                each visit, since nothing is cached locally the way an installed app caches assets.
              </p>
            </Section>

            <Section id="pc-access" title="Accessing IN999 from a PC or Laptop">
              <p>
                Desktop access works the same way as mobile browser play: open any current version of
                Chrome, Edge, Firefox or Safari on Windows, macOS or Linux, and sign into the same account
                you&apos;d use on mobile. There is no dedicated desktop application to install — the browser
                is the full client. A larger screen can make number-heavy formats like 5D or K3 easier to
                read, and a physical keyboard speeds up account tasks like updating details or contacting
                support. Balances, history and settings stay in sync across devices automatically because
                everything is tied to your account rather than to a specific browser or machine.
              </p>
            </Section>

            <Section id="verify-file" title="Verifying You Have a Safe File">
              <p>
                Because APK files can be repackaged with malicious code and redistributed under a familiar
                name, a few basic checks before installing are worth the extra minute:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-mist">Source discipline:</strong> only download from a page you
                  navigated to yourself, never from a file shared in chat, SMS or an unfamiliar forum post.
                </li>
                <li>
                  <strong className="text-mist">File size sanity check:</strong> compare the size shown before
                  download against what the source page states; a mismatch of several megabytes is a red flag.
                </li>
                <li>
                  <strong className="text-mist">Publisher/version info:</strong> your phone&apos;s package
                  installer will show a version number and requested permissions before you confirm — read
                  that screen rather than tapping through it.
                </li>
                <li>
                  <strong className="text-mist">Scan before opening:</strong> if your device has a built-in
                  scanner (such as Google Play Protect on Android), let it check the file before you launch
                  the installer.
                </li>
              </ul>
              <p className="flex items-center gap-2 text-xs text-mist-dim">
                <FileCheck2 className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                When in doubt, the browser-play route above sidesteps this entire category of risk — it&apos;s
                a reasonable default if you&apos;re ever unsure about a file&apos;s source.
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is sideloading an APK illegal?</h3>
                  <p>No — installing apps from outside an official store is a standard Android capability, not something exclusive to any one platform. The main risk is sourcing, not legality: only use sources you trust.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Why won&apos;t my phone let me open the downloaded file?</h3>
                  <p>This usually means the &quot;install unknown apps&quot; permission hasn&apos;t been granted yet for the app you downloaded with — check Settings → Apps → Special app access on Android and enable it for your browser.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I need to download anything to play on a computer?</h3>
                  <p>No — desktop access is entirely browser-based; there is no separate PC client to install.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I use the same account across app, browser and PC?</h3>
                  <p>Yes — your login credentials and wallet are tied to your account on the server side, so any access method reaches the same balance and history.</p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-mist-dim">
              <ListChecks className="h-3.5 w-3.5" style={{ color: ACCENT }} />
              <span>
                Want to know what the app adds once installed? Read the{" "}
                <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 app features guide
                </Link>
                .
              </span>
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="gold" href="/in999-game">
                Explore the IN999 Game Catalogue
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
