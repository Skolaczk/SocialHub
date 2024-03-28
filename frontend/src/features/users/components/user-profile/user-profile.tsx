'use client';

import { useOptimistic } from 'react';
import Image from 'next/image';

import { Button, useToast } from '@/components';
import { addFollowAction, deleteFollowAction, TUser } from '@/features/users';

export const UserProfile = ({
  id,
  image,
  bio,
  _count,
  isCurrentUserProfile,
  username,
  isFollowing,
}: TUser) => {
  const { toast } = useToast();
  const [optimisticIsFollowing, setOptimisticIsFollowing] = useOptimistic(
    isFollowing,
    (state) => !state
  );
  const [optimisticFollowersCount, setOptimisticFollowersCount] = useOptimistic(
    _count.followers,
    (state, value: number) => {
      return state + value;
    }
  );

  const followAction = async () => {
    setOptimisticIsFollowing(!optimisticIsFollowing);

    if (optimisticIsFollowing) {
      setOptimisticFollowersCount(-1);
      const error = await deleteFollowAction(id, username);

      if (error)
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: error.message,
        });
    } else {
      setOptimisticFollowersCount(1);
      const error = await addFollowAction(id, username);

      if (error)
        toast({
          variant: 'destructive',
          title: 'Oops! Something went wrong.',
          description: error.message,
        });
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-2 px-5 sm:max-w-xs">
      <Image
        src={image}
        alt="user avatar"
        width={150}
        height={150}
        className="aspect-square rounded-full"
      />
      <h1 className="text-xl font-medium">{username}</h1>
      <div className="flex gap-5">
        {Object.entries(_count).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <span className="font-medium">
              {key === 'followers' ? optimisticFollowersCount : value}
            </span>
            <span className="first-letter:uppercase">{key}</span>
          </div>
        ))}
      </div>
      <p className="mb-2 text-center">{bio}</p>
      {isCurrentUserProfile ? (
        <Button className="w-full">Edit</Button>
      ) : (
        <form className="w-full" action={followAction}>
          <Button
            className="w-full"
            variant={optimisticIsFollowing ? 'secondary' : 'default'}
          >
            {optimisticIsFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        </form>
      )}
    </div>
  );
};
