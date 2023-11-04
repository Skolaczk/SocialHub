'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { IUser } from '@/interfaces';
import { UsersList } from './UsersList';
import { getUsersByUsernameAction } from '@/actions';
import { useDebounce } from '@/hooks';

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
    <div className="flex flex-col items-center relative">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Search"
        onChange={handleChange}
        value={value}
        className="bg-neutral-100 dark:bg-neutral-500 w-full max-w-2xl rounded-sm p-2 text-sm"
      />
      <UsersList users={users} />
    </div>
  );
};
