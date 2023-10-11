import { api } from '@/api';
import { IPost } from '@/interfaces';

export const getPosts = async () => {
  const { data } = await api.get<IPost[]>('posts');
  return data;
};
