import { CreatePostForm } from './CreatePostForm';

import { ModalHeader } from '@/components';

export const CreatePost = () => {
  return (
    <div className="modal-background">
      <div className="modal max-w-3xl p-5 md:h-auto md:p-8">
        <ModalHeader heading="create post" />
        <CreatePostForm />
      </div>
    </div>
  );
};
