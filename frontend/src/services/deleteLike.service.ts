import { api } from '@/api';

export const deleteLike = async (postId: number) => {
  await api.delete(`likes/${postId}`);
};
