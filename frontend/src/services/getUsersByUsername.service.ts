import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getUsersByUsername = async (username: string) => {
  const { data } = await api.post<IUser[]>(`users?username=${username}`);
  return data;
};
