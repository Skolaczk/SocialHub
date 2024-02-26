'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavigationItem } from './navigation-item';

import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  NotificationsIcon,
  ProfileIcon,
} from '@/assets/icons';

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
        icon={<HomeIcon isActive={pathname === '/'} />}
      />
      <NavigationItem
        label="Explore"
        href="/explore"
        order="order-2"
        icon={<ExploreIcon isActive={pathname === '/explore'} />}
      />
      <NavigationItem
        label="Notifications"
        href="/notifications"
        order="order-4"
        icon={<NotificationsIcon isActive={pathname === '/notifications'} />}
      />
      <NavigationItem
        label="Profile"
        href={`/profile/${username}`}
        order="order-5"
        icon={<ProfileIcon isActive={pathname === `/profile/${username}`} />}
      />
      <Link
        href="/create"
        className="order-3 md:order-last xl:w-full xl:rounded-sm xl:bg-primary xl:py-2 xl:text-center"
      >
        <span className="xl:hidden">
          <CreateIcon />
        </span>
        <span className="hidden text-white xl:block">Create</span>
      </Link>
    </nav>
  );
};
