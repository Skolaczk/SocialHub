import { TUser } from '@/features/users';
import { api } from '@/lib/api';

export const getMe = async () => {
  return await api<TUser>('users/me');
};
