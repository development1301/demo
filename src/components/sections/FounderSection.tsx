"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";

export function FounderSection() {
  const t = useTranslations('FounderSection');

  return (
    <section id="founder" className="py-32 px-6 lg:px-16 bg-bg-surface relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <ScrollReveal>
              <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-text-main">
                {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span> {t('title_end')}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-lg text-text-muted">
                <p>
                  {t('p1')}
                </p>
                <p>
                  {t('p2')}
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-heading font-medium text-text-main">{t('name')}</h4>
                <p className="text-sm text-text-muted mt-1">{t('role')}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Video Placeholder */}
          <ScrollReveal delay={0.4} className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none transition-opacity duration-500 group-hover:bg-black/10" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 transition-transform duration-500 group-hover:scale-110 shadow-xl">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>

            {/* Simulated Video Element (Placeholder) */}
            <video 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
              controls
              muted
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  );
}
