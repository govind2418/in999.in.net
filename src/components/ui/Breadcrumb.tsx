import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE } from "@/lib/constants";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE.url}${item.href === "/" ? "" : item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="relative px-5 pt-24 sm:px-8 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-1.5 text-xs text-mist-dim sm:text-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index === 0 ? (
                <Link
                  href={item.href ?? "/"}
                  className="flex items-center gap-1 transition-colors hover:text-gold"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </Link>
              ) : isLast ? (
                <span className="text-gold">{item.label}</span>
              ) : (
                <Link href={item.href ?? "#"} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-mist-dim/50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
