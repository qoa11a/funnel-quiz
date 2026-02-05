import z from 'zod';

export const EmailSchema = z
  .string()
  .min(1, { message: 'Email is required' })
  .email({ message: 'Invalid email' });
