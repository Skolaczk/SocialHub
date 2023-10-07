import { api } from '@/api';

export const addLike = async (postId: number) => {
  await api.post(`likes/${postId}`);
};
