"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export function SkinAnalysisSection({ showLearnMore = false }: { showLearnMore?: boolean }) {
  const t = useTranslations('SkinAnalysisSection');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  
  const stepsData = [
    { 
      num: "01", 
      ...t.raw('steps.0'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      )
    },
    { 
      num: "02", 
      ...t.raw('steps.1'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      )
    },
    { 
      num: "03", 
      ...t.raw('steps.2'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal translate: moves the track left as you scroll down
  // 0% scroll → 0% translate (step 1 visible)
  // 50% scroll → -33.33% translate (step 2 visible)
  // 100% scroll → -66.66% translate (step 3 visible)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", isRtl ? "66.666%" : "-66.666%"]);
  const smoothX = useSpring(x, { stiffness: 80, damping: 25 });

  // Progress circular
  const scrollProgressNumeric = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const circumference = 2 * Math.PI * 28; // radius = 28
  const dashoffset = useTransform(scrollProgressNumeric, [0, 1], [circumference, 0]);

  // Active step
  const activeStep = useTransform(scrollYProgress, (v) =>
    (v < 0.33 ? 0 : v < 0.66 ? 1 : 2) as number
  );
  const smoothActiveStep = useSpring(activeStep, { stiffness: 150, damping: 20 });

  return (
    <div ref={containerRef} className="h-auto md:h-[300vh]">
      <div className="md:sticky md:top-0 h-auto md:h-screen overflow-hidden flex flex-col bg-bg-surface py-16 md:py-0">
        {/* Header */}
        <div className="pt-16 md:pt-20 pb-4 px-6 lg:px-16 shrink-0">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <motion.span
                    className="w-2.5 h-2.5 rounded-full bg-accent-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium tracking-[0.15em] uppercase text-text-muted">
                    {t('tag')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium tracking-tight leading-[1.2] text-text-main">
                  {t('title_start')}{" "}
                  <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
                </h2>
                {showLearnMore && (
                  <div className="mt-8">
                    <Link href="/services" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border-dark bg-transparent text-text-main font-medium text-sm hover:border-accent-primary hover:text-accent-primary transition-all">
                      {t('button')} <ArrowUpRight size={16} className="rtl:rotate-180" />
                    </Link>
                  </div>
                )}
              </div>
              <p className="text-text-muted text-sm font-light leading-relaxed max-w-xs lg:text-end mt-6 lg:mt-0">
                {t('desc')}
              </p>
            </div>

            {/* Ultra-Premium Circular Progress Widget */}
            <div className="flex items-center gap-6 mt-8 border-t border-border-dark/30 pt-8">
              <div className="relative w-[72px] h-[72px] flex-shrink-0 group">
                {/* Ambient Glow */}
                <div className="hidden md:block absolute inset-0 bg-accent-primary/10 rounded-full blur-xl group-hover:bg-accent-primary/20 transition-colors duration-500" />
                
                <svg className="w-full h-full -rotate-90 relative z-10" viewBox="0 0 72 72">
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#F5D76E" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Subtle tick marks track */}
                  <circle
                    cx="36"
                    cy="36"
                    r="34"
                    fill="none"
                    stroke="rgba(212, 175, 55, 0.15)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />
                  {/* Inner smooth track */}
                  <circle
                    cx="36"
                    cy="36"
                    r="28"
                    fill="none"
                    stroke="rgba(0, 0, 0, 0.05)"
                    strokeWidth="1"
                  />
                  {/* Glowing animated progress ring */}
                  <motion.circle
                    cx="36"
                    cy="36"
                    r="28"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    style={{ strokeDashoffset: dashoffset }}
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  />
                </svg>
                
                {/* Number Dial */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="font-heading italic text-2xl text-accent-primary overflow-hidden h-8 flex items-center justify-center">
                    <motion.div
                      className="flex flex-col items-center"
                      style={{ y: useTransform(smoothActiveStep, (v) => `-${v * 2}rem`) }}
                    >
                      {stepsData.map((s, i) => (
                        <span key={i} className="h-8 flex items-center justify-center leading-none">
                          {s.num}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="relative h-14 flex-1 max-w-[300px] overflow-hidden">
                {stepsData.map((s, i) => {
                  const opacity = useTransform(smoothActiveStep, [i - 1, i, i + 1], [0, 1, 0]);
                  const y = useTransform(smoothActiveStep, [i - 1, i, i + 1], [24, 0, -24]);
                  const scale = useTransform(smoothActiveStep, [i - 1, i, i + 1], [0.95, 1, 0.95]);
                  const filter = useTransform(smoothActiveStep, [i - 1, i, i + 1], ["blur(4px)", "blur(0px)", "blur(4px)"]);

                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex flex-col justify-center"
                      style={{ opacity, y, scale, filter }}
                    >
                      <span className="text-base font-heading font-medium tracking-widest text-text-main uppercase whitespace-nowrap">
                        {s.title}
                      </span>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="w-6 h-[1px] bg-accent-primary/50" />
                        <span className="text-[11px] text-text-muted font-light tracking-[0.2em] uppercase">
                          {t('phase', { current: s.num, total: stepsData.length })}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Horizontal scrolling cards */}
        <div className="hidden md:block flex-1 min-h-0 relative overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ x: smoothX, width: "300%" }}
          >
            {stepsData.map((step, i) => {
              // Each card scales up when active
              const cardScale = useTransform(activeStep, (v) =>
                v === i ? 1 : 0.9
              );
              const cardOpacity = useTransform(activeStep, (v) =>
                v === i ? 1 : 0.4
              );

              return (
                <motion.div
                  key={i}
                  className="flex items-center justify-center px-6 lg:px-16"
                  style={{
                    width: "33.333%",
                    scale: cardScale,
                    opacity: cardOpacity,
                  }}
                >
                  <div className="max-w-xl w-full">
                    <div className="bg-white rounded-3xl p-10 md:p-14 border border-border-dark shadow-lg relative overflow-hidden">
                      {/* Watermark number */}
                      <div
                        className="absolute -top-6 -end-4 text-[140px] md:text-[180px] font-heading font-bold leading-none select-none pointer-events-none"
                        style={{
                          background: "linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #D4AF37 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          opacity: 0.08,
                        }}
                      >
                        {step.num}
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-8">
                          {step.icon}
                        </div>

                        {/* Step label */}
                        <div className="text-xs text-accent-primary tracking-[0.25em] uppercase font-semibold mb-3">
                          {t('step_label', { num: step.num })}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-heading font-medium text-text-main tracking-tight mb-4">
                          {step.title}
                        </h3>

                        {/* Accent line */}
                        <div className="w-12 h-[2px] bg-accent-primary mb-6" />

                        {/* Description */}
                        <p className="text-text-muted text-sm md:text-base font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: Native horizontal scrolling cards */}
        <div className="flex md:hidden flex-1 min-h-0 relative overflow-x-auto snap-x snap-mandatory pb-8 pt-4 gap-4 px-6 hide-scrollbar w-full">
          {stepsData.map((step, i) => (
            <div key={`mobile-step-${i}`} className="min-w-[85vw] snap-center flex flex-col justify-center">
              <div className="bg-white rounded-3xl p-8 border border-border-dark shadow-lg relative overflow-hidden h-full">
                {/* Watermark number */}
                <div
                  className="absolute -top-6 -end-4 text-[120px] font-heading font-bold leading-none select-none pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.08,
                  }}
                >
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <div className="text-xs text-accent-primary tracking-[0.25em] uppercase font-semibold mb-2">
                    {t('step_label', { num: step.num })}
                  </div>
                  <h3 className="text-xl font-heading font-medium text-text-main tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-accent-primary mb-4" />
                  <p className="text-text-muted text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
