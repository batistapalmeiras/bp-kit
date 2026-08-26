// Libs
import { z } from 'zod';
// Local
import { text } from '../../../text';

export const passwordSchema = z
  .object({
    password: z.string().min(6, text.validation.passwordMin),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: text.validation.passwordMismatch,
    path: ['confirmPassword'],
  });

export type PasswordFormValues = z.infer<typeof passwordSchema>;
