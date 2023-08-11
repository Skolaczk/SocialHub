import { api, endpoints } from '@/api';
import { getCookie } from 'cookies-next';

interface IBody {
  content: string;
  image: File;
}

export const createPost = async (body: IBody) => {
  const { data } = await api.post(endpoints.posts, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });
  return data;
};
