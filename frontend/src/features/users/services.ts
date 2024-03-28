import { TUser } from '@/features/users';
import { api } from '@/lib/api';

export const getMe = async () => {
  return await api<TUser>('users/me');
};

export const getUsers = async () => {
  return await api<TUser[]>('users');
};

export const getUser = async (username: string) => {
  return await api<TUser>(`users/${username}`, {
    next: { tags: [`users/${username}`] },
  });
};

export const getUsersByUsername = async (username: string) => {
  return await api<TUser[]>(`users?username=${username}`, { method: 'POST' });
};

export const addFollow = async (userId: number) => {
  return await api(`follows/${userId}`, { method: 'POST' });
};

export const deleteFollow = async (userId: number) => {
  return await api(`follows/${userId}`, { method: 'DELETE' });
};
