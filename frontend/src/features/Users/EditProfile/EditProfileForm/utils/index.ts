import { z } from 'zod';

export const editUserSchema = z.object({
  username: z
    .string()
    .nonempty('Username field is required')
    .min(5, 'Username is too short')
    .max(30, 'Username is too long'),
  bio: z.string(),
});

export type EditUserSchema = z.infer<typeof editUserSchema>;
