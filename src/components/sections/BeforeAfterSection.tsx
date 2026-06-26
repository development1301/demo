"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";

export function BeforeAfterSection() {
  const t = useTranslations('BeforeAfterSection');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="results" className="py-32 px-6 lg:px-16 bg-bg-surface border-t border-border-dark">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <ScrollReveal>
          <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">
            {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto font-light leading-relaxed">
            {t('desc')}
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal delay={0.2}>
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-border-light shadow-2xl"
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          >
            {/* After Image (right half of the source image) — shown as base */}
            <img 
              src="/before-after.jpg" 
              alt="After Treatment — Smooth, rejuvenated skin" 
              className="absolute inset-0 w-[200%] h-full object-cover"
              style={{ objectPosition: "right center", left: "-100%" }}
              draggable="false"
            />
            
            {/* Before Image (left half of the source image) — clipped by slider */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="/before-after.jpg" 
                alt="Before Treatment — Skin with texture concerns" 
                className="absolute inset-0 w-[200%] h-full object-cover"
                style={{ objectPosition: "left center" }}
                draggable="false"
              />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-accent-primary z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-accent-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider z-10">{t('before')}</div>
            <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-accent-primary/90 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider z-10">{t('after')}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
