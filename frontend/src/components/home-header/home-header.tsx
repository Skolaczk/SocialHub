'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { Button, Icons } from '@/components';
import { logoutAction } from '@/features/auth';

export const HomeHeader = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const logout = async () => {
    await logoutAction();
    router.push('/sign-in');
  };

  return (
    <header className="my-5 flex w-full items-center justify-between px-4 md:hidden">
      <Icons.logo />
      <div className="-mr-2 space-x-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Icons.sun className="dark:hidden" />
          <Icons.moon className="hidden dark:block" />
        </Button>
        <Button variant="ghost" size="icon" onClick={logout}>
          <Icons.logOut />
        </Button>
      </div>
    </header>
  );
};
