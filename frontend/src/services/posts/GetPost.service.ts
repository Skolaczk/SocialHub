import { api } from '@/api';
import { IPost } from '@/interfaces';
import { getCookie } from 'cookies-next';

export const getPost = async (id: number) => {
  try {
    const { data } = await api.get<IPost>(`posts/${id}`, {
      headers: { Authorization: `Bearer ${getCookie('token')}` },
    });
    return data;
  } catch (e) {}
};
