import { IUser } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

export const getRandomUsers = async () => {
  const { data } = await fetchApi.get<IUser[]>('users');
  return data;
};
