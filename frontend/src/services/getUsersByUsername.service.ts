import { api } from '@/api';
import { IUser } from '@/interfaces';

export const getUsersByUsername = async (
  username: string,
): Promise<IUser[]> => {
  return await api.post<IUser[]>(`users?username=${username}`);
};
