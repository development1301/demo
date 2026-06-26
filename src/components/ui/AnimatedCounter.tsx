"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function AnimatedCounter({ from = 0, to, duration = 2, className = "", suffix = "" }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [isInView, to, motionValue, duration]);

  return (
    <span className={className}>
      <motion.span ref={nodeRef}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
