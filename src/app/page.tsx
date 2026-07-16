import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PopularGames } from "@/components/sections/PopularGames";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WelcomeBonus } from "@/components/sections/WelcomeBonus";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { AboutIn999 } from "@/components/sections/AboutIn999";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { FAQ } from "@/components/sections/FAQ";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

const HOME_TOC = [
  { id: "games", label: "Popular Games" },
  { id: "why-us", label: "Why Choose IN999" },
  { id: "bonus", label: "Welcome Bonus" },
  { id: "download", label: "Download the App" },
  { id: "about", label: "About IN999" },
  { id: "updates", label: "Latest Updates" },
  { id: "faq", label: "FAQ" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="px-5 sm:px-8">
          <TableOfContents items={HOME_TOC} />
        </div>
        <PopularGames />
        <WhyChooseUs />
        <WelcomeBonus />
        <DownloadApp />
        <AboutIn999 />
        <LatestUpdates />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
