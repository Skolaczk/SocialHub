import { api } from '@/api';
import { IComment, IPost } from '@/interfaces';

interface ICommentBody {
  postId: number;
  content: string;
}

export const addLike = async (postId: number) => {
  await api.post(`likes/${postId}`);
};

export const createComment = async (body: ICommentBody) => {
  const { data } = await api.post<IComment>('comments', body);
  return data;
};

export const createPost = async (formData: FormData) => {
  await api.post<IPost>('posts', formData);
};

export const deleteLike = async (postId: number) => {
  await api.delete(`likes/${postId}`);
};

export const getComments = async (postId: number) => {
  const { data } = await api.get<IComment[]>(`comments?postId=${postId}`);
  return data;
};

export const getPost = async (id: number) => {
  const { data } = await api.get<IPost>(`posts/${id}`);
  return data;
};

export const getPosts = async () => {
  const { data } = await api.get<IPost[]>('posts');
  return data;
};
