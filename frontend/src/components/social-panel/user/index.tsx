'use client';

import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ProfileBadge } from '@/components';
import { IUser } from '@/interfaces';

interface IProps {
  user: IUser;
  isButton?: boolean;
}

export const User = ({ user, isButton }: IProps) => {
  const router = useRouter();

  const logOut = async () => {
    deleteCookie('token');
    router.push('/sign-in');
  };

  return (
    <div className="flex items-center justify-between">
      <Link
        href={`/profile/${user.username}`}
        className="flex items-center gap-2"
      >
        <ProfileBadge image={user.image} username={user.username} />
      </Link>
      {isButton && (
        <button
          type="button"
          onClick={logOut}
          className="text-sm font-bold text-primary"
        >
          Log out
        </button>
      )}
    </div>
  );
};
