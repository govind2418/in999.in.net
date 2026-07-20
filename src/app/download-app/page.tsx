import Image from "next/image";
import { Smartphone, Zap, ShieldCheck, WifiOff, Globe, HardDrive, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Section } from "@/components/ui/Section";
import { BackToHome } from "@/components/ui/BackToHome";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "IN999 App Download",
  description:
    "An independent guide to downloading and installing the IN999 app on Android — sideloading steps, browser alternative, storage requirements and a safety checklist.",
  path: "/download-app",
});

const TOC = [
  { id: "overview", label: "Download Options Overview" },
  { id: "android-steps", label: "Android Install: Step by Step" },
  { id: "unknown-sources", label: "Enabling Unknown Sources Safely" },
  { id: "browser-alternative", label: "Prefer the Browser Instead?" },
  { id: "compatibility", label: "Storage & Compatibility Notes" },
  { id: "safety", label: "Safety Checklist Before You Install" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const REASONS = [
  { title: "Faster Access", description: "Skip the browser and open games directly from your home screen.", icon: Zap },
  { title: "Lighter on Data", description: "A native app typically loads game assets more efficiently than repeated page loads.", icon: WifiOff },
  { title: "One-Tap Return", description: "Stay signed in between sessions instead of navigating back to a URL each time.", icon: ShieldCheck },
];

export default function DownloadAppPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "Download App" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 App Download: Setup & Safety Guide"
          subtitle="How to get the app installed on Android, what to check before you sideload, and when the browser is the better choice."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="Download Options Overview">
              <p>
                This is an independent explainer of the app-download process — not official installation
                documentation, and not a claim of affiliation with any operator. There are two realistic
                ways to play on a phone: install the Android app directly (commonly distributed as an APK
                rather than through the Play Store), or skip installation entirely and play through your
                mobile browser. Neither option is objectively &quot;better&quot; — it depends on how often
                you play and how much you care about home-screen convenience versus zero setup.
              </p>
              <p>
                For a narrower, APK-file-specific walkthrough covering verification and update steps in
                more depth, see our{" "}
                <Link href="/apk-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  dedicated APK download guide
                </Link>
                . This page instead covers the whole picture — app versus browser, setup, and safety.
              </p>
              <p>
                Most players end up trying both at some point. It&apos;s common to start in the browser
                because it takes zero setup, and then move to the app later once you know you&apos;ll be
                playing regularly enough that a faster, dedicated shortcut is worth the few minutes it
                takes to install. Neither path locks you out of the other — your account and wallet follow
                your login, not the device or method you used to sign in last.
              </p>
              <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <Card className="mx-auto flex w-full max-w-[220px] flex-col items-center gap-3 p-6 text-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-white p-2">
                    <Image
                      src="/images/in999-apk-qr.webp"
                      alt="Scan to open the IN999 Android app download page"
                      fill
                      loading="lazy"
                      sizes="112px"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs font-semibold text-mist">Scan with your phone camera</p>
                  <Button variant="gold" href="/apk-download" icon={<Smartphone className="h-4 w-4" />}>
                    Get the APK
                  </Button>
                </Card>
                <div className="flex flex-1 flex-col gap-4">
                  {REASONS.map((reason) => {
                    const Icon = reason.icon;
                    return (
                      <div key={reason.title} className="flex items-start gap-3">
                        <span className="gold-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="text-sm font-semibold text-mist">{reason.title}</h3>
                          <p className="text-xs leading-relaxed text-mist-dim">{reason.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Section>

            <Section id="android-steps" title="Android Install: Step by Step">
              <ol className="list-inside list-decimal space-y-2">
                <li>Download the APK file from the download page or by scanning the QR code above.</li>
                <li>Once the download finishes, open your notification shade or Downloads folder and tap the file.</li>
                <li>If prompted, allow installs from this source (see the next section for exactly how).</li>
                <li>Tap Install and wait for the process to finish — this usually takes a few seconds.</li>
                <li>Open the app, then log in or register to reach your wallet and the games lobby.</li>
              </ol>
              <p>
                Because the app isn&apos;t distributed through the Play Store, Android treats it as a
                sideloaded install and will show a security prompt the first time — that&apos;s expected
                behaviour for any APK from outside the store, not a sign that something is wrong.
              </p>
            </Section>

            <Section id="unknown-sources" title="Enabling Unknown Sources Safely">
              <p>
                Modern Android versions ask you to approve installs on a per-app basis rather than with one
                global switch. The path is typically: open <strong className="text-mist">Settings</strong>{" "}
                → <strong className="text-mist">Apps</strong> →{" "}
                <strong className="text-mist">Special access</strong> (or{" "}
                <strong className="text-mist">Security</strong> on older versions) →{" "}
                <strong className="text-mist">Install unknown apps</strong>, then select the browser or
                file manager you used to download the APK and toggle{" "}
                <strong className="text-mist">Allow from this source</strong>.
              </p>
              <p>
                The safer habit is to enable this only for the specific app you used to download the file,
                install what you need, and then turn the permission back off afterward. Leaving unknown-app
                installs permanently enabled for every app on your phone is unnecessary risk you don&apos;t
                need to carry.
              </p>
            </Section>

            <Section id="browser-alternative" title="Prefer the Browser Instead?">
              <div className="flex items-start gap-4">
                <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                  <Globe className="h-5 w-5" />
                </span>
                <div className="space-y-3">
                  <p>
                    You don&apos;t have to install anything to play. Opening the site directly in your
                    mobile browser gives you the same account, wallet and games lobby without a download,
                    an install prompt, or any storage used on your device. It&apos;s the lower-friction
                    choice for occasional players, or for anyone on a work or shared device where installing
                    outside apps isn&apos;t practical.
                  </p>
                  <p>
                    The trade-off is convenience over time — a browser tab doesn&apos;t sit on your home
                    screen, and you&apos;ll re-enter the address (and possibly your login) each session
                    rather than tapping straight in. If you play often, most players eventually move to the
                    app for that reason alone.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="compatibility" title="Storage & Compatibility Notes">
              <div className="flex items-start gap-4">
                <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                  <HardDrive className="h-5 w-5" />
                </span>
                <div className="space-y-3">
                  <p>
                    The app is built to be lightweight, but plan for roughly 100&nbsp;MB of free storage to
                    cover the initial install plus room for cached game assets afterward. Most devices
                    running Android 7.0 or newer are supported; very old devices or heavily customised
                    Android builds occasionally run into compatibility quirks.
                  </p>
                  <p>
                    A stable internet connection matters more than raw phone specs — prediction rounds move
                    quickly, so a shaky connection is more likely to cost you a missed bet window than a
                    slower processor is.
                  </p>
                  <p>
                    If storage is tight, clearing the app&apos;s cache periodically (rather than
                    uninstalling and reinstalling) usually frees up space without touching your login
                    session. And if you ever switch phones, remember that the install itself carries no
                    data with it — your balance, history and settings all live server-side, so signing in
                    on the new device picks up exactly where you left off.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="safety" title="Safety Checklist Before You Install">
              <div className="space-y-3">
                {[
                  "Confirm the download link or QR code comes from a source you trust before tapping it.",
                  "Check the file size and version shown on the download page roughly match what you expect.",
                  "Re-enable install restrictions after you're done, instead of leaving unknown sources permanently on.",
                  "Keep your device's own security software up to date alongside any app you install.",
                  "Only enter your login details inside the installed app itself, never in a pop-up or link that arrived unprompted.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p className="text-sm leading-relaxed text-mist-dim">{item}</p>
                  </div>
                ))}
              </div>
              <p>
                For a deeper dive into spotting fake or tampered APK files specifically, see the
                verification section of our{" "}
                <Link href="/apk-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  APK download guide
                </Link>
                .
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is the app available on the Play Store?</h3>
                  <p>Typically not — that&apos;s why it&apos;s distributed as a direct APK download and requires enabling installs from outside the store.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Does the app work on iPhone?</h3>
                  <p>The direct APK install path described here is Android-specific; iPhone users generally rely on the browser-based version instead of a native install.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Will installing the app cost me anything?</h3>
                  <p>The download and install itself is free — any spending happens later, inside your wallet, once you choose to fund it.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I lose my account if I switch between app and browser?</h3>
                  <p>No — your account and wallet are tied to your login credentials, not the device or method you use to access them, so you can move between app and browser freely.</p>
                </div>
              </div>
            </Section>

            <p className="text-sm leading-relaxed text-mist-dim">
              Once installed, head to our{" "}
              <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                app overview guide
              </Link>{" "}
              for a tour of what changes once you&apos;re inside, or our{" "}
              <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
                download guide
              </Link>{" "}
              if you want the long-form version of everything on this page.
            </p>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
