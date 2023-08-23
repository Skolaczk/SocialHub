import { api } from '@/api';
import { getCookie } from 'cookies-next';

export const deleteLike = async (postId: number) => {
  return await api.delete(`likes/${postId}`, {
    headers: {
      Authorization: `Bearer ${getCookie('token')}`,
    },
  });
};
