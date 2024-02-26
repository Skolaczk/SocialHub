import Image from 'next/image';

interface IProps {
  image: string;
  username: string;
}

export const ProfileBadge = ({ image, username }: IProps) => {
  return (
    <>
      <Image
        src={image}
        alt="user photo"
        width={30}
        height={30}
        className="aspect-square rounded-full"
      />
      <p>{username}</p>
    </>
  );
};
