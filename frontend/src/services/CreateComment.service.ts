import { api, endpoints } from '@/api';
import { getCookie } from 'cookies-next';

interface IBody {
  postId: number;
  content: string;
}

export const createComment = async (body: IBody) => {
  const { data } = await api.post(endpoints.comments, body, {
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });
  return data;
};
