import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getUsers = async () => {
  const { data } = await api.get<IUser[]>('users');
  return data;
};
