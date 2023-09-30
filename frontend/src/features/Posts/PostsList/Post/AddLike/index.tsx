import { LikeIcon } from '@/assets/icons';

interface IProps {
  id: number;
  isLiked: boolean;
  likes: number;
}

export const AddLike = ({ id, isLiked, likes }: IProps) => {
  return (
    <div className="flex items-center gap-1">
      <button type="button">
        <LikeIcon isLiked={isLiked} />
      </button>
      <p>{likes}</p>
    </div>
  );
};
