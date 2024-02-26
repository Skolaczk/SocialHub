'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavigationItem } from './navigation-item';

import { Icons } from '@/components';

interface IProps {
  readonly username: string;
}

export const Navigation = ({ username }: IProps) => {
  const pathname = usePathname();

  return (
    <nav className="md:max-w-auto flex w-full max-w-md items-center justify-between px-5 py-3 md:mt-8 md:w-auto md:w-fit md:flex-col md:gap-8 xl:mt-12 xl:items-start xl:p-0">
      <NavigationItem
        label="Home"
        href="/"
        order="order-1"
        icon={
          <Icons.home className={pathname === '/' ? 'stroke-primary' : ''} />
        }
      />
      <NavigationItem
        label="Explore"
        href="/explore"
        order="order-2"
        icon={
          <Icons.compass
            className={pathname === '/explore' ? 'stroke-primary' : ''}
          />
        }
      />
      <NavigationItem
        label="Notifications"
        href="/notifications"
        order="order-4"
        icon={
          <Icons.bell
            className={pathname === '/notifications' ? 'stroke-primary' : ''}
          />
        }
      />
      <NavigationItem
        label="Profile"
        href={`/profile/${username}`}
        order="order-5"
        icon={
          <Icons.user
            className={
              pathname === `/profile/${username}` ? 'stroke-primary' : ''
            }
          />
        }
      />
      <Link
        href="/create"
        className="order-3 md:order-last xl:w-full xl:rounded-sm xl:bg-primary xl:py-2 xl:text-center"
      >
        <span className="xl:hidden">
          <Icons.create />
        </span>
        <span className="hidden text-white xl:block">Create</span>
      </Link>
    </nav>
  );
};
