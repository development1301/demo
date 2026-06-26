"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const services = [
  {
    title: "Skin Health & Acne",
    description: "Advanced solutions for clear, healthy skin. We address the root causes of acne for lasting results.",
    features: ["Deep Cleansing", "Chemical Peels", "LED Therapy"],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Botox & Fillers",
    description: "Subtle enhancements that restore youthful volume and beautifully maintain your natural expressions.",
    features: ["Dermal Fillers", "Neuromodulators", "Lip Enhancement"],
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Laser Treatments",
    description: "State-of-the-art laser technology to improve skin texture and stimulate new collagen production.",
    features: ["Skin Resurfacing", "Hair Removal", "Pigmentation"],
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Anti-Aging",
    description: "Comprehensive protocols designed to reverse the signs of aging and maintain a radiant complexion.",
    features: ["Microneedling", "PRP Therapy", "Medical Skincare"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
  }
];

function Service3DCard({ service, index }: { service: any, index: number }) {
  const t = useTranslations('ServicesSection');
  const serviceData = {
    title: t(`services.${index}.title`),
    description: t(`services.${index}.desc`),
    features: [t(`services.${index}.f0`), t(`services.${index}.f1`), t(`services.${index}.f2`)],
    image: service.image
  };

  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });
  
  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 15); // Max rotation degrees
    y.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href="/services">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative group w-full h-[450px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          
          <div 
            style={{ transform: "translateZ(40px)" }}
            className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
          >
            <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
              <h3 className="text-2xl font-heading font-medium text-white mb-2 tracking-wide drop-shadow-md">
                {serviceData.title}
              </h3>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm leading-relaxed mb-4 mt-2 font-light">
                    {serviceData.description}
                  </p>
                  
                  <div className="space-y-2 mb-2">
                    {serviceData.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                        <span className="text-xs font-medium tracking-wide text-white/90 uppercase">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}

export function ServicesSection() {
  const t = useTranslations('ServicesSection');

  return (
    <section id="treatments" className="py-32 px-6 lg:px-16 bg-bg-surface relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-border-dark pb-8">
            <div className="max-w-2xl">
              <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
              <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight text-text-main">
                {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {services.map((service, i) => (
            <Service3DCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-20 flex justify-center">
            <Link href="/services" className="group relative px-8 py-4 bg-transparent border border-border-dark rounded-full overflow-hidden flex items-center gap-4 hover:border-accent-primary transition-colors duration-500">
              <div className="absolute inset-0 bg-accent-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-sm font-medium tracking-[0.15em] uppercase text-text-main group-hover:text-white transition-colors duration-500">
                {t('button')}
              </span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-bg-surface border border-border-dark flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-accent-primary transition-all duration-500 text-text-main">
                <ArrowUpRight size={16} className="rtl:rotate-180" />
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
