'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components';
import { logoutAction } from '@/features/auth';
import { TUser } from '@/features/users';

type TUserCardProps = Pick<TUser, 'username' | 'image'> & {
  isCurrentUser?: boolean;
};

export const UserCard = ({
  username,
  image,
  isCurrentUser,
}: TUserCardProps) => {
  const router = useRouter();

  const logout = async () => {
    await logoutAction();
    router.push('/sign-in');
  };

  return (
    <div className="flex items-center justify-between">
      <Link href={`/user/${username}`} className="flex items-center gap-3">
        <Image
          src={image}
          alt="user avatar"
          width={32}
          height={32}
          className="aspect-square rounded-full"
        />
        <p className="">{username}</p>
      </Link>
      {isCurrentUser && (
        <Button onClick={logout} variant="link">
          Log out
        </Button>
      )}
    </div>
  );
};
