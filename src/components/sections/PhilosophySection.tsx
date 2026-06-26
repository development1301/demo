"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const allImages = [
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
    alt: "Woman with radiant glowing skin",
    aspectRatio: "aspect-[4/5]",
    speed: 0.8, // Parallax speed multiplier
    offset: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    alt: "Professional facial treatment application",
    aspectRatio: "aspect-square",
    speed: 1.2,
    offset: 100, // Margin top
  },
  {
    src: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop",
    alt: "Dermal filler treatment",
    aspectRatio: "aspect-[3/4]",
    speed: 0.9,
    offset: -50,
  },
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop",
    alt: "Dermatology consultation",
    aspectRatio: "aspect-[4/3]",
    speed: 1.1,
    offset: 50,
  },
];

// Parallax Image Component
function ParallaxImage({ image, containerProgress }: { image: typeof allImages[0], containerProgress: any }) {
  // Map container progress (0 to 1) to a Y pixel translation based on speed
  const yOffset = useTransform(containerProgress, [0, 1], [150 * image.speed, -150 * image.speed]);
  const smoothY = useSpring(yOffset, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      style={{ 
        y: smoothY,
        marginTop: `${image.offset}px` 
      }}
      className={`w-full overflow-hidden rounded-[30px] shadow-2xl relative ${image.aspectRatio}`}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export function PhilosophySection() {
  const t = useTranslations('PhilosophySection');
  
  const pillars = [
    t('pillars.0'),
    t('pillars.1'),
    t('pillars.2'),
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dynamic Background Color Shifting
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#F8F9FA", "#FDF6EE", "#F8F9FA"]
  );

  return (
    <motion.section
      ref={containerRef}
      id="philosophy"
      style={{ backgroundColor }}
      className="relative w-full min-h-screen py-32 px-6 lg:px-16 overflow-hidden transition-colors duration-1000"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Left: Sticky Text */}
          <div className="relative">
            <div className="lg:sticky lg:top-40 h-fit pb-16 lg:pb-0 z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-accent-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-primary">
                  {t('tag')}
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-[1.1] mb-8 text-text-main">
                {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
              </h2>

              <p className="text-lg md:text-xl leading-relaxed max-w-lg mb-12 font-light text-text-muted">
                {t('desc')}
              </p>

              <ul className="flex flex-col gap-6 items-start text-left">
                {pillars.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.15 * i, duration: 0.6, ease: "easeOut" }}
                    className="flex items-center gap-4 text-base md:text-lg text-text-main font-medium"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#2B78AD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Scrolling Parallax Images */}
          <div className="relative z-0">
            {/* Ambient blur behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
            
            <div className="flex flex-col gap-16 lg:gap-32 pt-10 lg:pt-32 pb-32">
              {allImages.map((img, i) => (
                <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className="w-[85%] sm:w-[75%] lg:w-[80%]">
                    <ParallaxImage image={img} containerProgress={scrollYProgress} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
