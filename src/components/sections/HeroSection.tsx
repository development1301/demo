"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Link } from "@/i18n/routing";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

// Animated word reveal component
function AnimatedWord({ children, delay = 0, className = "" }: { children: string; delay?: number; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "110%", rotate: 2 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const t = useTranslations('HeroSection');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Deep Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Smooth springs for buttery scrolling
  const smoothImageY = useSpring(imageY, { stiffness: 60, damping: 20 });
  const smoothTextY = useSpring(textY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] lg:h-[110vh] overflow-hidden flex items-center bg-bg-surface"
    >
      {/* Editorial 50/50 Split Image Container */}
      <div className="absolute top-0 end-0 w-full lg:w-1/2 h-full z-0 overflow-hidden shadow-2xl">
        <motion.div
          style={{ y: smoothImageY }}
          className="w-full h-[120%] -mt-[10%] relative"
        >
          <motion.img
            initial={{ scale: 1.1, filter: "brightness(0.9) blur(10px)" }}
            animate={{ scale: 1, filter: "brightness(0.95) blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="/hero-image.png"
            alt="Cinematic luxury treatment"
            className="w-full h-full object-cover"
          />
          {/* Subtle mobile gradient, desktop is a clean split */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-80 lg:hidden" />
        </motion.div>
      </div>

      {/* Main Typography Layer */}
      <motion.div 
        style={{ y: smoothTextY, opacity }} 
        className="relative z-10 w-full lg:w-1/2 h-full flex items-center px-6 lg:px-16 pointer-events-none bg-bg-surface lg:bg-transparent"
      >
        <div className="flex flex-col items-start w-full max-w-[600px] pt-32 lg:pt-0 pb-12 lg:pb-0 mx-auto lg:me-auto lg:ms-0 xl:ms-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 mb-8 pointer-events-auto"
          >
            <span className="w-10 h-px bg-accent-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-primary">
              {t('subtitle')}
            </span>
          </motion.div>

          <h1 className="font-heading font-medium tracking-tight leading-[1.05] text-text-main mb-8 pointer-events-auto">
            <div className="text-[14vw] lg:text-[110px] -ms-1 lg:-ms-2 relative z-20">
              <AnimatedWord delay={0.1}>{t('title1')}</AnimatedWord>
            </div>
            <div className="flex items-center mt-1 lg:mt-[-10px] relative z-20">
              <div className="text-[14vw] lg:text-[110px] text-accent-primary italic font-light">
                <AnimatedWord delay={0.2}>{t('title2')}</AnimatedWord>
              </div>
            </div>
            <div className="text-[9vw] lg:text-[56px] text-text-muted mt-4 lg:mt-2 relative z-10">
              <AnimatedWord delay={0.3}>{t('title3')}</AnimatedWord>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-text-main text-sm md:text-lg font-light leading-relaxed max-w-sm lg:max-w-md mb-12 pointer-events-auto lg:bg-transparent lg:backdrop-blur-none"
          >
            {t('description')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto"
          >
            <MagneticButton intensity={0.2}>
              <Link href="/contact" className="flex items-center gap-3 px-8 py-4 rounded-full bg-accent-primary text-white font-sans font-medium text-sm hover:bg-accent-primary-hover transition-colors shadow-lg shadow-accent-primary/20">
                {t('cta')}
              </Link>
            </MagneticButton>
          </motion.div>

        </div>
      </motion.div>

      {/* Abstract Animated Element - Overlapping */}
      <motion.div 
        className="absolute bottom-[15%] right-10 z-20 hidden lg:block opacity-40 mix-blend-overlay"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
      >
        <svg width="250" height="250" viewBox="0 0 200 200" fill="none">
          <motion.path 
            d="M100 0 C 155.228 0 200 44.7715 200 100 C 200 155.228 155.228 200 100 200 C 44.7715 200 0 155.228 0 100 C 0 44.7715 44.7715 0 100 0 Z" 
            stroke="white" 
            strokeWidth="0.5" 
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          />
          <motion.path 
            d="M100 20 C 144.183 20 180 55.8172 180 100 C 180 144.183 144.183 180 100 180 C 55.8172 180 20 144.183 20 100 C 20 55.8172 55.8172 20 100 20 Z" 
            stroke="white" 
            strokeWidth="0.5" 
            strokeDasharray="2 6"
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{ originX: "50%", originY: "50%" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
