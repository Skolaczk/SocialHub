import { TNotification } from '@/features/notifications';
import { api } from '@/lib/api';

export const getNotifications = async () => {
  return await api<TNotification[]>('notifications');
};
