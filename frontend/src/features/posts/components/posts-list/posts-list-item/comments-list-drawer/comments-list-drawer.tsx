'use client';

import { useOptimistic } from 'react';

import { AddCommentForm } from './add-comment-form';
import { CommentsListItem } from './comments-list-item';

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components';
import { TComment } from '@/features/posts';
import { TUser } from '@/features/users';
import { useMediaQuery } from '@/hooks';

type TPostsListItemCommentsProps = {
  comments: TComment[];
  postId: number;
  user: TUser;
};

export const CommentsListDrawer = ({
  comments,
  postId,
  user,
}: TPostsListItemCommentsProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: TComment) => [newComment, ...state]
  );

  if (isDesktop) return <span>{comments.length} comments</span>;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>{comments.length} comments</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Comments</DrawerTitle>
        </DrawerHeader>
        {optimisticComments.length ? (
          <div className="scrollbar mt-2 h-[50vh] space-y-3 overflow-y-auto px-4">
            {optimisticComments.map((comment) => (
              <CommentsListItem key={comment.id} {...comment} />
            ))}
          </div>
        ) : (
          <div className="flex h-[50vh] flex-col items-center justify-center">
            <h3 className="text-lg font-medium">No comments yet</h3>
            <p className="text-muted-foreground text-sm">
              Start the conversation.
            </p>
          </div>
        )}
        <DrawerFooter>
          <AddCommentForm
            user={user}
            postId={postId}
            addOptimisticComment={addOptimisticComment}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
