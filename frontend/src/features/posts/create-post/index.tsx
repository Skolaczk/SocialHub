import { CreatePostForm } from './create-post-form';

import { ModalTemplate } from '@/components/modal-template';

export const CreatePost = () => {
  return (
    <ModalTemplate
      heading="create post"
      className="max-w-3xl p-5 md:h-auto md:p-8"
    >
      <CreatePostForm />
    </ModalTemplate>
  );
};
