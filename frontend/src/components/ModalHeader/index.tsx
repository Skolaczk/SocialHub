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
      className={`flex justify-between items-center ${
        heading === 'post' && 'p-5'
      }`}
    >
      <button onClick={() => router.back()} className="md:invisible">
        <ArrowLeftIcon />
      </button>
      <h1 className="text-xl font-medium tracking-widest uppercase">
        {heading}
      </h1>
      <button onClick={() => router.back()} className="invisible md:visible">
        <XIcon isBig />
      </button>
    </div>
  );
};
