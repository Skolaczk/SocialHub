'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IProps {
  label: string;
  href: string;
  order: string;
  icon: ReactNode;
}

export const NavigationItem = ({ label, href, order, icon }: IProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 xl:w-full xl:py-1 xl:pr-20 ${order}`}
    >
      {icon}
      <span
        className={`hidden xl:block  ${
          isActive ? 'text-primary-500 font-bold' : ''
        }`}
      >
        {label}
      </span>
    </Link>
  );
};
