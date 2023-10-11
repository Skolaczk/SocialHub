import { api } from '@/api';
import { IPost } from '@/interfaces';

export const getPost = async (id: number) => {
  const { data } = await api.get<IPost>(`posts/${id}`);
  return data;
};
