import { z } from 'zod';

export const defaultValues = {
  email: '',
  username: '',
  password: '',
};

export const loginFormSchema = z.object({
  email: z.string().min(1, 'Email field is required').email(),
  username: z
    .string()
    .min(1, 'Username is required')
    .min(5, 'Username is too short')
    .max(30, 'Username is too long'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password is too short')
    .max(50, 'Password is too long')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/,
      'Password must contain one lowercase, one uppercase letter, a number, or a special character'
    ),
});

export type TRegisterFormSchema = z.infer<typeof loginFormSchema>;
