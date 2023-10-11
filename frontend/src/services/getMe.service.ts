import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getMe = async () => {
  const { data } = await api.get<IUser>('users/me');
  return data;
};
