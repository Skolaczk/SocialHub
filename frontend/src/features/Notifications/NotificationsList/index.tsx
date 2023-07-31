import { Notification } from '@/features/Notifications/NotificationsList/Notification';
import { INotification } from '@/interfaces';

interface IProps {
  notifications: INotification[];
}

export const NotificationsList = ({ notifications }: IProps) => {
  return (
    <div className="max-w-2xl w-full">
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  );
};
