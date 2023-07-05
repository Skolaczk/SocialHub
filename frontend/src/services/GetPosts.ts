import { IPost } from '@/interfaces';
import axios from 'axios';

export const getPosts = async () => {
  const { data } = await axios.get<IPost[]>('http://localhost:8080/posts');
  return data;
};
