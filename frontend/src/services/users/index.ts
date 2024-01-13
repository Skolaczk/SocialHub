import { api } from '@/api';
import { IUser } from '@/interfaces';

export const addFollow = async (followerId: number) => {
  await api.post(`follows/${followerId}`);
};

export const deleteFollow = async (followerId: number) => {
  await api.delete(`follows/${followerId}`);
};

export const editUser = async (formData: FormData) => {
  return await api.patch<IUser>('users', formData);
};

export const getMe = async () => {
  const { data, error } = await api.get<IUser>('users/me');
  return { data, error };
};

export const getUser = async (username: string) => {
  const { data } = await api.get<IUser>(`users/${username}`);
  return data;
};

export const getUsers = async () => {
  const { data } = await api.get<IUser[]>('users');
  return data;
};

export const getUsersByUsername = async (username: string) => {
  const { data } = await api.post<IUser[]>(`users?username=${username}`);
  return data;
};
