"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations('CTASection');

  return (
    <section className="relative py-40 px-6 lg:px-16 overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium dermatology clinic atmosphere" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/80 to-transparent" />
      </div>

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="w-20 h-20 mx-auto rounded-full bg-white border border-accent-primary/30 flex items-center justify-center mb-8 shadow-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8 text-text-main">
            {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
          </h2>

          <MagneticButton>
            <Link href="/contact" className="inline-block px-10 py-5 rounded-full bg-accent-primary text-white font-sans font-semibold tracking-wide uppercase text-sm hover:bg-accent-primary-hover transition-colors shadow-2xl">
              {t('button')}
            </Link>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
