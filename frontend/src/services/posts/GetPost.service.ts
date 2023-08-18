import { api, endpoints } from '@/api';
import { IPost } from '@/interfaces';

export const getPost = async (id: number) => {
  try {
    const { data } = await api.get<IPost>(`${endpoints.posts}/${id}`);
    return data;
  } catch (e) {}
};
