import { api } from '@/api';

export const DeleteLike = async (postId: number) => {
  return await api.delete(`likes/${postId}`);
};
