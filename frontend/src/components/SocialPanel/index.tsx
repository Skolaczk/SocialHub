'use client';

import { useToken } from '@/hooks';
import { useEffect, useState } from 'react';
import { getMe } from '@/services';
import { IUser } from '@/interfaces';

export const SocialPanel = () => {
  const [user, setUser] = useState<IUser>();
  const { setTokenToHeaders } = useToken();

  useEffect(() => {
    (async () => {
      setTokenToHeaders();
      const data = await getMe();
      setUser(data);
    })();
  }, [setTokenToHeaders]);

  return (
    <div className="hidden xl:block absolute top-0 right-0 h-screen border-neutral-100 dark:border-neutral-900 border-l py-8 px-6">
      <h1>{user?.username}</h1>
    </div>
  );
};
