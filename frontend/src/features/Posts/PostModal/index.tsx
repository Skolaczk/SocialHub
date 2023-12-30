import { AddCommentForm } from './AddCommentForm';
import { CommentsList } from './CommentsList';

import { ModalHeader } from '@/components';
import { Post } from '@/features/Posts/PostsList/Post';
import { IPost } from '@/interfaces';
import { getComments } from '@/services';

export const PostModal = async (post: IPost) => {
  const comments = await getComments(post.id);

  return (
    <>
      <div className="modal-background">
        <div className="modal md:scrollbar max-w-xl overflow-y-scroll md:h-[90vh] md:overflow-y-auto">
          <ModalHeader heading="post" />
          <Post {...post} />
          <AddCommentForm postId={post.id} />
          {comments && <CommentsList comments={comments} />}
        </div>
      </div>
    </>
  );
};
