import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PopularGames } from "@/components/sections/PopularGames";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WelcomeBonus } from "@/components/sections/WelcomeBonus";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { LatestUpdates } from "@/components/sections/LatestUpdates";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularGames />
        <WhyChooseUs />
        <WelcomeBonus />
        <DownloadApp />
        <LatestUpdates />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
