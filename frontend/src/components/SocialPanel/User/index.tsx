'use client';

import { IUser } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

interface IProps {
  user: IUser;
  buttonText?: 'Log out' | 'Follow';
}

export const User = ({ user, buttonText }: IProps) => {
  const router = useRouter();

  const logOut = () => {
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
      {buttonText && (
        <button
          onClick={buttonText === 'Log out' ? logOut : undefined}
          className="text-primary font-bold text-sm"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};
