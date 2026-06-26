import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkinAnalysisSection } from "@/components/sections/SkinAnalysisSection";
import { CTASection } from "@/components/sections/CTASection";

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-x-clip pt-24">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <ServicesSection />
      <SkinAnalysisSection />
      <CTASection />
    </div>
  );
}
