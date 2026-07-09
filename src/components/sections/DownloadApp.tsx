import Image from "next/image";
import { Smartphone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const APK_VERSION = "v3.2.1";
const APK_UPDATED = "July 2026";

export function DownloadApp() {
  return (
    <section id="download" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <span className="gold-text text-xs font-semibold uppercase tracking-[0.3em]">
              Download
            </span>
            <h2 className="text-3xl font-bold text-mist sm:text-4xl md:text-5xl">
              Take IN999 <span className="gold-text">Everywhere</span>
            </h2>
            <p className="max-w-md text-base text-mist-dim sm:text-lg">
              Install the official IN999 Android app for instant access,
              bonus alerts, and a faster experience.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="gold" href="/apk-download" icon={<Smartphone className="h-4 w-4" />}>
                Download APK
              </Button>
            </div>

            <p className="text-xs text-mist-dim">
              Latest version {APK_VERSION} · Updated {APK_UPDATED}
            </p>
          </div>

          {/* QR card */}
          <Card className="mx-auto flex w-full max-w-sm flex-col items-center gap-4 p-8 text-center">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl bg-white p-2">
              <Image
                src="/images/apk-qr.webp"
                alt="Scan to download the IN999 Android app"
                fill
                loading="lazy"
                sizes="160px"
                className="object-contain p-2"
              />
            </div>
            <p className="text-sm font-semibold text-mist">Scan to download</p>
            <p className="text-xs text-mist-dim">Android APK · {APK_VERSION}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
