import { IUser } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  users: IUser[] | undefined;
}

export const UsersList = ({ users }: IProps) => {
  return (
    <div className="w-full max-w-2xl bg-neutral-100 dark:bg-neutral-500 absolute top-10 rounded-sm z-10">
      {users &&
        users.map(({ id, username, image }) => (
          <Link
            href={`/profile/${username}`}
            key={id}
            className="flex items-center gap-2 p-2 [&:not(:last-child)]:border-b border-neutral-100 dark:border-neutral-900"
          >
            <Image
              src={image}
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <p>{username}</p>
          </Link>
        ))}
    </div>
  );
};
