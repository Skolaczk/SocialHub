import { PostModal } from '@/features';
import { IParam } from '@/interfaces';
import { getPost } from '@/services';
import { notFound } from 'next/navigation';

const Post = async ({ params }: IParam) => {
  const post = await getPost(+params.slug);

  if (!post) {
    notFound();
  }

  return <PostModal {...post} />;
};

export default Post;
