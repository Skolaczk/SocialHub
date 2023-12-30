import { IUser } from '@/interfaces';
import { User } from '@/components/SocialPanel/User';

interface IProps {
  users: IUser[] | undefined;
  title: string;
  buttonText?: 'Log out' | 'Follow';
}

export const UsersList = ({ users, title, buttonText }: IProps) => {
  return (
    <div className="flex w-[211px] flex-col gap-5">
      <h3 className="font-medium text-neutral-200">{title}</h3>
      {users &&
        users.map((user) => (
          <User key={user.id} user={user} buttonText={buttonText} />
        ))}
    </div>
  );
};
