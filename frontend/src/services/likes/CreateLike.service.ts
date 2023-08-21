import { api } from '@/api';

export const CreateLike = async (postId: number) => {
  return await api.post(`likes/${postId}`);
};
