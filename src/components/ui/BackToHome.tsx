import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackToHome() {
  return (
    <div className="mx-auto mt-4 flex max-w-3xl justify-center">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold/80"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to IN999 Game Hub Home
      </Link>
    </div>
  );
}
