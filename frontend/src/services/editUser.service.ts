import { api } from '@/api';
import { IUser } from '@/interfaces';

export const editUser = async (formData: FormData) => {
  return await api.patch<IUser>('users', formData);
};
