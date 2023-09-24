import { fetchApi } from '@/api/fetchApi';

export const createPost = async (body: FormData) => {
  await fetchApi.post('posts', body);
};
