'use client';

import CircleLoader from '@/components/loader/ui/circle-loader';
import { Text } from '@/components/ui/typography';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export default function LoaderPageContent() {
  const t = useTranslations('Loader');
  const router = useRouter();

  const handleComplete = () => {
    router.push('/email');
  };

  return (
    <div className="max-w-2xl mx-auto w-full flex flex-col gap-10 min-h-0 flex-1 py-6 items-center justify-center">
      <CircleLoader
        durationMs={5000}
        onComplete={handleComplete}
      />

      <Text className="px-5 text-center font-semibold text-white max-w-54">
        {t('subtitle')}
      </Text>
    </div>
  );
}
