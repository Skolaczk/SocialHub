import { IParam } from '@/interfaces';
import { PostsGrid, UsersProfile } from '@/features';
import { notFound } from 'next/navigation';
import { getUser } from '@/services';

const Profile = async ({ params }: IParam) => {
  const user = await getUser(params.slug);

  if (!user) {
    notFound();
  }

  return (
    <div className="mb-14 flex justify-center md:ml-20 md:mt-8 xl:ml-0">
      <div className="w-full max-w-2xl">
        <UsersProfile user={user} />
        <PostsGrid posts={user.posts} />
      </div>
    </div>
  );
};

export default Profile;
