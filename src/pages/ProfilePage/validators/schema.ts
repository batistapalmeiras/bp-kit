// Libs
import { z } from 'zod';
// Local
import { text } from '../../../text';

export const profileSchema = z.object({
  name: z.string().min(3, 'Informe pelo menos nome e sobrenome'),
  email: z.string().email(text.validation.emailInvalid),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
