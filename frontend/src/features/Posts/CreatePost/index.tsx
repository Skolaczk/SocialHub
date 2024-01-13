import { CreatePostForm } from './CreatePostForm';

import { ModalTemplate } from '@/components/ModalTemplate';

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
