'use client';

import { useToken } from '@/hooks';
import { useEffect, useState } from 'react';
import { getMe, getRandomUsers } from '@/services';
import { IUser } from '@/interfaces';
import { User, UsersList } from './SocialPanelComponents';

export const SocialPanel = () => {
  const [user, setUser] = useState<IUser>();
  const [randomUsers, setRandomUsers] = useState<IUser[]>();
  const { setTokenToHeaders } = useToken();

  setTokenToHeaders();

  useEffect(() => {
    (async () => {
      const data = await getMe();
      setUser(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getRandomUsers();
      setRandomUsers(data);
    })();
  }, []);

  return (
    <div className="hidden xl:flex flex-col gap-8 absolute top-0 right-0 h-screen border-neutral-100 dark:border-neutral-900 border-l py-8 px-6">
      {user && <User user={user} buttonText="Log out" />}
      <UsersList users={randomUsers} title="Your friends" buttonText="Show" />
      <UsersList
        users={randomUsers}
        title="Suggestions for you"
        buttonText="Follow"
      />
    </div>
  );
};
