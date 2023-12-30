'use client';

import { ArrowLeftIcon, XIcon } from '@/assets/icons';
import { useRouter } from 'next/navigation';

interface IProps {
  heading: 'post' | 'create post' | 'edit profile';
}

export const ModalHeader = ({ heading }: IProps) => {
  const router = useRouter();

  return (
    <div
      className={`flex items-center justify-between ${
        heading === 'post' && 'p-5'
      }`}
    >
      <button onClick={() => router.back()} className="md:invisible">
        <ArrowLeftIcon />
      </button>
      <h1 className="text-xl font-medium uppercase tracking-widest">
        {heading}
      </h1>
      <button onClick={() => router.back()} className="invisible md:visible">
        <XIcon isBig />
      </button>
    </div>
  );
};
