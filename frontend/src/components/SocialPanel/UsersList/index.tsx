import { User } from '@/components/SocialPanel/User';
import { IUser } from '@/interfaces';

interface IProps {
  users: IUser[] | undefined;
  title: string;
  isButton?: boolean;
}

export const UsersList = ({ users, title, isButton }: IProps) => {
  return (
    <div className="flex w-[211px] flex-col gap-5">
      <h3 className="font-medium text-neutral-200">{title}</h3>
      {users &&
        users.map((user) => (
          <User key={user.id} user={user} isButton={isButton} />
        ))}
    </div>
  );
};
