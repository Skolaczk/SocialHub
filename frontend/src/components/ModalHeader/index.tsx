'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeftIcon, XIcon } from '@/assets/icons';
import { useOnClickEsc } from '@/hooks';

interface IProps {
  heading: 'post' | 'create post' | 'edit profile';
}

export const ModalHeader = ({ heading }: IProps) => {
  const router = useRouter();

  const goBack = () => router.back();

  useOnClickEsc(goBack);

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
