import Image from "next/image";
import { Download, ShieldAlert, RefreshCw, Wrench, FileWarning } from "lucide-react";
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
  title: "IN999 APK Download",
  description:
    "An independent, APK-focused guide: what the IN999 APK file is, how to install it safely, how to spot a fake or modified copy, and how to keep it updated.",
  path: "/apk-download",
});

const TOC = [
  { id: "what-is-apk", label: "What Is an APK, Exactly" },
  { id: "why-sideload", label: "Why Sideloading Is Needed" },
  { id: "install-steps", label: "Step-by-Step Install" },
  { id: "verify", label: "Verifying You Have the Real File" },
  { id: "updating", label: "Updating the APK Later" },
  { id: "troubleshooting", label: "Troubleshooting Install Failures" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const STEPS = [
  "Tap the download button below to save the APK file to your device's Downloads folder.",
  "Allow installs from the browser or file manager you used, if your phone asks.",
  "Open the downloaded file from your notifications or file manager and tap Install.",
  "Wait for installation to finish, then open the app and log in or register.",
];

export default function ApkDownloadPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Breadcrumb items={[{ label: "APK Download" }]} />
        <PageHero
          eyebrow="Independent Guide"
          title="IN999 APK: Download, Verify & Update Guide"
          subtitle="A focused look at the APK file itself — installing it safely, confirming it's genuine, and keeping it current."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-3xl">
            <TableOfContents items={TOC} />

            <Section id="what-is-apk" title="What Is an APK, Exactly">
              <p>
                This page is an independent explainer of the APK file format and install process — it is
                not official documentation, and we are not affiliated with any gaming operator. An APK
                (Android Package Kit) is simply the file format Android apps are packaged and distributed
                in. Every app on your phone, including ones downloaded from the Play Store, exists as an
                APK under the hood — the difference here is that you&apos;re downloading and installing it
                directly rather than through a store front-end.
              </p>
              <p>
                If you&apos;re looking for the wider picture — Android versus browser play, storage
                requirements, and a general setup walkthrough — our{" "}
                <Link href="/download-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  download app guide
                </Link>{" "}
                covers that more broadly. This page stays narrowly focused on the APK file itself: what it
                is, how to install it responsibly, and — most importantly — how to tell a genuine copy from
                a tampered one.
              </p>
              <p>
                It helps to think of the APK as a sealed container: it bundles the app&apos;s code,
                images, and other resources into a single file, along with a digital signature that
                identifies who packaged it. That signature is what makes update-checking possible later —
                Android compares the signature of a new file against the one already installed before it
                allows an update to proceed, which is also why a signature mismatch is one of the more
                common install errors covered further down this page.
              </p>
            </Section>

            <Section id="why-sideload" title="Why Sideloading Is Needed">
              <p>
                &quot;Sideloading&quot; just means installing an app from a file instead of an app store.
                It&apos;s a normal, long-standing part of Android — the platform has supported it since its
                earliest versions — and it&apos;s the standard distribution method for apps that, for
                various policy reasons, aren&apos;t listed on the Play Store.
              </p>
              <p>
                Because Android doesn&apos;t automatically trust files from outside the store, it shows a
                one-time security prompt the first time you install an APK from a new source. That prompt
                is a built-in safeguard, not an error — its entire purpose is to make sure you&apos;re
                installing the app deliberately rather than by accident.
              </p>
              <p>
                This is different from a security warning telling you to stop. Think of it as Android
                asking, in effect, &quot;do you definitely want to install something that didn&apos;t come
                from the store?&quot; — answering yes is entirely normal for millions of legitimate apps
                worldwide, from browsers to games to productivity tools, not just this one. What matters is
                that you&apos;re deliberately choosing to trust the specific source you downloaded from, which
                is exactly what the verification checks later in this guide are designed to help you do.
              </p>
            </Section>

            <Section id="install-steps" title="Step-by-Step Install">
              <Card className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-mist-dim">Requirements</p>
                    <p className="text-sm font-semibold text-mist">Android 7.0+, ~100 MB free storage</p>
                  </div>
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white p-2">
                    <Image
                      src="/images/apk-qr.webp"
                      alt="Scan to download the IN999 Android APK"
                      fill
                      loading="lazy"
                      sizes="96px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <Button variant="gold" icon={<Download className="h-4 w-4" />} className="w-full">
                  Download APK
                </Button>
              </Card>
              <ol className="mt-2 list-inside list-decimal space-y-2">
                {STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p>
                On most modern phones you&apos;ll be prompted mid-install to allow installs from the source
                you used (browser or file manager) — approve that one app, finish the install, then revoke
                the permission again afterward if you&apos;d rather not leave it enabled long-term.
              </p>
            </Section>

            <Section id="verify" title="Verifying You Have the Real File">
              <div className="flex items-start gap-4">
                <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                  <ShieldAlert className="h-5 w-5" />
                </span>
                <div className="space-y-3">
                  <p>
                    Because APKs can be downloaded from anywhere, fake or modified copies circulating on
                    unofficial forums and file-sharing sites are the biggest real risk in this process —
                    not the act of sideloading itself. A modified APK can bundle malware, steal login
                    credentials, or simply not work correctly.
                  </p>
                  <p>A few checks worth running before you install anything:</p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Only download from a link or page you specifically navigated to yourself, not one sent to you unprompted by message or email.</li>
                    <li>Compare the file size against what the download page states — a size that&apos;s dramatically smaller or larger than expected is a red flag.</li>
                    <li>Check the app&apos;s requested permissions during install; an app asking for access far beyond what a games app should need is worth pausing over.</li>
                    <li>Be suspicious of copies promising unofficial &quot;mod&quot; features like guaranteed wins or hacked balances — these are common bait used to spread malicious files.</li>
                    <li>Keep a mobile antivirus or Play Protect scan active, and let it check the file after download, before you open it.</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="updating" title="Updating the APK Later">
              <div className="flex items-start gap-4">
                <span className="gold-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
                  <RefreshCw className="h-5 w-5" />
                </span>
                <div className="space-y-3">
                  <p>
                    Sideloaded apps don&apos;t auto-update through the Play Store the way store-installed
                    apps do, so it&apos;s worth periodically checking the download page for a newer version
                    rather than assuming you&apos;re always current. Installing a new APK version over an
                    existing install usually preserves your login and wallet, since your account data lives
                    on the server side rather than inside the app file itself — but it&apos;s still sensible
                    to make sure you&apos;re logged in and aware of your balance before updating.
                  </p>
                  <p>
                    If an update install fails outright, uninstalling the old version first sometimes
                    resolves signature-mismatch errors — just confirm your login details are current before
                    doing so, since you&apos;ll need them again after reinstalling.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="troubleshooting" title="Troubleshooting Install Failures">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileWarning className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">&quot;App not installed&quot;</strong> — often caused by
                    a partially downloaded file. Delete it and download again, checking the file size
                    matches what the page states before opening it.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">&quot;There was a problem parsing the package&quot;</strong>{" "}
                    — usually a corrupted or incomplete download. Re-download over a stable connection
                    rather than retrying the same file.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">Play Protect blocks the install</strong> — this is
                    expected for apps outside the store. If you trust the source, you can choose to install
                    anyway from the warning screen; if you&apos;re not confident in the source, don&apos;t
                    override it.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p>
                    <strong className="text-mist">Update install fails with a signature error</strong> —
                    means the new file was signed differently than your existing install. Uninstall the old
                    version first, then install the new file fresh.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Is downloading an APK directly less safe than the Play Store?</h3>
                  <p>It carries more responsibility on your end, since Android&apos;s store-side scanning doesn&apos;t apply — but it&apos;s not inherently unsafe as long as you download from a source you trust and verify the file as described above.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Will I lose my account if I reinstall the APK?</h3>
                  <p>No — your account, wallet, and progress are stored server-side and tied to your login credentials, not to the installed file, so reinstalling doesn&apos;t affect them.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">How do I know if I have the newest APK version?</h3>
                  <p>Check the version number listed on the official download page against what&apos;s shown in the app&apos;s own settings or about screen, and re-download if a newer version is listed.</p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-mist">Can I install this APK on a tablet?</h3>
                  <p>Yes, as long as it runs Android 7.0 or newer with enough free storage — the install steps are identical to a phone.</p>
                </div>
              </div>
            </Section>

            <p className="text-sm leading-relaxed text-mist-dim">
              For the broader download picture — including the browser-based alternative if you&apos;d
              rather skip installing anything — see our{" "}
              <Link href="/in999-download" className="text-gold underline underline-offset-2 hover:text-gold/80">
                IN999 download guide
              </Link>
              , or read our{" "}
              <Link href="/in999-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
                app overview
              </Link>{" "}
              for a tour of what&apos;s different once you&apos;re inside.
            </p>

            <BackToHome />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
