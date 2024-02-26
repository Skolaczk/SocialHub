import Link from 'next/link';

import { LogoDesktopIcon, LogoIcon } from '@/assets/icons';

export const Logo = () => {
  return (
    <Link href="/" className="hidden justify-center md:flex">
      <span className="xl:hidden">
        <LogoIcon />
      </span>
      <span className="hidden xl:block">
        <LogoDesktopIcon />
      </span>
    </Link>
  );
};
