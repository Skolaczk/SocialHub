'use server';

import { revalidateTag } from 'next/cache';

import {
  addLike,
  createComment,
  deleteLike,
  TCreateCommentCommand,
} from '@/features/posts';

export const createCommentAction = async (body: TCreateCommentCommand) => {
  const { error } = await createComment(body);

  if (error) return error;

  revalidateTag(`comments/${body.postId}`);
};

export const addLikeAction = async (postId: number) => {
  try {
    const { error } = await addLike(postId);

    if (error) return error;
  } catch (e) {}

  revalidateTag('posts');
};

export const deleteLikeAction = async (postId: number) => {
  const { error } = await deleteLike(postId);

  if (error) return error;

  revalidateTag('posts');
};
