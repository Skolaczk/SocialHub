import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getUser = async (username: string) => {
  const { data } = await api.get<IUser>(`users/${username}`);
  return data;
};
