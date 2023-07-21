import { ReactNode } from 'react';
import { NavigationMenu, SocialPanel } from '@/components';

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationMenu />
      {children}
      <SocialPanel />
    </>
  );
};

export default GeneralLayout;
