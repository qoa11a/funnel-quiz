import React from 'react';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { Locale, NextIntlClientProvider } from 'next-intl';
import '@/styles/globals.css';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'use-intl';
import { notFound } from 'next/navigation';

/*
 * Todo: Ask PM and designer if we can avoid using this font since it's used
 *  only for one text instance but it slightly increases the bundle size.
 */
const niconne = localFont({
  src: '../../../public/fonts/Niconne-Regular.ttf',
  variable: '--font-niconne',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<'/[locale]'>, 'children'>,
): Promise<Metadata> {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'LocaleLayout',
  });

  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${niconne.variable} ${nunitoSans.variable}`}
    >
      <body className="m-0 text-text-primary bg-bg-base flex flex-col h-dvh overflow-hidden">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
