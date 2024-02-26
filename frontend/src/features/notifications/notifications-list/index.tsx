import { Notification } from './notification';

import { INotification } from '@/interfaces';

interface IProps {
  notifications: INotification[];
}

export const NotificationsList = ({ notifications }: IProps) => {
  return (
    <div className="w-full max-w-2xl">
      {notifications?.length > 0 ? (
        notifications.map((notification) => (
          <Notification key={notification.id} {...notification} />
        ))
      ) : (
        <h2 className="text-center">No notifications</h2>
      )}
    </div>
  );
};
