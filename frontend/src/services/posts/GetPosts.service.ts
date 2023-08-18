import { IPost } from '@/interfaces';
import { api } from '@/api';

export const getPosts = async () => {
  const { data } = await api.get<IPost[]>('posts');
  return data;
};
