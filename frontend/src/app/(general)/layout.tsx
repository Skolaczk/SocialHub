import { ReactNode } from 'react';
import { NavigationMenu, SocialPanel } from '@/components';
import { CreatePost } from '@/features';

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationMenu />
      {children}
      <SocialPanel />
      <CreatePost />
    </>
  );
};

export default GeneralLayout;
