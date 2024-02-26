import { Logo } from './logo';
import { Navigation } from './navigation';
import { OptionsModal } from './options-modal';

import { getMe } from '@/services';

export const NavigationMenu = async () => {
  const { data: user } = await getMe();

  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-center border-t border-neutral-100 bg-white dark:border-neutral-900 dark:bg-black md:h-screen md:w-fit md:flex-col md:items-center md:justify-start md:border-r md:border-t-0 md:py-8 xl:items-start xl:px-6">
      <Logo />
      <Navigation username={user?.username!} />
      <OptionsModal />
    </div>
  );
};
