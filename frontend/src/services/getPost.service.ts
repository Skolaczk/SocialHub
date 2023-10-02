import { api } from '@/api';
import { IPost } from '@/interfaces';

export const getPost = async (id: number): Promise<IPost> => {
  return await api.get<IPost>(`posts/${id}`);
};
