import moment from 'moment/moment';
import Image from 'next/image';

import { CommentsListDrawer } from './comments-list-drawer';
import { PostsListItemDropdown } from './posts-list-item-dropdown';

import { Icons } from '@/components';
import { getComments, TPost } from '@/features/posts';
import { UserCard } from '@/features/users';
import { cn } from '@/lib/utils';

export const PostsListItem = async ({
  id,
  user,
  content,
  image,
  createdAt,
  isLiked,
  _count,
}: TPost) => {
  const { data: comments } = await getComments(id);

  return (
    <div className="max-w-xl [&:not(:last-child)]:border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <UserCard {...user} />
          <Icons.dot className="text-muted-foreground size-5" />
          <span className="text-muted-foreground text-sm">
            {moment(createdAt).fromNow()}
          </span>
        </div>
        <PostsListItemDropdown id={id} />
      </div>
      <p className="px-4 pb-4">{content}</p>
      <Image src={image} alt="post image" width={600} height={600} />
      <div className="flex items-center justify-between p-4 text-sm">
        <span className="flex items-center gap-1">
          <Icons.heart
            className={cn('size-5', isLiked && 'fill-primary stroke-primary')}
          />
          {_count.likes}
        </span>
        {comments && <CommentsListDrawer comments={comments} />}
      </div>
    </div>
  );
};
