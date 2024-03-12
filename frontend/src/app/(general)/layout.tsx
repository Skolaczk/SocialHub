import { PropsWithChildren } from 'react';

import { Navbar } from '@/components';

const GeneralLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default GeneralLayout;
