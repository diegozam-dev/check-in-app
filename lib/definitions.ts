import * as z from 'zod';

export const LoginFormSchema = z.object({
  username: z.string().trim(),
  password: z
    .string()
    .min(8, { message: 'Debe contener al menos 8 carácteres.' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos un número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos un carácter especial.'
    })
    .trim()
});
