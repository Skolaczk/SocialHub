import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getUser = async (username: string): Promise<IUser> => {
  return await api.get<IUser>(`users/${username}`);
};
