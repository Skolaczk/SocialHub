import { getUser } from '@/services';
import { IParam } from '@/interfaces';
import Image from 'next/image';
import { PostsGrid } from '@/features';

const Profile = async ({ params }: IParam) => {
  const user = await getUser(params.slug);

  return (
    <div>
      <div>
        <h1>{user.username}</h1>
        <div>
          <Image src={user.image} alt="" width={75} height={75} />
          <div>
            {Object.entries(user._count).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </div>
        </div>
        <p>{user.bio}</p>
        <button>Follow</button>
      </div>
      <PostsGrid posts={user.posts} />
    </div>
  );
};

export default Profile;
