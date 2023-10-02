import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getUsers = async (): Promise<IUser[]> => {
  return await api.get<IUser[]>('users');
};
