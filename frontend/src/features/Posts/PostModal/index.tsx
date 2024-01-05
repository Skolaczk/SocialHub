import { AddCommentForm } from './AddCommentForm';
import { CommentsList } from './CommentsList';

import { ModalTemplate } from '@/components/ModalTemplate';
import { Post } from '@/features/Posts/PostsList/Post';
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
