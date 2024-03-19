import Link from 'next/link';

import { Button, Icons } from '@/components';
import { UserSearchSheet } from '@/features/users';

type TNavMenuProps = {
  username: string | undefined;
};

export const NavMenu = ({ username }: TNavMenuProps) => {
  return (
    <nav className="flex w-full max-w-md flex-row justify-between px-5 py-3 md:flex-col md:gap-3 md:px-3 md:py-10 xl:gap-5 xl:px-4">
      <Button variant="ghost" className="font-normal xl:justify-start" asChild>
        <Link href="/" className="flex items-center gap-4">
          <Icons.home />
          <span className="hidden text-base xl:block">Home</span>
        </Link>
      </Button>
      <UserSearchSheet />
      <Button
        variant="ghost"
        className="order-4 font-normal md:order-3 xl:justify-start"
        asChild
      >
        <Link href="/notifications" className="flex items-center gap-4">
          <Icons.bell />
          <span className="hidden text-base xl:block">Notifications</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="order-5 font-normal md:order-4 xl:justify-start"
        asChild
      >
        <Link href={`/user/${username}`} className="flex items-center gap-4">
          <Icons.user />
          <span className="hidden text-base xl:block">Profile</span>
        </Link>
      </Button>
      <Button
        variant="ghost"
        className="order-3 font-normal md:order-5 xl:justify-start"
        asChild
      >
        <Link href="/create" className="flex items-center gap-4">
          <Icons.plusSquare />
          <span className="hidden text-base xl:block">Create</span>
        </Link>
      </Button>
    </nav>
  );
};
