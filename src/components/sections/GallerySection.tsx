"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";

const images = [
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop", // Clinic consultation room
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", // Woman facial treatment
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop", // Laser treatment device
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop", // Clear skin closeup
  "https://images.unsplash.com/photo-1598440947619-2ce15f75f6af?q=80&w=800&auto=format&fit=crop", // Skincare products
];

export function GallerySection() {
  const t = useTranslations('GallerySection');

  return (
    <section id="gallery" className="py-32 px-6 lg:px-16 bg-bg-surface border-t border-border-light">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="flex justify-between items-end mb-16">
          <div>
            <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-text-main">
              {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Main large image */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
            <img src={images[0]} alt="Modern dermatology clinic" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>
          
          {/* Top right small image */}
          <div className="rounded-3xl overflow-hidden relative group shadow-md">
            <img src={images[1]} alt="Luxury facial treatment" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>

          {/* Middle right small image */}
          <div className="rounded-3xl overflow-hidden relative group shadow-md">
            <img src={images[2]} alt="Advanced treatment equipment" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px] mt-6">
          <div className="rounded-3xl overflow-hidden relative group shadow-md">
            <img src={images[3]} alt="Radiant skin results" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>
          <div className="rounded-3xl overflow-hidden relative group shadow-md">
            <img src={images[4]} alt="Premium skincare products" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
