import { MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <div className="flex flex-col w-full overflow-x-clip pt-32 pb-20">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <section className="px-6 lg:px-16 mb-20 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-accent-primary text-sm font-medium tracking-wider uppercase mb-4">{t('tag')}</div>
            <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight text-text-main">
              {t('title_start')} <span className="italic font-light text-accent-primary">{t('title_italic')}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white rounded-3xl p-10 border border-border-dark shadow-lg flex flex-col items-center text-center hover:-translate-y-2 hover:border-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all duration-500 relative z-10">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">{t('location')}</h4>
              <a href="https://www.google.com/maps/place/Bella+Donna+Clinic+%D8%A8%D9%8A%D9%84%D8%A7%D8%AF%D9%88%D9%86%D8%A7+%D9%83%D9%84%D9%8A%D9%86%D9%83,+Salem+Sabah+Al+Salem+Al+Sabah+St%D8%8C+%D8%A7%D9%84%D9%85%D9%87%D8%A8%D9%88%D9%84%D8%A9+60001%E2%80%AD/@29.1477068,48.1271111,16z/data=!4m6!3m5!1s0x3fcf096ca3182bcd:0x3c281340834b9415!8m2!3d29.1477068!4d48.1271111!16s%2Fg%2F11l6g_lx1f?g_ep=Eg1tbF8yMDI2MDYxNF8wIOC7DCoASAJQAg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-lg font-medium leading-relaxed text-text-main hover:text-accent-primary transition-colors">
                {t('address1')}<br />
                {t('address2')}
              </a>
            </div>

            <div className="group bg-white rounded-3xl p-10 border border-border-dark shadow-lg flex flex-col items-center text-center hover:-translate-y-2 hover:border-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all duration-500 relative z-10">
                <MessageCircle size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">{t('whatsapp')}</h4>
              <p className="text-lg font-medium leading-relaxed text-text-main">
                +1 (555) 123-4567<br />
                {t('availability')}
              </p>
            </div>

            <div className="group bg-white rounded-3xl p-10 border border-border-dark shadow-lg flex flex-col items-center text-center hover:-translate-y-2 hover:border-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6 group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all duration-500 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
              <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">{t('instagram')}</h4>
              <a href="https://www.instagram.com/democlinic" target="_blank" rel="noopener noreferrer" className="text-lg font-medium leading-relaxed text-text-main hover:text-accent-primary transition-colors">
                @democlinic<br />
                {t('follow')}
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-24 bg-white rounded-3xl p-10 md:p-14 border border-border-dark shadow-xl relative overflow-hidden">
            {/* Subtle background flair */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-3xl font-heading mb-4 text-text-main">{t('form_title')}</h3>
              <p className="text-text-muted text-sm md:text-base">{t('form_desc')}</p>
            </div>
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{t('first_name')}</label>
                  <input type="text" className="w-full border-b border-border-dark px-0 py-2 focus:outline-none focus:border-accent-primary transition-colors bg-transparent text-text-main placeholder-text-muted/50" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{t('last_name')}</label>
                  <input type="text" className="w-full border-b border-border-dark px-0 py-2 focus:outline-none focus:border-accent-primary transition-colors bg-transparent text-text-main placeholder-text-muted/50" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{t('email')}</label>
                  <input type="email" className="w-full border-b border-border-dark px-0 py-2 focus:outline-none focus:border-accent-primary transition-colors bg-transparent text-text-main placeholder-text-muted/50" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{t('phone')}</label>
                  <input type="tel" className="w-full border-b border-border-dark px-0 py-2 focus:outline-none focus:border-accent-primary transition-colors bg-transparent text-text-main placeholder-text-muted/50" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{t('interest')}</label>
                <select className="w-full border-b border-border-dark px-0 py-2 focus:outline-none focus:border-accent-primary transition-colors bg-transparent text-text-main appearance-none">
                  <option value="" disabled selected className="text-text-muted">{t('select')}</option>
                  <option>{t('opt_skin')}</option>
                  <option>{t('opt_anti')}</option>
                  <option>{t('opt_laser')}</option>
                  <option>{t('opt_acne')}</option>
                  <option>{t('opt_other')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{t('message')}</label>
                <textarea rows={3} className="w-full border-b border-border-dark px-0 py-2 focus:outline-none focus:border-accent-primary transition-colors bg-transparent text-text-main placeholder-text-muted/50 resize-none" placeholder={t('message_ph')} />
              </div>
              
              <div className="pt-6">
                <button type="button" className="group flex items-center justify-center gap-3 w-full md:w-auto md:px-12 py-4 rounded-full bg-accent-primary text-white font-medium hover:bg-accent-primary-hover transition-all shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 mx-auto">
                  {t('submit')}
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:rotate-180" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
