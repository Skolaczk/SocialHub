'use client';

import { LikeIcon } from '@/assets/icons';
import { useState } from 'react';
import { createLike, deleteLike } from '@/services';

interface IProps {
  id: number;
  isLiked: boolean;
  likes: number;
}

export const AddLike = ({ id, isLiked, likes }: IProps) => {
  const [isLikedByUser, setIsLikedByUser] = useState(isLiked);
  const [likesCounter, setLikesCounter] = useState(likes);

  const handleLike = async () => {
    if (isLikedByUser) {
      await deleteLike(id);
      setLikesCounter((prevState) => prevState - 1);
      setIsLikedByUser(false);
    } else {
      await createLike(id);
      setLikesCounter((prevState) => prevState + 1);
      setIsLikedByUser(true);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button type="button" onClick={handleLike}>
        <LikeIcon isLiked={isLikedByUser} />
      </button>
      <p>{likesCounter}</p>
    </div>
  );
};
