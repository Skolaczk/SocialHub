import Link from 'next/link';

import { Icons } from '@/components';

export const Logo = () => {
  return (
    <Link href="/" className="hidden justify-center md:flex">
      <span className="xl:hidden">
        <Icons.logoSmall />
      </span>
      <span className="hidden xl:block">
        <Icons.logoLarge />
      </span>
    </Link>
  );
};
