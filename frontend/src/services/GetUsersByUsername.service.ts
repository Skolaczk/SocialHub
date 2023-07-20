import { IUser } from '@/interfaces';
import { api, endpoints } from '@/api';

export const getUsersByUsername = async (username: string) => {
  const { data } = await api.post<IUser[]>(
    `${endpoints.users.base}?username=${username}`,
  );
  return data;
};
