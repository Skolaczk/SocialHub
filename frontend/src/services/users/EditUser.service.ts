import { fetchApi } from '@/api/fetchApi';
import { IUser } from '@/interfaces';

export const editUser = async (body: FormData) => {
  return await fetchApi.patch<IUser>('users', body);
};
