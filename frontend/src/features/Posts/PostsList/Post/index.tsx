import { IPost } from '@/interfaces';
import { PostHeader } from './PostHeader';
import { PostContent } from './PostContent';

export const Post = (post: IPost) => {
  return (
    <div className="w-full max-w-xl border-neutral-100 dark:border-neutral-900 [&:not(:last-child)]:border-b">
      <PostHeader {...post} />
      <PostContent {...post} />
    </div>
  );
};
