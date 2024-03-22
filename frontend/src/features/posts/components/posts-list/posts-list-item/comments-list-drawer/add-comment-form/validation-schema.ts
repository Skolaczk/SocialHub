import { z } from 'zod';

export const defaultValues = {
  content: '',
};

export const addCommentFormSchema = z.object({
  content: z.string().min(1),
});

export type TAddCommentFormSchema = z.infer<typeof addCommentFormSchema>;
