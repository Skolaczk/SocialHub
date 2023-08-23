import { api } from '@/api';
import { getCookie } from 'cookies-next';

export const createLike = async (postId: number) => {
  return await api.post(
    `likes/${postId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
    },
  );
};
