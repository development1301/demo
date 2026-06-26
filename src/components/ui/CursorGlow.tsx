"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[100] w-96 h-96 rounded-full mix-blend-screen bg-accent-primary/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"
      animate={{
        x: mousePosition.x - 192, // 192 is half of 384px (w-96)
        y: mousePosition.y - 192,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
}
