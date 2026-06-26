"use client";

import { motion } from "framer-motion";

export function StickyWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.01 2.014c-5.464 0-9.896 4.435-9.896 9.898 0 1.748.456 3.456 1.32 4.96L2 22l5.313-1.393c1.455.794 3.1 1.213 4.793 1.213h.004c5.463 0 9.893-4.435 9.893-9.897 0-2.65-1.03-5.143-2.905-7.017A9.855 9.855 0 0012.01 2.014z" />
      </svg>
      
      {/* Ping ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50" />
    </motion.a>
  );
}
