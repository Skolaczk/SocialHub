import { IUser } from '@/interfaces';
import Image from 'next/image';

interface IProps {
  user: IUser;
}

export const UsersProfile = ({ user }: IProps) => {
  return (
    <div className="p-5 md:pt-0">
      <h1 className="text-center text-xl font-medium xs:hidden">
        {user.username}
      </h1>
      <div className="flex items-center justify-between xs:justify-start xs:gap-8">
        <Image
          src={user.image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-full w-16 h-16 xs:w-32 xs:h-32"
        />
        <div>
          <div className="hidden xs:flex gap-3">
            <h1 className="text-xl font-medium">{user.username}</h1>
            <button className="bg-primary rounded-sm py-1 px-5">Follow</button>
          </div>
          <div className="flex gap-3 xs:my-5 xs:gap-4">
            {Object.entries(user._count).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col items-center xs:flex-row-reverse"
              >
                <span className="font-bold">{value}</span>
                <span className="hidden xs:block mr-1">:</span>
                <span className="first-letter:uppercase">{key}</span>
              </div>
            ))}
          </div>
          <p className="hidden xs:inline text-sm">{user.bio}</p>
        </div>
      </div>
      <p className="text-sm mt-2 mb-5 xs:hidden">{user.bio}</p>
      <button className="w-full bg-primary rounded-sm p-1 xs:hidden">
        Follow
      </button>
    </div>
  );
};