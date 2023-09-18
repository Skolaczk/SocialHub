import { fetchApi } from '@/api';
import { INotification, IUser } from '@/interfaces';

interface IUserWithNotifications extends IUser {
  notifications: INotification[];
}

export const getMe = async () => {
  return await fetchApi.get<IUserWithNotifications>('users/me');
};
