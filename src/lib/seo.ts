import type { Metadata } from "next";
import { SITE } from "./constants";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    authors: [{ name: SITE.fullName, url: SITE.url }],
    openGraph: {
      type: "website",
      url,
      siteName: SITE.fullName,
      title,
      description,
      images: [{ url: "/images/in999-og-image.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/in999-og-image.jpg"],
    },
  };
}

// Build date used for `dateModified` in structured data — reflects the last time
// this static site was built/deployed, recomputed on every build.
const BUILD_DATE = new Date().toISOString();

export type BreadcrumbEntry = { label: string; href?: string };

// Combined BreadcrumbList + WebPage structured data for a single page. Emitted as one
// @graph so every page carries breadcrumb, author and dateModified signals together.
export function pageSchema(pageName: string, path: string, breadcrumbItems: BreadcrumbEntry[] = []) {
  const allCrumbs: BreadcrumbEntry[] = [{ label: "Home", href: "/" }, ...breadcrumbItems];
  const url = `${SITE.url}${path === "/" ? "" : path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: allCrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href ? `${SITE.url}${item.href === "/" ? "" : item.href}` : undefined,
        })),
      },
      {
        "@type": "WebPage",
        name: pageName,
        url,
        dateModified: BUILD_DATE,
        author: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
        publisher: { "@type": "Organization", name: SITE.fullName, url: SITE.url },
        isPartOf: { "@type": "WebSite", name: SITE.fullName, url: SITE.url },
      },
    ],
  };
}
