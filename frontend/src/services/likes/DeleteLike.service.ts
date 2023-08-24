import { api } from '@/api';

export const deleteLike = async (postId: number) => {
  return await api.delete(`likes/${postId}`);
};
