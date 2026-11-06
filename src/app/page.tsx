import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Manifesto from "@/components/home/Manifesto";
import BentoServices from "@/components/home/BentoServices";
import ProcessSection from "@/components/home/ProcessSection";
import CredibilitySection from "@/components/home/CredibilitySection";
import ProjectCalculator from "@/components/home/ProjectCalculator";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <SelectedWork />
      <Manifesto />
      <BentoServices />
      <ProcessSection />
      <CredibilitySection />
      <ProjectCalculator />
    </div>
  );
}
