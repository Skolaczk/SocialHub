import { IUser } from '@/interfaces';
import { api, endpoints } from '@/api';

export const getRandomUsers = async () => {
  const { data } = await api.get<IUser[]>(`${endpoints.users.random}?count=5`);
  return data;
};
