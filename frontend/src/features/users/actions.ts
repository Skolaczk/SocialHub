'use server';

import { getUsersByUsername } from '@/features/users';

export const getUsersByUsernameAction = async (username: string) => {
  return await getUsersByUsername(username);
};
