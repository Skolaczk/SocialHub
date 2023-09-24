import { IUser } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

export const getUsersByUsername = async (username: string) => {
  const { data } = await fetchApi.post<IUser[]>(`users?username=${username}`);
  return data;
};
