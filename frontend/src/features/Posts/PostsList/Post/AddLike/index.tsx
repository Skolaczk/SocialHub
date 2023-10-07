import { LikeIcon } from '@/assets/icons';
import { addLike, deleteLike } from '@/services';
import { revalidateTag } from 'next/cache';

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
          <LikeIcon isLiked={isLiked} />
        </button>
      </form>
      <p>{likes}</p>
    </div>
  );
};
