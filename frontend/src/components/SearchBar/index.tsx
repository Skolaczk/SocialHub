'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { UsersList } from './UsersList';

import { getUsersByUsernameAction } from '@/actions';
import { useDebounce } from '@/hooks';
import { IUser } from '@/interfaces';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState<IUser[]>();
  const debouncedValue = useDebounce(value, 300);

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

  return (
    <div className="relative flex flex-col items-center">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Search"
        onChange={handleChange}
        value={value}
        className="w-full max-w-2xl rounded-sm bg-neutral-100 p-2 text-sm dark:bg-neutral-500"
      />
      <UsersList users={users} />
    </div>
  );
};
