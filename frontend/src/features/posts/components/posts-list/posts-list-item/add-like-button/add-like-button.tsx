'use client';

import { useOptimistic } from 'react';

import { Icons, useToast } from '@/components';
import { addLikeAction, deleteLikeAction, TPost } from '@/features/posts';
import { cn } from '@/lib/utils';

export const AddLikeButton = ({
  isLiked,
  _count,
  id,
}: Pick<TPost, 'isLiked' | '_count' | 'id'>) => {
  const { toast } = useToast();
  const [optimisticIsLiked, setOptimisticIsLiked] = useOptimistic(
    isLiked,
    (state) => !state
  );
  const [optimisticLikesCount, setOptimisticLikesCount] = useOptimistic(
    _count.likes,
    (state, value: number) => {
      return state + value;
    }
  );

  const likeAction = async () => {
    setOptimisticIsLiked(!optimisticIsLiked);

    if (optimisticIsLiked) {
      setOptimisticLikesCount(-1);
      const error = await deleteLikeAction(id);

      if (error)
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: error.message,
        });
    } else {
      setOptimisticLikesCount(1);
      const error = await addLikeAction(id);

      if (error)
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: error.message,
        });
    }
  };

  return (
    <form action={likeAction}>
      <button className="flex items-center gap-1">
        <Icons.heart
          className={cn(
            'size-5',
            optimisticIsLiked && 'fill-primary stroke-primary'
          )}
        />
        {optimisticLikesCount}
      </button>
    </form>
  );
};
