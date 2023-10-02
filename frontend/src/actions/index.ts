'use server';

import { getUsersByUsername } from '../services';

export const getUsersByUsernameAction = async (username: string) => {
  return await getUsersByUsername(username);
};
