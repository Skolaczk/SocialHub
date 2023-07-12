import { IPost } from '@/interfaces';
import { api, endpoints } from '@/api';

export const getPosts = async () => {
  const { data } = await api.get<IPost[]>(endpoints.posts);
  return data;
};
