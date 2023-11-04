'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon } from '@/assets/icons';
import { logOutAction } from '@/actions';
import { useOnClickOutside, useOpenClose } from '@/hooks';

export const OptionsModal = () => {
  const { theme, setTheme } = useTheme();
  const { isOpen, close, toggle } = useOpenClose();
  const [isSwitchMoved, setIsSwitchMoved] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeModalByEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    },
    [close],
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModalByEsc]);

  useOnClickOutside(ref, close, 'button');

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        className="hidden w-9 h-9 absolute bottom-5 md:block"
      >
        <div className="h-0.5 w-3/4 rounded-full bg-black dark:bg-white" />
        <div className="h-0.5 w-full rounded-full bg-black dark:bg-white my-2" />
        <div className="h-0.5 w-1/2 rounded-full bg-black dark:bg-white" />
      </button>
      <div
        ref={ref}
        className={`bg-neutral-100 dark:bg-neutral-500 absolute bottom-20 rounded-sm ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        <div className="p-3 flex items-center gap-8 border-b border-neutral-200 dark:border-neutral-300">
          <div className="flex items-center gap-2">
            <MoonIcon />
            <p>dark mode</p>
          </div>
          <button
            type="button"
            className="bg-primary p-1 w-10 rounded-full"
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
              setIsSwitchMoved((prevState) => !prevState);
            }}
          >
            <div
              className={`bg-white rounded-full w-3 h-3 transition-all duration-300 transform ${
                isSwitchMoved ? 'translate-x-[19px]' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
        <form action={logOutAction}>
          <button
            type="submit"
            className="text-center w-full p-2 text-black dark:text-white text-sm"
          >
            Log out
          </button>
        </form>
      </div>
    </>
  );
};
