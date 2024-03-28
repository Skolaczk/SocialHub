import { PostsListItem } from './posts-list-item';

import { getPosts } from '@/features/posts';

export const PostsList = async () => {
  const { data: posts } = await getPosts();

  return (
    <div>
      {posts && posts.map((post) => <PostsListItem key={post.id} {...post} />)}
    </div>
  );
};
