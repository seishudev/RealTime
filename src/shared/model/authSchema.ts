import { z } from 'zod';

// The scheme of the registration form
export const signUpSchema = z.object({
  firstName: z.string().min(1, { message: 'Required field' }),
  lastName: z.string().min(1, { message: 'Required field' }),
  email: z.string().email(),
  password: z.string().min(6, { message: 'Must be at least 6 characters' })
});

export type signUpFields = z.infer<typeof signUpSchema>;

// The scheme of the authorization form
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: 'Must be at least 6 characters' })
});

export type signInFields = z.infer<typeof signInSchema>;
