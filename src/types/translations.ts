import { useTranslations } from 'next-intl';

export type QuizTranslationKey = Parameters<ReturnType<typeof useTranslations<'Quiz'>>>[0];

export type EmailTranslationKey = Parameters<ReturnType<typeof useTranslations<'Email'>>>[0];
