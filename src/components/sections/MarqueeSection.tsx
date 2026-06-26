"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export function MarqueeSection() {
  const t = useTranslations('MarqueeSection');

  const treatments = [
    { text: t('treatments.dermatology'), icon: "🔬" },
    { text: t('treatments.laserResurfacing'), icon: "✨" },
    { text: t('treatments.botoxFillers'), icon: "💎" },
    { text: t('treatments.antiAging'), icon: "🌿" },
    { text: t('treatments.chemicalPeels'), icon: "🧴" },
    { text: t('treatments.prpTherapy'), icon: "🩸" },
    { text: t('treatments.skinRejuvenation'), icon: "✦" },
    { text: t('treatments.acneSolutions'), icon: "🌟" },
  ];

  // Double the array for seamless infinite loop
  const allItems = [...treatments, ...treatments, ...treatments];

  return (
    <div className="relative w-full py-0 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Animated gold glow blobs behind the strip */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[10%] w-60 h-60 rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)" }}
          animate={{ x: [0, 80, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-[15%] w-72 h-72 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)" }}
          animate={{ x: [0, -60, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[50%] w-48 h-48 rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)" }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ background: "linear-gradient(to right, #0D0D0D, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ background: "linear-gradient(to left, #0D0D0D, transparent)" }} />

      {/* Top gold accent line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent 10%, #D4AF37 50%, transparent 90%)" }} />

      {/* Marquee content */}
      <div className="relative py-8">
        <motion.div
          className="flex items-center gap-0 whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {allItems.map((item, i) => (
            <div key={i} className="flex items-center gap-0 shrink-0">
              {/* Treatment text */}
              <div className="flex items-center gap-4 px-8">
                <span className="text-xl md:text-2xl">{item.icon}</span>
                <span
                  className="text-lg md:text-2xl font-heading uppercase tracking-[0.15em] font-light"
                  style={{ color: "#E8E0D0" }}
                >
                  {item.text}
                </span>
              </div>

              {/* Decorative gold diamond separator */}
              <div className="flex items-center px-4">
                <motion.div
                  className="w-2 h-2 rotate-45"
                  style={{
                    backgroundColor: "#D4AF37",
                    boxShadow: "0 0 12px rgba(212,175,55,0.6), 0 0 24px rgba(212,175,55,0.3)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gold accent line */}
      <div className="w-full h-px" style={{ background: "linear-gradient(to right, transparent 10%, #D4AF37 50%, transparent 90%)" }} />
    </div>
  );
}
