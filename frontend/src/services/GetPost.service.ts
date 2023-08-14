import { Comment, IPost } from '@/interfaces';
import { api, endpoints } from '@/api';

export interface IPostWithComments extends IPost {
  comments: Comment[];
}

export const getPost = async (id: number) => {
  const { data } = await api.get<IPostWithComments>(`${endpoints.posts}/${id}`);
  return data;
};
