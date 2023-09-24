import { IPost } from '@/interfaces';
import { fetchApi } from '@/api/fetchApi';

export const getPost = async (id: number) => {
  const { data } = await fetchApi.get<IPost>(`posts/${id}`);
  return data;
};
