import { TPost } from '@/features/posts/types';
import { api } from '@/lib/api';

export const getPosts = async () => {
  return await api<TPost[]>('posts');
};
