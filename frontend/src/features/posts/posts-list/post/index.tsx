import { PostContent } from './post-content';
import { PostHeader } from './post-header';

import { IPost } from '@/interfaces';

export const Post = (post: IPost) => {
  return (
    <div className="w-full max-w-xl border-neutral-100 dark:border-neutral-900 [&:not(:last-child)]:border-b">
      <PostHeader {...post} />
      <PostContent {...post} />
    </div>
  );
};
