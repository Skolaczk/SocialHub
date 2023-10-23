import { IUser } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { logOutAction } from '@/actions';

interface IProps {
  user: IUser;
  buttonText?: 'Log out' | 'Follow';
}

export const User = ({ user, buttonText }: IProps) => {
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
        <form action={buttonText === 'Log out' ? logOutAction : undefined}>
          <button type="submit" className="text-primary font-bold text-sm">
            {buttonText}
          </button>
        </form>
      )}
    </div>
  );
};
