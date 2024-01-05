import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IUser } from '@/interfaces';

interface IProps {
  users: IUser[] | undefined;
  selectedUserIndex: number;
}

export const UsersList = ({ users, selectedUserIndex }: IProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && selectedUserIndex !== -1) {
      const selectedUserElement = listRef.current.children[
        selectedUserIndex
      ] as HTMLDivElement;
      if (selectedUserElement) {
        selectedUserElement.scrollIntoView({
          block: 'nearest',
        });
      }
    }
  }, [selectedUserIndex]);

  return (
    <div
      ref={listRef}
      className="scrollbar absolute top-10 z-10 max-h-[500px] w-full max-w-2xl overflow-hidden overflow-y-auto rounded-sm bg-neutral-100 dark:bg-neutral-500"
    >
      {users &&
        users.map(({ id, username, image }, i) => (
          <Link
            href={`/profile/${username}`}
            key={id}
            tabIndex={-1}
            className={`${
              selectedUserIndex === i
                ? 'bg-neutral-200 dark:bg-neutral-400'
                : ''
            } flex items-center gap-2 border-neutral-100 p-2 hover:bg-neutral-200 dark:border-neutral-900 dark:hover:bg-neutral-400 [&:not(:last-child)]:border-b`}
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
