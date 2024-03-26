'use server';

import { revalidateTag } from 'next/cache';

import { addFollow, deleteFollow, getUsersByUsername } from '@/features/users';

export const getUsersByUsernameAction = async (username: string) => {
  return await getUsersByUsername(username);
};

export const addFollowAction = async (userId: number, username: string) => {
  const { error } = await addFollow(userId);

  if (error) return error;

  revalidateTag(`users/${username}`);
};

export const deleteFollowAction = async (userId: number, username: string) => {
  const { error } = await deleteFollow(userId);

  if (error) return error;

  revalidateTag(`users/${username}`);
};
