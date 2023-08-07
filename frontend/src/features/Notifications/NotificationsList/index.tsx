import { Notification } from '@/features/Notifications/NotificationsList/Notification';
import { INotification } from '@/interfaces';

interface IProps {
  notifications: INotification[];
}

export const NotificationsList = ({ notifications }: IProps) => {
  return (
    <div className="max-w-2xl w-full">
      {notifications?.length > 0 ? (
        notifications.map((notification) => (
          <Notification key={notification.id} {...notification} />
        ))
      ) : (
        <h2>No notifications</h2>
      )}
    </div>
  );
};
