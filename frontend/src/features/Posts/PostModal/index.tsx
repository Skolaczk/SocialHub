'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPost } from '@/services';
import { Post } from '@/features/Posts/PostsList/Post';
import {
  AddCommentForm,
  PostModalComments,
  PostModalHeader,
} from './PostModalComponents';
import { IPost } from '@/interfaces';

export const PostModal = () => {
  const id = useSearchParams().get('post');
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getPost(+id);
        setPost(data);
      }
    })();
  }, [id]);

  return (
    <>
      {id && post && (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-neutral-500 bg-opacity-50 backdrop-blur-sm">
          <div className="w-full h-screen bg-white dark:bg-black max-w-xl overflow-y-scroll md:h-auto md:rounded md:max-h-[90vh] md:overflow-y-auto md:scrollbar">
            <PostModalHeader />
            <Post {...post} />
            <AddCommentForm postId={post.id} />
            <PostModalComments comments={post.comments} />
          </div>
        </div>
      )}
    </>
  );
};
