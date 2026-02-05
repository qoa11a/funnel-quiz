'use client';

import React, { useActionState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/cn';
import Input from '@/components/ui/input';
import { Text, TitleH3 } from '@/components/ui/typography';
import Button from '@/components/ui/button';
import {
  EmailActionState,
  EmailSchema,
  submitEmailAction,
} from '@/app/actions/email';
import { getEmailErrorTranslationKey } from '@/components/email/helpers';

const initialState: EmailActionState = { ok: false };

export default function EmailPageContent() {
  const t = useTranslations('Email');

  const [email, setEmail] = React.useState('');
  const [touched, setTouched] = React.useState(false);

  const [state, formAction, pending] = useActionState(
    submitEmailAction,
    initialState,
  );

  const clientParsed = EmailSchema.safeParse(email);
  const shouldShowClientError = touched && !clientParsed.success;

  const serverEmailErrorKey = state.fieldErrors?.email;
  const clientEmailErrorKey = !clientParsed.success
    ? clientParsed.error.issues[0]?.message
    : undefined;

  const errorKeyToShow = serverEmailErrorKey ?? (shouldShowClientError ? clientEmailErrorKey : undefined);
  const shouldShowError = Boolean(errorKeyToShow);

  const errorTranslationKey = getEmailErrorTranslationKey(errorKeyToShow || '');
  const isButtonDisabled = pending || !clientParsed.success;

  return (
    <form
      action={formAction}
      className="max-w-2xl mx-auto w-full flex flex-col justify-center min-h-0 flex-1 pb-6 pt-29 px-5"
    >
      <div className="flex flex-col">
        <TitleH3 className="text-center mb-3">{t('title')}</TitleH3>

        <Text className="text-center mb-14">{t('subtitle')}</Text>

        <div className="flex flex-col gap-1 mb-14">
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder={t('placeholder')}
            inputMode="email"
            autoComplete="email"
            aria-invalid={shouldShowError}
            aria-describedby="email-error"
            className={cn(shouldShowError && 'ring ring-error')}
          />

          <Text
            id="email-error"
            className={cn(
              'text-sm min-h-5',
              shouldShowError ? 'text-error' : 'invisible',
            )}
          >
            {shouldShowError ? t(errorTranslationKey) : 'placeholder'}
          </Text>
        </div>

        <Text className="text-center max-w-68 mx-auto text-xs">
          {t.rich('privacy-and-terms-disclaimer', {
            privacy: (chunks: React.ReactNode) => (
              <Link
                className="text-accent hover:underline"
                href="/privacy-policy"
              >
                {chunks}
              </Link>
            ),
            terms: (chunks: React.ReactNode) => (
              <Link
                className="text-accent hover:underline"
                href="/terms-of-use"
              >
                {chunks}
              </Link>
            ),
          })}
        </Text>
      </div>

      <Button
        className="mt-auto"
        disabled={isButtonDisabled}
        aria-disabled={isButtonDisabled}
      >
        {t('button')}
      </Button>
    </form>
  );
}
