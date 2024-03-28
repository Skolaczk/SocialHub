import { z } from 'zod';

export const defaultValues = {
  email: 'test@gmail.com',
  password: 'Test123!',
};

export const loginFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Email is invalid'),
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

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
