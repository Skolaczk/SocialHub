import { IUser } from '@/interfaces';
import { api } from '@/api';

export const getUser = async (username: string) => {
  try {
    const { data } = await api.get<IUser>(`users/${username}`);
    return data;
  } catch (e) {}
};
