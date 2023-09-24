import { IPost } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

export const getPosts = async () => {
  const { data } = await fetchApi.get<IPost[]>('posts');
  return data;
};
