import { IPost } from '@/interfaces';
import { AddCommentForm, PostContent, PostHeader } from './PostComponents';

export const Post = (post: IPost) => {
  return (
    <div className="w-full max-w-xl [&:not(:last-child)]:border-b border-neutral-100 dark:border-neutral-900">
      <PostHeader {...post} />
      <PostContent {...post} />
      <AddCommentForm />
    </div>
  );
};
