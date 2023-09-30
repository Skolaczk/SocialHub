import { User } from './User';
import { UsersList } from './UsersList';
import { userMock } from '@/interfaces';

export const SocialPanel = () => {
  const user = userMock;
  const randomUsers = [userMock];

  return (
    <div className="hidden xl:flex flex-col gap-8 fixed top-0 right-0 h-screen border-neutral-100 dark:border-neutral-900 border-l py-8 px-6">
      {user && <User user={user} buttonText="Log out" />}
      <UsersList users={randomUsers} title="Your friends" />
      <UsersList
        users={randomUsers}
        title="Suggestions for you"
        buttonText="Follow"
      />
    </div>
  );
};
