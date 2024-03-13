import { TUser } from '@/features/users';
import { api } from '@/lib/api';

export const getUsers = async () => {
  return await api<TUser[]>('users');
};
