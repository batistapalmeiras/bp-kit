// Libs
import { z } from 'zod';
// Local
import { text } from '../../../text';

export const forgotPasswordSchema = z.object({
  email: z.string().email(text.validation.emailInvalid),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
