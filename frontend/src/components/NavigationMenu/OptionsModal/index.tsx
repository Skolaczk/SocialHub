'use client';

import { useRef, useState } from 'react';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { MoonIcon } from '@/assets/icons';
import { useOnClickEsc, useOnClickOutside, useOpenClose } from '@/hooks';

export const OptionsModal = () => {
  const { theme, setTheme } = useTheme();
  const { isOpen, close, toggle } = useOpenClose();
  const [isSwitchMoved, setIsSwitchMoved] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const logOut = async () => {
    deleteCookie('token');
    router.push('/sign-in');
  };

  useOnClickEsc(close);

  useOnClickOutside(ref, close, 'button');

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        className="absolute bottom-5 hidden h-9 w-9 md:block"
      >
        <div className="h-0.5 w-3/4 rounded-full bg-black dark:bg-white" />
        <div className="my-2 h-0.5 w-full rounded-full bg-black dark:bg-white" />
        <div className="h-0.5 w-1/2 rounded-full bg-black dark:bg-white" />
      </button>
      <div
        ref={ref}
        className={`absolute bottom-20 left-5 hidden w-[225px] rounded-sm bg-neutral-100 dark:bg-neutral-500 md:block ${
          !isOpen ? 'md:hidden' : ''
        }`}
      >
        <div className="flex justify-between gap-8 border-b border-neutral-200 p-3 dark:border-neutral-300">
          <div className="flex items-center gap-2">
            <MoonIcon />
            <p>dark mode</p>
          </div>
          <button
            type="button"
            className="w-10 rounded-full bg-primary p-1"
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
              setIsSwitchMoved((prevState) => !prevState);
            }}
          >
            <div
              className={`h-3 w-3 transform rounded-full bg-white transition-all duration-300 ${
                isSwitchMoved ? 'translate-x-[19px]' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        <button
          onClick={logOut}
          type="button"
          className="w-full p-2 text-center text-sm text-black dark:text-white"
        >
          Log out
        </button>
      </div>
    </>
  );
};
