import Link from 'next/link';
import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  NotificationsIcon,
  ProfileIcon,
} from '@/components/NavigationMenu/icons';

interface IProps {
  readonly username: string;
}

export const Menu = ({ username }: IProps) => {
  return (
    <nav className="flex justify-between items-center w-full max-w-md px-5 py-3 md:flex-col md:w-auto md:max-w-auto md:w-fit md:gap-8 md:mt-8 xl:items-start xl:p-0 xl:mt-12">
      <Link
        href="/"
        className="order-1 flex items-center gap-3 xl:w-full xl:py-1 xl:pr-20"
      >
        <HomeIcon />
        <span className="hidden xl:block">Home</span>
      </Link>
      <Link
        href="/explore"
        className="order-2 flex items-center gap-3 xl:w-full xl:py-1 xl:pr-20"
      >
        <ExploreIcon />
        <span className="hidden xl:block">Explore</span>
      </Link>
      <Link
        href="/notifications"
        className="order-4 flex items-center gap-3 xl:w-full xl:py-1 xl:pr-20"
      >
        <NotificationsIcon />
        <span className="hidden xl:block">Notifications</span>
      </Link>
      <Link
        href={`/user/${username}`}
        className="order-5 flex items-center gap-3 xl:w-full xl:py-1 xl:pr-20"
      >
        <ProfileIcon />
        <span className="hidden xl:block">Profile</span>
      </Link>
      <Link
        href="/create"
        className="order-3 md:order-last xl:bg-primary xl:py-2 xl:rounded-sm xl:w-full xl:text-center"
      >
        <span className="xl:hidden">
          <CreateIcon />
        </span>
        <span className="hidden xl:block">Create</span>
      </Link>
    </nav>
  );
};
