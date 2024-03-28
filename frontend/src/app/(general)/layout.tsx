import { PropsWithChildren } from 'react';

import { Navbar } from '@/components';
import { UserPanel } from '@/features/users';

const GeneralLayout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <UserPanel />
    </>
  );
};

export default GeneralLayout;
