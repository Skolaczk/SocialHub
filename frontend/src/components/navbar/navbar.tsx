import Link from 'next/link';

import { NavMenu } from './/nav-menu';
import { NavbarDropdownMenu } from './navbar-dropdown-menu';

import { Icons } from '@/components';
import { getMe } from '@/features/users';

export const Navbar = async () => {
  const { data: user } = await getMe();

  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-center border-t md:h-screen md:w-fit md:flex-col md:items-center md:justify-start md:border-r md:border-t-0 md:py-8 xl:w-full xl:max-w-xs xl:items-start">
      <Link href="/" className="hidden md:flex md:justify-center xl:mx-8">
        <Icons.logoSquare className="xl:hidden" />
        <Icons.logo className="hidden xl:block" />
      </Link>
      <NavMenu username={user?.username} />
      <NavbarDropdownMenu />
    </div>
  );
};
