import { ReactNode } from 'react';
import { NavigationMenu, SocialPanel } from '@/components';
import { CreatePost, PostModal } from '@/features';

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationMenu />
      {children}
      <SocialPanel />
      <PostModal />
      <CreatePost />
    </>
  );
};

export default GeneralLayout;
