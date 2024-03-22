'use server';

import { revalidateTag } from 'next/cache';

import { createComment, TCreateCommentCommand } from '@/features/posts';

export const createCommentAction = async (body: TCreateCommentCommand) => {
  const { error } = await createComment(body);

  if (error) return error;

  revalidateTag(`comments/${body.postId}`);
};
