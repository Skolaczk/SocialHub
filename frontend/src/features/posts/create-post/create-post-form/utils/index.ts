import { z } from 'zod';

export const createPostSchema = z.object({
  content: z.string().nonempty('Content field is required'),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
