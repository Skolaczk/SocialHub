import { api } from '@/api';
import { INotification, IUser } from '@/interfaces';

export interface IUserWithNotifications extends IUser {
  notifications: INotification[];
}

export const getMe = async () => {
  const { data } = await api.get<IUserWithNotifications>('users/me');
  return data;
};
