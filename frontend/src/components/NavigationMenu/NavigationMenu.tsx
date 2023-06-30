import Link from 'next/link';
import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  LogoIcon,
  NotificationsIcon,
  ProfileIcon,
} from './icons';

export const NavigationMenu = () => {
  const username = 'michal123';

  return (
    <div className="flex justify-center w-full fixed bottom-0 border-neutral-500 border-t-2 md:flex-col md:border-t-0 md:border-r-2 md:w-fit md:h-screen md:justify-start md:items-center md:py-5">
      <Link href="/" className="hidden md:flex justify-center">
        <LogoIcon />
      </Link>
      <nav className="flex justify-between items-center w-full max-w-md px-5 py-3 md:flex-col md:w-auto md:max-w-auto md:w-fit md:gap-7 md:mt-8">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/explore">
          <ExploreIcon />
        </Link>
        <Link href="/create" className="md:order-5">
          <CreateIcon />
        </Link>
        <Link href="/notifications">
          <NotificationsIcon />
        </Link>
        <Link href={`/${username}`}>
          <ProfileIcon />
        </Link>
      </nav>
      <button
        type="button"
        className="hidden w-9 h-9 absolute bottom-5 md:block"
      >
        <div className="h-0.5 w-3/4 rounded-full bg-white" />
        <div className="h-0.5 w-full rounded-full bg-white my-2" />
        <div className="h-0.5 w-1/2 rounded-full bg-white" />
      </button>
    </div>
  );
};
