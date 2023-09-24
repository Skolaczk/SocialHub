import { INotification, IUser } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

interface IUserWithNotifications extends IUser {
  notifications: INotification[];
}

export const getMe = async () => {
  const { data } = await fetchApi.get<IUserWithNotifications>('users/me');
  return data;
};
