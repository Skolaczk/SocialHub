'use client';

import { ArrowLeftIcon, XIcon } from '@/assets/icons';
import { useRouter } from 'next/navigation';

export const CreatePostHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <button onClick={() => router.back()} className="md:invisible">
        <ArrowLeftIcon />
      </button>
      <h1 className="text-xl font-medium tracking-widest uppercase">
        create post
      </h1>
      <button onClick={() => router.back()} className="invisible md:visible">
        <XIcon isBig />
      </button>
    </div>
  );
};
