import { IUser } from '@/interfaces';
import { api, endpoints } from '@/api';

export const getMe = async () => {
  const { data } = await api.get<IUser>(endpoints.users.me);
  return data;
};
