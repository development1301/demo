"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronUp } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations, useLocale } from 'next-intl';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo & Toggle */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-2xl font-medium tracking-wide text-text-main">
              {t('title')}
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-primary font-semibold">
              {t('subtitle')}
            </span>
          </Link>

          {/* Language Toggle */}
          <div className="relative flex flex-col items-center">
            <button 
              onClick={toggleLocale}
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-text-muted hover:text-accent-primary transition-colors px-3 py-1.5 rounded-full border border-border-light hover:border-accent-primary/30 hover:bg-accent-primary/5 relative z-10"
              title="Switch Language"
            >
              <Globe size={13} />
              <span>{locale === 'en' ? 'عربي' : 'EN'}</span>
            </button>
            
            {/* Bouncing Arrow */}
            {locale === 'en' && (
              <motion.div 
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-accent-primary flex flex-col items-center pointer-events-none hidden md:flex"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronUp size={14} strokeWidth={2.5} />
                <span className="text-[9px] uppercase tracking-widest font-semibold whitespace-nowrap mt-[-2px]">Switch Language</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {[
            { name: t('nav.home'), path: "/" },
            { name: t('nav.about'), path: "/about" },
            { name: t('nav.services'), path: "/services" },
            { name: t('nav.advanceMachinery'), path: "/advance-machinery" },
            { name: t('nav.contact'), path: "/contact" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className="text-[13px] font-medium tracking-wide text-text-main/90 hover:text-accent-primary transition-colors relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-primary scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/contact" className="hidden md:block px-6 py-2 rounded-full border border-border-dark text-text-main font-medium text-[13px] hover:bg-accent-primary hover:border-accent-primary hover:text-white transition-all shadow-sm">
            {t('bookAppointment')}
          </Link>
          
          <button 
            className="md:hidden text-text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[100%] left-0 right-0 bg-bg-surface border-b border-border-dark/50 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-2">
                {[
                  { name: t('nav.home'), path: "/" },
                  { name: t('nav.about'), path: "/about" },
                  { name: t('nav.services'), path: "/services" },
                  { name: t('nav.advanceMachinery'), path: "/advance-machinery" },
                  { name: t('nav.contact'), path: "/contact" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-heading text-text-main hover:text-accent-primary transition-colors py-3 border-b border-border-dark/20"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 text-center w-full bg-accent-primary text-white py-4 rounded-full font-medium tracking-wide hover:bg-accent-primary-hover transition-colors shadow-md"
              >
                {t('bookAppointment')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
