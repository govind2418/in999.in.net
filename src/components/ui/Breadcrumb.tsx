import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { pageSchema } from "@/lib/seo";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  /** Route path for this page, e.g. "/in999-game" — used for the WebPage schema URL. */
  path: string;
};

export function Breadcrumb({ items, path }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];
  const currentPage = items[items.length - 1]?.label ?? "Home";
  const schema = pageSchema(currentPage, path, items);

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
