'use client';

import { useSearchParams } from 'next/navigation';
import { CreatePostForm } from './CreatePostForm';
import { ModalHeader } from '@/components';

export const CreatePost = () => {
  const isOpen = !!useSearchParams().get('create-post');

  return (
    <>
      {isOpen && (
        <div className="modal-background">
          <div className="modal p-5 max-w-3xl md:h-auto md:p-8">
            <ModalHeader heading="create post" />
            <CreatePostForm />
          </div>
        </div>
      )}
    </>
  );
};
