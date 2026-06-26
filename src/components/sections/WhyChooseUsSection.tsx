"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";

const images = [
  { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop", label: "Advanced Technology" },
  { src: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop", label: "Bespoke Aesthetics" },
  { src: "https://images.unsplash.com/photo-1598440947619-2ce15f75f6af?q=80&w=800&auto=format&fit=crop", label: "Uncompromising Safety" },
];

export function WhyChooseUsSection() {
  const t = useTranslations('WhyChooseUsSection');

  return (
    <section className="py-32 px-6 lg:px-16 bg-bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="flex flex-col items-center text-center mb-16">
          <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-text-main">
            {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 rtl:left-auto rtl:right-8">
                  <h3 className="text-2xl font-heading text-white">{t(`labels.${i}`)}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
