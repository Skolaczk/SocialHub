import { api } from '@/api';

interface IBody {
  content: string;
  image: File;
}

export const createPost = async (body: IBody) => {
  const { data } = await api.post('posts', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};
