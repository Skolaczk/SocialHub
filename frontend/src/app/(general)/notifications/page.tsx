import { NotificationsList } from '@/features';
import { getMe } from '@/services';
import { api } from '@/api';
import { cookies } from 'next/headers';

const Notifications = async () => {
  api.defaults.headers.common['Authorization'] = `Bearer ${
    cookies().get('token')?.value
  }`;
  const { notifications } = await getMe();

  return (
    <div className="flex flex-col items-center mt-8 mb-14 md:ml-20 xl:ml-0">
      <h2 className="text-xl font-medium tracking-widest uppercase mb-2">
        notifications
      </h2>
      <NotificationsList notifications={notifications} />
    </div>
  );
};

export default Notifications;
