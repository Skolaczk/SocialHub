import { getUser } from '@/services';
import { IParam } from '@/interfaces';
import { PostsGrid, UsersProfile } from '@/features';

const Profile = async ({ params }: IParam) => {
  const user = await getUser(params.slug);

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
