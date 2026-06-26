"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    name: "Aisha M.",
    treatment: "Laser Resurfacing",
    text: "The level of care and precision here is unmatched. My skin has never looked more radiant. The staff made me feel entirely comfortable throughout the entire process.",
    rating: 5
  },
  {
    name: "Sarah L.",
    treatment: "Botox & Fillers",
    text: "I wanted a very natural look, and our doctors delivered exactly that. Subtle, elegant, and I feel 10 years younger without looking 'done'.",
    rating: 5
  },
  {
    name: "Fatima K.",
    treatment: "PRP Hair Therapy",
    text: "After just three sessions, the difference is incredible. The clinic feels like a luxury spa rather than a medical facility. Highly recommend.",
    rating: 5
  },
  {
    name: "Noor A.",
    treatment: "Acne Protocol",
    text: "Years of struggling with my skin finally resolved. They take a truly scientific and holistic approach. Forever grateful for this team.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');
  const testimonialsData = [
    { name: t('testimonials.0.name'), treatment: t('testimonials.0.treatment'), text: t('testimonials.0.text'), rating: 5 },
    { name: t('testimonials.1.name'), treatment: t('testimonials.1.treatment'), text: t('testimonials.1.text'), rating: 5 },
    { name: t('testimonials.2.name'), treatment: t('testimonials.2.treatment'), text: t('testimonials.2.text'), rating: 5 },
    { name: t('testimonials.3.name'), treatment: t('testimonials.3.treatment'), text: t('testimonials.3.text'), rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 lg:px-16 bg-bg-surface border-t border-border-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto mb-16">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-text-main">
                {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-border-dark flex items-center justify-center text-text-main hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-colors">
                &larr;
              </button>
              <button className="w-12 h-12 rounded-full border border-border-dark flex items-center justify-center text-text-main hover:text-white hover:bg-accent-primary hover:border-accent-primary transition-colors">
                &rarr;
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Auto-sliding Carousel Track */}
      <div className="relative w-full overflow-hidden py-10 -mx-6 lg:-mx-16 px-6 lg:px-16">
        <motion.div 
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* Double array for infinite loop effect */}
          {[...testimonialsData, ...testimonialsData].map((t, i) => (
            <div 
              key={i} 
              className="w-[400px] bg-bg-surface border border-border-dark p-10 rounded-3xl shrink-0 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-main font-light leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-heading text-lg text-accent-primary">{t.name}</div>
                <div className="text-xs text-text-muted font-sans uppercase tracking-wider mt-1">{t.treatment}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
