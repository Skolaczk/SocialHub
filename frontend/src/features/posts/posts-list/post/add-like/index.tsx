import { revalidateTag } from 'next/cache';

import { Icons } from '@/components';
import { addLike, deleteLike } from '@/services';

interface IProps {
  id: number;
  isLiked: boolean;
  likes: number;
}

export const AddLike = ({ id, isLiked, likes }: IProps) => {
  const addLikeAction = async () => {
    'use server';
    try {
      isLiked ? await deleteLike(id) : await addLike(id);
    } catch (e) {}

    revalidateTag(`posts/${id}`);
    revalidateTag(`posts`);
  };

  return (
    <div className="flex items-center gap-1">
      <form action={addLikeAction} className="flex items-center">
        <button type="submit">
          <Icons.heart className={isLiked ? 'fill-danger-600' : ''} />
        </button>
      </form>
      <p>{likes}</p>
    </div>
  );
};
