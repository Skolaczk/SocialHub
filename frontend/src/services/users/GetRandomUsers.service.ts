import { IUser } from '@/interfaces';
import { api } from '@/api';

export const getRandomUsers = async () => {
  const { data } = await api.get<IUser[]>('users');
  return data;
};
