'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPost, IPostWithComments } from '@/services';
import { Post } from '@/features/Posts/PostsList/Post';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { ArrowLeftIcon, XIcon } from '@/assets/icons';

export const PostModal = () => {
  const router = useRouter();
  const id = useSearchParams().get('post');
  const [post, setPost] = useState<IPostWithComments>();

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
            <div className="flex justify-between items-center p-5">
              <button onClick={() => router.back()} className="md:invisible">
                <ArrowLeftIcon />
              </button>
              <h1 className="text-xl font-medium tracking-widest uppercase">
                Post
              </h1>
              <button
                onClick={() => router.back()}
                className="invisible md:visible"
              >
                <XIcon isBig />
              </button>
            </div>
            <Post {...post} />
            <div className="px-5 py-3 flex flex-col gap-3">
              {post.comments.map(({ id, content, user, createdAt }) => (
                <div key={id} className="flex items-center gap-3">
                  <Link href={`/profile/${user.username}`}>
                    <Image
                      src={user.image}
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </Link>
                  <div>
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/profile/${user.username}`}
                        className="text-sm font-medium"
                      >
                        {user.username}
                      </Link>
                      <span className="text-neutral-200 text-xs relative before:absolute before:h-1 before:w-1 before:bg-neutral-200 before:rounded-full before:-left-2 before:top-1/2 before:-translate-y-1/2">
                        {moment(createdAt).fromNow()}
                      </span>
                    </div>
                    <p className="text-sm">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
