import Link from 'next/link';
import { navigationsData } from './utils';

export const NavigationMenu = () => {
  return (
    <div className="flex justify-center w-full fixed bottom-0 border-t-neutral-500 border-t-2">
      <nav className="flex justify-between items-center w-full max-w-md px-5 py-3">
        {navigationsData.map(({ name, path, icon }) => (
          <Link href={path} key={name}>
            {icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};
