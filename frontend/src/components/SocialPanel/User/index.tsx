'use client';

import { deleteCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        <Image
          src={user.image}
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
        <p>{user.username}</p>
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
