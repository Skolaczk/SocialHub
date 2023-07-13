'use client';

import { ChangeEvent, useState } from 'react';
import { getUsersByUsername } from '@/services';
import { IUser } from '@/interfaces';
import debounce from 'lodash.debounce';
import { UsersList } from './SearchBarComponents';

export const SearchBar = () => {
  const [users, setUsers] = useState<IUser[]>();

  const debouncedSearch = debounce(async (username: string) => {
    setUsers(await getUsersByUsername(username));
  }, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <div className="hidden md:flex flex-col items-center mt-8 md:ml-20 xl:ml-0 relative">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Search"
        onChange={handleChange}
        className="bg-neutral-100 dark:bg-neutral-500 w-full max-w-2xl rounded-sm p-2 text-sm"
      />
      <UsersList users={users} />
    </div>
  );
};
