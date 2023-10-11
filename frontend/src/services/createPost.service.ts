import { api } from '@/api';
import { IPost } from '@/interfaces';

export const createPost = async (formData: FormData) => {
  await api.post<IPost>('posts', formData);
};
