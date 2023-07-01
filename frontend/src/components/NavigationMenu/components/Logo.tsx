import { LogoDesktopIcon, LogoIcon } from '../icons';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="hidden md:flex justify-center">
      <span className="xl:hidden">
        <LogoIcon />
      </span>
      <span className="hidden xl:block">
        <LogoDesktopIcon />
      </span>
    </Link>
  );
};
