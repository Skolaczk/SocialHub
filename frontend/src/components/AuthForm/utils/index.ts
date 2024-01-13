import { z, ZodObject, ZodString } from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/;

export const authSchema = (
  isSignUp: boolean,
): ZodObject<{
  email: ZodString;
  username?: ZodString;
  password: ZodString;
}> => {
  const baseSchema = z.object({
    email: z.string().nonempty('Email field is required').email(),
    password: z
      .string()
      .nonempty('Password field is required')
      .min(8, 'Password is too short')
      .max(50, 'Password is too long')
      .regex(
        passwordRegex,
        'The password must contain one lowercase, one uppercase letter, a number, or a special character',
      ),
  });

  if (isSignUp) {
    return baseSchema.extend({
      username: z
        .string()
        .nonempty('Username field is required')
        .min(5, 'Username is too short')
        .max(30, 'Username is too long'),
    });
  }

  return baseSchema;
};

export type AuthSchema = z.infer<ReturnType<typeof authSchema>>;
