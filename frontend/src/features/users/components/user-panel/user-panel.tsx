import { UserCard } from './user-card';

import { getMe } from '@/features/users';
import { getUsers } from '@/features/users/services/get-users';

export const UserPanel = async () => {
  const { data: user } = await getMe();
  const { data: users } = await getUsers();

  return (
    <div className="fixed bottom-0 right-0 z-10 hidden size-full max-w-xs border-l p-8 xl:block">
      {user && <UserCard {...user} isCurrentUser />}
      {users && (
        <div>
          <h3 className="text-muted-foreground mb-5 mt-10 font-medium">
            Your friends
          </h3>
          <div className="space-y-5">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
