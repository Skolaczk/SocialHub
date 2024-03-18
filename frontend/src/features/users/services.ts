import { TUser } from '@/features/users';
import { api } from '@/lib/api';

export const getMe = async () => {
  return await api<TUser>('users/me');
};

export const getUsers = async () => {
  return await api<TUser[]>('users');
};

export const getUser = async (username: string) => {
  return await api<TUser>(`users/${username}`);
};
