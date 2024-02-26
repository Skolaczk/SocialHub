'use client';

import { ArrowLeftIcon, XIcon } from '@/assets/icons';

interface IProps {
  heading: 'post' | 'create post' | 'edit profile';
  goBack: () => void;
}

export const ModalHeader = ({ heading, goBack }: IProps) => {
  return (
    <div
      className={`flex items-center justify-between ${
        heading === 'post' && 'p-5'
      }`}
    >
      <button onClick={goBack} className="md:invisible">
        <ArrowLeftIcon />
      </button>
      <h1 className="text-xl font-medium uppercase tracking-widest">
        {heading}
      </h1>
      <button onClick={goBack} className="invisible md:visible">
        <XIcon isBig />
      </button>
    </div>
  );
};
