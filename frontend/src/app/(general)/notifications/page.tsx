import { NotificationsList } from '@/features';
import { getNotifications } from '@/services';

const Notifications = async () => {
  const notifications = await getNotifications();

  return (
    <>
      {notifications && (
        <div className="mb-14 mt-8 flex flex-col items-center md:ml-20 xl:ml-0">
          <h2 className="mb-2 text-xl font-medium uppercase tracking-widest">
            notifications
          </h2>
          <NotificationsList notifications={notifications} />
        </div>
      )}
    </>
  );
};

export default Notifications;
