import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button, SheetClose } from '@/components';
import { TUser } from '@/features/users';
import { cn } from '@/lib/utils';

type TUserSearchResultProps = {
  users: TUser[];
  selectedUserIndex: number;
};

export const UserSearchResult = ({
  users,
  selectedUserIndex,
}: TUserSearchResultProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && selectedUserIndex !== -1) {
      const selectedUserElement = ref.current.children[
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
    <div ref={ref} className="scrollbar mt-4 h-full space-y-1 overflow-y-auto">
      {users.length ? (
        users.map(({ id, username, image }, idx) => (
          <SheetClose key={id} asChild>
            <Button
              tabIndex={-1}
              variant="ghost"
              className={cn(
                'w-full justify-start',
                selectedUserIndex === idx && 'bg-accent'
              )}
              asChild
            >
              <Link
                href={`/user/${username}`}
                className="flex items-center gap-3"
              >
                <Image
                  src={image}
                  alt="user avatar"
                  width={32}
                  height={32}
                  className="aspect-square rounded-full"
                />
                <p className="text-base font-normal">{username}</p>
              </Link>
            </Button>
          </SheetClose>
        ))
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <h3 className="text-lg font-medium">No users yet</h3>
          <p className="text-muted-foreground text-sm">
            Try searching for users
          </p>
        </div>
      )}
    </div>
  );
};
