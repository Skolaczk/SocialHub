import Image from 'next/image';

import { Button } from '@/components';
import { TUser } from '@/features/users';

export const UserProfile = ({
  image,
  bio,
  _count,
  isCurrentUserProfile,
  username,
  isFollowing,
}: TUser) => {
  return (
    <div className="flex w-full flex-col items-center gap-2 sm:max-w-xs">
      <Image
        src={image}
        alt="user avatar"
        width={150}
        height={150}
        className="rounded-full"
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
        <Button
          className="w-full"
          variant={isFollowing ? 'secondary' : 'default'}
        >
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Button>
      )}
    </div>
  );
};
