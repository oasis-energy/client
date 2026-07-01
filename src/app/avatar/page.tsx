import { Metadata } from "next";
import { AvatarHero } from "@/components/avatar/AvatarHero";
import { ProductStory } from "@/components/avatar/ProductStory";
import { TechnologyOverview } from "@/components/avatar/TechnologyOverview";
import { ProductSpecs } from "@/components/avatar/ProductSpecs";
import { WindVsSolar } from "@/components/avatar/WindVsSolar";
import { Applications } from "@/components/avatar/Applications";
import { AwardsAndRecognition } from "@/components/avatar/AwardsAndRecognition";
import { GlobalMedia } from "@/components/avatar/GlobalMedia";
import { VideoShowcase } from "@/components/avatar/VideoShowcase";
import { InstallationGallery } from "@/components/avatar/InstallationGallery";
import { CTASection } from "@/components/avatar/CTASection";

export const metadata: Metadata = {
  title: "Avatar Wind Turbines | Premium Cleantech by Avant Garde",
  description: "Discover the Avatar Wind Turbine. Chosen by the UN amongst the Top 20 Cleantech Innovations. The most efficient small wind turbine for urban and remote locations.",
};

export default function AvatarPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <AvatarHero />
      <ProductStory />
      <TechnologyOverview />
      <ProductSpecs />
      <WindVsSolar />
      <Applications />
      <AwardsAndRecognition />
      <GlobalMedia />
      <VideoShowcase />
      <InstallationGallery />
      <CTASection />
    </div>
  );
}
