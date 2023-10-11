import { api } from '@/api';
import { INotification } from '@/interfaces';

export const getNotifications = async () => {
  const { data } = await api.get<INotification[]>('notifications');
  return data;
};
