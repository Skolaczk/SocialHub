'use client';

import { useState } from 'react';
import { MoonIcon } from '@/assets/icons';

export const OptionsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleOptions}
        type="button"
        className="hidden w-9 h-9 absolute bottom-5 md:block"
      >
        <div className="h-0.5 w-3/4 rounded-full bg-black dark:bg-white" />
        <div className="h-0.5 w-full rounded-full bg-black dark:bg-white my-2" />
        <div className="h-0.5 w-1/2 rounded-full bg-black dark:bg-white" />
      </button>
      <div
        className={`bg-neutral-100 dark:bg-neutral-500 absolute bottom-20 rounded-sm ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        <div className="p-3 flex items-center gap-8 border-b border-neutral-100 dark:border-neutral-300">
          <div className="flex items-center gap-1">
            <MoonIcon />
            <p>dark mode</p>
          </div>
          <button type="button" className="bg-primary p-1 w-12 rounded-full">
            <div className="bg-white rounded-full w-4 h-4" />
          </button>
        </div>
        <button className="text-center w-full p-2">Log out</button>
      </div>
    </>
  );
};
