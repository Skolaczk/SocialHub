import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { OptionsModal } from './OptionsModal';
import { getMe } from '@/services';

export const NavigationMenu = async () => {
  const { username } = await getMe();

  return (
    <div className="flex justify-center w-full fixed bottom-0 border-neutral-100 dark:border-neutral-900 border-t bg-white dark:bg-black md:flex-col md:border-t-0 md:border-r md:w-fit md:h-screen md:justify-start md:items-center md:py-8 xl:items-start xl:px-6">
      <Logo />
      <Navigation username={username} />
      <OptionsModal />
    </div>
  );
};
