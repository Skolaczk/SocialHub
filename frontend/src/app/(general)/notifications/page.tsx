import { NotificationsList } from '@/features';
import { getNotifications } from '@/services';

const Notifications = async () => {
  const notifications = await getNotifications();

  return (
    <>
      {notifications && (
        <div className="flex flex-col items-center mt-8 mb-14 md:ml-20 xl:ml-0">
          <h2 className="text-xl font-medium tracking-widest uppercase mb-2">
            notifications
          </h2>
          <NotificationsList notifications={notifications} />
        </div>
      )}
    </>
  );
};

export default Notifications;
