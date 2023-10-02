import { api } from '@/api';
import { IPost } from '@/interfaces';

export const getPosts = async (): Promise<IPost[]> => {
  return await api.get<IPost[]>('posts');
};
