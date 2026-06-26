import { useTranslations } from "next-intl";

export default function AdvanceMachineryPage() {
  const t = useTranslations("AdvanceMachineryPage");

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-clip pt-32 px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-primary/5 blur-[150px] rounded-full pointer-events-none z-[-1]" />
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-main">
        {t('title')}
      </h1>
      <p className="text-lg text-text-muted max-w-2xl">
        {t('description')}
      </p>
    </div>
  );
}
