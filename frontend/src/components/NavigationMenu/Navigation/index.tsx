import Link from 'next/link';
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

const navigationItems = [
  { href: '/', label: 'Home', icon: <HomeIcon />, order: 'order-1' },
  {
    href: '/explore',
    label: 'Explore',
    icon: <ExploreIcon />,
    order: 'order-2',
  },
  {
    href: '/notifications',
    label: 'Notifications',
    icon: <NotificationsIcon />,
    order: 'order-4',
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: <ProfileIcon />,
    order: 'order-5',
  },
];

export const Navigation = ({ username }: IProps) => {
  return (
    <nav className="flex justify-between items-center w-full max-w-md px-5 py-3 md:flex-col md:w-auto md:max-w-auto md:w-fit md:gap-8 md:mt-8 xl:items-start xl:p-0 xl:mt-12">
      {navigationItems.map(({ href, label, icon, order }) => (
        <Link
          key={label}
          href={href === '/profile' ? `/profile/${username}` : href}
          className={`flex items-center gap-3 xl:w-full xl:py-1 xl:pr-20 ${order}`}
        >
          {icon}
          <span className="hidden xl:block">{label}</span>
        </Link>
      ))}
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
