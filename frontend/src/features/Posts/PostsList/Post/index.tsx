import { IPost } from '@/interfaces';
import { PostHeader } from './PostHeader';
import { PostContent } from './PostContent';

export const Post = (post: IPost) => {
  return (
    <div className="w-full max-w-xl [&:not(:last-child)]:border-b border-neutral-100 dark:border-neutral-900">
      <PostHeader {...post} />
      <PostContent {...post} />
    </div>
  );
};
