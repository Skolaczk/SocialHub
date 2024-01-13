'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { UsersList } from './UsersList';

import { getUsersByUsernameAction } from '@/actions';
import { useDebounce, useOnClickEsc, useOnClickOutside } from '@/hooks';
import { IUser } from '@/interfaces';

export const SearchBar = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<IUser[]>();
  const [selectedUserIndex, setSelectedUserIndex] = useState(-1);
  const debouncedValue = useDebounce(value, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    (async () => {
      if (debouncedValue) {
        setUsers(await getUsersByUsernameAction(debouncedValue));
      } else {
        setUsers([]);
      }
    })();
  }, [debouncedValue]);

  const closeList = () => {
    setUsers([]);
    inputRef.current?.blur();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      setSelectedUserIndex((prevIndex) =>
        Math.min(prevIndex + 1, users!.length - 1),
      );
    } else if (event.key === 'ArrowUp') {
      setSelectedUserIndex((prevIndex) => Math.max(prevIndex - 1, -1));
    } else if (event.key === 'Enter') {
      if (selectedUserIndex !== -1 && users![selectedUserIndex]) {
        const username = users![selectedUserIndex].username;
        router.push(`/profile/${username}`);
      }
    }
  };

  useOnClickEsc(closeList);
  useOnClickOutside(searchBarRef, closeList);

  return (
    <div ref={searchBarRef} className="relative flex flex-col items-center">
      <input
        ref={inputRef}
        type="text"
        name="username"
        id="username"
        placeholder="Search"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
        className="w-full max-w-2xl rounded-sm bg-neutral-100 p-2 text-sm dark:bg-neutral-500"
      />
      <UsersList users={users} selectedUserIndex={selectedUserIndex} />
    </div>
  );
};
