import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { Introduction } from "@/components/introduction";
import { WhyPropCapital } from "@/components/why-propcapital";
import { IraPreview } from "@/components/ira-preview";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedProperties />
        <Introduction />
        <WhyPropCapital />
        <IraPreview />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}