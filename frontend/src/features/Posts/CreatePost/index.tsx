'use client';

import { useSearchParams } from 'next/navigation';
import { CreatePostForm, CreatePostHeader } from './CreatePostComponents';

export const CreatePost = () => {
  const isOpen = !!useSearchParams().get('create-post');

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-neutral-500 bg-opacity-50 backdrop-blur-sm">
          <div className="w-full h-screen p-5 bg-white dark:bg-black max-w-3xl md:h-auto md:rounded md:p-8">
            <CreatePostHeader />
            <CreatePostForm />
          </div>
        </div>
      )}
    </>
  );
};
