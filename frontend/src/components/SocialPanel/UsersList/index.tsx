import { IUser } from '@/interfaces';
import { User } from '@/components/SocialPanel/User';

interface IProps {
  users: IUser[] | undefined;
  title: string;
  buttonText?: 'Log out' | 'Follow';
}

export const UsersList = ({ users, title, buttonText }: IProps) => {
  return (
    <div className="flex flex-col gap-5 w-[211px]">
      <h3 className="text-neutral-200 font-medium">{title}</h3>
      {users &&
        users.map((user) => (
          <User key={user.id} user={user} buttonText={buttonText} />
        ))}
    </div>
  );
};
