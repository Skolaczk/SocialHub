'use client';

import { CommentsListItem } from './comments-list-item';

import { Button, Icons, Input } from '@/components';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { TComment } from '@/features/posts';
import { useMediaQuery } from '@/hooks';

type TPostsListItemCommentsProps = {
  comments: TComment[];
};

export const CommentsListDrawer = ({
  comments,
}: TPostsListItemCommentsProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

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
        {comments.length ? (
          <div className="scrollbar mt-2 h-[50vh] space-y-3 overflow-y-auto px-4">
            {comments.map((comment) => (
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
        <DrawerFooter className="flex-row">
          <Input placeholder="Add a comment" />
          <Button variant="ghost" size="icon">
            <Icons.sendHorizontal className="text-primary" />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
