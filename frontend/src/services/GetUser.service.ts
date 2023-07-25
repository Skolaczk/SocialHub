import { IUser } from '@/interfaces';
import { api, endpoints } from '@/api';

export const getUser = async (username: string) => {
  const { data } = await api.get<IUser>(`${endpoints.users.base}/${username}`);
  return data;
};
