import { IUser } from '@/interfaces';
import { api } from '@/api';

export const getUsersByUsername = async (username: string) => {
  const { data } = await api.post<IUser[]>(`users?username=${username}`);
  return data;
};
