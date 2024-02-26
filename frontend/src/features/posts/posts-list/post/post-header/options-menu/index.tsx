'use client';

import { useRef } from 'react';

import { useOnClickEsc, useOnClickOutside, useOpenClose } from '@/hooks';

interface IProps {
  id: number;
}

export const OptionsMenu = ({ id }: IProps) => {
  const { isOpen, open, close } = useOpenClose();
  const ref = useRef<HTMLButtonElement>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `${
        process.env.NODE_ENV === 'production'
          ? process.env.NEXT_PUBLIC_URL
          : process.env.NEXT_PUBLIC_URL
      }posts/${id}`,
    );
    close();
  };

  useOnClickEsc(close);
  useOnClickOutside(ref, close, 'button');

  return (
    <>
      <button type="button" onClick={open} className="flex gap-1">
        <div className="h-1 w-1 rounded-full bg-black dark:bg-white" />
        <div className="h-1 w-1 rounded-full bg-black dark:bg-white" />
        <div className="h-1 w-1 rounded-full bg-black dark:bg-white" />
      </button>
      <button
        onClick={copyToClipboard}
        ref={ref}
        className={`absolute right-2 top-12 rounded-sm bg-neutral-100 px-5 py-2 text-black dark:bg-neutral-500 dark:text-white ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        Copy post link
      </button>
    </>
  );
};
