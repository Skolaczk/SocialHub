import Link from 'next/link';
import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  NotificationsIcon,
  ProfileIcon,
} from '@/assets/icons';
import { NavigationItem } from './NavigationItem';

interface IProps {
  readonly username: string;
}

export const Navigation = ({ username }: IProps) => {
  return (
    <nav className="flex justify-between items-center w-full max-w-md px-5 py-3 md:flex-col md:w-auto md:max-w-auto md:w-fit md:gap-8 md:mt-8 xl:items-start xl:p-0 xl:mt-12">
      <NavigationItem
        label="Home"
        href="/"
        order="order-1"
        icon={<HomeIcon />}
      />
      <NavigationItem
        label="Explore"
        href="/explore"
        order="order-2"
        icon={<ExploreIcon />}
      />
      <NavigationItem
        label="Notifications"
        href="/notifications"
        order="order-4"
        icon={<NotificationsIcon />}
      />
      <NavigationItem
        label="Profile"
        href={`/profile/${username}`}
        order="order-5"
        icon={<ProfileIcon />}
      />
      <Link
        href="/create"
        className="order-3 md:order-last xl:bg-primary xl:py-2 xl:rounded-sm xl:w-full xl:text-center"
      >
        <span className="xl:hidden">
          <CreateIcon />
        </span>
        <span className="hidden xl:block text-white">Create</span>
      </Link>
    </nav>
  );
};
