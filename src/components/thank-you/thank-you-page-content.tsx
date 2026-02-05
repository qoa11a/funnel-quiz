'use client';

import { Text, TitleH3 } from '@/components/ui/typography';
import Button from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Checkmark from '@/components/thank-you/ui/checkmark';
import { Download } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useRouter } from '@/i18n/navigation';

export default function ThankYouPageContent() {
  const t = useTranslations('ThankYou');
  const router = useRouter();

  const handleDownloadButtonClick = () => {
  };

  const handleButtonClick = () => {
    localStorage.clear();
    router.replace('/quiz/1');
  };

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col justify-center min-h-0 flex-1 pb-6 pt-36 px-5">
      <div className="flex flex-col">
        <TitleH3 className="font-niconne font-normal text-[36px] text-center leading-none">
          {t('title')}
        </TitleH3>

        <Text className="text-neutral-100 text-center">{t('subtitle')}</Text>

        <Checkmark />
      </div>

      <div className="flex flex-col mt-auto">
        <button
          type="button"
          className={cn(
            'flex items-center justify-center mx-auto',
            'cursor-pointer select-none',
            'p-4 gap-4 font-semibold text-[17px]',
            'transition-colors duration-150',
            'text-white',
            'hover:text-white/90 active:text-white/80',
            'outline-none focus-visible:text-white/90',
          )}
          onClick={handleDownloadButtonClick}
        >
          <Download className="size-10" />
          {t('downloadButton')}
        </button>


        <Button className="mt-4" onClick={handleButtonClick}>
          {t('button')}
        </Button>
      </div>
    </div>
  );
}
