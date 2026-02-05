import z from 'zod';

export const EmailSchema = z
  .string()
  .min(1, { message: 'Email is required' })
  .email({ message: 'Invalid email' });

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

  return { ok: true };
}
