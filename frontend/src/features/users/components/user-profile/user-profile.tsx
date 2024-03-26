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
  const [optimisticIsFollowing, changeOptimisticIsFollowing] = useOptimistic(
    isFollowing,
    (state) => !state
  );

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
            <span className="font-medium">{value}</span>
            <span className="first-letter:uppercase">{key}</span>
          </div>
        ))}
      </div>
      <p className="mb-2 text-center">{bio}</p>
      {isCurrentUserProfile ? (
        <Button className="w-full">Edit</Button>
      ) : (
        <form
          className="w-full"
          action={async () => {
            changeOptimisticIsFollowing(!optimisticIsFollowing);

            if (optimisticIsFollowing) {
              const error = await deleteFollowAction(id, username);

              if (error)
                toast({
                  variant: 'destructive',
                  title: 'Oops! Something went wrong.',
                  description: error.message,
                });
            } else {
              const error = await addFollowAction(id, username);

              if (error)
                toast({
                  variant: 'destructive',
                  title: 'Oops! Something went wrong.',
                  description: error.message,
                });
            }
          }}
        >
          <Button
            className="w-full"
            variant={isFollowing ? 'secondary' : 'default'}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        </form>
      )}
    </div>
  );
};
