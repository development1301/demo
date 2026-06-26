import { FounderSection } from "@/components/sections/FounderSection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-clip pt-24">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <FounderSection />
      <GallerySection />
    </div>
  );
}
