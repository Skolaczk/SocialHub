import { api } from '@/api';

export const createLike = async (postId: number) => {
  return await api.post(`likes/${postId}`);
};
