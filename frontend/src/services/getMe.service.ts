import { api } from '@/api';
import { INotification, IUser } from '@/interfaces';

interface IUserWithNotifications extends IUser {
  notifications: INotification[];
}

export const getMe = async (): Promise<IUserWithNotifications> => {
  return await api.get<IUserWithNotifications>('users/me');
};
