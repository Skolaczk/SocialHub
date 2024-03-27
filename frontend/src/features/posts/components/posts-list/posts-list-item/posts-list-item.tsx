import moment from 'moment/moment';
import Image from 'next/image';

import { CommentsListDrawer } from './comments-list-drawer';
import { PostsListItemDropdown } from './posts-list-item-dropdown';

import { Icons } from '@/components';
import { getComments, TPost } from '@/features/posts';
import { AddLikeButton } from '@/features/posts/components/posts-list/posts-list-item/add-like-button';
import { getMe, UserCard } from '@/features/users';

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
  const { data: currentUser } = await getMe();

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
        <AddLikeButton isLiked={isLiked} _count={_count} id={id} />
        {comments && (
          <CommentsListDrawer
            comments={comments}
            postId={id}
            user={currentUser!}
          />
        )}
      </div>
    </div>
  );
};
