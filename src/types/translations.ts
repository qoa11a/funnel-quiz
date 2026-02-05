import { useTranslations } from 'next-intl';

export type QuizTranslationKey = Parameters<ReturnType<typeof useTranslations<'Quiz'>>>[0];
