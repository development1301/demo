import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-bg-surface pt-32 pb-10 px-6 lg:px-16 border-t border-border-light">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="font-heading text-4xl font-medium tracking-wide text-text-main">
                Demo
              </span>
              <span className="font-sans text-xs tracking-[0.4em] uppercase text-accent-primary font-semibold">
                Clinic
              </span>
            </div>
            <p className="text-text-muted font-light max-w-sm mb-8 leading-relaxed">
              {t('desc')}
            </p>
            <MagneticButton intensity={0.1}>
              <a href="mailto:contact@democlinic.com" className="inline-flex items-center gap-2 text-xl font-heading text-text-main hover:text-accent-primary transition-colors">
                contact@democlinic.com <ArrowUpRight size={20} />
              </a>
            </MagneticButton>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-main font-medium uppercase tracking-widest text-sm mb-6">{t('menu')}</h4>
            <ul className="space-y-4">
              {[
                { name: t('links.home'), path: "/" },
                { name: t('links.about'), path: "/about" },
                { name: t('links.services'), path: "/services" },
                { name: t('links.advanceMachinery'), path: "/advance-machinery" },
                { name: t('links.contact'), path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-text-muted hover:text-accent-primary transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-text-main font-medium uppercase tracking-widest text-sm mb-6">{t('connect')}</h4>
            <ul className="space-y-4">
              {[t('social.instagram'), t('social.facebook'), t('social.whatsapp'), t('social.linkedin')].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-accent-primary transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm font-light">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6 text-sm font-light text-text-muted">
            <a href="#" className="hover:text-accent-primary transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-accent-primary transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
