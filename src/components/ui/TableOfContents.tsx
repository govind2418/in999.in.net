import { ListTree } from "lucide-react";

export type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="card mx-auto mb-14 max-w-3xl p-6 sm:p-8"
    >
      <div className="mb-4 flex items-center gap-2">
        <ListTree className="h-4 w-4 text-gold" />
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          On This Page
        </h2>
      </div>
      <ol className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-baseline gap-2 text-sm text-mist-dim transition-colors hover:text-gold"
            >
              <span className="text-xs text-gold/70">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
