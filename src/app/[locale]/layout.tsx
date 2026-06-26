import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { StickyWhatsApp } from "@/components/ui/StickyWhatsApp";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-arabic" });

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const isArabic = locale === 'ar';
  
  const fontClass = isArabic 
    ? `${cairo.variable} ${playfair.variable} font-[family-name:var(--font-arabic)]`
    : `${inter.variable} ${playfair.variable} font-[family-name:var(--font-sans)]`;

  return (
    <html lang={locale} dir={dir}>
      <body className={`${fontClass} antialiased selection:bg-accent-primary/30 selection:text-text-main overflow-x-clip`}>
        <NextIntlClientProvider messages={messages}>
          <CursorGlow />
          <StickyWhatsApp />
          <SmoothScroll>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
