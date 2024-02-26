'use client';

import { Icons } from '@/components';

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
        <Icons.arrowLeft />
      </button>
      <h1 className="text-xl font-medium uppercase tracking-widest">
        {heading}
      </h1>
      <button onClick={goBack} className="invisible md:visible">
        <Icons.x />
      </button>
    </div>
  );
};
