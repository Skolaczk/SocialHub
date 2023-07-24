import { getUser } from '@/services';

interface IProps {
  params: { slug: string };
}

const Profile = async ({ params }: IProps) => {
  const user = await getUser(params.slug);

  return (
    <div>
      <h1>elo, {user.username}</h1>
    </div>
  );
};

export default Profile;
