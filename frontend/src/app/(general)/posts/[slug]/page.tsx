import { PostModal } from '@/features';
import { IParam, postMock } from '@/interfaces';
import { notFound } from 'next/navigation';

const Post = async ({ params }: IParam) => {
  const post = postMock;

  if (!post) {
    notFound();
  }

  return <PostModal {...post} />;
};

export default Post;
