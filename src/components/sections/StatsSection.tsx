"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";

export function StatsSection() {
  const t = useTranslations('StatsSection');
  
  const stats = [
    { num: 15, suffix: "+", label: t('stats.0') },
    { num: 10, suffix: "k+", label: t('stats.1') },
    { num: 50, suffix: "+", label: t('stats.2') },
    { num: 100, suffix: "%", label: t('stats.3') },
  ];

  return (
    <section className="py-24 px-6 lg:px-16 bg-bg-surface border-t border-border-light">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-border-light">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-accent-primary mb-4 tracking-tight drop-shadow-sm">
                <AnimatedCounter to={stat.num} duration={2 + (i * 0.5)} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-sans text-text-muted uppercase tracking-widest font-medium">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
