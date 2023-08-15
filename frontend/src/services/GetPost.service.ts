import { api, endpoints } from '@/api';
import { IPostWithComments } from '@/interfaces';

export const getPost = async (id: number) => {
  try {
    const { data } = await api.get<IPostWithComments>(
      `${endpoints.posts}/${id}`,
    );
    return data;
  } catch (e) {}
};
