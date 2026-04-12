import { HeroSection } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { FeaturedProgramsSection } from "@/components/sections/featured-programs";
import { DestinationsSection } from "@/components/sections/destinations";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ScholarshipsHighlightSection } from "@/components/sections/scholarships-highlight";
import { StudentStoriesSection } from "@/components/sections/student-stories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProgramsSection />
      <DestinationsSection />
      <HowItWorksSection />
      <ScholarshipsHighlightSection />
      <StudentStoriesSection />
    </>
  );
}
