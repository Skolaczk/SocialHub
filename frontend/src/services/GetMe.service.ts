import { api, endpoints } from '@/api';
import { INotification, IUser } from '@/interfaces';

interface IUserWithNotifications extends IUser {
  notifications: INotification[];
}

export const getMe = async () => {
  const { data } = await api.get<IUserWithNotifications>(endpoints.users.me);
  return data;
};
