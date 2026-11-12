import React from "react";
import ClientLogosSection from "@/components/spark/ClientLogosSection";
import HeroSection from "@/components/spark/HeroSection";
import HowItWorksSection from "@/components/spark/HowItWorksSection";
import BenefitsSection from "@/components/spark/BenefitsSection";
import BentoFeaturesSection from "@/components/spark/BentoFeaturesSection";
import AgencyProcessSection from "@/components/spark/AgencyProcessSection";
import TestimonialsSection from "@/components/spark/TestimonialsSection";
import FooterSection from "@/components/spark/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#15103A] relative selection:bg-[#6A38EB] selection:text-white">
      <main>
        <HeroSection />
        <ClientLogosSection />
        <HowItWorksSection />
        <BenefitsSection />
        <BentoFeaturesSection />
        <AgencyProcessSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </div>
  );
}
