import { TComment, TPost } from '@/features/posts';
import { api } from '@/lib/api';

export const getPosts = async () => {
  return await api<TPost[]>('posts');
};

export const getComments = async (postId: number) => {
  return await api<TComment[]>(`comments?postId=${postId}`);
};
