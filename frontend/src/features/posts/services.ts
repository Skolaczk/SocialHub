import { TComment, TCreateCommentCommand, TPost } from '@/features/posts';
import { api } from '@/lib/api';

export const getPosts = async () => {
  return await api<TPost[]>('posts');
};

export const getComments = async (postId: number) => {
  return await api<TComment[]>(`comments?postId=${postId}`, {
    next: { tags: [`comments/${postId}`] },
  });
};

export const createComment = async (body: TCreateCommentCommand) => {
  return await api('comments', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
