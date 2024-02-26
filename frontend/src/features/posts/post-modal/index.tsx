import { AddCommentForm } from './add-comment-form';
import { CommentsList } from './comments-list';

import { ModalTemplate } from '@/components/modal-template';
import { Post } from '@/features/posts/posts-list/post';
import { IPost } from '@/interfaces';
import { getComments } from '@/services';

export const PostModal = async (post: IPost) => {
  const comments = await getComments(post.id);

  return (
    <ModalTemplate
      heading="post"
      className="md:scrollbar max-w-xl overflow-y-scroll md:h-[90vh] md:overflow-y-auto"
    >
      <Post {...post} />
      <AddCommentForm postId={post.id} />
      {comments && <CommentsList comments={comments} />}
    </ModalTemplate>
  );
};
