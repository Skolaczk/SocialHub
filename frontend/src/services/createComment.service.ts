import { api } from '@/api';
import { IComment } from '@/interfaces';

interface IBody {
  postId: number;
  content: string;
}

export const createComment = async (body: IBody) => {
  const { data } = await api.post<IComment>('comments', body);
  return data;
};
