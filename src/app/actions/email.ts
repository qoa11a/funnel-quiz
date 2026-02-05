'use server';

import { redirect } from '@/i18n/navigation';
import { getLocale } from 'next-intl/server';
import { EmailSchema } from '@/app/actions/email.schema';

export type EmailActionState = {
  ok: boolean;
  fieldErrors?: {
    email?: string;
  };
};

export async function submitEmailAction(
  _prevState: EmailActionState,
  formData: FormData,
): Promise<EmailActionState> {
  const email = String(formData.get('email') ?? '');

  const parsed = EmailSchema.safeParse(email);

  if (!parsed.success) {
    const first = parsed.error.issues[0];

    return {
      ok: false,
      fieldErrors: { email: first?.message ?? 'errors.invalid-email' },
    };
  }

  const locale = await getLocale();

  redirect({ href: '/thank-you', locale });

  return { ok: true };
}
