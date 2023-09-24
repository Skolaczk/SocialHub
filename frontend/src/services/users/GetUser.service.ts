import { IUser } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

export const getUser = async (username: string) => {
  const { data } = await fetchApi.get<IUser>(`users/${username}`);
  return data;
};
