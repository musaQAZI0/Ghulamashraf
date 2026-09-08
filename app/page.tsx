import { SiteFrame } from "@/components/layout/SiteFrame";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturedArticlesSection } from "@/components/sections/FeaturedArticlesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { LatestAndMediaSection } from "@/components/sections/LatestAndMediaSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { TopicsSection } from "@/components/sections/TopicsSection";

export default function Home() {
  return (
    <SiteFrame>
      <HeroSection />
      <IntroSection />
      <FeaturedArticlesSection />
      <LatestAndMediaSection />
      <TopicsSection />
      <JourneySection />
      <QuoteSection />
      <ContactSection compact />
    </SiteFrame>
  );
}
