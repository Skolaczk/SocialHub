import { User } from './User';
import { UsersList } from './UsersList';

import { getMe, getUsers } from '@/services';

export const SocialPanel = async () => {
  const user = await getMe();
  const randomUsers = await getUsers();

  return (
    <div className="fixed right-0 top-0 hidden h-screen flex-col gap-8 border-l border-neutral-100 px-6 py-8 dark:border-neutral-900 xl:flex">
      {user && <User user={user} isButton />}
      <UsersList users={randomUsers} title="Your friends" />
    </div>
  );
};
