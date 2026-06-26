import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { SkinAnalysisSection } from "@/components/sections/SkinAnalysisSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <HeroSection />
      <MarqueeSection />
      <SkinAnalysisSection showLearnMore={true} />
      <BeforeAfterSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
