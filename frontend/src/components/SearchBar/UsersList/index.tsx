import { IUser } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  users: IUser[] | undefined;
}

export const UsersList = ({ users }: IProps) => {
  return (
    <div className="absolute top-10 z-10 w-full max-w-2xl rounded-sm bg-neutral-100 dark:bg-neutral-500">
      {users &&
        users.map(({ id, username, image }) => (
          <Link
            href={`/profile/${username}`}
            key={id}
            className="flex items-center gap-2 border-neutral-100 p-2 dark:border-neutral-900 [&:not(:last-child)]:border-b"
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
