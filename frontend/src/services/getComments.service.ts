import { api } from '@/api';
import { IComment } from '@/interfaces';

export const getComments = async (postId: number) => {
  const { data } = await api.get<IComment[]>(`comments?postId=${postId}`);
  return data;
};
