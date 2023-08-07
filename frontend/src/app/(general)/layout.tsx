import { ReactNode } from 'react';
import { NavigationMenu, SocialPanel } from '@/components';
import { api } from '@/api';
import { cookies } from 'next/headers';

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${
    cookies().get('token')?.value
  }`;

  return (
    <>
      <NavigationMenu />
      {children}
      <SocialPanel />
    </>
  );
};

export default GeneralLayout;
