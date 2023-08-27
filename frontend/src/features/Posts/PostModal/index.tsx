import { Post } from '@/features/Posts/PostsList/Post';
import { IPost } from '@/interfaces';
import { ModalHeader } from '@/components';
import { AddCommentForm } from './AddCommentForm';
import { CommentsList } from './CommentsList';

export const PostModal = (post: IPost) => {
  return (
    <>
      <div className="modal-background">
        <div className="modal max-w-xl overflow-y-scroll md:h-[90vh] md:overflow-y-auto md:scrollbar">
          <ModalHeader heading="post" />
          <Post {...post} />
          <AddCommentForm postId={post.id} />
          <CommentsList comments={post.comments} />
        </div>
      </div>
    </>
  );
};
