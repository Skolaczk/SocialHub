import { IParam } from '@/interfaces';
import { PostsGrid, UsersProfile } from '@/features';
import { notFound } from 'next/navigation';
import { getUser } from '@/services';

const Profile = async ({ params }: IParam) => {
  const user = await getUser(params.slug);

  if (!user.id) {
    notFound();
  }

  return (
    <div className="flex justify-center mb-14 md:mt-8 md:ml-20 xl:ml-0">
      <div className="max-w-2xl w-full">
        <UsersProfile user={user} />
        <PostsGrid posts={user.posts} />
      </div>
    </div>
  );
};

export default Profile;
