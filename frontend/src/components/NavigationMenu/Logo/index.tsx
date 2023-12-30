import { LogoDesktopIcon, LogoIcon } from '@/assets/icons';
import Link from 'next/link';

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
