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
  Gauge,
  BellRing,
  WifiOff,
  Fingerprint,
  RefreshCw,
  ShieldCheck,
  HardDrive,
} from "lucide-react";

const ACCENT = "#3ddc84";

export const metadata = pageMetadata({
  title: "IN999 App",
  description:
    "An independent look at the IN999 app — key features, Android/iOS device compatibility, requested permissions, and a safety checklist to run before you install.",
  path: "/in999-app",
});

const TOC = [
  { id: "overview", label: "What the IN999 App Is" },
  { id: "features", label: "Key App Features Explained" },
  { id: "compatibility", label: "Device & OS Compatibility" },
  { id: "permissions", label: "Permissions the App Requests" },
  { id: "app-vs-browser", label: "App vs Browser Play" },
  { id: "checklist", label: "Before You Install" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FEATURES = [
  {
    name: "Faster Round Loading",
    icon: Gauge,
    blurb:
      "A native shell trims the overhead of loading a full webpage on every round, so timers and results tend to refresh a beat quicker than in a mobile browser tab.",
  },
  {
    name: "Push Notifications",
    icon: BellRing,
    blurb:
      "The app can alert you about promotions, result reminders, or account activity even when it isn't open — a convenience browsers can't offer without extra setup.",
  },
  {
    name: "Offline-Friendly Shell",
    icon: WifiOff,
    blurb:
      "The interface (menus, layout, cached assets) can load from local storage even on a patchy connection, though live rounds still need an active data connection.",
  },
  {
    name: "Biometric Unlock",
    icon: Fingerprint,
    blurb:
      "Many installs support fingerprint or face unlock for returning sessions, which is quicker than retyping a password every time you open the app.",
  },
  {
    name: "One-Tap Updates",
    icon: RefreshCw,
    blurb:
      "New app versions typically prompt you in-app, so you're less likely to be stuck on an outdated build with fixed bugs still present.",
  },
  {
    name: "Home-Screen Shortcut",
    icon: Smartphone,
    blurb:
      "Installing the app puts a dedicated icon on your device, cutting out the step of typing a URL or digging through browser bookmarks every session.",
  },
];

export default function In999AppPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "IN999 App" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 App: Features, Compatibility & Pre-Install Checklist"
          subtitle="What the IN999 app actually offers over browser play, which devices support it, and what to check before you tap install."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="overview" title="What the IN999 App Is">
              <p>
                The IN999 app is a mobile client that wraps the same account, wallet and game catalogue you
                would otherwise reach through a browser, packaged as an installable app for Android (and, on
                some builds, iOS). This page is an independent explainer written from a player&apos;s point
                of view — we are not the operator, we don&apos;t distribute the app ourselves, and nothing
                here should be read as an official statement from IN999. Our aim is simply to help a new
                visitor understand what the app does, what it asks for, and what to double-check before
                installing anything on a personal device.
              </p>
              <p>
                For most players the appeal comes down to convenience: fewer taps to reach the lobby, a
                persistent icon on the home screen, and a handful of native-feeling touches like push alerts
                and biometric unlock. None of that changes the underlying game mechanics — the rounds,
                odds and rules are the same whether you access them through the app or a mobile browser. If
                you haven&apos;t yet decided whether you even need the app, our{" "}
                <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  download guide
                </Link>{" "}
                lays out every access method side by side.
              </p>
            </Section>

            <Section id="features" title="Key App Features Explained">
              <p>
                Here&apos;s a feature-by-feature breakdown of what an app install typically adds on top of
                plain browser access:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.name} className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                      <span
                        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: `${ACCENT}22`, color: ACCENT }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="mb-1 text-sm font-semibold text-mist">{feature.name}</h3>
                      <p className="text-xs leading-relaxed text-mist-dim">{feature.blurb}</p>
                    </div>
                  );
                })}
              </div>
            </Section>

            <Section id="compatibility" title="Device & OS Compatibility">
              <p>
                Android coverage is generally broader than iOS coverage for platforms like this, because
                Android allows installation from a downloaded package file outside of an official app
                store, while iOS restricts installs to the App Store or developer-signed builds. In
                practice that means:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-mist">Android:</strong> most builds target Android 7.0 and above,
                  with smoother performance on Android 10+ and at least 2GB of free storage recommended for
                  the install plus cached data.
                </li>
                <li>
                  <strong className="text-mist">iOS:</strong> availability is inconsistent and often depends
                  on region and current store policy — treat any iOS app claim with extra scepticism and
                  verify it isn&apos;t a lookalike listing before installing.
                </li>
                <li>
                  <strong className="text-mist">Older or low-RAM devices:</strong> the app may run, but
                  expect slower round transitions; a mobile browser can actually feel snappier on
                  budget hardware since it skips a persistent background process.
                </li>
              </ul>
              <p>
                If your device sits outside the comfortable range — very old Android versions, very limited
                storage, or an iOS device with no verified listing — browser play is the more reliable
                option, and it requires no compatibility check at all.
              </p>
            </Section>

            <Section id="permissions" title="Permissions the App Requests (and why)">
              <p>
                Installable apps ask for device permissions up front, and it&apos;s worth knowing what each
                one is typically for before you tap &quot;allow&quot;:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-mist">Storage access</strong> — used to cache images, sounds and
                  app updates locally so the app doesn&apos;t re-download the same assets every session.
                </li>
                <li>
                  <strong className="text-mist">Network state</strong> — lets the app detect whether you&apos;re
                  online or offline and adjust its behaviour, such as pausing live round polling.
                </li>
                <li>
                  <strong className="text-mist">Notifications</strong> — required for push alerts about
                  promotions or account activity; this is optional and can be declined without affecting
                  core play.
                </li>
                <li>
                  <strong className="text-mist">Biometric/hardware ID</strong> — only needed if you opt into
                  fingerprint or face unlock; skip it if you&apos;d rather log in with a password each time.
                </li>
              </ul>
              <p>
                A general rule of thumb for any sideloaded app: be cautious if it requests permissions that
                have no obvious connection to its function, such as reading your contacts or SMS messages.
                Legitimate gaming apps rarely need either.
              </p>
            </Section>

            <Section id="app-vs-browser" title="App vs Browser Play — Which to Choose">
              <p>
                Neither option is objectively &quot;better&quot; — it depends on how you use the platform:
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong className="text-mist">Choose the app</strong> if you play often, want push
                  reminders, and are comfortable enabling a device setting to install from outside an app
                  store.
                </li>
                <li>
                  <strong className="text-mist">Choose the browser</strong> if you play occasionally, share
                  a device, want zero install footprint, or you&apos;re on iOS without a verified app
                  listing.
                </li>
              </ul>
              <p>
                Either route uses the same login credentials and wallet, covered in our{" "}
                <Link href="/in999-login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 login guide
                </Link>
                , so switching between the two later costs you nothing.
              </p>
            </Section>

            <Section id="checklist" title="Before You Install — a Safety Checklist">
              <div className="card p-5" style={{ borderColor: `${ACCENT}33` }}>
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: `${ACCENT}22`, color: ACCENT }}
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-mist">Run through this before tapping install</h3>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm text-mist-dim">
                  <li>Confirm you&apos;re downloading the package from a source you specifically navigated to, not a link forwarded by a stranger.</li>
                  <li>Check the file size and version number look consistent with what the source page describes.</li>
                  <li>Make sure your device has a recent security update installed before sideloading anything.</li>
                  <li>Review the permission list at install time and decline anything unrelated to gameplay.</li>
                  <li>Confirm you meet minimum age requirements and are located somewhere the platform is legally accessible.</li>
                </ul>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-mist-dim">
                <HardDrive className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                For the actual step-by-step download and install walkthrough, including the Android security
                toggle you&apos;ll need, see our full{" "}
                <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  IN999 download guide
                </Link>
                .
              </p>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Does the IN999 app cost anything to download?</h3>
                  <p>The app package itself is typically free to download and install; any money involved comes from funding your wallet once you&apos;re logged in, not from the install itself.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is the app safer than playing through a browser?</h3>
                  <p>Not inherently — both routes use the same account and wallet. The app adds convenience features, but the safety of either depends on where you obtained the link and how carefully you protect your login.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Will the app work on my tablet?</h3>
                  <p>Most Android tablets running a compatible OS version can run the app, though the interface is generally designed phone-first, so layout may look stretched or scaled on larger screens.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Do I lose my account history if I switch from browser to app?</h3>
                  <p>No — your account, balance and history live on the server side and are tied to your login credentials, not to whichever client you use to access them.</p>
                </div>
              </div>
            </Section>

            <div className="mt-10 flex justify-center">
              <Button variant="gold" href="/in999-download">
                Read the Full Download Guide
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
