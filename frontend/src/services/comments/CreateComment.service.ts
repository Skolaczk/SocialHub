import { api } from '@/api';
import { IComment } from '@/interfaces';

interface IBody {
  postId: number;
  content: string;
}

export const createComment = async (body: IBody): Promise<IComment> => {
  const { data } = await api.post('comments', body);
  return data;
};
