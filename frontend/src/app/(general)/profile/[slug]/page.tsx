import { notFound } from 'next/navigation';

import { PostsGrid, UserProfile } from '@/features';
import { IParam } from '@/interfaces';
import { getUser } from '@/services';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  try {
    const user = await getUser(params.slug);
    if (!user) {
      return {
        title: 'Not found',
      };
    }

    return {
      title: user.username,
      alternates: {
        canonical: `/profile/${user.username}`,
      },
    };
  } catch (e) {
    return {
      title: 'Not found',
    };
  }
};

const Profile = async ({ params }: IParam) => {
  const user = await getUser(params.slug);

  if (!user) {
    notFound();
  }

  return (
    <div className="mb-14 flex justify-center md:ml-20 md:mt-8 xl:ml-0">
      <div className="w-full max-w-2xl">
        <UserProfile user={user} />
        <PostsGrid posts={user.posts} />
      </div>
    </div>
  );
};

export default Profile;
