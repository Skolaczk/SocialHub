'use server';

import { createComment, getUsersByUsername, login } from '../services';
import { AuthSchema } from '@/components/AuthForm/utils';
import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { createPost } from '@/services';

export const getUsersByUsernameAction = async (username: string) => {
  return await getUsersByUsername(username);
};

export const loginAction = async (isSignUp: boolean, body: AuthSchema) => {
  const { data, error } = await login(isSignUp, body);

  if (error) return error.message;

  if (data) {
    const expirationDate = new Date();
    expirationDate.setFullYear(new Date().getFullYear() + 1);

    cookies().set('token', data.access_token, { expires: expirationDate });
  }
};

export const createCommentAction = async (
  formData: FormData,
  postId: number,
) => {
  const content = formData.get('content')?.toString();

  if (!content) return;

  await createComment({ content, postId });
  revalidateTag(`posts/${postId}`);
};

export const createPostAction = async (formData: FormData) => {
  await createPost(formData);
};
