import React from "react";
import HeroSection from "@/components/spark/HeroSection";
import HowItWorksSection from "@/components/spark/HowItWorksSection";
import BenefitsSection from "@/components/spark/BenefitsSection";
import BentoFeaturesSection from "@/components/spark/BentoFeaturesSection";
import PersonalGuideSection from "@/components/spark/PersonalGuideSection";
import TestimonialsSection from "@/components/spark/TestimonialsSection";
import FooterSection from "@/components/spark/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#15103A] relative selection:bg-[#6A38EB] selection:text-white">
      <main className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 pt-3 sm:pt-5 pb-12">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <BentoFeaturesSection />
        <PersonalGuideSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </div>
  );
}
