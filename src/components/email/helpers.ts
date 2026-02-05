import { EmailTranslationKey } from '@/types/translations';

const zodMessageToTranslationKey: Record<string, EmailTranslationKey> = {
  'Email is required': 'errors.required',
  'Invalid email': 'errors.invalid-email',
};

export const getEmailErrorTranslationKey = (zodMessage: string) => {
  return zodMessageToTranslationKey[zodMessage] || 'errors.invalid-email';
};
